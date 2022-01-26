import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { MySqlConfigService } from './config.service';
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
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().default('localhost'),
        DB_HOST: Joi.string().default('localhost'),
        DB_DATABASE: Joi.string().default('forge'),
        DB_USERNAME: Joi.string().default('root'),
        DB_PASSWORD: Joi.string().default(''),
        DB_SOCKET: Joi.string().default(''),
        DB_PORT: Joi.number().default(3306),
      }),
    }),
  ],
  providers: [ConfigService, MySqlConfigService],
  exports: [ConfigService, MySqlConfigService],
})
export class MySqlConfigModule {}
