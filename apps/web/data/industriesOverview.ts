/** Local media under public/assets/images/ */
export const industriesMedia = {
  heroBg: "/assets/images/package/industries/industries-landing-hero.svg",
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
    health: "/assets/images/industry/icon-health.svg",
    heavy: "/assets/images/industry/platform.svg",
    automobile: "/assets/images/industry/media.svg",
    hospitality: "/assets/images/industry/icon-hospitality.svg",
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
  // Preserved for possible future reuse (legacy Avant / OnePay / MyRow cards)
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
  label: "Industries",
  title: "Deep industry expertise, engineered around your reality",
  subtitle:
    "eForte delivers AI-native technology solutions across finance, insurance, health & wellbeing, heavy industry, automotive, hospitality, and BPO & shared services.",
  description:
    "We partner with organizations across these seven industries to deliver technology that drives measurable transformation, combining specialized domain knowledge with our Velocity AI, Agentic Orchestration, and Foundational Data Layer pillars.",
};

export const industriesWhy = {
  label: "Expertise",
  title: "Why eForte",
  descriptionLines: [
    "eForte brings together deep domain and",
    "technical expertise across our key industries",
  ],
  cards: [
    {
      title: "Domain experts in every studio",
      description:
        "Our Studios bring together technologists and industry specialists, insurance underwriting leads, industrial safety engineers, hospitality operations experts, to deliver solutions that understand your day to day operational reality, not just your tech stack.",
      iconKey: "experts" as const,
    },
    {
      title: "AI-native from strategy to deployment",
      description:
        "Our three pillars, Velocity AI, Agentic Orchestration, and Foundational Data Layer, are tuned to the specific challenges of each industry we serve, backed by certified engineers and proven accelerators.",
      iconKey: "silicon" as const,
    },
    {
      title: "Secure and compliant by design",
      description:
        "SOC 2 Type II, ISO 27001, and NIST AI RMF compliance are built into how we deliver, so regulated and safety critical industries like finance, insurance, and healthcare can move quickly without compromising on trust.",
      iconKey: "secure" as const,
    },
  ],
};

export const industriesGridIntro = {
  label: "Our Industries",
  titleLine1: "A full stack AI services partner",
  titleLine2: "",
  descriptionBefore:
    "From digital banking and connected claims to smart factories and guest experiences, eForte delivers across the industries",
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
      "Modernize lending, payments, and banking with secure, AI driven financial infrastructure.",
    pills: ["Digital banking", "AI credit scoring", "Agentic Orchestration"],
    href: "/industries/financial-services",
    iconKey: "financial",
    slug: "financial",
  },
  {
    title: "Insurance",
    description:
      "Transform underwriting and claims with connected data and intelligent automation.",
    pills: ["Claims automation", "Usage based coverage", "Foundational Data Layer"],
    href: "/industries/insurance",
    iconKey: "insurance",
    slug: "insurance",
  },
  {
    title: "Health & Wellbeing",
    description:
      "Build patient first digital health experiences, from virtual care to connected wearables.",
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
      "Power connected vehicles and smarter fleets with real time telemetry and AI diagnostics.",
    pills: ["Predictive diagnostics", "Connected vehicle platforms", "Velocity AI"],
    href: "/industries/automobile",
    iconKey: "automobile",
    slug: "automobile",
  },
  {
    title: "Hospitality",
    description:
      "Deliver guest experiences that convert and retain, powered by personalization at scale.",
    pills: ["Guest personalization", "Mobile check in", "Agentic Orchestration"],
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
  // /databricks page preserved but unlinked until content is finalized
  // href: "/databricks",
  href: "/industries",
};

export type IndustryCaseStudy = {
  slug: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  pill: string;
  title: string;
  description: string;
  href: string;
  metrics: { number: string; labelLines: string[] }[];
};

export const industriesOutcomesIntro = {
  label: "Case Studies",
  titleLine1: "Outcomes achieved for clients across our industries",
  titleLine2: "",
  description:
    "A selection of Impact Studies helping clients reshape finance, healthcare, insurance, and beyond.",
};

/** Featured Impact Studies mapped to industries on this page (old-site originals only) */
export const industriesCaseStudies: IndustryCaseStudy[] = [
  {
    slug: "dostpay",
    imageSrc: "/assets/images/case-study/new-images/dostpay/Dostpay1.png",
    imageAlt: "Dostpay digital banking payments platform",
    imageWidth: 420,
    pill: "Finance",
    title: "Powering digital banking payments with agentic financial workflows",
    description:
      "Dostpay integrates with core banking platforms to give end users modern digital banking and payments, with fewer failures as transaction volume grows.",
    href: "/case-studies/dostpay",
    metrics: [
      { number: "5M+", labelLines: ["digital transactions", "enabled"] },
      { number: "45%", labelLines: ["payment failure", "rate down"] },
    ],
  },
  {
    slug: "investment-markets",
    imageSrc:
      "/assets/images/case-study/new-images/investment-market/investment-Markets-Main.png",
    imageAlt: "Investment Markets platform",
    imageWidth: 420,
    pill: "Investments",
    title: "Connecting high net worth investors through agentic discovery",
    description:
      "Investment Markets brings high net worth investors to growth and income opportunities with agent-driven matching and discovery.",
    href: "/case-studies/investment-markets",
    metrics: [
      { number: "8K+", labelLines: ["investor connections", "facilitated"] },
      { number: "92%", labelLines: ["deal matching", "accuracy"] },
    ],
  },
  {
    slug: "scheduling-engine",
    imageSrc:
      "/assets/images/case-study/new-images/scheduling-engine/scheduling-main.png",
    imageAlt: "Scheduling Engine workforce platform",
    imageWidth: 420,
    pill: "Operations",
    title: "Automating workforce scheduling across call centers and retail",
    description:
      "Scheduling Engine reduces conflicts and gives supervisors a reliable, agent-driven way to staff every shift at scale.",
    href: "/case-studies/scheduling-engine",
    metrics: [
      { number: "500K+", labelLines: ["shifts", "scheduled"] },
      { number: "80%", labelLines: ["scheduling conflicts", "reduced"] },
    ],
  },
];
