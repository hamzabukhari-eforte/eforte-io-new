import type { Metadata } from "next";

/** Trim description for meta tags (~155 characters). */
export function trimMetaDescription(text: string, maxLength = 155): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  const sliced = normalized.slice(0, maxLength - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  const trimmed = lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced;
  return `${trimmed}…`;
}

export type PageMetaInput = {
  title: string;
  description: string;
  /** Self-referencing path, e.g. `/about-us` or `/blog/my-post` */
  path: string;
  type?: "website" | "article";
};

/**
 * Shared page metadata: title, description, canonical, Open Graph, Twitter.
 * Use on every indexable route so children do not inherit a root `/` canonical.
 */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: PageMetaInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const desc = trimMetaDescription(description);

  return {
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      title,
      description: desc,
      url: canonical,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
  };
}
