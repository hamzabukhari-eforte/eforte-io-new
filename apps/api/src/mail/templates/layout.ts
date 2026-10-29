import { escapeHtml } from '../mail.utils';

export type EmailField = {
  label: string;
  value: string | null | undefined;
};

export type RenderedEmail = {
  html: string;
  text: string;
};

const BRAND = {
  bg: '#0A0A1A',
  accent: '#D3287A',
  text: '#111827',
  muted: '#6B7280',
  border: '#E5E7EB',
  card: '#F9FAFB',
  white: '#FFFFFF',
};

function visibleFields(fields: EmailField[]) {
  return fields.filter((f) => f.value != null && String(f.value).trim() !== '');
}

function renderFieldsText(fields: EmailField[]): string {
  return visibleFields(fields)
    .map((f) => `${f.label}: ${String(f.value).trim()}`)
    .join('\n');
}

function renderEmailHeader(): string {
  return `
          <tr>
            <td style="background:${BRAND.bg};padding:0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:28px 32px;vertical-align:middle;">
                    <div style="font-size:22px;font-weight:700;letter-spacing:0.02em;line-height:1;color:${BRAND.white};">eForte<span style="color:${BRAND.accent};">.</span></div>
                  </td>
                  <td align="right" style="padding:28px 32px 28px 0;vertical-align:middle;width:72px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-left:auto;">
                      <tr>
                        <td style="width:56px;height:3px;background:${BRAND.accent};border-radius:3px;font-size:0;line-height:0;">&nbsp;</td>
                      </tr>
                      <tr>
                        <td style="height:8px;font-size:0;line-height:0;">&nbsp;</td>
                      </tr>
                      <tr>
                        <td align="right">
                          <table role="presentation" cellpadding="0" cellspacing="0" style="margin-left:auto;">
                            <tr>
                              <td style="width:28px;height:3px;background:#E86AA8;border-radius:3px;font-size:0;line-height:0;">&nbsp;</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`;
}

export function renderEmailLayout(options: {
  preheader: string;
  title: string;
  intro: string;
  fields: EmailField[];
  footerNote?: string;
}): RenderedEmail {
  const rows = visibleFields(options.fields)
    .map(
      (f) => `
      <tr>
        <td style="padding:12px 16px;border-bottom:1px solid ${BRAND.border};width:34%;vertical-align:top;">
          <span style="font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:${BRAND.muted};">${escapeHtml(f.label)}</span>
        </td>
        <td style="padding:12px 16px;border-bottom:1px solid ${BRAND.border};vertical-align:top;">
          <span style="font-size:15px;line-height:1.5;color:${BRAND.text};white-space:pre-wrap;">${escapeHtml(String(f.value))}</span>
        </td>
      </tr>`,
    )
    .join('');

  const footer =
    options.footerNote ??
    'This message was sent from the eForte Solutions website.';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(options.title)}</title>
</head>
<body style="margin:0;padding:0;background:#F3F4F6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${BRAND.text};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(options.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3F4F6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:${BRAND.white};border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(10,10,26,0.08);">
          ${renderEmailHeader()}
          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 12px;font-size:22px;line-height:1.3;font-weight:700;color:${BRAND.bg};">${escapeHtml(options.title)}</h1>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:${BRAND.muted};">${escapeHtml(options.intro)}</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.card};border:1px solid ${BRAND.border};border-radius:8px;overflow:hidden;">
                ${rows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px;border-top:1px solid ${BRAND.border};background:#FAFAFA;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:${BRAND.muted};">${escapeHtml(footer)}</p>
              <p style="margin:8px 0 0;font-size:12px;color:${BRAND.muted};">
                <a href="https://eforte.io" style="color:${BRAND.accent};text-decoration:none;">eforte.io</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    options.title,
    '',
    options.intro,
    '',
    renderFieldsText(options.fields),
    '',
    footer,
    'https://eforte.io',
  ].join('\n');

  return { html, text };
}

export function renderConfirmationLayout(options: {
  preheader: string;
  title: string;
  greeting: string;
  body: string;
  nextSteps?: string;
}): RenderedEmail {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(options.title)}</title>
</head>
<body style="margin:0;padding:0;background:#F3F4F6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${BRAND.text};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(options.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3F4F6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:${BRAND.white};border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(10,10,26,0.08);">
          ${renderEmailHeader()}
          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;font-weight:700;color:${BRAND.bg};">${escapeHtml(options.title)}</h1>
              <p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:${BRAND.text};">${escapeHtml(options.greeting)}</p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:${BRAND.muted};">${escapeHtml(options.body)}</p>
              ${
                options.nextSteps
                  ? `<p style="margin:0;padding:16px;background:${BRAND.card};border-left:3px solid ${BRAND.accent};font-size:14px;line-height:1.6;color:${BRAND.text};">${escapeHtml(options.nextSteps)}</p>`
                  : ''
              }
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px;border-top:1px solid ${BRAND.border};background:#FAFAFA;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:${BRAND.muted};">Warm regards,<br/>The eForte Solutions team</p>
              <p style="margin:12px 0 0;font-size:12px;color:${BRAND.muted};">
                <a href="https://eforte.io" style="color:${BRAND.accent};text-decoration:none;">eforte.io</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    options.title,
    '',
    options.greeting,
    '',
    options.body,
    options.nextSteps ? `\n${options.nextSteps}` : '',
    '',
    'Warm regards,',
    'The eForte Solutions team',
    'https://eforte.io',
  ]
    .filter((line) => line !== '')
    .join('\n');

  return { html, text };
}
