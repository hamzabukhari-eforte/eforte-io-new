export type StudioAccentId = "coral" | "blue" | "purple";

export type StudioBrandIconId =
  | "shopify"
  | "onesignal"
  | "ripple"
  | "land-id";

export type StudioBrand = {
  name: string;
  /** Key resolved to a react-icons mark in the client Hero */
  iconId?: StudioBrandIconId;
  /** Optional logo path; when omitted, prefer icon then text label */
  logoSrc?: string;
};

export type StudioHeroContent = {
  label: string;
  titleBefore: string;
  titleHighlight: string;
  /** Text between first and second highlight (e.g. " and ") */
  titleMiddle?: string;
  /** Optional second accent phrase (Product Management) */
  titleHighlight2?: string;
  titleAfter?: string;
  description: string;
  brandsLabel: string;
  brands: StudioBrand[];
  graphicSrc: string;
  ctaLabel: string;
};

export type StudioFeatureTheme = "light" | "muted" | "dark" | "black";

/**
 * text  — number + title + description (and optional image when layout is row/split)
 * visual — graphic + large title only (no number / body)
 * media  — image-only card (photo panel)
 */
export type StudioFeatureCardKind = "text" | "visual" | "media";

export type StudioFeature = {
  id: string;
  number?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  theme: StudioFeatureTheme;
  /** row = full-width band; split = text + media in one feature; half = half-width (paired) */
  layout: "row" | "split" | "half";
  cardKind?: StudioFeatureCardKind;
  imageSide: "left" | "right";
  /** For split layout: solid accent panel behind media */
  mediaPanel?: "image" | "accent";
  /** Inset rounded media card inside the parent band (Product Management style) */
  mediaInset?: boolean;
};

export type StudioMidCtaContent = {
  titleBefore: string;
  titleHighlight: string;
  description: string;
  ctaLabel: string;
};

/** Proprietary eForte technology callout (e.g. eForte Connect™, Legacy Bridge™) */
export type StudioProprietaryTech = {
  id: string;
  /** Display name, e.g. "eForte Connect™" */
  name: string;
  tagline?: string;
  description: string;
  benefits: string[];
};

export type StudioFaq = {
  question: string;
  answer: string;
};

export type StudioPageContent = {
  slug: string;
  accent: StudioAccentId;
  hero: StudioHeroContent;
  features: StudioFeature[];
  /** Optional proprietary technology callouts, rendered before FAQs */
  proprietaryTech?: StudioProprietaryTech[];
  /** Optional FAQs, rendered before the mid-page CTA */
  faqs?: StudioFaq[];
  faqsSubtitle?: string;
  midCta: StudioMidCtaContent;
};
