import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';

export class TypeOrmConfig implements TypeOrmOptionsFactory {
  public defaultConnection = 'default';

  public commonConnectionOptions = {
    entities: ['dist/models/**/*{.ts,.js}'],
    subscribers: ['dist/observers/**/*{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrations: ['database/migrations/**/*{.ts,.js}'],
    logging: true,
    synchronize: false, //make false in production
    cli: {
      entitiesDir: join('app', 'models'),
      migrationsDir: join('app', 'database', 'migrations'),
      subscribersDir: join('app', 'observers'),
    },
  };

  constructor(public configService: ConfigService) {}

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  createTypeOrmOptions() {
    let connectionConfig = this.configService;

    console.log(connectionConfig);

    connectionConfig = this.configService.get(
      'database.connections.default',
      null,
    );

    if (connectionConfig == null) {
      throw 'Invalid Connection Name on DB Config File';
    } else {
      return Object.assign(this.commonConnectionOptions, connectionConfig);
    }
  }
}
