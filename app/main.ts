import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Liquid } from 'liquidjs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import databaseConfig from './config/database.config';
import { exit } from '@nestjs/cli/actions';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  const configService = app.get<ConfigService>(ConfigService);

  //openapi boot code
  if (configService.get<string>('app.env') === 'local') {
    const config = new DocumentBuilder()
      .setTitle('My Cash Money API Docs')
      .setDescription('Some descriptions')
      .setVersion('1.0')
      .addTag('mycashmoney')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  //application boot code
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
    .setGlobalPrefix('api/v1')
    .listen(configService.get<number>('app.port'));
}

bootstrap();
