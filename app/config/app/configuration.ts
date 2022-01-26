import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.APP_ENV,
  name: process.env.APP_NAME,
  key: process.env.APP_KEY,
  url: process.env.APP_URL,
  port: process.env.APP_PORT,
}));
