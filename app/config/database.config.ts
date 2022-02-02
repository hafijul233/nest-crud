import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  /*
	|--------------------------------------------------------------------------
	| Default Database Connection Name
	|--------------------------------------------------------------------------
	|
	| Here you may specify which of the database connections below you wish
	| to use as your default connection for all database work. Of course
	| you may use many connections at once using the Database library.
	|
		*/

  default: process.env.DB_CONNECTION || 'default',

  /*
	|--------------------------------------------------------------------------
	| Database Connections
	|--------------------------------------------------------------------------
	|
	| Here are each of the database connections setup for your application.
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
    /*
     * SQLite3
     */
    sqlite: {
      driver: 'sqlite',
      url: process.env.DATABASE_URL || 'http://localhost',
      database: process.env.DB_DATABASE || 'database.sqlite',
      prefix: '',
      foreign_key_constraints: process.env.DB_FOREIGN_KEYS || true,
    },

    /*
     * MySQL
     */
    default: {
      type: 'mysql',
      url: process.env.DATABASE_URL || 'localhost',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || '3306',
      database: process.env.DB_DATABASE || 'forge',
      username: process.env.DB_USERNAME || 'forge',
      password: process.env.DB_PASSWORD || '',
      charset: 'UTF8MB4_UNICODE_CI',
    },

    /*
     * PostgresSQL
     */
    pgsql: {
      type: 'pgsql',
      url: process.env.DATABASE_URL,
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || '5432',
      database: process.env.DB_DATABASE || 'forge',
      username: process.env.DB_USERNAME || 'forge',
      password: process.env.DB_PASSWORD || '',
      charset: 'utf8',
      prefix: '',
      prefix_indexes: true,
      schema: 'public',
      sslmode: 'prefer',
    },

    /*
     * Microsoft SQL Server
     */
    mssql: {
      type: 'sqlsrv',
      url: process.env.DATABASE_URL,
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || '1433',
      database: process.env.DB_DATABASE || 'forge',
      username: process.env.DB_USERNAME || 'forge',
      password: process.env.DB_PASSWORD || '',
      charset: 'utf8',
      prefix: '',
      prefix_indexes: true,
    },
  },

  /*
	|--------------------------------------------------------------------------
	| Migration Repository Table
	|--------------------------------------------------------------------------
	|
	| This table keeps track of all the migrations that have already run for
	| your application. Using this information, we can determine which of
	| the migrations on disk haven't actually been run in the database.
	|
	*/

  migrations: 'migrations',

  /*
	|--------------------------------------------------------------------------
	| Redis Databases
	|--------------------------------------------------------------------------
	|
	| Redis is an open source, fast, and advanced key-value store that also
	| provides a richer body of commands than a typical key-value system
	| such as APC or Memcached. Laravel makes it easy to dig right in.
	|
		*/

  redis: {
    client: process.env.REDIS_CLIENT || 'redis',

    options: {
      cluster: process.env.REDIS_CLUSTER || 'redis',
      prefix:
        process.env.REDIS_PREFIX ||
        (process.env.APP_NAME || 'my_cash_money')
          .replace(' ', '_')
          .toLowerCase() + '_database_',
    },

    default: {
      url: process.env.REDIS_URL || 'http://localhost',
      host: process.env.REDIS_HOST || '127.0.0.1',
      password: process.env.REDIS_PASSWORD || null,
      port: parseInt(process.env.REDIS_PORT, 10) || 6379,
      database: process.env.REDIS_DB || '0',
    },

    cache: {
      url: process.env.REDIS_URL || 'http://localhost',
      host: process.env.REDIS_HOST || '127.0.0.1',
      password: process.env.REDIS_PASSWORD || null,
      port: parseInt(process.env.REDIS_PORT, 10) || 6379,
      database: process.env.REDIS_CACHE_DB || '1',
    },
  },
}));
