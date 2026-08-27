export type StudioValueItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  variant: "dark" | "muted" | "light";
};

export type StudioProcessItem = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
  tags: string[];
};

export type StudioSuccessStoryItem = {
  id: string;
  brand: string;
  category: string;
  paragraphs: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  background: string;
  href: string;
};

export type StudioContactBannerContent = {
  title: string;
  description: string;
  ctaLabel: string;
};