import { NestFactory } from '@nestjs/core';
import mongoose from 'mongoose';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  mongoose.set('debug', true);
  await app.listen(3000);
}
bootstrap();
