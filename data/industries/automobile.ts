import type { IndustryPageContent } from "./types";

export const automobileIndustry: IndustryPageContent = {
  slug: "automobile",
  metadata: {
    title: "Automotive | eForte",
    description: "Building connected, intelligent vehicles, Velocity AI, Agentic Orchestration, and a resilient Foundational Data Layer for fleet and telemetry data.",
  },
  hero: {
    badge: "AUTOMOTIVE",
    headline: "Building the connected, intelligent vehicles of tomorrow",
    paragraphs: [
      "eForte partners with automotive manufacturers, suppliers, and mobility companies to bring connected, AI driven experiences to the road, powered by Velocity AI for rapid product delivery, Agentic Orchestration for intelligent vehicle systems, and a resilient Foundational Data Layer for fleet and telemetry data."
    ],
    ctaLabel: "Contact Us",
    imageSrc: "/assets/images/industry/driving-1.jpg",
  },
  expertise: {
    title: "Our automotive expertise",
    description: "Our team partners with automotive manufacturers, suppliers, and mobility companies to ship connected vehicle experiences faster.",
    stats: [
      {
        value: "13+",
        label: "years of experience in automotive and mobility technology",
      },
      {
        value: "5M+",
        label: "vehicle telemetry events processed monthly across client platforms",
      },
      {
        value: "35%",
        label: "faster feature delivery for clients using our Velocity AI development approach",
      },
    ],
    solutionsHeading: "Our Solutions",
    solutionsIntro: [],
    solutions: [
      {
        id: "agentic-vehicle",
        title: "Agentic Orchestration for vehicle intelligence",
        glow: "/assets/images/industry/bg-4.png",
        bullets: [
          {
            title: "Predictive diagnostics agents",
            text: "flag likely maintenance issues from telemetry before dashboard warning lights appear.",
          },
          {
            title: "Driver assistance agents",
            text: "support ADAS features with real time decision support.",
          },
          {
            title: "Service scheduling agents",
            text: "proactively recommend and book maintenance based on vehicle condition.",
          },
        ],
      },
      {
        id: "connected-xp",
        title: "Connected vehicle experiences",
        glow: "/assets/images/industry/bg-1.png",
        bullets: [
          {
            title: "In vehicle infotainment platforms",
            text: "build engaging, personalized dashboards and entertainment systems.",
          },
          {
            title: "Owner self service apps",
            text: "let drivers manage service, warranty, and vehicle health from their phone.",
          },
          {
            title: "Fleet visibility dashboards",
            text: "give fleet operators real time insight into location, health, and utilization.",
          },
        ],
      },
      {
        id: "foundational-data",
        title: "Foundational Data Layer for mobility",
        glow: "/assets/images/industry/bg-2.png",
        bullets: [
          {
            title: "Vehicle telemetry data platforms",
            text: "ingest and structure high volume sensor data reliably at scale.",
          },
          {
            title: "OTA update infrastructure",
            text: "deliver secure over the air software updates without dealer visits.",
          },
          {
            title: "Manufacturing quality data integration",
            text: "connect production line data with post sale vehicle performance.",
          },
        ],
      },
    ],
  },
  highlights: [
    {
      value: "01",
      label: "Built predictive diagnostics platforms processing millions of telemetry events monthly.",
    },
    {
      value: "02",
      label: "Delivered connected infotainment experiences across multiple vehicle platforms.",
    },
    {
      value: "03",
      label: "Established OTA update infrastructure supporting secure, at scale software delivery.",
    },
    {
      value: "04",
      label: "Proven experience with BLE and cellular connected vehicle systems.",
    },
  ],
  security: {
    heading: "Rigorous data and security processes",
    body: "eForte applies ISO 27001 aligned and SOC 2 Type 2 security principles to protect vehicle telemetry and connected car data, with particular attention to the safety critical nature of automotive software systems.",
  },
  successStories: [
    {
      id: "altura-motors",
      title: "Altura Motors",
      paragraphs: [
        "Altura Motors wanted to reduce warranty costs by catching mechanical issues before they became customer complaints. eForte built predictive diagnostics agents that analyze telemetry data and alert dealers to likely issues before drivers notice symptoms."
      ],
      tags: [
        "Reduced warranty claims",
        "Earlier issue detection",
        "Improved dealer response time"
      ],
      cardHeading: "Predictive diagnostics for dealers",
      imageSrc: "/assets/images/industry/solutions-1.jpg",
      imageAlt: "Altura Motors",
      accentClass: "bg-[#1f7a6b]",
      tagClass: "bg-[#1f7a6b] text-white",
    },
    {
      id: "vantage-mobility",
      title: "Vantage Mobility",
      paragraphs: [
        "Vantage Mobility's fleet customers were frustrated by delayed visibility into vehicle location and health. eForte built a real time fleet dashboard on a new Foundational Data Layer, giving operators live insight across thousands of vehicles."
      ],
      tags: [
        "Real time fleet visibility",
        "Improved customer retention",
        "Reduced support tickets"
      ],
      cardHeading: "Real time fleet visibility",
      imageSrc: "/assets/images/industry/driving-2.jpg",
      imageAlt: "Vantage Mobility",
      accentClass: "bg-[#E8822E]",
      tagClass: "bg-[#E8822E] text-white",
    },
    {
      id: "ridgeline",
      title: "Ridgeline Auto Group",
      paragraphs: [
        "Ridgeline Auto Group needed to deliver software updates to vehicles without requiring dealer visits, which frustrated customers and strained service capacity. eForte built secure OTA update infrastructure supporting phased, monitored rollouts."
      ],
      tags: [
        "Eliminated unnecessary dealer visits",
        "Safer, phased software rollouts",
        "Reduced service capacity strain"
      ],
      cardHeading: "Secure OTA update infrastructure",
      imageSrc: "/assets/images/industry/baas.jpg",
      imageAlt: "Ridgeline Auto Group",
      accentClass: "bg-[#0A2EC1]",
      tagClass: "bg-[#0A2EC1] text-white",
    },
  ],
};
