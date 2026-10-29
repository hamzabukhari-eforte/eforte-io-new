import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';
import { CreateCareerDto } from './dto/create-career.dto';

export type CareerResumeMeta = {
  originalName: string;
  storedName: string;
  mimeType: string;
  sizeBytes: number;
};

@Injectable()
export class CareersService {
  private readonly logger = new Logger(CareersService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailService,
  ) {}

  async create(dto: CreateCareerDto, resume?: CareerResumeMeta) {
    const application = await this.prisma.careerApplication.create({
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

    try {
      await this.mail.sendCareerEmails(dto, resume);
    } catch (error) {
      this.logger.error(
        `Career application saved (${application.id}) but email failed`,
        error instanceof Error ? error.stack : String(error),
      );
    }

    return application;
  }
}
