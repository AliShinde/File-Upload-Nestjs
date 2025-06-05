import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as toStream from 'buffer-to-stream';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor(private config: ConfigService) {}
  async uploadFile(
    filePath: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      v2.uploader.upload(
        filePath,
        { folder: this.config.get('FOLDER') },
        (error, result) => {
          if (error) return reject(error);
          resolve(result!);
        },
      );
    });
  }
}
