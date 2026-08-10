import {
  HiChip,
  HiCloud,
  // HiCube, // reserved with Embedded Engineering entry below — not one of the 11 mega-menu Studios
  HiDeviceMobile,
  HiLightningBolt,
  HiPencil,
  HiShieldCheck,
  HiCog,
  HiCheckCircle,
  HiViewGrid,
  HiLink,
  HiUserGroup,
  HiSwitchHorizontal,
  HiBadgeCheck,
  HiAcademicCap,
  HiCollection,
} from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";
import type { IconType } from "react-icons";

export type CapabilityStudioItem = {
  title: string;
  description: string;
  descriptionLines?: [string, string] | [string];
  href?: string;
  icon: IconType;
  slug: string;
  iconColor: string;
  hoverGradient: string;
};

export type CapabilityBenefit = {
  title: string;
  description: string;
  icon: IconType;
  iconBg: string;
  iconColor: string;
  slug: string;
};

export type CapabilityJourneyStep = {
  step: string;
  title: string;
  description: string;
  descriptionLines: [string, string, string] | [string, string] | [string];
  pills: string[];
  imageSrc: string;
};

export type CapabilityTestimonial = {
  quote: string;
  name: string;
  role: string;
  logoSrc: string;
  logoWidth: number;
};

/** Media under public/assets/images/capabilities/ */
export const capabilityMedia = {
  heroVideo: "/assets/images/capabilities/hero-capabilities.webm",
  heroPoster: "/assets/images/capabilities/hero-home-poster.jpg",
  workTogetherBg: "/assets/images/capabilities/team.jpg",
  // clutchReviews removed — not needed on capabilities overview
  cube: {
    blue: "/assets/images/capabilities/blue.svg",
    yellow: "/assets/images/capabilities/yellow.svg",
    purple: "/assets/images/capabilities/purple.svg",
    red: "/assets/images/capabilities/red.svg",
    green: "/assets/images/capabilities/green.svg",
    cyan: "/assets/images/capabilities/cyan.svg",
  },
};

export const capabilityHero = {
  label: "Our Studios",
  titleLines: ["Build what's next with", "eForte Studios"],
  description:
    "Our Studios are the specialist services and technology teams behind every eForte engagement, from AI-driven product design to secure, scalable infrastructure. Bringing the right experts together for your challenge is how we deliver real, immediate business value.",
};

export const capabilityStudioModel = {
  titleLines: ["We'll build your specialist", "team from our Studios"],
  paragraphs: [
    "No two businesses face the same challenge, so no two eForte engagements draw on the same mix of talent. Our Studio model lets us pull the right specialists together around one shared Foundational Data Layer, so design, data, AI, and engineering teams work as a single connected system instead of separate silos.",
  ],
  facets: [
    { label: "Data & AI", className: "data" },
    { label: "Design", className: "design" },
    { label: "Cybersecurity", className: "cybersecurity" },
    { label: "Engineering", className: "engineering" },
    { label: "Quality", className: "quality" },
    { label: "Product Management", className: "product-management" },
  ],
  steps: [
    {
      title: "Step 1",
      descriptionLines: [
        "We'll assemble a multidisciplinary",
        "team of specialists from across our",
        "Studios to work on your challenge.",
      ],
    },
    {
      title: "Step 2",
      descriptionLines: [
        "As your engagement evolves, the",
        "team composition adapts with you,",
        "rotating specialists as priorities shift.",
      ],
    },
  ],
};

export const capabilityStudios: CapabilityStudioItem[] = [
  {
    title: "Product Design",
    description:
      "User research, service design, and interface design that turn complex workflows into intuitive products",
    descriptionLines: [
      "User research, service design, and",
      "interface design for intuitive products",
    ],
    href: "/capabilities/product-design",
    icon: HiPencil,
    slug: "product-design",
    iconColor: "#AB77FF",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -61.24%, #AB77FF 94.42%)",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Agentic AI, generative AI, machine learning, and computer vision built for enterprise-grade impact",
    descriptionLines: [
      "Agentic AI, generative AI, machine",
      "learning, and computer vision",
    ],
    href: "/capabilities/artificial-intelligence",
    icon: HiChip,
    slug: "ai",
    iconColor: "#FFA29B",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -80.35%, #FFA29B 82.94%)",
  },
  {
    title: "Data",
    description:
      "Data engineering, orchestration, visualization, and predictive modeling that power every agentic workflow",
    descriptionLines: [
      "Data engineering, orchestration,",
      "visualization, and predictive modeling",
    ],
    href: "/capabilities/data",
    icon: HiLightningBolt,
    slug: "data",
    iconColor: "#96C5FF",
    hoverGradient: "linear-gradient(267.87deg, #96C5FF 8%, #5FA7FF 98.69%)",
  },
  {
    title: "App Solutions",
    description:
      "Native and hybrid app development, SDK integrations, and app store-ready delivery",
    descriptionLines: [
      "Native and hybrid app development,",
      "SDK integrations, and app store delivery",
    ],
    href: "/capabilities/app-solutions",
    icon: HiDeviceMobile,
    slug: "app-solutions",
    iconColor: "#F4594E",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -37.81%, #F4594E 94.34%)",
  },
  {
    title: "Cloud, SRE, & DevOps",
    description:
      "Cloud migration, CI/CD pipelines, and site reliability engineering built for scale",
    descriptionLines: ["Cloud migration, CI/CD pipelines,", "and site reliability engineering"],
    href: "/capabilities/cloud-sre",
    icon: HiCloud,
    slug: "cloud",
    iconColor: "#0D5BFF",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -39.31%, #0D5BFF 95.36%)",
  },
  {
    title: "Cybersecurity",
    description:
      "Secure development lifecycles, AI-powered threat detection, and penetration testing",
    descriptionLines: [
      "Secure development lifecycles, AI-powered",
      "threat detection, and penetration testing",
    ],
    href: "/capabilities/cybersecurity",
    icon: HiShieldCheck,
    slug: "cybersecurity",
    iconColor: "#1E1E1E",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -94.42%, #1E1E1E 97.88%)",
  },
  {
    title: "Platform Engineering",
    description:
      "Resilient infrastructure, scalable APIs, and streamlined deployment pipelines",
    descriptionLines: ["Resilient infrastructure, scalable APIs,", "and streamlined deployment pipelines"],
    href: "/capabilities/platform-engineering",
    icon: HiCog,
    slug: "engineering",
    iconColor: "#2946CF",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -33.73%, #2946CF 94.97%)",
  },
  {
    title: "Quality Assurance",
    description:
      "AI-augmented testing, automation, and performance validation across every release",
    descriptionLines: ["AI-augmented testing, automation, and", "performance validation across every release"],
    href: "/capabilities/quality-assurance",
    icon: HiCheckCircle,
    slug: "qa",
    iconColor: "#00BD5F",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -94.42%, #0EBB65 97.88%)",
  },
  {
    title: "Product Management",
    description:
      "Product strategy, roadmap consulting, and monetization planning",
    descriptionLines: ["Product strategy, roadmap consulting,", "and monetization planning"],
    href: "/capabilities/product-management",
    icon: HiViewGrid,
    slug: "product-management",
    iconColor: "#3379CC",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -88.84%, #3379CC 97.25%)",
  },
  {
    title: "Blockchain",
    description:
      "Smart contracts, decentralized applications, and secure blockchain integrations",
    descriptionLines: ["Smart contracts, decentralized", "applications, and secure integrations"],
    href: "/capabilities/blockchain",
    icon: HiLink,
    slug: "blockchain",
    iconColor: "#D348EA",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -67.22%, #D348EA 91.82%)",
  },
  {
    title: "Staff Augmentation",
    description:
      "Pre-vetted, fully managed engineering talent that integrates directly into your team, at a fraction of on-shore cost",
    descriptionLines: [
      "Pre-vetted, fully managed engineering talent",
      "at a fraction of on-shore cost",
    ],
    href: "/capabilities/staff-augmentation",
    icon: HiUserGroup,
    slug: "staff",
    iconColor: "#D3287A",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -80%, #D3287A 95%)",
  },
  // Embedded Engineering preserved for future reuse — not one of the 11 Studios
  // in the current mega-menu / Studios package.
  // {
  //   title: "Embedded Engineering",
  //   description:
  //     "Development for semiconductors, embedded systems, IoT, microcontrollers",
  //   descriptionLines: [
  //     "Development for semiconductors,",
  //     "embedded systems, IoT, microcontrollers",
  //   ],
  //   href: "/capabilities/embedded-engineering",
  //   icon: HiCube,
  //   slug: "firmware",
  //   iconColor: "#FFB600",
  //   hoverGradient: "linear-gradient(270deg, #FFFFFF -77.83%, #FFB600 96.86%)",
  // },
];

export const capabilityBenefits: CapabilityBenefit[] = [
  {
    title: "Unified service",
    description:
      "We help organizations build digital products through one holistic engagement. Specialists from across our Studios work as a single, cohesive team aligned to your goals, not a set of disconnected vendors.",
    icon: HiCollection,
    iconBg: "#EDDCFF",
    iconColor: "#8844D2",
    slug: "unified-service",
  },
  {
    title: "Flexibility",
    description:
      "Our Studio model lets you scale a team up, down, or sideways as your product and market needs shift, without renegotiating a new contract every time.",
    icon: HiSwitchHorizontal,
    iconBg: "#BCF2C6",
    iconColor: "#309A45",
    slug: "flexibility",
  },
  {
    title: "High-quality",
    description:
      "Every Studio brings its own best practices and standards to the table, so whatever team we assemble for you arrives already aligned to a consistent bar of execution.",
    icon: HiBadgeCheck,
    iconBg: "#FFECA9",
    iconColor: "#938613",
    slug: "high-quality",
  },
  {
    title: "Expertise & knowledge",
    description:
      "Because our Studios focus deeply on specific technology and business domains, you get specialist-level insight, not generalist guesswork.",
    icon: HiAcademicCap,
    iconBg: "#D6F4FF",
    iconColor: "#29B5E8",
    slug: "expertise",
  },
  {
    title: "Built for the agentic era",
    description:
      "Every Studio we offer is designed to connect cleanly with modern agentic tooling, including Model Context Protocol (MCP) integrations, so the systems we build plug directly into the AI agents and platforms your business already relies on.",
    icon: HiSparkles,
    iconBg: "#FFD9EC",
    iconColor: "#D3287A",
    slug: "agentic-era",
  },
];

export const capabilityJourney: CapabilityJourneyStep[] = [
  {
    step: "Step 1",
    title: "Discovery",
    description:
      "eForte gets to know your organization and challenges through assessments, prototyping, workshops, and research.",
    descriptionLines: [
      "eForte gets to know your organization",
      "and challenges through assessments,",
      "prototyping, workshops, and research.",
    ],
    pills: ["Tech Assessments", "Prototyping", "Workshops", "Research"],
    imageSrc: "/assets/images/capabilities/1.svg",
  },
  {
    step: "Step 2",
    title: "Strategy & Roadmap",
    description:
      "Collaborative roadmaps are created with input from multiple Studios, covering product development, cloud and cybersecurity, and Data & AI.",
    descriptionLines: [
      "Collaborative roadmaps are created with",
      "input from multiple Studios.",
    ],
    pills: [
      "Product Development Roadpmaps",
      "Cloud, Cybersecurity",
      "Data & AI Roadmaps",
    ],
    imageSrc: "/assets/images/capabilities/2.svg",
  },
  {
    step: "Step 3",
    title: "Implementation & Metrics",
    description:
      "Agile Delivery Pods execute the plan while tracking metrics, benchmarks, and KPIs to ensure tangible results.",
    descriptionLines: [
      "Agile Delivery Pods execute the plan",
      "while tracking metrics, benchmarks, and KPIs.",
    ],
    pills: ["Metrics", "Agile Excecution", "Benchmarks", "KPIs"],
    imageSrc: "/assets/images/capabilities/3.svg",
  },
];

// Preserved — overview uses the shared eForte testimonials carousel UI instead
// export const capabilityTestimonials: CapabilityTestimonial[] = [
//   { quote: "...", name: "Javier Martinez", role: "CTO, Bancard", logoSrc: "...", logoWidth: 120 },
//   ...
// ];

export const capabilityWorkTogether = {
  title: "Let's build the future together",
  description:
    "Partner with eForte's experts to explore your idea or product and discover how Velocity AI, Agentic Orchestration, and a robust Foundational Data Layer can accelerate innovation and business impact.",
};
