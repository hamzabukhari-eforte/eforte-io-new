import type { IndustryPageContent } from "./types";

export const hospitalityIndustry: IndustryPageContent = {
  slug: "hospitality",
  metadata: {
    title: "Hospitality | eForte",
    description: "Designing guest experiences that keep people coming back, personalization, mobile check in, and Agentic Orchestration for hospitality brands.",
  },
  hero: {
    badge: "HOSPITALITY",
    headline: "Designing guest experiences that keep people coming back",
    paragraphs: [
      "eForte partners with hotel groups, restaurant brands, and travel platforms to build guest experiences powered by Velocity AI for rapid iteration, Agentic Orchestration for personalized service at scale, and a Foundational Data Layer that keeps guest data secure and useful."
    ],
    ctaLabel: "Contact Us",
    imageSrc: "/assets/images/industry/driving-1.jpg",
  },
  expertise: {
    title: "Our hospitality expertise",
    description: "Our team partners with hotel groups, restaurant brands, and travel platforms to deliver guest experiences that convert and retain.",
    stats: [
      {
        value: "13+",
        label: "years of experience in hospitality and travel technology",
      },
      {
        value: "10M+",
        label: "guest interactions supported across platforms eForte has helped design",
      },
      {
        value: "30%",
        label: "increase in direct bookings for clients using our personalization tools",
      },
    ],
    solutionsHeading: "Our Solutions",
    solutionsIntro: [],
    solutions: [
      {
        id: "agentic-guest",
        title: "Agentic Orchestration for guest service",
        glow: "/assets/images/industry/bg-4.png",
        bullets: [
          {
            title: "Guest request agents",
            text: "route housekeeping, maintenance, and concierge requests to the right staff instantly.",
          },
          {
            title: "Dynamic pricing agents",
            text: "adjust room and service pricing in response to real time demand signals.",
          },
          {
            title: "Personalized recommendation agents",
            text: "suggest amenities, dining, and experiences tailored to each guest.",
          },
        ],
      },
      {
        id: "digital-guest",
        title: "Digital guest experience",
        glow: "/assets/images/industry/bg-1.png",
        bullets: [
          {
            title: "Mobile check in & check out",
            text: "reduce front desk wait times with frictionless self service.",
          },
          {
            title: "In room guest apps",
            text: "let guests control room settings and request services from their phone.",
          },
          {
            title: "Loyalty & rewards platforms",
            text: "build systems that turn one time guests into repeat visitors.",
          },
        ],
      },
      {
        id: "foundational-data",
        title: "Foundational Data Layer for property operations",
        glow: "/assets/images/industry/bg-2.png",
        bullets: [
          {
            title: "Unified booking & PMS data",
            text: "synchronize reservations across booking engines, OTAs, and property systems in real time.",
          },
          {
            title: "Guest preference data platform",
            text: "securely capture and apply guest preferences across every stay.",
          },
          {
            title: "Operational analytics",
            text: "give property managers a clear view of occupancy, staffing, and service performance.",
          },
        ],
      },
    ],
  },
  highlights: [
    {
      value: "01",
      label: "Delivered personalization engines that measurably increased direct booking rates.",
    },
    {
      value: "02",
      label: "Built mobile check in systems adopted across multi property hotel groups.",
    },
    {
      value: "03",
      label: "Established secure, PCI DSS aligned payment experiences across dining and retail touchpoints.",
    },
    {
      value: "04",
      label: "Proven experience integrating IoT enabled smart room devices.",
    },
  ],
  security: {
    heading: "Rigorous data and security processes",
    body: "eForte applies ISO 27001 aligned and SOC 2 Type 2 security principles, with additional attention to PCI DSS compliance for guest payment data across dining, retail, and room service touchpoints.",
  },
  successStories: [
    {
      id: "lantern",
      title: "Lantern Hotel Collective",
      paragraphs: [
        "Lantern Hotel Collective's front desks were overwhelmed during peak check in hours across its boutique properties. eForte built a mobile check in system with Agentic Orchestration routing room ready notifications and special requests automatically to housekeeping and concierge staff."
      ],
      tags: [
        "Reduced front desk wait times",
        "Faster request resolution",
        "Improved guest satisfaction scores"
      ],
      cardHeading: "Mobile check in at peak season",
      imageSrc: "/assets/images/industry/solutions-1.jpg",
      imageAlt: "Lantern Hotel Collective",
      accentClass: "bg-[#1f7a6b]",
      tagClass: "bg-[#1f7a6b] text-white",
    },
    {
      id: "coastline",
      title: "Coastline Resorts",
      paragraphs: [
        "Coastline Resorts relied heavily on third party OTAs and wanted to grow direct bookings without a large marketing budget increase. eForte built a personalization engine recommending tailored packages and amenities based on guest history and preferences."
      ],
      tags: [
        "Increased direct bookings",
        "Reduced OTA dependency",
        "Higher average booking value"
      ],
      cardHeading: "Personalization that grows direct bookings",
      imageSrc: "/assets/images/industry/driving-2.jpg",
      imageAlt: "Coastline Resorts",
      accentClass: "bg-[#E8822E]",
      tagClass: "bg-[#E8822E] text-white",
    },
    {
      id: "birchwood",
      title: "Birchwood Hospitality Group",
      paragraphs: [
        "Birchwood Hospitality Group's staff juggled multiple disconnected systems to manage guest requests across properties. eForte unified these into a single Foundational Data Layer with automated request routing, giving managers one operational view across all locations."
      ],
      tags: [
        "Unified multi property operations",
        "Faster staff response times",
        "Improved manager visibility"
      ],
      cardHeading: "One system for guest requests",
      imageSrc: "/assets/images/industry/baas.jpg",
      imageAlt: "Birchwood Hospitality Group",
      accentClass: "bg-[#0A2EC1]",
      tagClass: "bg-[#0A2EC1] text-white",
    },
  ],
};
