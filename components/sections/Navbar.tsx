"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import Container from "@/components/atoms/Container";
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
} from "react-icons/hi";
import { FiLink } from "react-icons/fi";
import type { IconType } from "react-icons";

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

const navLinks: NavLink[] = [
  { id: "ai-pillars", label: "AI Pillars", href: "#ai-pillars" },
  { id: "capabilities", label: "Capabilities", href: "#capabilities" },
  { id: "industries", label: "Industries", href: "#industries" },
  { id: "impact-studies", label: "Impact Studies", href: "#impact-studies" },
  { id: "insights", label: "Insights", href: "/blog" },
  { id: "about-us", label: "About Us", href: "#about-us" },
  { id: "databricks", label: "Databricks", href: "#databricks" },
];

const megaMenuConfig: Record<string, MegaMenuConfig> = {
  "ai-pillars": {
    eyebrow: "AI Pillars",
    title: "Evolve from Digital-Native to AI-Native",
    description:
      "We are shaping the future of next-generation applications by seamlessly integrating advanced data engineering and AI solutions with high-quality UX and robust security.",
    columns: [
      {
        title: "Featured Pillars",
        items: [
          {
            title: "AccelerateAI",
            description:
              "Our comprehensive framework of best practices, workflows and AI methodologies.",
            iconName: "lightning-bolt",
            iconColorClass: "bg-[#2563eb]",
          },
          {
            title: "Agentic Factory",
            description:
              "Build AI agents tailored for industry-specific challenges.",
            iconName: "view-list",
            iconColorClass: "bg-[#2563eb]",
          },
          {
            title: "Data Foundation",
            description:
              "Establish the data foundations of next-generation businesses.",
            iconName: "database",
            iconColorClass: "bg-[#2563eb]",
          },
        ],
      },
      {
        title: "AI Insights",
        items: [
          {
            title: "White paper: Building powerful & scalable AI agents",
            description:
              "Discover our modular architecture for building agentic AI systems using Databricks and LangGraph.",
            tag: "White paper",
            imageSrc: "/assets/images/velocity-ai/insight-1.png",
          },
          {
            title: "White paper: Implementing AI in today's world",
            description:
              "We showcase real-world success stories of our work in AI.",
            tag: "White paper",
            imageSrc: "/assets/images/velocity-ai/insight-2.png",
          },
          {
            title: "Insight: How our Prompt System brings structure to AI-powered developments",
            description:
              "Our Prompt System adds an orchestrated multi-agent workflow inside tools like Cursor and Copilot.",
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
      "Our Studio delivery model enables us to address challenges head-on by bringing technology and domain experts together. This ensures we deliver immediate business value with our customized solutions.",
    columns: [
      {
        title: "Our Studios",
        items: [
          {
            title: "Product Design",
            description: "UX research, service design, design thinking, and UI design.",
            iconName: "pencil",
            iconColorClass: "bg-[#7C4CFF]",
          },
          {
            title: "Artificial Intelligence",
            description: "Agentic AI, GenAI, machine learning, NLP, computer vision.",
            iconName: "chip",
            iconColorClass: "bg-[#ef4444]",
          },
          {
            title: "Data",
            description: "Data manipulation, engineering, visualization, and prediction.",
            iconName: "database",
            iconColorClass: "bg-[#0ea5e9]",
          },
          {
            title: "App Solutions",
            description: "Native or hybrid, SDK development, integrations, app store positioning.",
            iconName: "device-mobile",
            iconColorClass: "bg-[#f97316]",
          },
          {
            title: "Cloud, SRE, & DevOps",
            description: "Cloud migration, CI/CD pipeline development, SRE, infrastructure-as-code.",
            iconName: "cloud",
            iconColorClass: "bg-[#1e40af]",
          },
          {
            title: "Cybersecurity",
            description: "Secure SDLC, AI-powered cybersecurity, vCISO, penetration testing, AI security assessments.",
            iconName: "shield-check",
            iconColorClass: "bg-[#0f172a]",
          },
          {
            title: "Platform Engineering",
            description: "Robust infrastructures, scalable APIs, efficient deployment.",
            iconName: "cog",
            iconColorClass: "bg-[#1e3a8a]",
          },
          {
            title: "Quality Assurance",
            description: "AI-augmented QA, test automation, CI/CD, load and performance testing, data testing.",
            iconName: "check-circle",
            iconColorClass: "bg-[#22c55e]",
          },
          {
            title: "Embedded Engineering",
            description: "Development for semiconductors, embedded systems, IoT, & microcontrollers.",
            iconName: "cube",
            iconColorClass: "bg-[#eab308]",
          },
          {
            title: "Product Management",
            description: "Product consulting, process management, monetization.",
            iconName: "view-grid",
            iconColorClass: "bg-[#2563eb]",
          },
          {
            title: "Blockchain",
            description: "Smart contracts, decentralized apps, blockchain integration.",
            iconName: "link",
            iconColorClass: "bg-[#a855f7]",
          },
        ],
      },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Industries",
    description:
      "We partner with leading organizations across industries, delivering technology solutions that drive transformation and measurable results. Our expertise empowers clients to achieve business goals through tailored digital strategies.",
    columns: [
      {
        title: "Our Industries",
        items: [
          {
            title: "Banking",
            description: "Modernize banking systems for a secure, compliant, AI-ready enterprise ecosystem.",
            iconName: "office-building",
            iconColorClass: "bg-[#7C4CFF]",
          },
          {
            title: "Financial Services",
            description: "Secure, data and AI-driven financial services - from paytech and financial infrastructure to risk, compliance and analytics.",
            iconName: "currency-dollar",
            iconColorClass: "bg-[#7C4CFF]",
          },
          {
            title: "Health & Wellbeing",
            description: "People-centric healthcare solutions, from virtual care to integrations and smart devices.",
            iconName: "heart",
            iconColorClass: "bg-[#7C4CFF]",
          },
          {
            title: "Insurance",
            description: "AI-powered insurance solutions - from accelerating policy lifecycle management to accelerating claims processing.",
            iconName: "shield-check",
            iconColorClass: "bg-[#7C4CFF]",
          },
          {
            title: "Media & Entertainment",
            description: "AI-native solutions to deliver personalized, real-time, and immersive experiences at scale.",
            iconName: "play",
            iconColorClass: "bg-[#7C4CFF]",
          },
          {
            title: "Hi-Tech & Semiconductors",
            description: "Semiconductor design, firmware, and IoT development, AI-powered embedded systems.",
            iconName: "chip",
            iconColorClass: "bg-[#7C4CFF]",
          },
        ],
      },
      {
        title: "Industry Insights",
        items: [
          {
            title: "The healthcare cybersecurity crisis: Lessons from Blackout-26 and how to protect patient data under HIPAA",
            description: "Blackout-26 revealed how cyberattacks can cripple healthcare operations and dire...",
            imageSrc: "/assets/images/velocity-ai/insight-1.png",
          },
          {
            title: "List of digital health, healthcare IT, & medtech conferences in 2026",
            description: "Check out our curated list of the most important summits for 2026 in the Digital...",
            imageSrc: "/assets/images/velocity-ai/insight-2.png",
          },
          {
            title: "List of fintech conferences in 2026",
            description: "If you're interested in expanding your understanding of the Fintech industry, co...",
            imageSrc: "/assets/images/velocity-ai/insight-3.png",
          },
          {
            title: "Webinar: Agentic AI in finance - How to build Agents using Databricks and LangGraph",
            description: "In this post, I share how to build production-grade systems in finance. By combi...",
            imageSrc: "/assets/images/velocity-ai/case-study-myrow.png",
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
        items: [
          {
            title: "Avant",
            description: "Explore how we and Avant are building a new generation of data and AI-driven financial services for their 3 million+ customers.",
          },
          {
            title: "Shopify",
            description: "See how we help commerce brands scale with data and AI.",
          },
          {
            title: "Tabula Rasa",
            description: "Case study on tailored AI and data solutions.",
          },
          {
            title: "Computer Vision",
            description: "Real-world computer vision and AI implementations.",
          },
          {
            title: "OnePay",
            description: "Payments and fintech transformation with data and AI.",
          },
          {
            title: "MyRow",
            description: "Turning dispersed documents into searchable intelligence.",
          },
          {
            title: "YouScience",
            description: "Data and AI for education and talent solutions.",
          },
          {
            title: "Wearables",
            description: "IoT, wearables, and embedded AI solutions.",
          },
        ],
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
    title: "From digital-native to AI-native",
    description:
      "With decades of experience, we bring together strategy, design, data, and engineering to deliver AI-native products.",
    columns: [
      {
        title: "About Us",
        items: [
          {
            title: "About eForte",
            tag: "ABOUT US",
            description: "With 20+ years of experience, our expertise spans the AI lifecycle, from data platforms to agentic products.",
            imageSrc: "/assets/images/landing/Expertise.png",
          },
          {
            title: "Careers",
            tag: "CAREERS",
            description: "Shape the AI future with cross-functional teams working on data, AI, and human-centered product design.",
            imageSrc: "/assets/images/velocity-ai/cta-team.png",
          },
          {
            title: "Locations",
            tag: "LOCATIONS",
            description: "Global presence with local delivery, so we can partner with you wherever you are.",
            imageSrc: "/assets/images/landing/navigate.png",
          },
        ],
      },
      {
        title: "More About Us",
        items: [
          { title: "Events & Webinars" },
          { title: "Press & Announcements" },
          { title: "Diversity & Inclusion" },
          { title: "Trust & Security" },
        ],
      },
    ],
  },
  databricks: {
    eyebrow: "Databricks",
    title: "Databricks Solutions",
    description:
      "We've empowered numerous industry leaders to harness the full potential of Databricks' Intelligence platform, driving transformative results and measurable business impact.",
    columns: [
      {
        title: "Highlights of Our Partnership",
        items: [
          {
            title: "Select Tier Partner",
            description: "We are a Select Tier Databricks partner, delivering scalable, secure data and AI solutions on Databricks.",
            iconName: "badge-check",
            iconColorClass: "bg-primary-pink",
          },
          {
            title: "200+ certified Databricks engineers",
            description: "We have 200+ certified engineers on the Databricks Intelligence Platform.",
            iconName: "user-group",
            iconColorClass: "bg-primary-pink",
          },
          {
            title: "20+ years of data experience",
            description: "We have been providing end-to-end data services for over 20 years.",
            iconName: "calendar",
            iconColorClass: "bg-primary-pink",
          },
        ],
      },
      {
        title: "Databricks Insights",
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
        ],
      },
    ],
  },
};

export default function Navbar() {
  const isScrolled = useScroll(10);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMenu(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  };

  const closeMegaMenu = () => {
    setActiveMenu(null);
  };

  const renderMegaMenu = () => {
    if (!activeMenu || isMobileMenuOpen) return null;

    const config = megaMenuConfig[activeMenu];
    if (!config) return null;

    // Special layout for About Us to more closely match reference structure
    if (activeMenu === "about-us") {
      const aboutCards = config.columns[0]?.items ?? [];

      return (
        <div
          className="hidden lg:block fixed inset-x-0 top-16 md:top-20 bottom-0 z-40"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeMegaMenu}
          />

          {/* Mega menu panel */}
          <div
            className="absolute inset-x-0 top-0 bg-[#050514]/95 backdrop-blur-2xl border-b border-white/10"
            onMouseLeave={closeMegaMenu}
          >
            <Container className="py-10 flex gap-10 text-white">
              {/* Left narrative + link groups */}
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
                <button className="mt-1 inline-flex items-center text-sm font-semibold text-primary-pink hover:text-primary-pink/80">
                  Learn more
                  <span className="ml-1 text-base" aria-hidden="true">
                    →
                  </span>
                </button>

                <div className="mt-4 h-px w-10 bg-white/10" />

                <div className="space-y-6 text-sm">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                      About Us
                    </p>
                    <ul className="mt-2 space-y-1.5 text-desc">
                      <li className="cursor-pointer hover:text-white">
                        Events &amp; Webinars
                      </li>
                      <li className="cursor-pointer hover:text-white">
                        Press &amp; Announcements
                      </li>
                      <li className="cursor-pointer hover:text-white">
                        Diversity &amp; Inclusion
                      </li>
                      <li className="cursor-pointer hover:text-white">
                        Trust &amp; Security
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                      Partners
                    </p>
                    <ul className="mt-2 space-y-1.5 text-desc">
                      <li className="cursor-pointer hover:text-white">
                        Databricks
                      </li>
                      <li className="cursor-pointer hover:text-white">
                        Amazon Web Services (AWS)
                      </li>
                      <li className="cursor-pointer hover:text-white">
                        Snowflake
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right image cards row */}
              <div className="flex-1 grid grid-cols-3 gap-6">
                {aboutCards.map((item) => (
                  <div
                    key={item.title}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/6 shadow-lg shadow-black/20 hover:bg-white/8 hover:border-white/15 transition-all duration-200 cursor-pointer"
                  >
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
                      <button
                        type="button"
                        className="mt-auto pt-1 inline-flex items-center text-sm font-semibold text-primary-pink hover:text-primary-pink/90 transition-colors"
                      >
                        Learn more
                        <span className="ml-1" aria-hidden="true">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      );
    }

    // Capabilities: left intro + right = single "OUR STUDIOS" grid (11 items, 2 columns)
    if (activeMenu === "capabilities") {
      const studios = config.columns[0]?.items ?? [];
      return (
        <div
          className="hidden lg:block fixed inset-x-0 top-16 md:top-20 bottom-0 z-40"
        >
          <div className="absolute inset-0 bg-black/40" onClick={closeMegaMenu} />
          <div
            className="absolute inset-x-0 top-0 bg-[#050514]/95 backdrop-blur-2xl border-b border-white/10"
            onMouseLeave={closeMegaMenu}
          >
            <Container className="py-10 flex gap-10 text-white">
              <div className="w-1/3 space-y-4 max-w-sm">
                {config.eyebrow && (
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                    {config.eyebrow}
                  </p>
                )}
                <h2 className="text-2xl font-semibold leading-snug">{config.title}</h2>
                <p className="text-sm text-desc">{config.description}</p>
                <button className="mt-1 inline-flex items-center text-sm font-semibold text-primary-pink hover:text-primary-pink/80">
                  Learn more
                  <span className="ml-1 text-base" aria-hidden="true">→</span>
                </button>
                <div className="mt-4 h-px w-10 bg-white/10" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-desc mb-4">
                  OUR STUDIOS
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {studios.map((item) => {
                    const IconComponent = item.iconName ? menuIconMap[item.iconName] : null;
                    return (
                    <div
                      key={item.title}
                      className="flex gap-3 items-start rounded-lg border border-white/5 bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div
                        className={cn(
                          "shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl text-white",
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
                    </div>
                  );})}
                </div>
              </div>
            </Container>
          </div>
        </div>
      );
    }

    // Impact Studies: left intro + right = 8 case studies in 2-column grid
    if (activeMenu === "impact-studies") {
      const caseStudies = config.columns[0]?.items ?? [];
      return (
        <div
          className="hidden lg:block fixed inset-x-0 top-16 md:top-20 bottom-0 z-40"
        >
          <div className="absolute inset-0 bg-black/40" onClick={closeMegaMenu} />
          <div
            className="absolute inset-x-0 top-0 bg-[#050514]/95 backdrop-blur-2xl border-b border-white/10"
            onMouseLeave={closeMegaMenu}
          >
            <Container className="py-10 flex gap-10 text-white">
              <div className="w-1/3 space-y-4 max-w-sm">
                {config.eyebrow && (
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                    {config.eyebrow}
                  </p>
                )}
                <h2 className="text-2xl font-semibold leading-snug">{config.title}</h2>
                <p className="text-sm text-desc">{config.description}</p>
                <button className="mt-1 inline-flex items-center text-sm font-semibold text-primary-pink hover:text-primary-pink/80">
                  Learn more
                  <span className="ml-1 text-base" aria-hidden="true">→</span>
                </button>
                <div className="mt-4 h-px w-10 bg-white/10" />
              </div>
              <div className="flex-1 grid grid-cols-2 gap-x-10 gap-y-0">
                {caseStudies.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-white/10 pb-4 mb-4 cursor-pointer hover:opacity-90"
                  >
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    {item.description && (
                      <p className="mt-1 text-xs text-desc line-clamp-2">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      );
    }

    // Insights: left intro + KEY CATEGORIES + MORE INSIGHTS; right = HIGHLIGHTED POSTS (2) + LATEST POSTS (6)
    if (activeMenu === "insights") {
      const highlighted = config.columns[0]?.items ?? [];
      const latest = config.columns[1]?.items ?? [];
      const keyCategories = config.columns[2]?.items ?? [];
      const moreInsights = config.columns[3]?.items ?? [];
      return (
        <div
          className="hidden lg:block fixed inset-x-0 top-16 md:top-20 bottom-0 z-40"
        >
          <div className="absolute inset-0 bg-black/40" onClick={closeMegaMenu} />
          <div
            className="absolute inset-x-0 top-0 bg-[#050514]/95 backdrop-blur-2xl border-b border-white/10"
            onMouseLeave={closeMegaMenu}
          >
            <Container className="py-10 flex gap-10 text-white">
              <div className="w-1/4 space-y-6 max-w-xs">
                {config.eyebrow && (
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                    {config.eyebrow}
                  </p>
                )}
                <h2 className="text-2xl font-semibold leading-snug">{config.title}</h2>
                <p className="text-sm text-desc">{config.description}</p>
                <button className="mt-1 inline-flex items-center text-sm font-semibold text-primary-pink hover:text-primary-pink/80">
                  Learn more
                  <span className="ml-1 text-base" aria-hidden="true">→</span>
                </button>
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
                        className="flex gap-3 rounded-xl border border-white/5 bg-white/5 p-3 hover:bg-white/10 cursor-pointer"
                      >
                        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-black/40">
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
                        className="flex gap-3 rounded-xl border border-white/5 bg-white/5 p-3 hover:bg-white/10 cursor-pointer"
                      >
                        <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-lg bg-black/40">
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
          className="hidden lg:block fixed inset-x-0 top-16 md:top-20 bottom-0 z-40"
        >
          <div className="absolute inset-0 bg-black/40" onClick={closeMegaMenu} />
          <div
            className="absolute inset-x-0 top-0 bg-[#050514]/95 backdrop-blur-2xl border-b border-white/10"
            onMouseLeave={closeMegaMenu}
          >
            <Container className="py-10 flex gap-8 text-white">
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
                    return (
                    <div key={item.title} className="flex gap-3 items-start">
                      <div
                        className={cn(
                          "shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl text-white",
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
                      className="flex gap-3 rounded-xl border border-white/5 bg-white/5 p-3 hover:bg-white/10 cursor-pointer"
                    >
                      <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-black/40">
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

    return (
      <div
        className="hidden lg:block fixed inset-x-0 top-16 md:top-20 bottom-0 z-40"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={closeMegaMenu}
        />

        {/* Mega menu panel */}
        <div
          className="absolute inset-x-0 top-0 bg-[#050514]/95 backdrop-blur-2xl border-b border-white/10"
          onMouseLeave={closeMegaMenu}
        >
          <Container className="py-10 flex gap-10 text-white">
            {/* Left narrative column */}
            <div className="w-1/3 space-y-4 max-w-sm">
              {config.eyebrow && (
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink">
                  {config.eyebrow}
                </p>
              )}
              <h2 className="text-2xl font-semibold leading-snug">
                {config.title}
              </h2>
              <p className="text-sm text-desc">{config.description}</p>
              <button className="mt-2 inline-flex items-center text-sm font-semibold text-primary-pink hover:text-primary-pink/80">
                Learn more
                <span className="ml-1 text-base" aria-hidden="true">
                  →
                </span>
              </button>
            </div>

            {/* Right content columns */}
            <div className="flex-1 grid grid-cols-2 gap-10">
              {config.columns.map((column) => (
                <div key={column.title} className="space-y-4">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-desc">
                    {column.title}
                  </p>
                  <div className="space-y-3">
                    {column.items.map((item) => {
                      const hasImage = !!item.imageSrc;

                      return (
                        <div
                          key={item.title}
                          className={cn(
                            "group rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-200 cursor-pointer",
                            hasImage ? "p-2" : "px-4 py-3"
                          )}
                        >
                          {hasImage ? (
                            <div className="flex gap-3">
                              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-black/40">
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
                                  <p className="mt-1 inline-flex items-center rounded-full bg-white/5 px-2 py-0.5 text-[11px] font-medium text-desc">
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
                                        : "rounded-xl",
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
                                      <p className="mt-1 inline-flex items-center rounded-full bg-white/5 px-2 py-0.5 text-[11px] font-medium text-desc">
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
                                    <p className="mt-1 inline-flex items-center rounded-full bg-white/5 px-2 py-0.5 text-[11px] font-medium text-desc">
                                      {item.tag}
                                    </p>
                                  )}
                                </>
                              )}
                            </>
                          )}
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "h-16 md:h-20",
          isScrolled || isMobileMenuOpen
            ? "bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-sm"
            : "bg-transparent"
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
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
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
                    isActive ? "text-white" : "text-desc",
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
          <div className="hidden lg:block">
            <Link
              href="#"
              className={cn(
                "px-4 md:px-6 h-12 rounded-md flex items-center justify-center",
                "text-sm md:text-base font-semibold",
                "bg-primary-pink text-white border border-primary-pink",
                "hover:bg-transparent transition-all duration-200",
                "whitespace-nowrap"
              )}
            >
              Let&apos;s build intelligence together.
            </Link>
          </div>

          {/* Mobile/Tablet Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md transition-colors duration-200 flex items-center justify-center text-white"
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
          "fixed inset-0 z-50 lg:hidden transition-all duration-300",
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
            <nav className="flex-1 overflow-y-auto py-6">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="px-6 py-4 text-base font-normal text-white hover:bg-white/10 transition-colors duration-200 border-b border-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile CTA Button */}
            <div className="p-6 border-t border-white/10">
              <Link
                href="#"
                onClick={closeMobileMenu}
                className="w-full h-12 rounded-md flex items-center justify-center text-sm font-semibold bg-primary-pink text-white border border-primary-pink hover:bg-primary-pink/90 transition-all duration-200"
              >
                Let&apos;s build intelligence together.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
