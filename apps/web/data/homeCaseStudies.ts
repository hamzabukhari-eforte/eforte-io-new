import { impactStudyHref } from "@/data/impactStudiesHomepage";

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
        value: "99.8%",
        label: "Data accuracy across 40+ global research sites",
      },
      {
        value: "42%",
        label: "Faster study completion timeline",
      },
      {
        value: "76%",
        label: "Reduction in clinical data processing time",
      },
      {
        value: "0",
        label: "Compliance findings in regulatory audits",
      },
    ],
    ctaLabel: "View Case Study",
    ctaHref: impactStudyHref("bioresearch-labs"),
    imageSrc:
      "/assets/final-images/home-case-studies/bioresearch-labs-mockup.png",
    imageAlt:
      "BioResearch Labs clinical trial data platform mockup across laptop, phone, and tablet",
  },
  {
    id: "allied-insurance",
    clientName: "Allied Insurance",
    title: "AI-Driven Claims Processing",
    paragraphs: [
      "Integrating computer vision with a 15-year-old legacy system, we automated claims verification and fraud detection. The result was a dramatic reduction in processing time from 9 days to 36 hours, with fraud detection accuracy improving to 94%.",
      "Allied Insurance set out to simplify modern insurance claims. Through collaboration with eForte, they harnessed deep data insights to sustain aggressive growth, deliver a superior user experience, and secure their position as a standout leader in the global Insurance sector.",
    ],
    stats: [
      {
        value: "36h",
        label: "Average claims resolution, down from 9 days",
      },
      {
        value: "94%",
        label: "Fraud detection accuracy, up from 71%",
      },
      {
        value: "83%",
        label: "Reduction in manual data entry at intake",
      },
      {
        value: "42%",
        label: "Decrease in processing cost per claim",
      },
    ],
    ctaLabel: "View Case Study",
    ctaHref: impactStudyHref("allied-insurance"),
    imageSrc:
      "/assets/final-images/home-case-studies/allied-insurance-mockup.png",
    imageAlt:
      "Allied Insurance claims command center mockup across laptop, phone, and tablet",
  },
];
