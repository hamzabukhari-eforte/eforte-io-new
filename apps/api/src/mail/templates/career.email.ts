import { CreateCareerDto } from '../../careers/dto/create-career.dto';
import { formatBytes } from '../mail.utils';
import {
  renderConfirmationLayout,
  renderEmailLayout,
} from './layout';

export type CareerResumeEmailMeta = {
  originalName: string;
  mimeType: string;
  sizeBytes: number;
};

export function careerNotificationEmail(
  dto: CreateCareerDto,
  resume?: CareerResumeEmailMeta,
) {
  const fullName = `${dto.firstName} ${dto.lastName}`.trim();
  const position = dto.position?.trim() || 'General application';
  const subject = `New career application — ${position}`;
  const content = renderEmailLayout({
    preheader: `${fullName} applied for ${position}`,
    title: 'New career application',
    intro:
      'A candidate submitted an application through the careers page. Details are below.',
    fields: [
      { label: 'Name', value: fullName },
      { label: 'Email', value: dto.email },
      { label: 'Phone', value: dto.phone },
      { label: 'Position', value: position },
      { label: 'Message', value: dto.message },
      {
        label: 'Resume',
        value: resume
          ? `${resume.originalName} (${formatBytes(resume.sizeBytes)})`
          : 'Not attached',
      },
    ],
  });
  return { subject, ...content };
}

export function careerConfirmationEmail(dto: CreateCareerDto) {
  const position = dto.position?.trim();
  const subject = 'We received your application — eForte Solutions';
  const content = renderConfirmationLayout({
    preheader: 'Thanks for applying. Our talent team will review your profile.',
    title: 'Application received',
    greeting: `Hi ${dto.firstName},`,
    body: position
      ? `Thank you for applying for the ${position} role at eForte Solutions. We have received your application and our talent team will review it carefully.`
      : 'Thank you for applying to eForte Solutions. We have received your application and our talent team will review it carefully.',
    nextSteps:
      'If your background aligns with an open role, we will reach out to schedule a conversation. We appreciate your interest in joining the team.',
  });
  return { subject, ...content };
}
