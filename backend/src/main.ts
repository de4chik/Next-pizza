import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { documentFactory } from 'configs/swagger.config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // server settings
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // swagger
  SwaggerModule.setup(process.env.SWAGGER_PATH, app, documentFactory(app));

  await app.listen(process.env.PORT);
}
bootstrap();
