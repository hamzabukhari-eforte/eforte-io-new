import type { ProductDesignShowcaseItem } from "@/data/productDesign";

const IMAGE_BASE = "/assets/final-images/industries/financial-services";

/**
 * Finance industry work stories.
 * Wired to /industries/financial-services via industryShowcases.
 */
export const financialServicesWorkStories: ProductDesignShowcaseItem[] = [
  {
    id: "northbridge",
    brand: "Northbridge",
    category: "Lending | Credit",
    paragraphs: [
      "Northbridge is a mid market small business lender processing 500,000+ loan applications a year. eForte built a hybrid scoring engine with human review so underwriters focus only on borderline cases.",
    ],
    tags: ["Credit scoring", "Human in the loop", "Lending"],
    image: `${IMAGE_BASE}/northbridge-success-story-v3.png`,
    imageAlt: "Northbridge hybrid credit scoring dashboard and loan review app",
    background: "#031736",
    href: "/case-studies/northbridge",
  },
  {
    id: "velora-financial",
    brand: "Velora Financial",
    category: "Digital Banking | Credit Union",
    paragraphs: [
      "Velora Financial is a regional credit union network that needed a mobile banking experience that could compete with digital first banks. eForte rebuilt the app on core-banking APIs with real time payments and spending insights.",
    ],
    tags: ["Mobile banking", "Real time payments", "Credit union"],
    image: `${IMAGE_BASE}/velora-success-story-v3.png`,
    imageAlt: "Velora Financial mobile banking and admin dashboard",
    background: "#012c7f",
    href: "/case-studies/velora-financial",
  },
  {
    id: "arclight-capital",
    brand: "Arclight Capital",
    category: "Wealth Management",
    paragraphs: [
      "Arclight Capital is a wealth management firm that needed advisor-ready portfolio insights without asking clients to repeat information across systems. eForte built an AI financial analyst that generates summaries in seconds.",
    ],
    tags: ["Wealth management", "AI analyst", "Advisor tools"],
    image: `${IMAGE_BASE}/arclight-success-story-v3.png`,
    imageAlt: "Arclight Capital advisor portfolio brief on laptop and tablet",
    background: "#3a0d24",
    href: "/case-studies/arclight-capital",
  },
];
