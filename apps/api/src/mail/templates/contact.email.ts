import { CreateContactDto } from '../../contact/dto/create-contact.dto';
import {
  renderConfirmationLayout,
  renderEmailLayout,
} from './layout';

export function contactNotificationEmail(dto: CreateContactDto) {
  const subject = `New contact inquiry from ${dto.name}`;
  const content = renderEmailLayout({
    preheader: `${dto.name} submitted a contact form on eforte.io`,
    title: 'New contact inquiry',
    intro:
      'A visitor submitted the contact form on the website. Details are below.',
    fields: [
      { label: 'Name', value: dto.name },
      { label: 'Email', value: dto.email },
      { label: 'Phone', value: dto.phone },
      { label: 'Project type', value: dto.projectType },
      { label: 'Message', value: dto.description },
    ],
  });
  return { subject, ...content };
}

export function contactConfirmationEmail(dto: CreateContactDto) {
  const firstName = dto.name.trim().split(/\s+/)[0] || 'there';
  const subject = 'We received your message — eForte Solutions';
  const content = renderConfirmationLayout({
    preheader: 'Thanks for reaching out. Our team will get back to you shortly.',
    title: 'Thank you for contacting us',
    greeting: `Hi ${firstName},`,
    body: 'Thank you for getting in touch with eForte Solutions. We have received your message and a member of our team will review it shortly.',
    nextSteps:
      'We typically respond within one business day. If your matter is urgent, feel free to reply to this email with additional details.',
  });
  return { subject, ...content };
}
