export type HomeCaseStudyStat = {
  value: string;
  label: string;
};

export type HomeCaseStudyHighlight = {
  label: string;
  text: string;
};

export type HomeCaseStudy = {
  id: string;
  clientName: string;
  title: string;
  paragraphs: string[];
  stats?: HomeCaseStudyStat[];
  highlights?: HomeCaseStudyHighlight[];
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

export const homeCaseStudies: HomeCaseStudy[] = [
  {
    id: "bioresearch-labs",
    clientName: "BioResearch Labs",
    title: "Clinical Trial Data Management",
    paragraphs: [
      "We automated the extraction and standardization of clinical data across global research sites. This eliminated manual data wrangling, achieving 99.8% data accuracy and accelerating the study completion timeline by 42%.",
      "In partnership with eForte, BioResearch Labs leveraged data and machine learning to fundamentally overhaul crucial functions. We engineered predictive models that deliver faster insights and significantly cut operational costs, revolutionizing clinical assessment.",
    ],
    stats: [
      {
        value: "10x",
        label: "Faster turnaround time for machine learning predictions",
      },
      {
        value: "56%",
        label: "Increase in model delivery and iteration speed",
      },
      {
        value: "15+",
        label: "Fully operational, value-driving machine learning models",
      },
      {
        value: "60%",
        label: "Reduction in data preparation and support expenses",
      },
    ],
    ctaLabel: "View Case Study",
    ctaHref: "/impact-studies",
    imageSrc: "/assets/images/case-study/health.webp",
    imageAlt: "BioResearch Labs clinical trial data platform",
  },
  {
    id: "allied-insurance",
    clientName: "Allied Insurance",
    title: "AI-Driven Claims Processing",
    paragraphs: [
      "Integrating computer vision with a 15-year-old legacy system, we automated claims verification and fraud detection. The result was a dramatic reduction in processing time from 9 days to 36 hours, with fraud detection accuracy improving to 94%.",
      "Allied Insurance set out to simplify modern insurance claims. Through collaboration with eForte, they harnessed deep data insights to sustain aggressive growth, deliver a superior user experience, and secure their position as a standout leader in the global Insurance sector.",
    ],
    highlights: [
      {
        label: "User Base",
        text: "Over 2 million satisfied users",
      },
      {
        label: "App Rating",
        text: "Consistently high 4.7 App Store Ranking",
      },
    ],
    ctaLabel: "View Case Study",
    ctaHref: "/impact-studies",
    imageSrc: "/assets/images/industry/insurance-banner.jpg",
    imageAlt: "Allied Insurance AI-driven claims experience",
  },
];
