import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('Next pizza')
  .setDescription('Next pizza API')
  .setVersion('1.0')
  .build();
export const documentFactory = (app: INestApplication<any>) =>
  SwaggerModule.createDocument(app, config);
