/** Local media under public/assets/images/ */
export const industriesMedia = {
  heroBg: "/assets/images/hero.jpg",
  /** Same asset as home “From Legacy to Intelligence” evolving section */
  whyGrad: "/assets/images/landing/legacy-intelligence.png",
  hexaLeft: "/assets/images/industry/hexa-left.png",
  hexaRight: "/assets/images/industry/hexa-right.png",
  hexa1: "/assets/images/industry/hexa1.png",
  bgDots: "/assets/images/industry/bg-dots.webp",
  databricksPartnerBg: "/assets/images/industry/bg-partner.svg",
  databricksBadge: "/assets/images/industry/databricks-badge.png",
  experts: "/assets/images/industry/choose-1.svg",
  silicon: "/assets/images/industry/silicon.svg",
  secure: "/assets/images/industry/secure.svg",
  industryIcons: {
    financial: "/assets/images/industry/data.svg",
    insurance: "/assets/images/industry/compliance-1.svg",
    health: "/assets/images/industry/hlth.svg",
    heavy: "/assets/images/industry/platform.svg",
    automobile: "/assets/images/industry/media.svg",
    hospitality: "/assets/images/industry/deliver-1.svg",
    bpo: "/assets/images/industry/data.svg",
    // Preserved for legacy pages still referencing these keys
    banking: "/assets/images/industry/deliver-1.svg",
    media: "/assets/images/industry/media.svg",
    hitech: "/assets/images/industry/platform.svg",
  },
  partnerLogos: [
    {
      src: "/assets/images/databricks/databricks-small.svg",
      alt: "Databricks",
    },
    {
      src: "/assets/images/capabilities/providers/aws.svg",
      alt: "AWS",
    },
    {
      src: "/assets/images/industry/aws-partner.png",
      alt: "AWS Partner",
    },
    {
      src: "/assets/images/industry/badge.png",
      alt: "Partner",
    },
  ],
  caseStudyBgs: {
    avant: "/assets/images/industry/bg-1.png",
    onepay: "/assets/images/industry/bg-2.png",
    myrow: "/assets/images/industry/bg-3.png",
  },
  caseStudyLogos: {
    avant: "/assets/images/industry/our-work-1.svg",
    onepay: "/assets/images/industry/our-work-2.webp",
    myrow: "/assets/images/velocity-ai/case-study-myrow.png",
  },
};

export const industriesHero = {
  title: "Deep industry expertise, engineered around your reality",
  subtitle:
    "eForte delivers AI-native technology solutions across finance, insurance, health & wellbeing, heavy industry, automotive, hospitality, and BPO & shared services.",
  description:
    "We partner with organizations across these seven industries to deliver technology that drives measurable transformation — combining specialized domain knowledge with our Velocity AI, Agentic Orchestration, and Foundational Data Layer pillars.",
};

export const industriesWhy = {
  title: "Why eForte",
  descriptionLines: [
    "eForte brings together deep domain and",
    "technical expertise across our key industries",
  ],
  cards: [
    {
      title: "Domain experts in every studio",
      description:
        "Our Studios bring together technologists and industry specialists — insurance underwriting leads, industrial safety engineers, hospitality operations experts — to deliver solutions that understand your day-to-day operational reality, not just your tech stack.",
      iconKey: "experts" as const,
    },
    {
      title: "AI-native from strategy to deployment",
      description:
        "Our three pillars — Velocity AI, Agentic Orchestration, and Foundational Data Layer — are tuned to the specific challenges of each industry we serve, backed by certified engineers and proven accelerators.",
      iconKey: "silicon" as const,
    },
    {
      title: "Secure and compliant by design",
      description:
        "SOC 2 Type II, ISO 27001, and NIST AI RMF compliance are built into how we deliver, so regulated and safety-critical industries like finance, insurance, and healthcare can move quickly without compromising on trust.",
      iconKey: "secure" as const,
    },
  ],
};

export const industriesGridIntro = {
  titleLine1: "A full-stack AI",
  titleLine2: "services partner",
  descriptionBefore:
    "From digital banking and connected claims to smart factories and guest experiences — eForte delivers across the industries",
  descriptionHighlight: "where AI, data, and software are reshaping how work gets done.",
};

export type IndustryCard = {
  title: string;
  description: string;
  pills: string[];
  href?: string;
  iconKey: keyof typeof industriesMedia.industryIcons;
  slug: string;
};

export const industriesCards: IndustryCard[] = [
  {
    title: "Finance",
    description:
      "Modernize lending, payments, and banking with secure, AI-driven financial infrastructure.",
    pills: ["Digital banking", "AI credit scoring", "Agentic Orchestration"],
    href: "/industries/financial-services",
    iconKey: "financial",
    slug: "financial",
  },
  {
    title: "Insurance",
    description:
      "Transform underwriting and claims with connected data and intelligent automation.",
    pills: ["Claims automation", "Usage-based coverage", "Foundational Data Layer"],
    href: "/industries/insurance",
    iconKey: "insurance",
    slug: "insurance",
  },
  {
    title: "Health & Wellbeing",
    description:
      "Build patient-first digital health experiences, from virtual care to connected wearables.",
    pills: ["Virtual care", "mHealth & wearables", "Agentic Orchestration"],
    href: "/industries/healthcare",
    iconKey: "health",
    slug: "health",
  },
  {
    title: "Heavy Industry",
    description:
      "Keep plants running and workers safe with predictive maintenance and connected operations.",
    pills: ["Predictive maintenance", "Connected worker safety", "Foundational Data Layer"],
    href: "/industries/heavy-industries",
    iconKey: "heavy",
    slug: "heavy",
  },
  {
    title: "Automobile",
    description:
      "Power connected vehicles and smarter fleets with real-time telemetry and AI diagnostics.",
    pills: ["Predictive diagnostics", "Connected vehicle platforms", "Velocity AI"],
    href: "/industries/automobile",
    iconKey: "automobile",
    slug: "automobile",
  },
  {
    title: "Hospitality",
    description:
      "Deliver guest experiences that convert and retain, powered by personalization at scale.",
    pills: ["Guest personalization", "Mobile check-in", "Agentic Orchestration"],
    href: "/industries/hospitality",
    iconKey: "hospitality",
    slug: "hospitality",
  },
  {
    title: "BPO & Shared Services",
    description:
      "Scale service delivery with intelligent automation and unified workforce data.",
    pills: ["Intelligent automation", "Quality monitoring", "Foundational Data Layer"],
    href: "/industries/bpo-shared-services",
    iconKey: "bpo",
    slug: "bpo",
  },
];

export const industriesDatabricks = {
  title: "A Databricks Gold Partner",
  paragraphs: [
    "As a Gold Databricks Partner, eForte has demonstrated deep platform expertise and a proven track record of successful implementations across every industry we serve.",
    "Our team includes 200+ professionals certified on the Databricks Intelligence Platform, spanning Data Analyst, Data Engineer, Machine Learning Engineer, and GenAI Engineer certifications.",
  ],
  href: "/databricks",
};

export type IndustryCaseStudy = {
  slug: string;
  logoSrc: string;
  logoWidth: number;
  bgSrc: string;
  pill: string;
  title: string;
  description: string;
  href?: string;
  metrics: { number: string; labelLines: string[] }[];
};

export const industriesOutcomesIntro = {
  titleLine1: "Outcomes achieved for",
  titleLine2: "clients across our industries",
  description:
    "A selection of our work helping clients reshape finance, healthcare, insurance, and beyond.",
};

export const industriesCaseStudies: IndustryCaseStudy[] = [
  {
    slug: "avant",
    logoSrc: industriesMedia.caseStudyLogos.avant,
    logoWidth: 270,
    bgSrc: industriesMedia.caseStudyBgs.avant,
    pill: "Finance",
    title: "Scaling cross-border payments without scaling risk",
    description:
      "eForte helped Meridian Pay automate compliance screening so it could expand into new markets without growing its compliance team at the same rate.",
    href: "/industries/financial-services",
    metrics: [
      { number: "3", labelLines: ["new markets entered", "in under a year"] },
    ],
  },
  {
    slug: "onepay",
    logoSrc: industriesMedia.caseStudyLogos.onepay,
    logoWidth: 200,
    bgSrc: industriesMedia.caseStudyBgs.onepay,
    pill: "Insurance",
    title: "Automating claims response during peak catastrophe volume",
    description:
      "eForte built an automated First Notice of Loss system that let Brightwell Mutual handle record claims volume without expanding call center staff.",
    href: "/industries/insurance",
    metrics: [
      { number: "0", labelLines: ["added headcount at", "record claims volume"] },
    ],
  },
  {
    slug: "myrow",
    logoSrc: industriesMedia.caseStudyLogos.myrow,
    logoWidth: 250,
    bgSrc: industriesMedia.caseStudyBgs.myrow,
    pill: "Health & Wellbeing",
    title: "Scaling a wearable data platform for a major product launch",
    description:
      "eForte rebuilt PulseWell's data foundation to handle a surge in connected-device users without downtime.",
    href: "/industries/healthcare",
    metrics: [
      {
        number: "0",
        labelLines: ["downtime at", "new launch scale"],
      },
    ],
  },
];
