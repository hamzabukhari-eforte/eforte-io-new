import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCareerDto } from './dto/create-career.dto';

export type CareerResumeMeta = {
  originalName: string;
  storedName: string;
  mimeType: string;
  sizeBytes: number;
};

@Injectable()
export class CareersService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateCareerDto, resume?: CareerResumeMeta) {
    return this.prisma.careerApplication.create({
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        phone: dto.phone,
        position: dto.position,
        message: dto.message,
        resumeOriginalName: resume?.originalName,
        resumeStoredName: resume?.storedName,
        resumeMimeType: resume?.mimeType,
        resumeSizeBytes: resume?.sizeBytes,
      },
    });
  }
}
