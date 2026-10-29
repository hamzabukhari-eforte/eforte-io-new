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
    id: "scheduling-engine",
    clientName: "Scheduling Engine",
    title: "Automating Workforce Scheduling",
    paragraphs: [
      "Scheduling Engine automates workforce scheduling across call centers and retail chains, reducing conflicts and giving supervisors a reliable, agent-driven way to staff every shift.",
      "In partnership with eForte, the platform turned fragmented spreadsheet schedules into an intelligent system that balances coverage, preferences, and labor rules at scale.",
    ],
    stats: [
      {
        value: "500K+",
        label: "Shifts scheduled across call centers and retail",
      },
      {
        value: "80%",
        label: "Reduction in scheduling conflicts",
      },
      {
        value: "10 min",
        label: "Average time to publish a full weekly roster",
      },
      {
        value: "24/7",
        label: "Agent-assisted coverage for last-minute changes",
      },
    ],
    ctaLabel: "View Case Study",
    ctaHref: impactStudyHref("scheduling-engine"),
    imageSrc:
      "/assets/images/case-study/new-images/scheduling-engine/scheduling-main.png",
    imageAlt:
      "Scheduling Engine workforce scheduling platform mockup",
  },
  {
    id: "sellsmart",
    clientName: "Sellsmart",
    title: "Agentic Point of Sale Intelligence",
    paragraphs: [
      "Sellsmart brings agentic intelligence to point of sale, helping retailers process transactions faster while keeping every checkout step consistent as volume grows.",
      "eForte helped Sellsmart unify inventory, payments, and cashier workflows so stores could scale throughput without sacrificing accuracy or customer experience.",
    ],
    stats: [
      {
        value: "2M+",
        label: "Transactions processed on the platform",
      },
      {
        value: "35%",
        label: "Reduction in average checkout time",
      },
      {
        value: "99%",
        label: "Transaction accuracy across retail locations",
      },
      {
        value: "1",
        label: "Unified POS workflow for every store",
      },
    ],
    ctaLabel: "View Case Study",
    ctaHref: impactStudyHref("sellsmart"),
    imageSrc:
      "/assets/images/case-study/new-images/sellsmart/sellsMart-main.png",
    imageAlt: "Sellsmart point of sale platform mockup",
  },
];
