import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Injectable()
export class QuotesService {
  private readonly logger = new Logger(QuotesService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailService,
  ) {}

  async create(dto: CreateQuoteDto) {
    const submission = await this.prisma.quoteSubmission.create({
      data: {
        businessName: dto.businessName,
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        countryCode: dto.countryCode,
        phone: dto.phone,
        referralSource: dto.referralSource,
        lookingFor: dto.lookingFor,
        projectType: dto.projectType,
        budget: dto.budget,
        requirements: dto.requirements,
      },
    });

    try {
      await this.mail.sendQuoteEmails(dto);
    } catch (error) {
      this.logger.error(
        `Quote saved (${submission.id}) but email failed`,
        error instanceof Error ? error.stack : String(error),
      );
    }

    return submission;
  }
}
