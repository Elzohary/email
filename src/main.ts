require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Set the view engine and specify the views folder
  app.setBaseViewsDir(path.join(__dirname, 'views'));
  app.setViewEngine('ejs');

  await app.listen(3000);
}

bootstrap();

