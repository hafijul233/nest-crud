import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import appConfig from './config/app.config';
import viewConfig from './config/view.config';
import storageConfig from './config/storage.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, viewConfig, storageConfig],
    }),
    TypeOrmModule.forRoot(),
    AuthModule,
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
