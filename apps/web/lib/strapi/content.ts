function getStrapiUrl(): string {
  const fallback = `http://localhost:${process.env.STRAPI_PORT ?? "6400"}`;
  return (process.env.NEXT_PUBLIC_STRAPI_URL ?? fallback).replace(/\/$/, "");
}

function looksLikeHtml(content: string): boolean {
  return /<[a-z][\s\S]*>/i.test(content);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInlineMarkdown(text: string): string {
  return escapeHtml(text)
    .replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_\n]+)__/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, "<em>$1</em>")
    .replace(/(?<!_)_([^_\n]+)_(?!_)/g, "<em>$1</em>");
}

function stripLeadingNewlines(value: string): string {
  let i = 0;
  while (i < value.length && value[i] === "\n") i += 1;
  return value.slice(i);
}

function tryBoldHeadingBlock(trimmed: string): string | null {
  if (!trimmed.startsWith("**")) return null;

  const closeIdx = trimmed.indexOf("**", 2);
  if (closeIdx <= 2) return null;

  const heading = trimmed.slice(2, closeIdx);
  if (heading.includes("*") || heading.includes("\n")) return null;

  const after = trimmed.slice(closeIdx + 2);
  if (after === "") {
    return `<h2>${formatInlineMarkdown(heading)}</h2>`;
  }

  if (!after.startsWith("\n")) return null;
  const body = stripLeadingNewlines(after);
  if (!body) return null;

  return `<h2>${formatInlineMarkdown(heading)}</h2><p>${formatInlineMarkdown(body).replace(/\n/g, "<br />")}</p>`;
}

function isBulletLine(line: string): boolean {
  return line.startsWith("- ") || line.startsWith("* ");
}

function tryTitleBodyPairs(lines: string[]): string | null {
  if (lines.length < 2) return null;
  if (lines.some(isBulletLine)) return null;

  const pairs: string[] = [];
  for (let i = 0; i < lines.length; i += 2) {
    const title = lines[i];
    const body = lines[i + 1];
    if (body) {
      pairs.push(
        `<p><strong>${formatInlineMarkdown(title)}</strong><br />${formatInlineMarkdown(body)}</p>`,
      );
    } else {
      pairs.push(`<p>${formatInlineMarkdown(title)}</p>`);
    }
  }
  return pairs.length > 0 ? pairs.join("\n") : null;
}

function tryBulletList(lines: string[]): string | null {
  if (lines.length === 0 || !lines.every(isBulletLine)) return null;

  const items = lines
    .map((line) => line.slice(2))
    .map((line) => `<li>${formatInlineMarkdown(line)}</li>`)
    .join("");
  return `<ul>${items}</ul>`;
}

function markdownBlockToHtml(block: string): string {
  const trimmed = block.trim();
  if (!trimmed) return "";

  const boldHeading = tryBoldHeadingBlock(trimmed);
  if (boldHeading) return boldHeading;

  const lines = trimmed.split("\n").filter(Boolean);

  const pairs = tryTitleBodyPairs(lines);
  if (pairs) return pairs;

  const list = tryBulletList(lines);
  if (list) return list;

  return `<p>${formatInlineMarkdown(trimmed).replace(/\n/g, "<br />")}</p>`;
}

function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map(markdownBlockToHtml)
    .filter(Boolean)
    .join("\n");
}

export function rewriteStrapiAssetUrls(html: string): string {
  const base = getStrapiUrl();
  return html
    .replace(/src="\/uploads\//g, `src="${base}/uploads/`)
    .replace(/href="\/uploads\//g, `href="${base}/uploads/`);
}

/** Normalize Strapi richtext (HTML or markdown) into safe HTML for rendering. */
export function formatStrapiContent(content: string): string {
  const trimmed = content.trim();
  if (!trimmed) return "";

  const html = looksLikeHtml(trimmed) ? trimmed : markdownToHtml(trimmed);
  return rewriteStrapiAssetUrls(html);
}
