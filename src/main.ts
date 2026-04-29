import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  app.enableCors({
    origin: "http://localhost:8080",
    credentials: true, // Need this if frontend uses cookies
  });

  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'my-secret-key',
      resave: false,
      saveUninitialized: false,
    }),
  );
 
  const config = new DocumentBuilder()
    .setTitle('Testimonies API')
    .setDescription(
      'API for submitting and managing testimonies. Anyone can submit a testimony; only admins can approve, reject, or delete.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
