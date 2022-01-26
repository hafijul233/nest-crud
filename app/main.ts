import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';
import { ViewConfigService } from './config/view/config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const appConfig: AppConfigService = app.get(AppConfigService);

  const viewConfig: ViewConfigService = app.get(ViewConfigService);

  await app
    .useStaticAssets(viewConfig.assetPath)
    .setBaseViewsDir(viewConfig.viewPath)
    .setViewEngine(viewConfig.templateEngine)
    .listen(appConfig.port);
}

bootstrap();
