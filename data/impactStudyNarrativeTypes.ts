export type ImpactStudyNarrativeItem = {
  title: string;
  body: string;
};

export type ImpactStudyNarrative = {
  slug: string;
  name: string;
  headline: string;
  intro: string[];
  pillars: string[];
  deliverables: string[];
  challenge: {
    title: string;
    paragraphs: string[];
    image: string;
  };
  solution: {
    title: string;
    lead: string;
    items: ImpactStudyNarrativeItem[];
  };
  results: {
    title: string;
    lead: string;
    items: ImpactStudyNarrativeItem[];
  };
  closing: string;
};
