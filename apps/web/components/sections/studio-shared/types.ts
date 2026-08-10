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

export type StudioContactBannerContent = {
  title: string;
  description: string;
  ctaLabel: string;
};