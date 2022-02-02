import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { pagination } from './common/middlewares/paginate.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  const configService = app.get<ConfigService>(ConfigService);

  //application boot code
  /*  const engine = new Liquid({
    root: configService.get<string>('view.view'),
    cache: configService.get<string>('app.env') === 'production',
    extname: '.liquid',
    globals: {
      app: configService.get<object>('app'),
      site: configService.get<object>('site'),
    },
  });
  app.engine('liquid', engine.express());*/

  app.useStaticAssets(configService.get<string>('storage.disks.local.root'));

  app.setGlobalPrefix('api/v1');

  //Register pagination express middleware
  app.use(pagination);

  //openapi boot code
  if (configService.get<string>('app.env') === 'local') {
    const config = new DocumentBuilder()
      .setTitle('My Cash Money API Documentation')
      .setDescription('Some descriptions')
      .setVersion('1.0')
      .addTag('mycashmoney')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  //start application
  await app.listen(configService.get<number>('app.port'));
}

bootstrap();
