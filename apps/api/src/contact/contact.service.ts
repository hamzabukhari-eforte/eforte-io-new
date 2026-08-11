import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateContactDto) {
    return this.prisma.contactSubmission.create({
      data: {
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        projectType: dto.projectType,
        description: dto.description,
      },
    });
  }
}
