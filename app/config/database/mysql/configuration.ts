import { registerAs } from '@nestjs/config';

export default registerAs('mysql', () => ({
  driver: 'mysql',
  url: process.env.DATABASE_URL,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  unix_socket: process.env.DB_SOCKET,
  charset: 'utf8mb4',
  collation: 'utf8mb4_unicode_ci',
  prefix: '',
  prefix_indexes: true,
  strict: false,
  engine: null,
  options: [],
}));
