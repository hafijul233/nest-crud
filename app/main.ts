import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  const configService = app.get<ConfigService>(ConfigService);

  await app
    .useStaticAssets(configService.get<string>('view.asset'))
    .setBaseViewsDir(configService.get<string>('view.view'))
    .setViewEngine(configService.get<string>('view.engine'))
    .listen(configService.get<number>('app.port'));
}

bootstrap();
