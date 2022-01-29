import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  headers: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
}));
