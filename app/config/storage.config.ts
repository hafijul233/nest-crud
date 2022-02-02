import { registerAs } from '@nestjs/config';
import { join } from 'path';

export default registerAs('storage', () => ({
  /*
  |--------------------------------------------------------------------------
  | Default Filesystem Disk
  |--------------------------------------------------------------------------
  |
  | Here you may specify the default filesystem disk that should be used
  | by the framework. The "local" disk, as well as a variety of cloud
  | based disks are available to your application. Just store away!
  |
  */
  default: process.env.STORAGE_TYPE || 'local',

  /*
  |--------------------------------------------------------------------------
  | Filesystem Disks
  |--------------------------------------------------------------------------
  |
  | Here you may configure as many filesystem "disks" as you wish, and you
  | may even configure multiple disks of the same driver. Defaults have
  | been setup for each driver as an example of the required options.
  |
  | Supported Drivers: "local", "ftp", "sftp", "s3"
  |
  */

  disks: {
    local: {
      driver: 'local',
      root: join(__dirname, '..', '..', 'public'),
    },

    public: {
      driver: 'local',
      root: join(__dirname, '..', '..', 'public'),
      url: process.env.STORAGE_URL || process.env.APP_URL,
      visibility: 'public',
    },

    s3: {
      driver: 's3',
      key: process.env.AWS_ACCESS_KEY_ID || '',
      secret: process.env.AWS_SECRET_ACCESS_KEY || '',
      region: process.env.AWS_DEFAULT_REGION || '',
      bucket: process.env.AWS_BUCKET || '',
      url: process.env.AWS_URL || '',
    },

    log: {
      driver: 'local',
      root: join(__dirname, '..', '..', 'logs'),
      visibility: 'public',
    },
  },
}));
