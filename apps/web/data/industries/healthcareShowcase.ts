import type { ProductDesignShowcaseItem } from "@/data/productDesign";

const IMAGE_BASE = "/assets/final-images/industries/healthcare";

/**
 * Healthcare Capabilities / Health & Wellbeing success stories.
 * Wired to /industries/healthcare via industryShowcases.
 * Also remain available on Product Design through shared catalog picks where relevant.
 */
export const healthcareWorkStories: ProductDesignShowcaseItem[] = [
  {
    id: "aurelia-clinics",
    brand: "Aurelia Clinics",
    category: "Digital Patient Experience",
    paragraphs: [
      "Aurelia Clinics, a multi-site outpatient network, needed a patient-first digital front door. eForte rebuilt the experience across web, mobile, and messaging, with a health CRM underneath so every relationship had one history.",
    ],
    tags: [
      "Patient experience",
      "Health CRM",
      "Accessible design",
    ],
    image: `${IMAGE_BASE}/aurelia-success-story.png`,
    imageAlt: "Aurelia Clinics digital patient experience on laptop and phone",
    background: "#031736",
    href: "/case-studies/aurelia-clinics",
  },
  {
    id: "pulselink",
    brand: "PulseLink",
    category: "mHealth & Connected Devices",
    paragraphs: [
      "PulseLink needed a consumer health app on Apple Health and Google Fit, plus its own wearable metrics over BLE. eForte built the mobile experience, device path, and real-time metrics layer so patients and coaches see the same numbers.",
    ],
    tags: [
      "Consumer health apps",
      "Wearables",
      "Apple Health / Google Fit",
    ],
    image: `${IMAGE_BASE}/PulseLink.png`,
    imageAlt: "PulseLink mHealth app, laptop dashboard, and wearable",
    background: "#012c7f",
    href: "/case-studies/pulselink",
  },
  {
    id: "northstar-care",
    brand: "Northstar Care",
    category: "Virtual Care & Remote Monitoring",
    paragraphs: [
      "Northstar Care needed telehealth and remote monitoring that felt as strong as an in-person visit. eForte connected video consults, at-home devices, and medication adherence so care teams can act before small issues become emergencies.",
    ],
    tags: [
      "Telehealth",
      "Remote monitoring",
      "Medication adherence",
    ],
    image: `${IMAGE_BASE}/northstar-success-story.png`,
    imageAlt: "Northstar Care virtual care and remote monitoring devices",
    background: "#032841",
    href: "/case-studies/northstar-care",
  },
  {
    id: "thornfield-health",
    brand: "Thornfield Health",
    category: "Agentic Orchestration",
    paragraphs: [
      "Thornfield Health needed agents that cut documentation load and keep care teams aligned. eForte delivered clinical documentation, patient triage, and care-coordination agents so clinicians focus on patients, not paperwork.",
    ],
    tags: [
      "Clinical documentation",
      "Patient triage",
      "Care coordination",
    ],
    image: `${IMAGE_BASE}/thornfield-success-story.png`,
    imageAlt: "Thornfield Health agentic orchestration for care teams",
    background: "#3a0d24",
    href: "/case-studies/thornfield-health",
  },
  {
    id: "helix-health-data",
    brand: "Helix Health Data",
    category: "Foundational Data Layer",
    paragraphs: [
      "Helix Health Data needed HIPAA-aligned pipelines that connect wearables, remote tools, and EHRs. eForte built a governed data layer and analytics so clinical and operational insight improves both care quality and efficiency.",
    ],
    tags: [
      "HIPAA data architecture",
      "EHR interoperability",
      "Health analytics",
    ],
    image: `${IMAGE_BASE}/helix-success-story.png`,
    imageAlt: "Helix Health Data foundational data layer dashboard",
    background: "#1a1030",
    href: "/case-studies/helix-health-data",
  },
];
