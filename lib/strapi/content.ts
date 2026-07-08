function getStrapiUrl(): string {
  return (process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:5000").replace(/\/$/, "");
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
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.+?)__/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, "<em>$1</em>")
    .replace(/(?<!_)_([^_\n]+)_(?!_)/g, "<em>$1</em>");
}

function markdownBlockToHtml(block: string): string {
  const trimmed = block.trim();
  if (!trimmed) return "";

  const onlyBoldHeading = trimmed.match(/^\*\*(.+?)\*\*$/);
  if (onlyBoldHeading) {
    return `<h2>${formatInlineMarkdown(onlyBoldHeading[1])}</h2>`;
  }

  const boldHeadingWithBody = trimmed.match(/^\*\*(.+?)\*\*\n+([\s\S]+)$/);
  if (boldHeadingWithBody) {
    const [, heading, body] = boldHeadingWithBody;
    return `<h2>${formatInlineMarkdown(heading)}</h2><p>${formatInlineMarkdown(body).replace(/\n/g, "<br />")}</p>`;
  }

  const lines = trimmed.split("\n").filter(Boolean);
  if (lines.length >= 2 && lines.every((line) => !line.startsWith("- ") && !line.startsWith("* "))) {
    const pairs: string[] = [];
    for (let i = 0; i < lines.length; i += 2) {
      const title = lines[i];
      const body = lines[i + 1];
      if (body) {
        pairs.push(
          `<p><strong>${formatInlineMarkdown(title)}</strong><br />${formatInlineMarkdown(body)}</p>`
        );
      } else {
        pairs.push(`<p>${formatInlineMarkdown(title)}</p>`);
      }
    }
    if (pairs.length > 0) return pairs.join("\n");
  }

  if (lines.every((line) => line.startsWith("- ") || line.startsWith("* "))) {
    const items = lines
      .map((line) => line.replace(/^[-*]\s+/, ""))
      .map((line) => `<li>${formatInlineMarkdown(line)}</li>`)
      .join("");
    return `<ul>${items}</ul>`;
  }

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
