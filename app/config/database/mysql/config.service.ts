import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class MySqlConfigService {
  constructor(private configService: ConfigService) {}

  get driver(): string {
    return this.configService.get<string>('mysql.driver');
  }

  get url(): string {
    return this.configService.get<string>('mysql.url');
  }

  get host(): string {
    return this.configService.get<string>('mysql.host');
  }

  get username(): string {
    return this.configService.get<string>('mysql.username');
  }

  get password(): string {
    return this.configService.get<string>('mysql.password');
  }

  get port(): number {
    return Number(this.configService.get<number>('mysql.port'));
  }

  get database(): string {
    return this.configService.get<string>('mysql.database');
  }

  get unix_socket(): string {
    return this.configService.get<string>('mysql.unix_socket');
  }

  get charset(): string {
    return this.configService.get<string>('mysql.charset');
  }

  get collation(): string {
    return this.configService.get<string>('mysql.collation');
  }

  get prefix(): string {
    return this.configService.get<string>('mysql.prefix');
  }

  get prefix_indexes(): boolean {
    return this.configService.get<boolean>('mysql.prefix_indexes');
  }

  get strict(): boolean {
    return this.configService.get<boolean>('mysql.strict');
  }

  get engine(): string | null {
    return this.configService.get<string | null>('mysql.engine');
  }

  get options(): number[] {
    return this.configService.get<number[]>('mysql.options');
  }
}
