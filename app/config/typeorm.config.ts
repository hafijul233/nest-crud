import { registerAs } from '@nestjs/config';
import { join } from 'path';

export default registerAs('typeorm', () => ({
  /*
	|--------------------------------------------------------------------------
	| Database Connection
	|--------------------------------------------------------------------------
	|
	| Here you may specify which of the Object Relation Mappers below you wish
	| to use as your default connection for all database work. Of course
	| you may use many connections at once using the Database library.
	|
	| if you create new connection please add unique connection name
	| default is preserved for main connection
	|
	| @example ['connection1', 'connection2', ...]
	|
	*/

  connection: process.env.DB_CONNECTION || 'default',

  /*
	|--------------------------------------------------------------------------
	| Object Relation Mappers
	|--------------------------------------------------------------------------
	|
	| Here are each of the Object Relation Mappers setup for your application.
	| Of course, examples of configuring each database platform that is
	| supported by Laravel is shown below to make development simple.
	|
	|
	| All database work in Laravel is done through the PHP PDO facilities
	| so make sure you have the driver for your particular database of
	| choice installed on your machine before you begin development.
	|
		*/

  connections: {
    default: {
      type: 'mysql',
      name: 'default',
      url: process.env.DATABASE_URL || 'http://localhost',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || '3306',
      database: process.env.DB_DATABASE || 'forge',
      username: process.env.DB_USERNAME || 'forge',
      password: process.env.DB_PASSWORD || '',
      unix_socket: process.env.DB_SOCKET || '',
      charset: 'UTF8MB4_UNICODE_CI',
      timezone: 'local',
      connectTimeout: 10000,
      acquireTimeout: 10000,
      insecureAuth: false,
      supportBigNumbers: true,
      bigNumberStrings: true,
      dateStrings: false, //false -> JS date Object || [TIMESTAMP, DATETIME, DATE] -> string
      trace: process.env.APP_DEBUG === 'true' || false,
      multipleStatements: true,
      legacySpatialSupport: true,
      flags: [],
      cache: true,
      extra: {
        strict: false,
        prefix: '',
        prefix_indexes: true,
      },
      entities: ['dist/models/**/*{.ts,.js}'],
      subscribers: ['dist/observers/**/*{.ts,.js}'],
      migrationsTableName: 'migrations',
      migrationsTransactionMode: 'all',
      migrations: ['database/migrations/**/*{.ts,.js}'],

      logging: true,
      maxQueryExecutionTime: null,
      synchronize: process.env.DB_SYNC === 'true' || false, //make false in production
      cli: {
        entitiesDir: join('app', 'models'),
        migrationsDir: join('app', 'database', 'migrations'),
        subscribersDir: join('app', 'observers'),
      },
    },
  },
}));
