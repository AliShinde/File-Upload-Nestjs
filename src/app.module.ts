import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/primsa.service';

@Module({
  imports: [
    CloudinaryModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.register({ dest: './uploads' }),
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, CloudinaryService, PrismaService],
})
export class AppModule {}
