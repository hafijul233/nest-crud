import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Liquid } from 'liquidjs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  const configService = app.get<ConfigService>(ConfigService);

  const engine = new Liquid({
    root: configService.get<string>('view.view'),
    cache: configService.get<string>('app.env') === 'production',
    extname: '.liquid',
    globals: {
      app: configService.get<object>('app'),
      site: configService.get<object>('site'),
    },
  });

  app.engine('liquid', engine.express());

  await app
    .setViewEngine(configService.get<string>('view.engine'))
    .useStaticAssets(configService.get<string>('view.asset'))
    .setBaseViewsDir(configService.get<string>('view.view'))
    .listen(configService.get<number>('app.port'));
}

bootstrap();
