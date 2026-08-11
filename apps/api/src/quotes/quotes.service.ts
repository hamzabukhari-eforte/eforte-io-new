import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Injectable()
export class QuotesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateQuoteDto) {
    return this.prisma.quoteSubmission.create({
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
  }
}
