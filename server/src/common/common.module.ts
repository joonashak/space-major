import { Global, Module } from "@nestjs/common";
import { CharacterModule } from "./character/character.module";
import { UserModule } from "./user/user.module";

@Global()
@Module({
  imports: [CharacterModule, UserModule],
  exports: [CharacterModule, UserModule],
})
export class CommonModule {}
