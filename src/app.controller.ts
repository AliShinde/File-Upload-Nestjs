import {
  BadRequestException,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { ImgData } from '@prisma/client';
import { PrismaService } from './prisma/primsa.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cloudinary: CloudinaryService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getText() {
    return 'Home Page';
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile()
    file: Express.Multer.File,
    dto?: ImgData,
  ) {
    const allowedMimeTypes = ['image/jpeg', 'image/png'];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException('Invalid file type');
    }
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new BadRequestException('file is too large!');
    }
    try {
      // Upload the file to cloudinary
      const result = await this.cloudinary.uploadFile(file.path);
      // If successfull insert the metadata to the postgres DB via prisma
      const imgMeta = await this.prisma.imgData.create({
        data: {
          createdAt: result.created_at,
          filename: result.original_filename,
        },
      });
      return 'File Uploaded successfully, check prisma studio for metadata entries and cloudinary folder for the Image';
    } catch (error) {
      throw new Error('Failed to upload Image');
    }
  }
}
