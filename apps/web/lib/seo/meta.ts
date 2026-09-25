/** Trim description for meta tags (~155 characters). */
export function trimMetaDescription(text: string, maxLength = 155): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  const sliced = normalized.slice(0, maxLength - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  const trimmed = lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced;
  return `${trimmed}…`;
}
