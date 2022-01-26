import { registerAs } from '@nestjs/config';
import { join } from 'path';

export default registerAs('view', () => ({
  assetPath: join(__dirname, '..', 'public'),
  viewPath: join(__dirname, '..', 'resources', 'views'),
  templateEngine: 'hbs',
}));
