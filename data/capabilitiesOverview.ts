import {
  HiChip,
  HiCloud,
  HiCube,
  HiDeviceMobile,
  HiLightningBolt,
  HiPencil,
  HiShieldCheck,
  HiCog,
  HiCheckCircle,
  HiViewGrid,
  HiLink,
  // HiUserGroup, // reserved with Staff Augmentation entry below
  HiSwitchHorizontal,
  HiBadgeCheck,
  HiAcademicCap,
  HiCollection,
} from "react-icons/hi";
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
  descriptionLines: [string, string] | [string];
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
  titleLines: ["Unleash the power", "of technology with", "eForte Studios"],
  description:
    "Our Studio delivery model enables us to address challenges head-on by bringing technology and domain experts together. This ensures we deliver immediate business value with our customized solutions.",
};

export const capabilityStudioModel = {
  titleLines: ["We'll create your specialist", "team from our Studios"],
  paragraphs: [
    "Drawing inspiration from our name, we introduce the eForte Studio Model.",
    "Just as a cube has six faces, each offering a unique viewpoint, eForte tackles challenges from multiple angles, ensuring a holistic approach to every solution.",
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
        "team of specialists to work on your",
        "digital products and challenges.",
      ],
    },
    {
      title: "Step 2",
      descriptionLines: [
        "As your product advances, or",
        "your needs change, the team",
        "composition adapts as required.",
      ],
    },
  ],
};

export const capabilityStudios: CapabilityStudioItem[] = [
  {
    title: "Data",
    description: "Data manipulation, engineering, visualization, and prediction",
    descriptionLines: ["Data manipulation, engineering,", "visualization, and prediction"],
    href: "/capabilities/data",
    icon: HiLightningBolt,
    slug: "data",
    iconColor: "#96C5FF",
    hoverGradient: "linear-gradient(267.87deg, #96C5FF 8%, #5FA7FF 98.69%)",
  },
  {
    title: "AI & Machine Learning",
    description: "Generative AI, machine learning, NLP, computer vision",
    descriptionLines: ["Generative AI, machine learning,", "NLP, computer vision"],
    href: "/capabilities/artificial-intelligence",
    icon: HiChip,
    slug: "ai",
    iconColor: "#FFA29B",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -80.35%, #FFA29B 82.94%)",
  },
  {
    title: "Cloud, SRE, and DevOps",
    description: "Cloud migration, CI/CD pipeline development, IaC, MLOps, FinOps",
    descriptionLines: ["Cloud migration, CI/CD pipeline", "development, IaC, MLOps, FinOps"],
    href: "/capabilities/cloud-sre",
    icon: HiCloud,
    slug: "cloud",
    iconColor: "#0D5BFF",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -39.31%, #0D5BFF 95.36%)",
  },
  {
    title: "Cybersecurity",
    description:
      "AI security transformation, secure SSDLC, vCISO, penetration testing, DevSecOps",
    descriptionLines: [
      "AI security transformation, secure SSDLC,",
      "vCISO, penetration testing, DevSecOps",
    ],
    href: "/capabilities/cybersecurity",
    icon: HiShieldCheck,
    slug: "cybersecurity",
    iconColor: "#1E1E1E",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -94.42%, #1E1E1E 97.88%)",
  },
  {
    title: "Platform Engineering",
    description: "Robust infrastructures, scalable APIs, efficient deployment",
    descriptionLines: ["Robust infrastructures, scalable", "APIs, efficient deployment"],
    href: "/capabilities/platform-engineering",
    icon: HiCog,
    slug: "engineering",
    iconColor: "#2946CF",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -33.73%, #2946CF 94.97%)",
  },
  {
    title: "Product Design",
    description: "UX research, service design, design thinking, and UI design",
    descriptionLines: ["UX research, service design, design", "thinking, and UI design"],
    href: "/capabilities/product-design",
    icon: HiPencil,
    slug: "product-design",
    iconColor: "#AB77FF",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -61.24%, #AB77FF 94.42%)",
  },
  {
    title: "App Solutions",
    description:
      "Native or hybrid, SDK development, integrations, app store positioning",
    descriptionLines: [
      "Native or hybrid, SDK development,",
      "integrations, app store positioning",
    ],
    href: "/capabilities/app-solutions",
    icon: HiDeviceMobile,
    slug: "app-solutions",
    iconColor: "#F4594E",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -37.81%, #F4594E 94.34%)",
  },
  {
    title: "Embedded Engineering",
    description:
      "Development for semiconductors, embedded systems, IoT, microcontrollers",
    descriptionLines: [
      "Development for semiconductors,",
      "embedded systems, IoT, microcontrollers",
    ],
    href: "/capabilities/embedded-engineering",
    icon: HiCube,
    slug: "firmware",
    iconColor: "#FFB600",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -77.83%, #FFB600 96.86%)",
  },
  {
    title: "Blockchain",
    description: "Smart contracts, decentralized apps, blockchain integration",
    descriptionLines: ["Smart contracts, decentralized", "apps, blockchain integration"],
    href: "/capabilities/blockchain",
    icon: HiLink,
    slug: "blockchain",
    iconColor: "#D348EA",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -67.22%, #D348EA 91.82%)",
  },
  {
    title: "Product Management",
    description: "Product consulting, process management, monetization",
    descriptionLines: ["Product consulting, process", "management, monetization"],
    href: "/capabilities/product-management",
    icon: HiViewGrid,
    slug: "product-management",
    iconColor: "#3379CC",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -88.84%, #3379CC 97.25%)",
  },
  {
    title: "Quality Assurance",
    description: "Test automation, CI/CD, load and performance testing",
    descriptionLines: ["Test automation, CI/CD, load and", "performance testing"],
    href: "/capabilities/quality-assurance",
    icon: HiCheckCircle,
    slug: "qa",
    iconColor: "#00BD5F",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -94.42%, #0EBB65 97.88%)",
  },
  // Preserved for possible future reuse — not in capabilities-design.html studio list
  // {
  //   title: "Staff Augmentation",
  //   description:
  //     "Dedicated resource hiring across AI, data, cloud, and engineering teams",
  //   icon: HiUserGroup,
  //   slug: "staff",
  //   iconColor: "#D3287A",
  //   hoverGradient: "linear-gradient(270deg, #FFFFFF -80%, #D3287A 95%)",
  // },
];

export const capabilityBenefits: CapabilityBenefit[] = [
  {
    title: "Unified service",
    description:
      "We assist organizations in developing digital products through a holistic approach. Integral to this is uniting teams of professionals from diverse backgrounds, who then collaborate as a singular, cohesive unit to achieve our client's goals.",
    icon: HiCollection,
    iconBg: "#EDDCFF",
    iconColor: "#8844D2",
    slug: "unified-service",
  },
  {
    title: "Flexibility",
    description:
      "The various studios offer businesses the flexibility required to flourish. Modern businesses demand rapid team adjustments to tackle new challenges. A flexible framework allows our clients to swiftly adapt to each product and market phase.",
    icon: HiSwitchHorizontal,
    iconBg: "#BCF2C6",
    iconColor: "#309A45",
    slug: "flexibility",
  },
  {
    title: "High-quality",
    description:
      "Our Studios bring a set of best practices and industry standards for building high-quality digital experiences. When we assemble a multidisciplinary team, each professional arrives armed with those toolsets to elevate our service to industry-leading levels.",
    icon: HiBadgeCheck,
    iconBg: "#FFECA9",
    iconColor: "#938613",
    slug: "high-quality",
  },
  {
    title: "Expertise & knowledge",
    description:
      "Our Studios focus on specific technology and business areas, gaining deep knowledge and experience. This means we can give you expert advice and insights, thanks to our specialized experts.",
    icon: HiAcademicCap,
    iconBg: "#D6F4FF",
    iconColor: "#29B5E8",
    slug: "expertise",
  },
];

export const capabilityJourney: CapabilityJourneyStep[] = [
  {
    step: "Step 1",
    title: "Discovery",
    description: "We get to know you and your challenges.",
    descriptionLines: ["We get to know you", "and your challenges."],
    pills: ["Tech Assessments", "Prototyping", "Workshops", "Research"],
    imageSrc: "/assets/images/capabilities/1.svg",
  },
  {
    step: "Step 2",
    title: "Strategy & Roadmap",
    description:
      "The creation of the roadmap includes the work of different studios.",
    descriptionLines: [
      "The creation of the roadmap includes",
      "the work of different studios.",
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
    description: "In this phase the Agile Delivery Pods start executing.",
    descriptionLines: [
      "In this phase the Agile Delivery",
      "Pods start executing.",
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
  title: "Let's work together",
  description:
    "Get in touch with our experts to review your idea or product, and discuss options for the best approach",
};
