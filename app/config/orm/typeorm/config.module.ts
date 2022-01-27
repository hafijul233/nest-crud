import { Module } from '@nestjs/common';
import configuration from './configuration';
import { TypeORMConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [ConfigService, TypeORMConfigService],
  exports: [ConfigService, TypeORMConfigService],
})
export class TypeORMConfigModule {}
