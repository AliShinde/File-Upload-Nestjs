import { BadRequestException, Injectable } from '@nestjs/common';
import { CloudinaryService } from './cloudinary/cloudinary.service';

@Injectable()
export class AppService {
  constructor(private cloudinary: CloudinaryService) {}
  getHello(): string {
    return 'Hello World!';
  }
  getUploadPage() {
    return 'Upload form';
  }
  // async uploadFileToCloud(file: Express.Multer.File) {
  //   const result = await this.cloudinary.uploadFile
  //   });
}
