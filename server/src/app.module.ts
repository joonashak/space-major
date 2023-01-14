import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { CommonModule } from "./common/common.module";
import { MONGO_URL } from "./config";

@Module({
  imports: [MongooseModule.forRoot(MONGO_URL), AuthModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
