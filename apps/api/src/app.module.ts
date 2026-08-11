import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { ContactModule } from './contact/contact.module';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [PrismaModule, HealthModule, ContactModule, QuotesModule],
})
export class AppModule {}
