# File-Upload-Nestjs

A **NestJS backend module** that enables file uploads using [Multer](https://www.npmjs.com/package/multer), and uploads files directly to the user's Cloudinary account—with built-in validation for mimetype and file size.

## Features

- Upload single or multiple files to Cloudinary via REST endpoints.
- Uses Multer middleware for efficient file handling.
- Validates file mimetype and enforces a maximum file size.
- User-provided Cloudinary credentials for flexible integration.
- Written in TypeScript for strong type safety.

## Installation
npm install


## Configuration

You will need to provide your Cloudinary credentials via environment variables or a `.env` file:
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


## Usage

### Uploading a File

Send a `POST` request to `/upload` with `multipart/form-data`. The endpoint requires the file in the `file` field.


## API Endpoints

| Method | Endpoint  | Description     | Body (form-data) |
|--------|-----------|----------------|------------------|
| POST   | /upload   | Upload a file  | `file`           |

- Validates mimetype and file size on upload.
- Only allows allowed image types and files within the max size (configurable).

## Dependencies

- [NestJS](https://nestjs.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Cloudinary SDK](https://www.npmjs.com/package/cloudinary)

## License

MIT

## Author

Ali Shinde


