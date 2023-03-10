import { Injectable } from "@nestjs/common";
import {
  CLIENT_URL,
  getClientLoginCallbackUrl,
  SSO_CALLBACK_URL,
  SSO_CLIENT_ID,
} from "../../config";
import { SsoApiService } from "./sso-api.service";
import { SsoSessionService } from "./sso-session/sso-session.service";
import SsoSessionType from "./sso-session/sso-session-type.enum";
import { SsoUrl } from "./sso-url.enum";
import { CharacterService } from "../../common/character/character.service";
import { UserService } from "../../common/user/user.service";
import { User } from "../../common/user/user.model";

@Injectable()
export class SsoService {
  constructor(
    private ssoSessionService: SsoSessionService,
    private characterService: CharacterService,
    private userService: UserService,
    private ssoApiService: SsoApiService,
  ) {}

  /**
   * Generate EVE SSO login page URL.
   */
  async getSsoLoginUrl(user: User = null) {
    const { key } = await this.ssoSessionService.createSsoSession(user);
    const loginUrl = `${SsoUrl.Authorize}/?response_type=code&redirect_uri=${SSO_CALLBACK_URL}&client_id=${SSO_CLIENT_ID}&state=${key}`;
    return encodeURI(loginUrl);
  }

  /**
   * Get the SSO tokens using the authorization code supplied by the user, save
   * them and update the SSO state with the character's ID.
   *
   * @returns URL to redirect the client to.
   */
  async handleCallback(authorizationCode: string, state: string): Promise<string> {
    const ssoSession = await this.ssoSessionService.verifySsoSession(state);

    const { accessToken, refreshToken } = await this.ssoApiService.getSsoTokens(authorizationCode);
    const jwtData = await this.ssoApiService.verifyAndDecodeSsoAccessToken(accessToken);

    const character = await this.characterService.upsert({
      name: jwtData.CharacterName,
      esiId: jwtData.CharacterID,
      accessToken,
      refreshToken,
      isMain: false,
    });

    await this.ssoSessionService.setSsoLoginSuccess(state, character);

    if (ssoSession.type === SsoSessionType.ADD_CHARACTER) {
      await this.userService.addAlt(character, ssoSession.user.id);
      await this.ssoSessionService.removeSsoSession(ssoSession.key);
    }

    const clientCallbackUrl =
      ssoSession.type === SsoSessionType.LOGIN ? getClientLoginCallbackUrl(state) : CLIENT_URL;

    return clientCallbackUrl;
  }
}
