import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { ContactModule } from './contact/contact.module';
import { QuotesModule } from './quotes/quotes.module';
import { CareersModule } from './careers/careers.module';

@Module({
  imports: [
    PrismaModule,
    HealthModule,
    ContactModule,
    QuotesModule,
    CareersModule,
  ],
})
export class AppModule {}
