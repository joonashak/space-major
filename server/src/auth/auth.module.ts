import { Global, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { JWT_LIFETIME, JWT_SECRET } from "../config";
import { AuthController } from "./auth.controller";
import AuthResolver from "./auth.resolver";
import { AuthService } from "./auth.service";
import { SessionModule } from "./session/session.module";
import { SessionService } from "./session/session.service";
import { SsoSessionModule } from "./sso/sso-session/sso-session.module";
import { SsoModule } from "./sso/sso.module";
import { SsoService } from "./sso/sso.service";

@Global()
@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: JWT_LIFETIME },
    }),
    SsoModule,
    SsoSessionModule,
    SessionModule,
  ],
  providers: [SsoService, AuthService, AuthResolver, SessionService],
  exports: [JwtModule, AuthService, SessionService],
})
export class AuthModule {}
