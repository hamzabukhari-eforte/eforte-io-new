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
    banking: "/assets/images/industry/deliver-1.svg",
    financial: "/assets/images/industry/data.svg",
    health: "/assets/images/industry/hlth.svg",
    insurance: "/assets/images/industry/compliance-1.svg",
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
  title: "Deep industry expertise, powered by AI-native engineering",
  subtitle:
    "eForte delivers AI-native technology solutions across banking, financial services, healthcare, insurance, media, and hi-tech industries.",
  description:
    "eForte partners with leading organizations across financial services, healthcare, insurance, media, and high-tech to deliver technology solutions that drive measurable transformation — combining specialized domain knowledge with our AccelerateAI, Agentic Factory, and Data Foundation pillars.",
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
        "Our Studios bring together technologists and industry specialists — banking architects, healthcare product leads, payments engineers — to deliver solutions that understand your regulatory and operational reality.",
      iconKey: "experts" as const,
    },
    {
      title: "AI-native from silicon to applications",
      description:
        "Our three AI pillars — AccelerateAI, Agentic Factory, and Data Foundation — are tuned for industry-specific challenges, with certified engineers and proven accelerators.",
      iconKey: "silicon" as const,
    },
    {
      title: "Secure and compliant by design",
      description:
        "SOC 2 Type II, ISO 27001, and NIST AI RMF compliance baked into how we deliver — so regulated industries like banking, insurance, and healthcare can move fast without compromising on trust.",
      iconKey: "secure" as const,
    },
  ],
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
    title: "Banking",
    description:
      "Modernize core banking systems for a secure, compliant, AI-ready enterprise ecosystem — from legacy modernization to digital channels.",
    pills: ["Core modernization", "Digital channels", "Risk & compliance"],
    href: "/industries/banking",
    iconKey: "banking",
    slug: "banking",
  },
  {
    title: "Financial Services",
    description:
      "Secure, data and AI-driven financial services — from paytech and financial infrastructure to risk, compliance, and analytics.",
    pills: ["Paytech", "Lending & credit", "AI agents"],
    href: "/industries/financial-services",
    iconKey: "financial",
    slug: "financial",
  },
  {
    title: "Health & Wellbeing",
    description:
      "People-centric healthcare solutions — from virtual care platforms and EHR integrations to AI-powered diagnostics and smart medical devices.",
    pills: ["Virtual care", "Medical devices", "Patient engagement"],
    href: "/industries/healthcare",
    iconKey: "health",
    slug: "health",
  },
  {
    title: "Insurance",
    description:
      "AI-powered insurance solutions — from accelerating policy lifecycle management to streamlining claims processing and underwriting.",
    pills: ["Policy lifecycle", "Claims automation", "Underwriting AI"],
    href: "/industries/insurance",
    iconKey: "insurance",
    slug: "insurance",
  },
  {
    title: "Media & Entertainment",
    description:
      "AI-native solutions to deliver personalized, real-time, and immersive experiences at scale — from content platforms to interactive audio.",
    pills: ["Personalization", "Streaming & OTT", "GenAI content"],
    href: "/industries/media-entertainment",
    iconKey: "media",
    slug: "media",
  },
  {
    title: "Hi-Tech & Semiconductors",
    description:
      "Semiconductor design, firmware, and IoT development, plus AI-powered embedded systems — covering the full stack from silicon to applications.",
    pills: ["Embedded systems", "IoT", "AI at the edge"],
    href: "/industries/embedded-engineering",
    iconKey: "hitech",
    slug: "hitech",
  },
];

export const industriesDatabricks = {
  title: "A Databricks Gold Partner",
  paragraphs: [
    "As a Gold Databricks Partner, we've demonstrated our deep knowledge of the platform and a proven track record of successful implementations.",
    "We have 250+ professionals certified on the Databricks Intelligence platform. Our people have Databricks certifications ranging from Associate Data Analyst, Data Engineer, to Professional Machine Learning Engineer and GenAI Engineers.",
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

export const industriesCaseStudies: IndustryCaseStudy[] = [
  {
    slug: "avant",
    logoSrc: industriesMedia.caseStudyLogos.avant,
    logoWidth: 270,
    bgSrc: industriesMedia.caseStudyBgs.avant,
    pill: "Financial Services",
    title: "Reinventing core functions with data and machine learning",
    description:
      "From marketing to credit scoring, Avant partnered with eForte to harness data and ML across its core business — for 3M+ customers.",
    href: "/impact-studies",
    metrics: [
      { number: "10×", labelLines: ["Acceleration in", "prediction time"] },
    ],
  },
  {
    slug: "onepay",
    logoSrc: industriesMedia.caseStudyLogos.onepay,
    logoWidth: 200,
    bgSrc: industriesMedia.caseStudyBgs.onepay,
    pill: "Financial Services",
    title: "Data-fueled growth for one of the US' leading fintechs",
    description:
      "eForte helped OnePay become one of the world's leading fintechs with an all-in-one financial experience that simplifies banking.",
    href: "/impact-studies",
    metrics: [
      { number: "2M", labelLines: ["Users"] },
      { number: "4.7", labelLines: ["App store rating"] },
    ],
  },
  {
    slug: "myrow",
    logoSrc: industriesMedia.caseStudyLogos.myrow,
    logoWidth: 250,
    bgSrc: industriesMedia.caseStudyBgs.myrow,
    pill: "Health & Fitness",
    title: "Transforming product delivery through AI-driven engineering",
    description:
      "How MyRow achieved faster releases, higher-quality software, and greater team productivity with eForte's AccelerateAI Framework",
    href: "/impact-studies",
    metrics: [
      {
        number: "50%+",
        labelLines: ["Improvement in key", "DORA metrics"],
      },
    ],
  },
];
