export type IndustryStat = {
  value: string;
  label: string;
};

export type IndustrySolutionBullet = {
  title: string;
  text: string;
};

export type IndustrySolutionCard = {
  id: string;
  title: string;
  glow: string;
  bullets: IndustrySolutionBullet[];
};

export type IndustryHighlight = {
  value: string;
  label: string;
};

export type IndustrySuccessStory = {
  id: string;
  title: string;
  paragraphs: string[];
  tags: string[];
  cardHeading: string;
  imageSrc: string;
  imageAlt: string;
  accentClass: string;
  tagClass: string;
};

export type IndustryPageContent = {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    headline: string;
    paragraphs: string[];
    ctaLabel: string;
    imageSrc: string;
  };
  expertise: {
    title: string;
    description: string;
    stats: IndustryStat[];
    solutionsHeading: string;
    solutionsIntro: string[];
    solutions: IndustrySolutionCard[];
  };
  highlights: IndustryHighlight[];
  security?: {
    heading: string;
    body: string;
  };
  successStories: IndustrySuccessStory[];
};
