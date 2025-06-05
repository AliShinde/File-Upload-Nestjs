import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';
import { ConfigService } from '@nestjs/config';

const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (config: ConfigService) => {
    v2.config({
      cloud_name: config.get('CLOUD_NAME'),
      api_key: config.get('CLOUD_API'),
      api_secret: config.get('CLOUD_SECRET'),
    });
    return v2;
  },
  inject: [ConfigService],
};

export { CloudinaryProvider };
