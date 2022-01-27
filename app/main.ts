import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  await app
    .useStaticAssets(configService.get<string>('view.asset'))
    .setBaseViewsDir(configService.get<string>('view.view'))
    .setViewEngine(configService.get<string>('view.engine'))
    .listen(configService.get<number>('app.port'));
}

bootstrap();
