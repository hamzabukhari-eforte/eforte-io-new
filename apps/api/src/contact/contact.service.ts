import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailService,
  ) {}

  async create(dto: CreateContactDto) {
    const submission = await this.prisma.contactSubmission.create({
      data: {
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        projectType: dto.projectType,
        description: dto.description,
      },
    });

    try {
      await this.mail.sendContactEmails(dto);
    } catch (error) {
      this.logger.error(
        `Contact saved (${submission.id}) but email failed`,
        error instanceof Error ? error.stack : String(error),
      );
    }

    return submission;
  }
}
