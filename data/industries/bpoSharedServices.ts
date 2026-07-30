import type { IndustryPageContent } from "./types";

export const bpoSharedServicesIndustry: IndustryPageContent = {
  slug: "bpo-shared-services",
  metadata: {
    title: "BPO & Shared Services | eForte",
    description: "Scaling service delivery with intelligent automation — Agentic Orchestration, client self-service, and a Foundational Data Layer for shared services.",
  },
  hero: {
    badge: "BPO & SHARED SERVICES",
    headline: "Scaling service delivery with intelligent automation",
    paragraphs: [
      "eForte partners with outsourcing providers and shared service centers to modernize how they deliver support at scale — applying Velocity AI to accelerate delivery, Agentic Orchestration to automate routine work, and a Foundational Data Layer to keep client data secure and organized across large, distributed teams."
    ],
    ctaLabel: "Contact Us",
    imageSrc: "/assets/images/industry/driving-1.jpg",
  },
  expertise: {
    title: "Our BPO & shared services expertise",
    description: "Our team partners with outsourcing providers and shared service centers to scale delivery without scaling headcount at the same rate.",
    stats: [
      {
        value: "13+",
        label: "years of experience in BPO and shared services technology",
      },
      {
        value: "40M+",
        label: "transactions processed annually across systems eForte has helped build",
      },
      {
        value: "40%",
        label: "reduction in average handling time for clients using our automation tools",
      },
    ],
    solutionsHeading: "Our Solutions",
    solutionsIntro: [],
    solutions: [
      {
        id: "agentic-service",
        title: "Agentic Orchestration for service delivery",
        glow: "/assets/images/industry/bg-4.png",
        bullets: [
          {
            title: "Ticket triage agents",
            text: "classify and route incoming requests to the right team automatically.",
          },
          {
            title: "Quality monitoring agents",
            text: "analyze interactions at scale to flag compliance and quality issues.",
          },
          {
            title: "Knowledge assistant agents",
            text: "help agents find answers instantly instead of searching multiple systems.",
          },
        ],
      },
      {
        id: "client-engagement",
        title: "Client engagement & self-service",
        glow: "/assets/images/industry/bg-1.png",
        bullets: [
          {
            title: "Client reporting portals",
            text: "give clients real-time visibility into service metrics without manual reports.",
          },
          {
            title: "Omnichannel support platforms",
            text: "unify voice, chat, and email into a single agent workspace.",
          },
          {
            title: "Automated onboarding",
            text: "streamline setup for new clients and new hires alike.",
          },
        ],
      },
      {
        id: "foundational-data",
        title: "Foundational Data Layer for shared services",
        glow: "/assets/images/industry/bg-2.png",
        bullets: [
          {
            title: "Unified workforce analytics",
            text: "consolidate performance, attendance, and productivity data into one view.",
          },
          {
            title: "ERP & CRM integrations",
            text: "connect shared service platforms with client systems for seamless data exchange.",
          },
          {
            title: "Secure multi-tenant architecture",
            text: "support many clients on shared infrastructure without compromising data separation.",
          },
        ],
      },
    ],
  },
  highlights: [
    {
      value: "01",
      label: "Delivered intelligent automation reducing average handling time significantly for a multi-client BPO provider.",
    },
    {
      value: "02",
      label: "Built quality-monitoring systems analyzing interactions at a scale no manual team could match.",
    },
    {
      value: "03",
      label: "Established secure, multi-tenant platforms supporting dozens of enterprise clients simultaneously.",
    },
    {
      value: "04",
      label: "Proven expertise in SOC 2- and ISO-aligned client data handling.",
    },
  ],
  security: {
    heading: "Rigorous data and security processes",
    body: "eForte maintains ISO 27001 and SOC 2 Type 2 certifications, with architecture practices designed specifically for multi-tenant environments where client data separation and auditability are non-negotiable.",
  },
  successStories: [
    {
      id: "meridian-outsourcing",
      title: "Meridian Outsourcing Solutions",
      paragraphs: [
        "Meridian Outsourcing Solutions needed to grow its client base without proportionally growing headcount. eForte built ticket triage and knowledge-assistant agents that handle routine classification and lookups automatically, freeing agents for higher-value work."
      ],
      tags: [
        "Grew client base without proportional hiring",
        "Faster ticket resolution",
        "Improved agent productivity"
      ],
      cardHeading: "Automation that scales without hiring",
      imageSrc: "/assets/images/industry/solutions-1.jpg",
      imageAlt: "Meridian Outsourcing Solutions",
      accentClass: "bg-[#1f7a6b]",
      tagClass: "bg-[#1f7a6b] text-white",
    },
    {
      id: "apex-shared",
      title: "Apex Shared Services",
      paragraphs: [
        "Apex Shared Services could only manually review a small sample of client interactions for quality, missing many compliance issues. eForte built quality-monitoring agents analyzing the vast majority of interactions automatically, flagging issues for human review."
      ],
      tags: [
        "Expanded quality coverage",
        "Earlier compliance issue detection",
        "Reduced manual review burden"
      ],
      cardHeading: "Quality monitoring at interaction scale",
      imageSrc: "/assets/images/industry/driving-2.jpg",
      imageAlt: "Apex Shared Services",
      accentClass: "bg-[#E8822E]",
      tagClass: "bg-[#E8822E] text-white",
    },
    {
      id: "crestline",
      title: "Crestline BPO Group",
      paragraphs: [
        "Crestline BPO Group's clients were frustrated waiting days for performance reports. eForte built a Foundational Data Layer feeding a real-time client reporting portal, eliminating manual report preparation entirely."
      ],
      tags: [
        "Real-time client reporting",
        "Eliminated manual reporting work",
        "Improved client satisfaction"
      ],
      cardHeading: "Real-time client reporting portals",
      imageSrc: "/assets/images/industry/baas.jpg",
      imageAlt: "Crestline BPO Group",
      accentClass: "bg-[#0A2EC1]",
      tagClass: "bg-[#0A2EC1] text-white",
    },
  ],
};
