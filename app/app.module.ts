import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AppConfigModule } from './config/app/config.module';
import { ViewConfigModule } from './config/view/config.module';

@Module({
  imports: [AppConfigModule, ViewConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
