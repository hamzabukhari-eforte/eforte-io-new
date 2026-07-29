import {
  HiChip,
  HiCloud,
  // HiCube, // reserved with Embedded Engineering entry below
  HiDeviceMobile,
  HiLightningBolt,
  HiPencil,
  // HiShieldCheck, // reserved with Cybersecurity entry below
  // HiCog, // reserved with Platform Engineering entry below
  // HiCheckCircle, // reserved with Quality Assurance entry below
  // HiViewGrid, // reserved with Product Management entry below
  // HiLink, // reserved with Blockchain entry below
  HiUserGroup,
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
  titleLines: ["Unleash the power", "of technology with", "eForte Studios"],
  description:
    "The eForte Studio model assembles specialist teams across Data & AI, Design, Cybersecurity, Engineering, Quality, and Product Management to address challenges from multiple angles and deliver holistic solutions.",
};

export const capabilityStudioModel = {
  titleLines: ["We'll create your specialist", "team from our Studios"],
  paragraphs: [
    "Drawing inspiration from the idea of multiple perspectives, eForte Studios approach each problem from several dimensions, ensuring no critical angle is missed and every solution is well-rounded.",
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
        "eForte assembles a multidisciplinary",
        "team of specialists to work on your",
        "digital products and challenges.",
      ],
    },
    {
      title: "Step 2",
      descriptionLines: [
        "As your product evolves or your",
        "priorities shift, the team composition",
        "is adapted to match new requirements.",
      ],
    },
  ],
};

export const capabilityStudios: CapabilityStudioItem[] = [
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
    title: "Staff Augmentation – Dedicated Resource Hiring",
    description:
      "Dedicated resource hiring across AI, data, cloud, and engineering teams",
    descriptionLines: [
      "Dedicated resource hiring across AI, data,",
      "cloud, and engineering teams",
    ],
    href: "/capabilities/staff-augmentation",
    icon: HiUserGroup,
    slug: "staff",
    iconColor: "#D3287A",
    hoverGradient: "linear-gradient(270deg, #FFFFFF -80%, #D3287A 95%)",
  },
  // Legacy studios preserved for future reuse — not in current mega-menu
  // {
  //   title: "Cybersecurity",
  //   description:
  //     "AI security transformation, secure SSDLC, vCISO, penetration testing, DevSecOps",
  //   descriptionLines: [
  //     "AI security transformation, secure SSDLC,",
  //     "vCISO, penetration testing, DevSecOps",
  //   ],
  //   href: "/capabilities/cybersecurity",
  //   icon: HiShieldCheck,
  //   slug: "cybersecurity",
  //   iconColor: "#1E1E1E",
  //   hoverGradient: "linear-gradient(270deg, #FFFFFF -94.42%, #1E1E1E 97.88%)",
  // },
  // {
  //   title: "Platform Engineering",
  //   description: "Robust infrastructures, scalable APIs, efficient deployment",
  //   descriptionLines: ["Robust infrastructures, scalable", "APIs, efficient deployment"],
  //   href: "/capabilities/platform-engineering",
  //   icon: HiCog,
  //   slug: "engineering",
  //   iconColor: "#2946CF",
  //   hoverGradient: "linear-gradient(270deg, #FFFFFF -33.73%, #2946CF 94.97%)",
  // },
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
  // {
  //   title: "Blockchain",
  //   description: "Smart contracts, decentralized apps, blockchain integration",
  //   descriptionLines: ["Smart contracts, decentralized", "apps, blockchain integration"],
  //   href: "/capabilities/blockchain",
  //   icon: HiLink,
  //   slug: "blockchain",
  //   iconColor: "#D348EA",
  //   hoverGradient: "linear-gradient(270deg, #FFFFFF -67.22%, #D348EA 91.82%)",
  // },
  // {
  //   title: "Product Management",
  //   description: "Product consulting, process management, monetization",
  //   descriptionLines: ["Product consulting, process", "management, monetization"],
  //   href: "/capabilities/product-management",
  //   icon: HiViewGrid,
  //   slug: "product-management",
  //   iconColor: "#3379CC",
  //   hoverGradient: "linear-gradient(270deg, #FFFFFF -88.84%, #3379CC 97.25%)",
  // },
  // {
  //   title: "Quality Assurance",
  //   description: "Test automation, CI/CD, load and performance testing",
  //   descriptionLines: ["Test automation, CI/CD, load and", "performance testing"],
  //   href: "/capabilities/quality-assurance",
  //   icon: HiCheckCircle,
  //   slug: "qa",
  //   iconColor: "#00BD5F",
  //   hoverGradient: "linear-gradient(270deg, #FFFFFF -94.42%, #0EBB65 97.88%)",
  // },
];

export const capabilityBenefits: CapabilityBenefit[] = [
  {
    title: "Unified service",
    description:
      "eForte helps organizations build digital products through a holistic model that unites specialists from different disciplines into one coordinated team.",
    icon: HiCollection,
    iconBg: "#EDDCFF",
    iconColor: "#8844D2",
    slug: "unified-service",
  },
  {
    title: "Flexibility",
    description:
      "Studio-based teams can be reconfigured quickly as products and markets change, giving businesses the agility they need to thrive.",
    icon: HiSwitchHorizontal,
    iconBg: "#BCF2C6",
    iconColor: "#309A45",
    slug: "flexibility",
  },
  {
    title: "High quality",
    description:
      "Each Studio brings proven practices and industry standards, so every multidisciplinary team arrives equipped to deliver at a consistently high level.",
    icon: HiBadgeCheck,
    iconBg: "#FFECA9",
    iconColor: "#938613",
    slug: "high-quality",
  },
  {
    title: "Expertise & knowledge",
    description:
      "Studios focus on specific technology and business domains, giving clients direct access to deep, specialized expertise and practical insight.",
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
  title: "Let's work together",
  description:
    "Get in touch with our experts to review your idea or product, and discuss options for the best approach",
};
