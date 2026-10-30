import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { randomBytes } from 'node:crypto';
import { join } from 'node:path';
import { createTransport, type Transporter } from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';
import { CreateContactDto } from '../contact/dto/create-contact.dto';
import { CreateQuoteDto } from '../quotes/dto/create-quote.dto';
import { CreateCareerDto } from '../careers/dto/create-career.dto';
import {
  contactConfirmationEmail,
  contactNotificationEmail,
} from './templates/contact.email';
import {
  quoteConfirmationEmail,
  quoteNotificationEmail,
} from './templates/quote.email';
import {
  careerConfirmationEmail,
  careerNotificationEmail,
  type CareerResumeEmailMeta,
} from './templates/career.email';

export type CareerResumeForMail = CareerResumeEmailMeta & {
  storedName: string;
};

@Injectable()
export class MailService implements OnModuleInit {
  private readonly logger = new Logger(MailService.name);
  private transporter: Transporter<SMTPTransport.SentMessageInfo> | null =
    null;
  private hostUser: string | null = null;

  onModuleInit() {
    const host = process.env.NODEMAILER_HOST?.trim();
    const user = process.env.HOST_USER?.trim();
    // Gmail App Passwords are often copied with spaces — strip them for auth
    const pass = process.env.HOST_PASSWORD?.replace(/\s+/g, '') ?? '';
    const port = Number(process.env.NODEMAILER_PORT ?? 587);

    if (!host || !user || !pass) {
      this.logger.warn(
        'Mail disabled: set NODEMAILER_HOST, HOST_USER, and HOST_PASSWORD to enable outbound email.',
      );
      return;
    }

    // Common misconfig: NODEMAILER_HOST=gmail — Gmail SMTP hostname is smtp.gmail.com
    const resolvedHost =
      host.toLowerCase() === 'gmail' ? 'smtp.gmail.com' : host;

    this.transporter = createTransport({
      host: resolvedHost,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
    this.hostUser = user;
    this.logger.log(`Mail transporter ready (${resolvedHost}:${port})`);
  }

  async sendContactEmails(dto: CreateContactDto): Promise<void> {
    if (!this.hostUser) return;

    const notify = contactNotificationEmail(dto);
    const confirm = contactConfirmationEmail(dto);

    await Promise.all([
      this.send({
        to: this.hostUser,
        replyTo: dto.email,
        subject: notify.subject,
        html: notify.html,
        text: notify.text,
      }),
      this.send({
        to: dto.email,
        replyTo: this.hostUser,
        subject: confirm.subject,
        html: confirm.html,
        text: confirm.text,
      }),
    ]);
  }

  async sendQuoteEmails(dto: CreateQuoteDto): Promise<void> {
    if (!this.hostUser) return;

    const notify = quoteNotificationEmail(dto);
    const confirm = quoteConfirmationEmail(dto);

    await Promise.all([
      this.send({
        to: this.hostUser,
        replyTo: dto.email,
        subject: notify.subject,
        html: notify.html,
        text: notify.text,
      }),
      this.send({
        to: dto.email,
        replyTo: this.hostUser,
        subject: confirm.subject,
        html: confirm.html,
        text: confirm.text,
      }),
    ]);
  }

  async sendCareerEmails(
    dto: CreateCareerDto,
    resume?: CareerResumeForMail,
  ): Promise<void> {
    if (!this.hostUser) return;

    const notify = careerNotificationEmail(dto, resume);
    const confirm = careerConfirmationEmail(dto);

    const attachments = resume
      ? [
          {
            filename: resume.originalName,
            path: join(
              process.cwd(),
              'uploads',
              'careers',
              resume.storedName,
            ),
            contentType: resume.mimeType,
          },
        ]
      : undefined;

    await Promise.all([
      this.send({
        to: this.hostUser,
        replyTo: dto.email,
        subject: notify.subject,
        html: notify.html,
        text: notify.text,
        attachments,
      }),
      this.send({
        to: dto.email,
        replyTo: this.hostUser,
        subject: confirm.subject,
        html: confirm.html,
        text: confirm.text,
      }),
    ]);
  }

  private async send(options: {
    to: string;
    subject: string;
    html: string;
    text: string;
    replyTo?: string;
    attachments?: Array<{
      filename: string;
      path: string;
      contentType?: string;
    }>;
  }): Promise<void> {
    if (!this.transporter || !this.hostUser) return;

    try {
      const info = await this.transporter.sendMail({
        from: {
          name: 'eForte Solutions',
          address: this.hostUser,
        },
        to: options.to,
        replyTo: options.replyTo,
        subject: options.subject,
        text: options.text,
        html: options.html,
        attachments: options.attachments,
        headers: {
          'X-Entity-Ref-ID': `${Date.now()}-${randomBytes(8).toString('hex')}`,
        },
      });
      this.logger.log(
        `Email sent to ${options.to} (${options.subject}) id=${info.messageId}`,
      );
    } catch (error) {
      this.logger.error(
        `Failed to send email to ${options.to} (${options.subject})`,
        error instanceof Error ? error.stack : String(error),
      );
    }
  }
}
