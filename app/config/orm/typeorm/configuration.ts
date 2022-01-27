import { registerAs } from '@nestjs/config';

export default registerAs('typeorm', () => ({
  type: process.env.DB_CONNECTION,
  name: '',
  entities: '',
}));
