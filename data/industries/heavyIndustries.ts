import type { IndustryPageContent } from "./types";

export const heavyIndustriesIndustry: IndustryPageContent = {
  slug: "heavy-industries",
  metadata: {
    title: "Heavy Industry | eForte",
    description: "Engineering resilient operations for heavy industry with applied AI, predictive maintenance, connected worker safety, and a secure Foundational Data Layer.",
  },
  hero: {
    badge: "HEAVY INDUSTRY",
    headline: "Engineering resilient operations for heavy industry with applied AI",
    paragraphs: [
      "eForte partners with manufacturers, energy operators, and industrial equipment companies to modernize how heavy industry monitors assets, protects workers, and keeps production running. We bring Velocity AI, Agentic Orchestration, and a secure Foundational Data Layer to environments where downtime is measured in real cost, not inconvenience."
    ],
    ctaLabel: "Contact Us",
    imageSrc: "/assets/images/industry/driving-1.jpg",
  },
  expertise: {
    title: "Our heavy industry expertise",
    description: "Our team partners with manufacturers, energy operators, and industrial equipment companies to keep plants running and workers safe.",
    stats: [
      {
        value: "13+",
        label: "years of experience in industrial and manufacturing technology",
      },
      {
        value: "35M+",
        label: "sensor readings processed monthly across client IoT deployments",
      },
      {
        value: "55%",
        label: "average reduction in unplanned downtime for predictive maintenance clients",
      },
    ],
    solutionsHeading: "Our Solutions",
    solutionsIntro: [],
    solutions: [
      {
        id: "agentic-plant",
        title: "Agentic Orchestration for plant operations",
        glow: "/assets/images/industry/bg-4.png",
        bullets: [
          {
            title: "Predictive maintenance agents",
            text: "continuously watch equipment sensor data and flag failures before they happen.",
          },
          {
            title: "Safety incident triage agents",
            text: "process incoming safety reports and alerts, prioritizing the most urgent for immediate action.",
          },
          {
            title: "Production scheduling agents",
            text: "adjust schedules dynamically in response to material availability and equipment status.",
          },
        ],
      },
      {
        id: "connected worker",
        title: "Connected worker & facility solutions",
        glow: "/assets/images/industry/bg-1.png",
        bullets: [
          {
            title: "Wearable safety monitoring",
            text: "track worker vitals and environmental hazards in real time.",
          },
          {
            title: "Remote equipment diagnostics",
            text: "let engineers assess machinery issues without traveling to the site.",
          },
          {
            title: "Digital twins for production lines",
            text: "simulate changes before applying them on the physical floor.",
          },
        ],
      },
      {
        id: "foundational-data",
        title: "Foundational Data Layer for industrial systems",
        glow: "/assets/images/industry/bg-2.png",
        bullets: [
          {
            title: "Unified sensor & ERP data platform",
            text: "bring shop floor and enterprise data into a single governed foundation.",
          },
          {
            title: "Energy usage analytics",
            text: "identify waste and optimize consumption across facilities.",
          },
          {
            title: "Legacy system modernization",
            text: "migrate industrial control data to modern, cloud connected infrastructure.",
          },
        ],
      },
    ],
  },
  highlights: [
    {
      value: "01",
      label: "Delivered predictive maintenance platforms processing tens of millions of sensor readings monthly.",
    },
    {
      value: "02",
      label: "Built connected worker safety systems credited with measurable reductions in reported incidents.",
    },
    {
      value: "03",
      label: "Modernized legacy MES/ERP integrations without halting live production lines.",
    },
    {
      value: "04",
      label: "Deep experience with BLE and industrial-IoT connected devices in demanding physical environments.",
    },
  ],
  security: {
    heading: "Rigorous data and security processes",
    body: "eForte applies ISO 27001 aligned security practices and SOC 2 Type 2 principles to protect operational technology and industrial data, recognizing that OT security requires different safeguards than typical enterprise IT.",
  },
  successStories: [
    {
      id: "ironclad",
      title: "Ironclad Manufacturing",
      paragraphs: [
        "Ironclad Manufacturing was experiencing costly unplanned downtime on its aging press line but couldn't justify a full equipment replacement. eForte deployed predictive maintenance agents that monitor vibration and temperature sensors, flagging anomalies days before failure."
      ],
      tags: [
        "Reduced unplanned downtime",
        "Extended equipment lifespan",
        "Lower maintenance costs"
      ],
      cardHeading: "Predictive maintenance that pays for itself",
      imageSrc: "/assets/images/industry/solutions-1.jpg",
      imageAlt: "Ironclad Manufacturing",
      accentClass: "bg-[#1f7a6b]",
      tagClass: "bg-[#1f7a6b] text-white",
    },
    {
      id: "summit-steel",
      title: "Summit Steel Works",
      paragraphs: [
        "Summit Steel Works needed better visibility into energy consumption across three plants to meet new sustainability targets. eForte built a Foundational Data Layer unifying energy meter data with production schedules, surfacing waste patterns invisible in siloed systems."
      ],
      tags: [
        "Reduced energy waste",
        "Met sustainability targets",
        "Unified multi plant visibility"
      ],
      cardHeading: "Unified multi plant energy visibility",
      imageSrc: "/assets/images/industry/driving-2.jpg",
      imageAlt: "Summit Steel Works",
      accentClass: "bg-[#E8822E]",
      tagClass: "bg-[#E8822E] text-white",
    },
    {
      id: "frontier-energy",
      title: "Frontier Energy Partners",
      paragraphs: [
        "Frontier Energy Partners' field teams lacked real time visibility into worker safety conditions across remote sites. eForte built a connected wearable system feeding into a central safety dashboard with automated alerting for hazardous conditions."
      ],
      tags: [
        "Real time safety visibility",
        "Faster incident response",
        "Improved field team confidence"
      ],
      cardHeading: "Connected worker safety visibility",
      imageSrc: "/assets/images/industry/baas.jpg",
      imageAlt: "Frontier Energy Partners",
      accentClass: "bg-[#0A2EC1]",
      tagClass: "bg-[#0A2EC1] text-white",
    },
  ],
};
