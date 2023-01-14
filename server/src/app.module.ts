import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CharacterModule } from "./common/character/character.module";
import { MONGO_URL } from "./config";

@Module({
  imports: [MongooseModule.forRoot(MONGO_URL), CharacterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
