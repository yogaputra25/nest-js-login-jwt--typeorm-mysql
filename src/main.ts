import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import multer, { diskStorage } from 'multer';
import { ValidationError, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
