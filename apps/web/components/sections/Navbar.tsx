"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type MutableRefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll } from "@/hooks/useScroll";
import { useLenisControl } from "@/components/providers/SmoothScrollProvider";
import { cn } from "@/lib/utils";
import {
  lockBodyScroll,
  SCROLLBAR_COMPENSATION_CLASS,
} from "@/lib/lockBodyScroll";
import Container from "@/components/atoms/Container";
import QuoteCTA from "@/components/atoms/QuoteCTA";
import {
  HiMenu,
  HiX,
  HiLightningBolt,
  HiViewList,
  HiDatabase,
  HiPencil,
  HiChip,
  HiDeviceMobile,
  HiCloud,
  HiShieldCheck,
  HiCog,
  HiCheckCircle,
  HiCube,
  HiViewGrid,
  HiOfficeBuilding,
  HiCurrencyDollar,
  HiHeart,
  HiPlay,
  HiBadgeCheck,
  HiUserGroup,
  HiCalendar,
  HiChevronDown,
} from "react-icons/hi";
import { FiLink } from "react-icons/fi";
import type { IconType } from "react-icons";
import type { InsightsMenuData, InsightsMenuItem } from "@/lib/strapi/insights";
import { impactStudyImages } from "@/data/impactStudyImages";

const menuIconMap: Record<string, IconType> = {
  "lightning-bolt": HiLightningBolt,
  "view-list": HiViewList,
  database: HiDatabase,
  pencil: HiPencil,
  chip: HiChip,
  "device-mobile": HiDeviceMobile,
  cloud: HiCloud,
  "shield-check": HiShieldCheck,
  cog: HiCog,
  "check-circle": HiCheckCircle,
  cube: HiCube,
  "view-grid": HiViewGrid,
  "office-building": HiOfficeBuilding,
  "currency-dollar": HiCurrencyDollar,
  heart: HiHeart,
  play: HiPlay,
  "badge-check": HiBadgeCheck,
  "user-group": HiUserGroup,
  calendar: HiCalendar,
  link: FiLink,
};

interface NavLink {
  id: string;
  label: string;
  href: string;
}

interface MegaMenuItem {
  title: string;
  description?: string;
  tag?: string;
  imageSrc?: string;
  /** Key from menuIconMap (react-icons). Use with iconColorClass for the icon box. */
  iconName?: keyof typeof menuIconMap;
  iconColorClass?: string;
  /** When set, the item is rendered as a link to this path. */
  href?: string;
}

interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

interface MegaMenuConfig {
  eyebrow?: string;
  title: string;
  description: string;
  columns: MegaMenuColumn[];
}

/**
 * Editorial columns (post teasers) that add noise to the collapsed mobile menu,
 * where navigable pages matter more than article cards.
 */
const MOBILE_MENU_SKIPPED_COLUMNS: Record<string, string[]> = {
  "ai-pillars": ["AI Insights"],
  industries: ["Industry Insights"],
  insights: ["Highlighted Posts", "Latest Posts"],
};

function getMobileMenuColumns(
  id: string,
  config?: MegaMenuConfig
): MegaMenuColumn[] {
  if (!config) return [];

  const skipped = MOBILE_MENU_SKIPPED_COLUMNS[id] ?? [];

  return config.columns.filter(
    (column) => !skipped.includes(column.title) && column.items.length > 0
  );
}

/** Featured Impact Studies from mega menu DOC (4August2026). Full list lives on /impact-studies. */
const impactStudiesMenuItems: MegaMenuItem[] = [
  {
    title: "M&A Process Automation for Iberian Ventures",
    description:
      "A mid-sized M&A advisory firm in Lisbon, Portugal managing 30+ active buy-side mandates and tracking 500+ potential acquisition targets.",
    href: "/case-studies/iberian-ventures",
    imageSrc: impactStudyImages["iberian-ventures"]?.hero,
  },
  {
    title: "Trade Process Automation for GlobalTrade Solutions",
    description:
      "An international trading house managing 1,200+ annual transactions across multiple commodity categories with a network of 350+ suppliers.",
    href: "/case-studies/globaltrade-solutions",
    imageSrc: impactStudyImages["globaltrade-solutions"]?.hero,
  },
  {
    title: "Insurance Claims Processing Automation for Allied Insurance",
    description:
      "A regional insurance provider processing 50,000+ claims annually across auto, home, and commercial lines.",
    href: "/case-studies/allied-insurance",
    imageSrc: impactStudyImages["allied-insurance"]?.hero,
  },
  {
    title: "Clinical Trial Data Management for BioResearch Labs",
    description:
      "A pharmaceutical research organization conducting multiple Phase II and III clinical trials across 40+ global research sites.",
    href: "/case-studies/bioresearch-labs",
    imageSrc: impactStudyImages["bioresearch-labs"]?.hero,
  },
  {
    title: "Accounts Payable Automation for Global Manufacturing Corp",
    description:
      "Automating accounts payable across regions with agentic invoice intelligence and ERP integration.",
    href: "/case-studies/global-manufacturing-corp",
    imageSrc: impactStudyImages["global-manufacturing-corp"]?.hero,
  },
  {
    title: "Tach Ignite",
    description:
      "TachIgnite is a Day Zero startup accelerator focused on transforming raw ideas into market-ready innovations.",
    href: "/case-studies/tachignite",
    imageSrc: impactStudyImages["tachignite"]?.hero,
  },
];

const navLinks: NavLink[] = [
  { id: "ai-pillars", label: "AI Pillars", href: "#ai-pillars" },
  { id: "capabilities", label: "Capabilities", href: "/capabilities" },
  { id: "ai-workflows", label: "AI Workflows", href: "/ai-workflows" },
  { id: "industries", label: "Industries", href: "/industries" },
  { id: "impact-studies", label: "Impact Studies", href: "/impact-studies" },
  { id: "insights", label: "Insights", href: "/blog" },
  { id: "about-us", label: "About Us", href: "/about-us" },
  // Legacy top-level item preserved for future reuse:
  // { id: "databricks", label: "Databricks", href: "/databricks" },
];

const megaMenuConfig: Record<string, MegaMenuConfig> = {
  "ai-pillars": {
    eyebrow: "AI Pillars",
    title: "evolvAIng: From Legacy to Intelligence",
    description:
      "We provide end-to-end data and AI solutions that unite security-first approaches with intelligent automation.",
    columns: [
      {
        title: "Featured Pillars",
        items: [
          {
            title: "Velocity AI",
            description:
              "eForte's comprehensive framework encompassing best practices, workflows, and advanced AI methodologies.",
            iconName: "lightning-bolt",
            iconColorClass: "bg-[#050514]",
            href: "/velocity-ai",
          },
          {
            title: "Agentic Orchestration",
            description:
              "Design and deploy AI agents customized to address industry-specific challenges.",
            iconName: "view-list",
            iconColorClass: "bg-[#050514]",
            href: "/agentic-orchestration",
          },
          {
            title: "Foundational Data Layer",
            description:
              "Build robust data foundations that power next-generation enterprises.",
            iconName: "database",
            iconColorClass: "bg-[#050514]",
            href: "/foundational-data-layer",
          },
        ],
      },
      {
        title: "AI Insights",
        items: [
          {
            title: "White paper: Building powerful & scalable AI agents",
            description:
              "Discover eForte's modular architecture for building agentic AI systems using Databricks and LangGraph.",
            tag: "White paper",
            imageSrc: "/assets/images/velocity-ai/insight-1.png",
          },
          {
            title: "White paper: Implementing AI in today's world",
            description:
              "We showcase real-world success stories of eForte's work in AI.",
            tag: "White paper",
            imageSrc: "/assets/images/velocity-ai/insight-2.png",
          },
          {
            title:
              "Insight: How eForte's Prompt System brings structure to AI powered developments",
            description:
              "eForte's Prompt System (EPS) adds an orchestrated, multi-agent workflow inside tools like Cursor and Copilot.",
            tag: "Insight",
            imageSrc: "/assets/images/velocity-ai/insight-3.png",
          },
        ],
      },
    ],
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "Our Studios",
    description:
      "Our Studio delivery model brings together technology and domain experts to tackle complex challenges and deliver customized solutions that create immediate and measurable business value.",
    columns: [
      {
        title: "Our Studios",
        items: [
          {
            title: "Product Design",
            description:
              "User experience research, service design, design thinking, and intuitive UI design.",
            iconName: "pencil",
            iconColorClass: "bg-[#050514]",
            href: "/capabilities/product-design",
          },
          {
            title: "Artificial Intelligence",
            description:
              "Agentic AI, generative AI, machine learning, natural language processing, and computer vision.",
            iconName: "chip",
            iconColorClass: "bg-[#050514]",
            href: "/capabilities/artificial-intelligence",
          },
          {
            title: "Data",
            description:
              "Data engineering, transformation, visualization, and predictive analytics.",
            iconName: "database",
            iconColorClass: "bg-[#050514]",
            href: "/capabilities/data",
          },
          {
            title: "App Solutions",
            description:
              "Native and hybrid app development, SDK creation, system integrations, and app store optimization.",
            iconName: "device-mobile",
            iconColorClass: "bg-[#050514]",
            href: "/capabilities/app-solutions",
          },
          {
            title: "Cloud, SRE, & DevOps",
            description:
              "Cloud migration, CI/CD pipeline implementation, site reliability engineering, and infrastructure as code.",
            iconName: "cloud",
            iconColorClass: "bg-[#050514]",
            href: "/capabilities/cloud-sre",
          },
          {
            title: "Cybersecurity",
            description:
              "Secure SDLC, AI-driven cybersecurity, penetration testing, and AI security assessments.",
            iconName: "shield-check",
            iconColorClass: "bg-[#050514]",
            href: "/capabilities/cybersecurity",
          },
          {
            title: "Platform Engineering",
            description:
              "Scalable platforms, resilient infrastructure, API development, and efficient deployment strategies.",
            iconName: "cog",
            iconColorClass: "bg-[#050514]",
            href: "/capabilities/platform-engineering",
          },
          {
            title: "Quality Assurance",
            description:
              "AI-augmented testing, test automation, CI/CD integration, performance, load, and data testing.",
            iconName: "check-circle",
            iconColorClass: "bg-[#050514]",
            href: "/capabilities/quality-assurance",
          },
          {
            title: "Product Management",
            description:
              "Product strategy, lifecycle management, process optimization, and monetization consulting.",
            iconName: "view-grid",
            iconColorClass: "bg-[#050514]",
            href: "/capabilities/product-management",
          },
          {
            title: "Blockchain",
            description:
              "Smart contract development, decentralized applications, and blockchain system integration.",
            iconName: "link",
            iconColorClass: "bg-[#050514]",
            href: "/capabilities/blockchain",
          },
          {
            title: "Staff Augmentation: Dedicated Resource Hiring",
            description:
              "Accelerate delivery with dedicated AI, data, cloud, and engineering talent seamlessly embedded into your teams, eliminating hiring complexity and ramp-up time.",
            iconName: "user-group",
            iconColorClass: "bg-[#050514]",
            href: "/capabilities/staff-augmentation",
          },
          // Embedded Engineering preserved for future reuse (not in mega menu DOC 4August2026):
          // {
          //   title: "Embedded Engineering",
          //   description:
          //     "Development for semiconductors, embedded systems, IoT, & microcontrollers.",
          //   iconName: "cube",
          //   iconColorClass: "bg-[#7C4CFF]",
          //   href: "/capabilities/embedded-engineering",
          // },
        ],
      },
    ],
  },
  "ai-workflows": {
    eyebrow: "AI Workflows",
    title: "Where AI Meets Execution",
    description:
      "We don't just build software; we engineer business outcomes. By fusing deep industry expertise with our Agentic Orchestration, we design intelligent workflows that automate decisions, accelerate execution, and create measurable business value.",
    columns: [
      {
        title: "Workflow Areas",
        items: [
          {
            title: "Customer Service & Support",
            description:
              "Autonomous Customer Service Workflows: AI agents route, respond, analyze sentiment, and continuously optimize customer interactions.",
            iconName: "user-group",
            iconColorClass: "bg-[#050514]",
            href: "/ai-workflows/customer-service",
          },
          {
            title: "Sales & Marketing",
            description:
              "Agentic Revenue Workflows: AI agents qualify leads, generate proposals, and accelerate deal cycles.",
            iconName: "lightning-bolt",
            iconColorClass: "bg-[#050514]",
            href: "/ai-workflows/sales-marketing",
          },
          {
            title: "Financial Operations",
            description:
              "Autonomous Financial Workflows: AI agents process invoices, detect fraud, and ensure continuous compliance.",
            iconName: "currency-dollar",
            iconColorClass: "bg-[#050514]",
            href: "/ai-workflows/financial-operations",
          },
        ],
      },
      {
        title: "More Workflows",
        items: [
          {
            title: "Human Resources",
            description:
              "Agentic Talent Workflows: AI agents screen candidates, coordinate onboarding, and manage lifecycle tasks.",
            iconName: "badge-check",
            iconColorClass: "bg-[#050514]",
            href: "/ai-workflows/human-resources",
          },
          {
            title: "Operations & Compliance",
            description:
              "AI-Orchestrated Risk & Compliance Workflows: Autonomous monitoring and regulatory reporting with built-in governance.",
            iconName: "shield-check",
            iconColorClass: "bg-[#050514]",
            href: "/ai-workflows/operations-compliance",
          },
          {
            title: "Project Management & Data",
            description:
              "Intelligent Delivery & Data Workflows: AI agents allocate resources, track progress, and generate predictive insights.",
            iconName: "database",
            iconColorClass: "bg-[#050514]",
            href: "/ai-workflows/project-management-data",
          },
        ],
      },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Our Industries",
    description:
      "eForte collaborates with industry leaders to deliver innovative technology and AI-driven solutions that accelerate transformation and produce measurable results.",
    columns: [
      {
        title: "Our Industries",
        items: [
          {
            title: "Health & Wellbeing",
            description:
              "AI-driven healthcare solutions improving patient outcomes, operational efficiency, and personalized care.",
            iconName: "heart",
            iconColorClass: "bg-[#050514]",
            href: "/industries/healthcare",
          },
          {
            title: "Finance",
            description:
              "Intelligent AI and data platforms enabling smarter decisions, risk mitigation, and digital financial transformation.",
            iconName: "currency-dollar",
            iconColorClass: "bg-[#050514]",
            href: "/industries/financial-services",
          },
          {
            title: "Insurance",
            description:
              "AI-powered automation and analytics streamlining underwriting, claims processing, and customer engagement.",
            iconName: "shield-check",
            iconColorClass: "bg-[#050514]",
            href: "/industries/insurance",
          },
          {
            title: "Automobile",
            description:
              "Advanced AI enabling connected vehicles, predictive maintenance, and intelligent manufacturing ecosystems.",
            iconName: "device-mobile",
            iconColorClass: "bg-[#050514]",
            href: "/industries/automobile",
          },
          {
            title: "Heavy Industries",
            description:
              "Industrial AI solutions driving predictive maintenance, operational excellence, and smart factory transformation.",
            iconName: "office-building",
            iconColorClass: "bg-[#050514]",
            href: "/industries/heavy-industries",
          },
          {
            title: "BPO & Shared Services",
            description:
              "Agentic AI and automation enhancing service delivery, productivity, and scalable customer operations.",
            iconName: "user-group",
            iconColorClass: "bg-[#050514]",
            href: "/industries/bpo-shared-services",
          },
          {
            title: "Hospitality",
            description:
              "AI-powered personalization and operational intelligence elevating guest experiences and optimizing hospitality operations.",
            iconName: "badge-check",
            iconColorClass: "bg-[#050514]",
            href: "/industries/hospitality",
          },
          // Legacy industries preserved for future reuse:
          // {
          //   title: "Banking",
          //   description:
          //     "Modernize banking systems for a secure, compliant, AI ready enterprise ecosystem.",
          //   iconName: "office-building",
          //   iconColorClass: "bg-[#7C4CFF]",
          //   href: "/industries/banking",
          // },
          // {
          //   title: "Media & Entertainment",
          //   description:
          //     "AI native solutions to deliver personalized, real time, and immersive experiences at scale.",
          //   iconName: "play",
          //   iconColorClass: "bg-[#7C4CFF]",
          //   href: "/industries/media-entertainment",
          // },
          // {
          //   title: "Hi-Tech & Semiconductors",
          //   description:
          //     "Semiconductor design, firmware, and IoT development, AI powered embedded systems.",
          //   iconName: "chip",
          //   iconColorClass: "bg-[#7C4CFF]",
          //   href: "/industries/embedded-engineering",
          // },
        ],
      },
      {
        title: "Industry Insights",
        items: [
          {
            title:
              "List of digital health, healthcare IT, & medtech conferences in 2026",
            imageSrc: "/assets/images/velocity-ai/insight-2.png",
          },
          {
            title: "List of fintech conferences in 2026",
            imageSrc: "/assets/images/velocity-ai/insight-3.png",
          },
          {
            title:
              "Webinar: Agentic AI in finance - How to build Agents using Databricks and LangGraph",
            imageSrc: "/assets/images/velocity-ai/case-study-myrow.png",
          },
          {
            title:
              "Insights from the AI Native Banking & Fintech Conference",
            imageSrc: "/assets/images/velocity-ai/insight-1.png",
          },
        ],
      },
    ],
  },
  "impact-studies": {
    eyebrow: "Impact Studies",
    title: "Impact Studies",
    description:
      "Explore in-depth case studies showcasing how we empower organizations to lead, innovate, and transform their industries. Your journey begins here.",
    columns: [
      {
        title: "Case Studies",
        items: impactStudiesMenuItems,
      },
    ],
  },
  insights: {
    eyebrow: "Insights",
    title: "Insights",
    description:
      "Dive into our expert insights on the latest in technology and business developments.",
    columns: [
      {
        title: "Highlighted Posts",
        items: [
          {
            title: "Modernizing revenue intelligence with a unified metrics foundation - a case study with Databook and Databricks",
            description: "Databook modernized its revenue intelligence platform by replacing fragmented, c...",
            imageSrc: "/assets/images/velocity-ai/insight-1.png",
          },
          {
            title: "We are compliant with NIST AI Risk Management Framework (AI RMF)",
            description: "We are proud to share that we are now aligned with the NIST AI Managemen...",
            imageSrc: "/assets/images/landing/nist.png",
          },
        ],
      },
      {
        title: "Latest Posts",
        items: [
          {
            title: "Solving Warehouse Migration at scale with our Governance Migration Accelerator",
            description: "Our Governance Migration Accelerator automates the migration of governable...",
            imageSrc: "/assets/images/landing/nist.png",
          },
          {
            title: "Our Unstructured Knowledge Assistant: Turning dispersed documents into searchable intelligence",
            description: "Turn enterprise files into a governed knowledge layer on Databricks with semanti...",
            imageSrc: "/assets/images/velocity-ai/case-study-myrow.png",
          },
          {
            title: "Building Secure and Reliable RAG in Databricks",
            description: "A standard RAG stack is not enough for production. This article shows how to bui...",
            imageSrc: "/assets/images/velocity-ai/insight-2.png",
          },
          {
            title: "What to Know When LLMs Know It All?",
            description: "LLMs can autocomplete, refactor, and debug code at impressive speed, but they st...",
            imageSrc: "/assets/images/velocity-ai/insight-3.png",
          },
          {
            title: "Introducing QBricks: An enterprise accelerator for AI agent development, a Built on Databricks solution",
            description: "We today announced the public launch of QBricks, a Built on Databricks solut...",
            imageSrc: "/assets/images/velocity-ai/bento-ai-pods.png",
          },
          {
            title: "Designing for everyone is a business decision - Inclusive design drives better products",
            description: "Inclusive design, usability, and accessibility are essential foundations for bui...",
            imageSrc: "/assets/images/velocity-ai/cta-team.png",
          },
        ],
      },
      {
        title: "Key Categories",
        items: [
          { title: "AccelerateAI" },
          { title: "Data & AI" },
          { title: "Agentic Factory" },
          { title: "Cybersecurity" },
          { title: "Databricks" },
        ],
      },
      {
        title: "More Insights",
        items: [
          { title: "White Papers" },
          { title: "Events" },
        ],
      },
    ],
  },
  "about-us": {
    eyebrow: "About Us",
    title: "About us",
    description:
      "eForte helps businesses evolve from Digital-Native to AI Native.",
    columns: [
      {
        title: "About Us",
        items: [
          {
            title: "About eForte",
            tag: "Learn more",
            description:
              "eForte helps businesses evolve from Digital-Native to AI Native.",
            imageSrc: "/assets/images/landing/Expertise.png",
            href: "/about-us",
          },
          {
            title: "Technology Partners",
            tag: "PARTNERS",
            description:
              "Explore our ecosystem of technology and delivery partnerships powering AI and data transformation.",
            imageSrc: "/assets/images/about/handshake.svg",
            href: "/technology-partners",
          },
          {
            title: "Careers",
            tag: "CAREERS",
            description:
              "Backed by 20 years of experience, we deliver end-to-end AI capabilities across data engineering, agentic AI development, cloud integration, and human-centric product design.",
            imageSrc: "/assets/images/velocity-ai/cta-team.png",
            href: "/careers",
          },
        ],
      },
      // Legacy company items preserved for future reuse:
      // {
      //   title: "Locations",
      //   tag: "LOCATIONS",
      //   description:
      //     "Global presence with local delivery, so we can partner with you wherever you are.",
      //   imageSrc: "/assets/images/landing/navigate.png",
      //   href: "/locations",
      // },
      // {
      //   title: "More About Us",
      //   items: [
      //     { title: "Events & Webinars" },
      //     { title: "Press & Announcements" },
      //     { title: "Diversity & Inclusion" },
      //     { title: "Trust & Security" },
      //   ],
      // },
    ],
  },
  // Legacy Databricks mega menu preserved for future reuse:
  // databricks: {
  //   eyebrow: "Databricks",
  //   title: "Databricks Solutions",
  //   description:
  //     "We've empowered numerous industry leaders to harness the full potential of Databricks' Intelligence platform, driving transformative results and measurable business impact.",
  //   columns: [
  //     {
  //       title: "Highlights of Our Partnership",
  //       items: [
  //         {
  //           title: "Select Tier Partner",
  //           description:
  //             "We are a Select Tier Databricks partner, delivering scalable, secure data and AI solutions on Databricks.",
  //           iconName: "badge-check",
  //           iconColorClass: "bg-primary-pink",
  //           href: "/databricks",
  //         },
  //         {
  //           title: "200+ certified Databricks engineers",
  //           description:
  //             "We have 200+ certified engineers on the Databricks Intelligence Platform.",
  //           iconName: "user-group",
  //           iconColorClass: "bg-primary-pink",
  //           href: "/databricks",
  //         },
  //         {
  //           title: "20+ years of data experience",
  //           description:
  //             "We have been providing end-to-end data services for over 20 years.",
  //           iconName: "calendar",
  //           iconColorClass: "bg-primary-pink",
  //           href: "/databricks",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Databricks Insights",
  //       items: [
  //         {
  //           title:
  //             "Solving Warehouse Migration at scale with our Governance Migration Accelerator",
  //           description:
  //             "Our Governance Migration Accelerator automates the migration of governable...",
  //           imageSrc: "/assets/images/landing/nist.png",
  //         },
  //         {
  //           title:
  //             "Our Unstructured Knowledge Assistant: Turning dispersed documents into searchable intelligence",
  //           description:
  //             "Turn enterprise files into a governed knowledge layer on Databricks with semanti...",
  //           imageSrc: "/assets/images/velocity-ai/case-study-myrow.png",
  //         },
  //         {
  //           title: "Building Secure and Reliable RAG in Databricks",
  //           description:
  //             "A standard RAG stack is not enough for production. This article shows how to bui...",
  //           imageSrc: "/assets/images/velocity-ai/insight-2.png",
  //         },
  //       ],
  //     },
  //   ],
  // },
};

export interface NavbarProps {
  insightsMenuData?: InsightsMenuData;
  aiPillarsInsights?: InsightsMenuItem[];
}

/** Light-hero capability pages need a solid nav at top (white content under transparent bar). */
const LIGHT_HERO_NAV_ROUTES = [
  "/capabilities/app-solutions",
  "/capabilities/platform-engineering",
  "/capabilities/product-management",
  "/capabilities/blockchain",
  "/capabilities/quality-assurance",
  "/databricks",
  "/sitemap",
] as const;

function resolveMegaMenuConfig(
  menuId: string,
  aiPillarsInsights?: InsightsMenuItem[]
): MegaMenuConfig | undefined {
  const config = megaMenuConfig[menuId];
  if (!config) return undefined;

  if (menuId !== "ai-pillars" || !aiPillarsInsights?.length) {
    return config;
  }

  return {
    ...config,
    columns: config.columns.map((column) => {
      if (column.title !== "AI Insights") return column;
      return {
        ...column,
        items: aiPillarsInsights.map((item) => ({
          title: item.title,
          description: item.description,
          imageSrc: item.imageSrc,
          href: item.href,
          tag: item.tag,
        })),
      };
    }),
  };
}

export default function Navbar({
  insightsMenuData,
  aiPillarsInsights,
}: NavbarProps) {
  const pathname = usePathname();
  const isScrolled = useScroll(10);
  const lenisControl = useLenisControl();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  /** Multiple mobile sections can stay expanded at once. */
  const [expandedMobileIds, setExpandedMobileIds] = useState<string[]>([]);
  const impactStudiesWheelCleanup = useRef<(() => void) | null>(null);
  const industriesWheelCleanup = useRef<(() => void) | null>(null);

  const bindMegaMenuWheelScroll = useCallback(
    (
      node: HTMLDivElement | null,
      cleanupRef: MutableRefObject<(() => void) | null>
    ) => {
      cleanupRef.current?.();
      cleanupRef.current = null;
      if (!node) return;

      const onWheel = (event: WheelEvent) => {
        node.scrollTop += event.deltaY;
        event.preventDefault();
        event.stopPropagation();
      };

      node.addEventListener("wheel", onWheel, { passive: false });
      cleanupRef.current = () => {
        node.removeEventListener("wheel", onWheel);
      };
    },
    []
  );

  const setImpactStudiesScrollNode = useCallback(
    (node: HTMLDivElement | null) => {
      bindMegaMenuWheelScroll(node, impactStudiesWheelCleanup);
    },
    [bindMegaMenuWheelScroll]
  );

  const setIndustriesScrollNode = useCallback(
    (node: HTMLDivElement | null) => {
      bindMegaMenuWheelScroll(node, industriesWheelCleanup);
    },
    [bindMegaMenuWheelScroll]
  );

  const toggleMobileSection = (id: string) => {
    setExpandedMobileIds((current) =>
      current.includes(id)
        ? current.filter((entry) => entry !== id)
        : [...current, id]
    );
  };

  const isLightHeroPage = LIGHT_HERO_NAV_ROUTES.some(
    (route) => pathname === route || pathname?.startsWith(`${route}/`)
  );
  const useSolidNav = isScrolled || isMobileMenuOpen || isLightHeroPage;
  const isMegaMenuOpen = Boolean(activeMenu) && !isMobileMenuOpen;

  useLayoutEffect(() => {
    const shouldLockScroll = isMobileMenuOpen || Boolean(activeMenu);
    if (!shouldLockScroll) return;

    lenisControl?.stop();
    const unlock = lockBodyScroll();

    return () => {
      unlock();
      lenisControl?.start();
    };
  }, [isMobileMenuOpen, activeMenu, lenisControl]);

  useEffect(() => {
    return () => {
      impactStudiesWheelCleanup.current?.();
      impactStudiesWheelCleanup.current = null;
      industriesWheelCleanup.current?.();
      industriesWheelCleanup.current = null;
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMenu(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setExpandedMobileIds([]);
  };

  const closeMegaMenu = () => {
    setActiveMenu(null);
  };

  const renderMegaMenu = () => {
    if (!activeMenu || isMobileMenuOpen) return null;

    const config = resolveMegaMenuConfig(activeMenu, aiPillarsInsights);
    if (!config) return null;

    // Special layout for About Us to more closely match reference structure
    if (activeMenu === "about-us") {
      const companyCards = config.columns[0]?.items ?? [];

      return (
        <div
          className="hidden xl:block fixed inset-x-0 top-0 bottom-0 z-[100]"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeMegaMenu}
          />

          {/* Mega menu panel */}
          <div
            className="absolute inset-x-0 top-0 max-h-full overflow-hidden border-b border-white/10 bg-[#050514]/95 pt-16 backdrop-blur-2xl md:pt-20"
            onMouseLeave={closeMegaMenu}
          >
            <Container className="py-6 2xl:py-8 flex gap-6 2xl:gap-8 text-white">
              {/* Left narrative */}
              <div className="w-1/3 space-y-6 max-w-sm">
                {config.eyebrow && (
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                    {config.eyebrow}
                  </p>
                )}
                <h2 className="text-2xl font-semibold leading-snug">
                  {config.title}
                </h2>
                <p className="text-sm text-desc">{config.description}</p>
                <div className="mt-4 h-px w-10 bg-white/10" />

                <Link
                  href="/about-us"
                  onClick={closeMegaMenu}
                  className="inline-flex items-center text-sm font-semibold text-primary-pink hover:text-primary-pink/80"
                >
                  Learn more
                  <span className="ml-1 text-base" aria-hidden="true">
                    →
                  </span>
                </Link>

                {/* Legacy company link groups intentionally preserved in config comments */}
              </div>

              {/* Right image cards row */}
              <div className="flex-1 grid grid-cols-3 gap-6">
                {companyCards.map((item) => {
                  const cardClass =
                    "group flex flex-col overflow-hidden rounded-[12px] border border-white/10 bg-white/6 shadow-lg shadow-black/20 hover:bg-white/8 hover:border-white/15 transition-all duration-200 cursor-pointer";

                  const cardContent = (
                    <>
                      <div className="relative aspect-4/3 w-full bg-black/40 shrink-0">
                        {item.imageSrc && (
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 33vw, 280px"
                          />
                        )}
                      </div>
                      <div className="flex flex-col flex-1 p-5 space-y-3">
                        {item.tag && (
                          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-pink">
                            {item.tag}
                          </p>
                        )}
                        <p className="text-base font-semibold text-white">
                          {item.title}
                        </p>
                        {item.description && (
                          <p className="text-sm text-white/80 line-clamp-3 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        <span className="mt-auto pt-1 inline-flex items-center text-sm font-semibold text-primary-pink group-hover:text-primary-pink/90 transition-colors">
                          Learn more
                          <span className="ml-1" aria-hidden="true">
                            →
                          </span>
                        </span>
                      </div>
                    </>
                  );

                  return item.href ? (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={closeMegaMenu}
                      className={cardClass}
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div key={item.title} className={cardClass}>
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            </Container>
          </div>
        </div>
      );
    }

    // Capabilities: left intro + right = single "OUR STUDIOS" grid
    if (activeMenu === "capabilities") {
      const studios = config.columns[0]?.items ?? [];
      return (
        <div
          className="hidden xl:block fixed inset-x-0 top-0 bottom-0 z-[100]"
        >
          <div className="absolute inset-0 bg-black/40" onClick={closeMegaMenu} />
          <div
            className="absolute inset-x-0 top-0 max-h-full overflow-hidden border-b border-white/10 bg-[#050514]/95 pt-16 backdrop-blur-2xl md:pt-20"
            onMouseLeave={closeMegaMenu}
          >
            <Container className="py-6 2xl:py-8 flex gap-6 2xl:gap-8 text-white">
              <div className="w-1/3 space-y-4 max-w-sm">
                {config.eyebrow && (
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                    {config.eyebrow}
                  </p>
                )}
                <h2 className="text-2xl font-semibold leading-snug">{config.title}</h2>
                <p className="text-sm text-desc">{config.description}</p>
                <Link
                  href="/capabilities"
                  onClick={closeMegaMenu}
                  className="mt-1 inline-flex items-center text-sm font-semibold text-primary-pink hover:text-primary-pink/80"
                >
                  Learn more
                  <span className="ml-1 text-base" aria-hidden="true">→</span>
                </Link>
                <div className="mt-4 h-px w-10 bg-white/10" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-desc mb-4">
                  OUR STUDIOS
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {studios.map((item) => {
                    const IconComponent = item.iconName ? menuIconMap[item.iconName] : null;
                    const cardClass =
                      "flex gap-3 items-start rounded-[12px] border border-white/5 bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors cursor-pointer";
                    const content = (
                      <>
                        <div
                          className={cn(
                            "shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-[12px] text-white",
                            item.iconColorClass ?? "bg-primary-pink"
                          )}
                        >
                          {IconComponent && <IconComponent className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{item.title}</p>
                          {item.description && (
                            <p className="mt-0.5 text-xs text-desc">{item.description}</p>
                          )}
                        </div>
                      </>
                    );

                    return item.href ? (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={closeMegaMenu}
                        className={cardClass}
                      >
                        {content}
                      </Link>
                    ) : (
                      <div key={item.title} className={cardClass}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Container>
          </div>
        </div>
      );
    }

    // Impact Studies: left intro + scrollable case-study list (max 90% viewport)
    if (activeMenu === "impact-studies") {
      const caseStudies = config.columns[0]?.items ?? [];
      return (
        <div
          className="hidden xl:block fixed inset-x-0 top-0 bottom-0 z-[100]"
        >
          <div className="absolute inset-0 bg-black/40" onClick={closeMegaMenu} />
          <div
            className="absolute inset-x-0 top-0 flex max-h-[90%] flex-col overflow-hidden border-b border-white/10 bg-[#050514]/95 pt-16 backdrop-blur-2xl md:pt-20"
            onMouseLeave={closeMegaMenu}
          >
            <Container className="flex min-h-0 flex-1 gap-6 overflow-hidden py-6 text-white 2xl:gap-8 2xl:py-8">
              <div className="w-1/3 max-w-sm shrink-0 space-y-4">
                {config.eyebrow && (
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                    {config.eyebrow}
                  </p>
                )}
                <h2 className="text-2xl font-semibold leading-snug">{config.title}</h2>
                <p className="text-sm text-desc">{config.description}</p>
                <Link
                  href="/impact-studies"
                  onClick={closeMegaMenu}
                  className="mt-1 inline-flex items-center text-sm font-semibold text-primary-pink hover:text-primary-pink/80"
                >
                  Learn more
                  <span className="ml-1 text-base" aria-hidden="true">→</span>
                </Link>
                <div className="mt-4 h-px w-10 bg-white/10" />
              </div>
              <div
                ref={setImpactStudiesScrollNode}
                data-lenis-prevent
                data-lenis-prevent-wheel
                className="min-h-0 max-h-full flex-1 overflow-y-auto overscroll-contain pr-2 [scrollbar-gutter:stable]"
              >
                <div className="grid grid-cols-2 gap-3">
                  {caseStudies.map((item) => {
                    const href = item.href;
                    const cardClass =
                      "flex gap-3 rounded-[12px] border border-white/5 bg-white/5 p-3 transition-colors hover:bg-white/10";

                    const content = (
                      <>
                        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-[12px] bg-black/40">
                          {item.imageSrc && (
                            <Image
                              src={item.imageSrc}
                              alt={item.title}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white line-clamp-2">
                            {item.title}
                          </p>
                          {item.description && (
                            <p className="mt-0.5 text-xs text-desc line-clamp-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </>
                    );

                    return href ? (
                      <Link
                        key={item.title}
                        href={href}
                        onClick={closeMegaMenu}
                        className={cardClass}
                      >
                        {content}
                      </Link>
                    ) : (
                      <div key={item.title} className={cardClass}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Container>
          </div>
        </div>
      );
    }

    // Insights: left intro + KEY CATEGORIES + MORE INSIGHTS; right = HIGHLIGHTED POSTS (2) + LATEST POSTS (6)
    if (activeMenu === "insights") {
      const highlighted = insightsMenuData?.highlighted ?? config.columns[0]?.items ?? [];
      const latest = insightsMenuData?.latest ?? config.columns[1]?.items ?? [];
      const keyCategories = config.columns[2]?.items ?? [];
      const moreInsights = config.columns[3]?.items ?? [];
      return (
        <div
          className="hidden xl:block fixed inset-x-0 top-0 bottom-0 z-[100]"
        >
          <div className="absolute inset-0 bg-black/40" onClick={closeMegaMenu} />
          <div
            className="absolute inset-x-0 top-0 max-h-full overflow-hidden border-b border-white/10 bg-[#050514]/95 pt-16 backdrop-blur-2xl md:pt-20"
            onMouseLeave={closeMegaMenu}
          >
            <Container className="py-6 2xl:py-8 flex gap-6 2xl:gap-8 text-white">
              <div className="w-1/4 space-y-6 max-w-xs">
                {config.eyebrow && (
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                    {config.eyebrow}
                  </p>
                )}
                <h2 className="text-2xl font-semibold leading-snug">{config.title}</h2>
                <p className="text-sm text-desc">{config.description}</p>
                <Link
                  href="/blog"
                  onClick={closeMegaMenu}
                  className="mt-1 inline-flex items-center text-sm font-semibold text-primary-pink hover:text-primary-pink/80"
                >
                  Learn more
                  <span className="ml-1 text-base" aria-hidden="true">→</span>
                </Link>
                <div className="h-px w-10 bg-white/10" />
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-desc">
                    KEY CATEGORIES
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-desc">
                    {keyCategories.map((c) => (
                      <li key={c.title} className="cursor-pointer hover:text-white">
                        {c.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-desc">
                    MORE INSIGHTS
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-desc">
                    {moreInsights.map((c) => (
                      <li key={c.title} className="cursor-pointer hover:text-white">
                        {c.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-desc mb-3">
                    HIGHLIGHTED POSTS
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {highlighted.map((item) => (
                      <div
                        key={item.title}
                        className="flex gap-3 rounded-[12px] border border-white/5 bg-white/5 p-3 hover:bg-white/10 cursor-pointer"
                      >
                        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-[12px] bg-black/40">
                          {item.imageSrc && (
                            <Image src={item.imageSrc} alt={item.title} fill className="object-cover" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white line-clamp-2">{item.title}</p>
                          {item.description && (
                            <p className="mt-0.5 text-xs text-desc line-clamp-2">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-desc mb-3">
                    LATEST POSTS
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {latest.map((item) => (
                      <div
                        key={item.title}
                        className="flex gap-3 rounded-[12px] border border-white/5 bg-white/5 p-3 hover:bg-white/10 cursor-pointer"
                      >
                        <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-[12px] bg-black/40">
                          {item.imageSrc && (
                            <Image src={item.imageSrc} alt={item.title} fill className="object-cover" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white line-clamp-2">{item.title}</p>
                          {item.description && (
                            <p className="mt-0.5 text-xs text-desc line-clamp-1">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      );
    }

    // Databricks: 3 columns = intro | Partnership highlights (icons) | Insights (image cards)
    if (activeMenu === "databricks") {
      const highlights = config.columns[0]?.items ?? [];
      const insightCards = config.columns[1]?.items ?? [];
      return (
        <div
          className="hidden xl:block fixed inset-x-0 top-0 bottom-0 z-[100]"
        >
          <div className="absolute inset-0 bg-black/40" onClick={closeMegaMenu} />
          <div
            className="absolute inset-x-0 top-0 max-h-full overflow-hidden border-b border-white/10 bg-[#050514]/95 pt-16 backdrop-blur-2xl md:pt-20"
            onMouseLeave={closeMegaMenu}
          >
            <Container className="py-6 2xl:py-8 flex gap-6 2xl:gap-8 text-white">
              <div className="w-1/4 space-y-4 max-w-xs">
                {config.eyebrow && (
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                    {config.eyebrow}
                  </p>
                )}
                <h2 className="text-2xl font-semibold leading-snug">{config.title}</h2>
                <p className="text-sm text-desc">{config.description}</p>
                <div className="mt-4 h-px w-10 bg-white/10" />
              </div>
              <div className="w-1/3">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-desc mb-4">
                  HIGHLIGHTS OF OUR PARTNERSHIP
                </p>
                <div className="space-y-4">
                  {highlights.map((item) => {
                    const IconComponent = item.iconName ? menuIconMap[item.iconName] : null;
                    const cardClass =
                      "flex gap-3 items-start rounded-[12px] px-3.5 py-3 transition-colors hover:bg-white/5";
                    const content = (
                      <>
                      <div
                        className={cn(
                          "shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-[12px] text-white",
                          item.iconColorClass ?? "bg-primary-pink"
                        )}
                      >
                        {IconComponent && <IconComponent className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        {item.description && (
                          <p className="mt-0.5 text-xs text-desc">{item.description}</p>
                        )}
                      </div>
                      </>
                    );
                    return item.href ? (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={closeMegaMenu}
                        className={cardClass}
                      >
                        {content}
                      </Link>
                    ) : (
                      <div key={item.title} className={cardClass}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-desc mb-4">
                  DATABRICKS INSIGHTS
                </p>
                <div className="space-y-3">
                  {insightCards.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-3 rounded-[12px] border border-white/5 bg-white/5 p-3 hover:bg-white/10 cursor-pointer"
                    >
                      <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-[12px] bg-black/40">
                        {item.imageSrc && (
                          <Image src={item.imageSrc} alt={item.title} fill className="object-cover" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white line-clamp-2">{item.title}</p>
                        {item.description && (
                          <p className="mt-0.5 text-xs text-desc line-clamp-2">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </div>
      );
    }

    // Industries: intro | scrollable Our Industries | Industry Insights
    if (activeMenu === "industries") {
      const industryItems = config.columns[0]?.items ?? [];
      const insightItems = config.columns[1]?.items ?? [];

      return (
        <div className="hidden xl:block fixed inset-x-0 top-0 bottom-0 z-[100]">
          <div className="absolute inset-0 bg-black/40" onClick={closeMegaMenu} />
          <div
            className="absolute inset-x-0 top-0 flex max-h-[90%] flex-col overflow-hidden border-b border-white/10 bg-[#050514]/95 pt-16 backdrop-blur-2xl md:pt-20"
            onMouseLeave={closeMegaMenu}
          >
            <Container className="flex min-h-0 flex-1 gap-6 overflow-hidden py-6 text-white 2xl:gap-8 2xl:py-8">
              <div className="w-1/4 max-w-xs shrink-0 space-y-3">
                {config.eyebrow && (
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                    {config.eyebrow}
                  </p>
                )}
                <h2 className="text-2xl font-semibold leading-snug">
                  {config.title}
                </h2>
                <p className="text-sm text-desc">{config.description}</p>
                <Link
                  href="/industries"
                  onClick={closeMegaMenu}
                  className="mt-2 inline-flex items-center text-sm font-semibold text-primary-pink hover:text-primary-pink/80"
                >
                  Learn more
                  <span className="ml-1 text-base" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>

              <div className="flex min-h-0 min-w-0 flex-1 gap-6 2xl:gap-8">
                <div className="flex min-h-0 min-w-0 flex-[1.35] flex-col">
                  <p className="mb-3 shrink-0 text-xs font-semibold tracking-[0.2em] uppercase text-desc">
                    Our Industries
                  </p>
                  <div
                    ref={setIndustriesScrollNode}
                    data-lenis-prevent
                    data-lenis-prevent-wheel
                    className="min-h-0 flex-1 space-y-2 overflow-y-auto overscroll-contain pr-2 [scrollbar-gutter:stable]"
                  >
                    {industryItems.map((item) => {
                      const IconComponent = item.iconName
                        ? menuIconMap[item.iconName]
                        : null;
                      const cardClass =
                        "group flex gap-3 items-start rounded-[12px] border border-white/5 bg-white/5 px-3 py-2.5 transition-colors duration-200 hover:bg-white/10 cursor-pointer";
                      const content = (
                        <>
                          <div
                            className={cn(
                              "mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] text-white",
                              item.iconColorClass ?? "bg-primary-pink"
                            )}
                          >
                            {IconComponent ? (
                              <IconComponent className="h-5 w-5 shrink-0" />
                            ) : null}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">
                              {item.title}
                            </p>
                            {item.description ? (
                              <p className="mt-1 text-xs text-desc">
                                {item.description}
                              </p>
                            ) : null}
                          </div>
                        </>
                      );

                      return item.href ? (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={closeMegaMenu}
                          className={cardClass}
                        >
                          {content}
                        </Link>
                      ) : (
                        <div key={item.title} className={cardClass}>
                          {content}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex w-[min(340px,38%)] shrink-0 flex-col">
                  <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-desc">
                    Industry Insights
                  </p>
                  <div className="space-y-2">
                    {insightItems.map((item) => (
                      <div
                        key={item.title}
                        className="flex cursor-pointer gap-3 rounded-[12px] border border-white/5 bg-white/5 p-2 transition-colors duration-200 hover:bg-white/10"
                      >
                        <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-[12px] bg-black/40">
                          {item.imageSrc ? (
                            <Image
                              src={item.imageSrc}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          ) : null}
                        </div>
                        <div className="flex min-w-0 flex-col justify-center">
                          <p className="text-sm font-medium text-white line-clamp-2">
                            {item.title}
                          </p>
                          {item.description ? (
                            <p className="mt-1 text-xs text-desc line-clamp-2">
                              {item.description}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      );
    }

    return (
      <div
        className="hidden xl:block fixed inset-x-0 top-0 bottom-0 z-[100]"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={closeMegaMenu}
        />

        {/* Mega menu panel */}
        <div
          className="absolute inset-x-0 top-0 max-h-full overflow-hidden border-b border-white/10 bg-[#050514]/95 pt-16 backdrop-blur-2xl md:pt-20"
          onMouseLeave={closeMegaMenu}
        >
          <Container className="flex gap-6 py-5 text-white 2xl:gap-8 2xl:py-6">
            {/* Left narrative column */}
            <div className="w-1/4 max-w-xs shrink-0 space-y-3">
              {config.eyebrow && (
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                  {config.eyebrow}
                </p>
              )}
              <h2 className="text-2xl font-semibold leading-snug">
                {config.title}
              </h2>
              <p className="text-sm text-desc">{config.description}</p>
              {activeMenu !== "ai-pillars" ? (
                <Link
                  href={
                    activeMenu === "ai-workflows"
                      ? "/ai-workflows"
                      : activeMenu === "capabilities"
                        ? "/capabilities"
                        : "#"
                  }
                  onClick={closeMegaMenu}
                  className="mt-2 inline-flex items-center text-sm font-semibold text-primary-pink hover:text-primary-pink/80"
                >
                  Learn more
                  <span className="ml-1 text-base" aria-hidden="true">
                    →
                  </span>
                </Link>
              ) : null}
            </div>

            {/* Right content columns */}
            <div className="grid flex-1 grid-cols-2 gap-x-5 gap-y-4 2xl:gap-x-7">
              {config.columns.map((column) => (
                <div key={column.title} className="flex flex-col space-y-3">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-desc">
                    {column.title}
                  </p>
                  <div className="space-y-2">
                    {column.items.map((item) => {
                      const hasImage = !!item.imageSrc;
                      const cardClass = cn(
                        "group rounded-[12px] border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-200 cursor-pointer block",
                        hasImage ? "p-2" : "px-3 py-2.5"
                      );
                      const cardContent = (
                        <>
                          {hasImage ? (
                            <div className="flex gap-3">
                              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[12px] bg-black/40">
                                {item.imageSrc && (
                                  <Image
                                    src={item.imageSrc}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                  />
                                )}
                              </div>
                              <div className="flex flex-col justify-center">
                                <p className="text-sm font-medium text-white">
                                  {item.title}
                                </p>
                                {item.description && (
                                  <p className="mt-1 text-xs text-desc line-clamp-2">
                                    {item.description}
                                  </p>
                                )}
                                {item.tag && (
                                  <p className="mt-1 inline-flex h-10 items-center justify-center rounded-full leading-none bg-white/5 px-2 py-0 text-[11px] font-medium text-desc">
                                    {item.tag}
                                  </p>
                                )}
                              </div>
                            </div>
                          ) : (
                            <>
                              {item.iconName ? (
                                <div className="flex gap-3 items-start">
                                  <div
                                    className={cn(
                                      "mt-0.5 shrink-0 inline-flex h-10 w-10 items-center justify-center text-white",
                                      activeMenu === "ai-pillars"
                                        ? "rounded-full"
                                        : "rounded-[12px]",
                                      item.iconColorClass ?? "bg-primary-pink"
                                    )}
                                  >
                                    {(() => {
                                      const IconC = item.iconName ? menuIconMap[item.iconName] : null;
                                      return IconC ? <IconC className="w-5 h-5 shrink-0" /> : null;
                                    })()}
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-white">
                                      {item.title}
                                    </p>
                                    {item.description && (
                                      <p className="mt-1 text-xs text-desc">
                                        {item.description}
                                      </p>
                                    )}
                                    {item.tag && (
                                      <p className="mt-1 inline-flex h-10 items-center justify-center rounded-full leading-none bg-white/5 px-2 py-0 text-[11px] font-medium text-desc">
                                        {item.tag}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <p className="text-sm font-medium text-white">
                                    {item.title}
                                  </p>
                                  {item.description && (
                                    <p className="mt-1 text-xs text-desc">
                                      {item.description}
                                    </p>
                                  )}
                                  {item.tag && (
                                    <p className="mt-1 inline-flex h-10 items-center justify-center rounded-full leading-none bg-white/5 px-2 py-0 text-[11px] font-medium text-desc">
                                      {item.tag}
                                    </p>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      );

                      return item.href ? (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={closeMegaMenu}
                          className={cardClass}
                        >
                          {cardContent}
                        </Link>
                      ) : (
                        <div key={item.title} className={cardClass}>
                          {cardContent}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[110]",
          "h-16 md:h-20",
          SCROLLBAR_COMPENSATION_CLASS,
          isMegaMenuOpen
            ? "bg-transparent shadow-none transition-none"
            : cn(
                "transition-[background-color,box-shadow,backdrop-filter] duration-300",
                useSolidNav
                  ? "bg-black/60 backdrop-blur-md shadow-sm"
                  : "bg-transparent"
              )
        )}
      >
        <Container className="h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <Image
              src="/assets/images/logo.svg"
              alt="eForte Logo"
              width={105}
              height={32}
              className="h-6 md:h-8 w-full max-w-28"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeMenu === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onMouseEnter={() => setActiveMenu(link.id)}
                  onFocus={() => setActiveMenu(link.id)}
                  className={cn(
                    "relative text-base font-normal transition-colors duration-200",
                    isActive ? "text-white" : "text-white",
                    "hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-primary-pink transition-transform duration-200",
                      isActive && "scale-x-100"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden xl:block">
            <QuoteCTA
              className={cn(
                "px-4 md:px-6 h-10 rounded-full leading-none flex items-center justify-center",
                "text-sm md:text-base font-semibold",
                "bg-primary-pink text-white border border-primary-pink",
                "hover:bg-transparent transition-all duration-200",
                "whitespace-nowrap"
              )}
            >
              Let&apos;s build intelligence together
            </QuoteCTA>
          </div>

          {/* Mobile/Tablet Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="xl:hidden p-2 rounded-[12px] transition-colors duration-200 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </Container>
      </nav>

      {renderMegaMenu()}

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[110] xl:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        )}
        onClick={closeMobileMenu}
      >
        {/* Backdrop */}
        {/* <div className="absolute inset-0 bg-black/50" /> */}

        {/* Menu Panel - Full Width, Below Navbar (glass effect) */}
        <div
          className={cn(
            "absolute top-16 md:top-20 left-0 right-0 bottom-0 w-full",
            "bg-black/70 backdrop-blur-xl transform transition-transform duration-300",
            isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Navigation Links */}
            <nav
              className="flex-1 overflow-y-auto overscroll-contain py-4"
              data-lenis-prevent
            >
              <div className="flex flex-col">
                {navLinks.map((link) => {
                  const config = resolveMegaMenuConfig(link.id, aiPillarsInsights);
                  const columns = getMobileMenuColumns(link.id, config);
                  const hasChildren = columns.length > 0;
                  const isExpanded = expandedMobileIds.includes(link.id);

                  return (
                    <div
                      key={link.id}
                      className="border-b border-white/10"
                    >
                      {hasChildren ? (
                        <button
                          type="button"
                          onClick={() => toggleMobileSection(link.id)}
                          aria-expanded={isExpanded}
                          className="flex w-full items-center justify-between gap-3 px-6 py-4 text-left text-base font-normal text-white transition-colors duration-200 hover:bg-white/10"
                        >
                          <span>{link.label}</span>
                          <HiChevronDown
                            className={cn(
                              "h-5 w-5 shrink-0 text-white/70 transition-transform duration-200",
                              isExpanded && "rotate-180"
                            )}
                          />
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          className="block px-6 py-4 text-base font-normal text-white transition-colors duration-200 hover:bg-white/10"
                        >
                          {link.label}
                        </Link>
                      )}

                      {hasChildren && isExpanded && (
                        <div className="space-y-5 bg-black/30 px-6 pb-5 pt-1">
                          <Link
                            href={link.href}
                            onClick={closeMobileMenu}
                            className="inline-flex items-center text-sm font-semibold text-primary-pink"
                          >
                            View all
                            <span className="ml-1" aria-hidden="true">
                              →
                            </span>
                          </Link>

                          {columns.map((column) => (
                            <div key={column.title}>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-desc">
                                {column.title}
                              </p>
                              <div className="mt-2 space-y-1">
                                {column.items.map((item) => {
                                  const ItemIcon = item.iconName
                                    ? menuIconMap[item.iconName]
                                    : null;

                                  const itemContent = (
                                    <>
                                      {ItemIcon && (
                                        <span
                                          className={cn(
                                            "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[12px] text-white",
                                            item.iconColorClass ?? "bg-primary-pink"
                                          )}
                                        >
                                          <ItemIcon className="h-4 w-4" />
                                        </span>
                                      )}
                                      <span className="text-sm leading-snug text-white/90">
                                        {item.title}
                                      </span>
                                    </>
                                  );

                                  return item.href ? (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      onClick={closeMobileMenu}
                                      className="flex items-start gap-3 rounded-[12px] px-2 py-2 transition-colors duration-200 hover:bg-white/10"
                                    >
                                      {itemContent}
                                    </Link>
                                  ) : (
                                    <div
                                      key={item.title}
                                      className="flex items-start gap-3 rounded-[12px] px-2 py-2"
                                    >
                                      {itemContent}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>

            {/* Mobile CTA Button */}
            <div className="p-6 border-t border-white/10">
              <QuoteCTA
                onOpen={closeMobileMenu}
                className="w-full h-10 rounded-full leading-none flex items-center justify-center text-sm font-semibold bg-primary-pink text-white border border-primary-pink hover:bg-primary-pink/90 transition-all duration-200"
              >
                Let&apos;s build intelligence together
              </QuoteCTA>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
