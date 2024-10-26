import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api');
  

  app.useGlobalPipes(  
    new ValidationPipe({ 
      whitelist: true, //lanza error si tenemos propiedades que no estan definidas en el DTO
      forbidNonWhitelisted: true, 
    }) 
  );
  
  await app.listen( envs.port);
  console.log(`Application is running on port: ${envs.port}`);
}
bootstrap();
