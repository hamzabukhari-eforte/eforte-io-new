import { CreateQuoteDto } from '../../quotes/dto/create-quote.dto';
import {
  renderConfirmationLayout,
  renderEmailLayout,
} from './layout';

export function quoteNotificationEmail(dto: CreateQuoteDto) {
  const fullName = `${dto.firstName} ${dto.lastName}`.trim();
  const phone = `${dto.countryCode} ${dto.phone}`.trim();
  const subject = `New quote request from ${dto.businessName}`;
  const content = renderEmailLayout({
    preheader: `${fullName} requested a quote for ${dto.projectType}`,
    title: 'New quote request',
    intro:
      'A prospective client submitted a quote request on the website. Review the details below.',
    fields: [
      { label: 'Business', value: dto.businessName },
      { label: 'Contact', value: fullName },
      { label: 'Email', value: dto.email },
      { label: 'Phone', value: phone },
      { label: 'Referral', value: dto.referralSource },
      { label: 'Looking for', value: dto.lookingFor },
      { label: 'Project type', value: dto.projectType },
      { label: 'Budget', value: dto.budget },
      { label: 'Requirements', value: dto.requirements },
    ],
  });
  return { subject, ...content };
}

export function quoteConfirmationEmail(dto: CreateQuoteDto) {
  const subject = 'We received your quote request — eForte Solutions';
  const content = renderConfirmationLayout({
    preheader: 'Thanks for your interest. We will follow up with next steps soon.',
    title: 'Quote request received',
    greeting: `Hi ${dto.firstName},`,
    body: `Thank you for considering eForte Solutions for ${dto.businessName}. We have received your project details and our team is reviewing your requirements.`,
    nextSteps:
      'Expect a follow-up from our team within one to two business days with clarifying questions or a proposed next step.',
  });
  return { subject, ...content };
}
