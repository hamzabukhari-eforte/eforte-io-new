import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create-career.dto';

const ALLOWED_RESUME_MIME = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const ALLOWED_RESUME_EXT = new Set(['.pdf', '.doc', '.docx']);
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

@Controller('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(
    FileInterceptor('resume', {
      storage: diskStorage({
        destination: join(process.cwd(), 'uploads', 'careers'),
        filename: (_req, file, cb) => {
          const ext = extname(file.originalname).toLowerCase();
          cb(null, `${randomUUID()}${ext}`);
        },
      }),
      limits: { fileSize: MAX_RESUME_BYTES },
      fileFilter: (_req, file, cb) => {
        const ext = extname(file.originalname).toLowerCase();
        const mimeOk =
          ALLOWED_RESUME_MIME.has(file.mimetype) ||
          file.mimetype === 'application/octet-stream';
        if (!ALLOWED_RESUME_EXT.has(ext) || !mimeOk) {
          cb(
            new BadRequestException(
              'Resume must be a PDF or Word document (.pdf, .doc, .docx).',
            ),
            false,
          );
          return;
        }
        cb(null, true);
      },
    }),
  )
  create(
    @Body() dto: CreateCareerDto,
    @UploadedFile() resume?: Express.Multer.File,
  ) {
    return this.careersService.create(
      dto,
      resume
        ? {
            originalName: resume.originalname,
            storedName: resume.filename,
            mimeType: resume.mimetype,
            sizeBytes: resume.size,
          }
        : undefined,
    );
  }
}
