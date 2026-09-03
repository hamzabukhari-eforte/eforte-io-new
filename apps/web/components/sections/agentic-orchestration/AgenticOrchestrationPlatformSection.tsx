"use client";

import { motion } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { FaRobot } from "react-icons/fa";
import {
  HiOutlineArrowsPointingOut,
  HiOutlineChartBar,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCircleStack,
  HiOutlineCloudArrowUp,
  HiOutlineCog6Tooth,
  HiOutlineCpuChip,
  HiOutlineCube,
  HiOutlineDevicePhoneMobile,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineIdentification,
  HiOutlineLightBulb,
  HiOutlineLockClosed,
  HiOutlineRocketLaunch,
  HiOutlineServerStack,
  HiOutlineShieldCheck,
  HiOutlineShieldExclamation,
} from "react-icons/hi2";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { cn } from "@/lib/utils";
import diagram from "./agentic-platform-diagram.module.css";
import AgenticPlatformConnectors from "./AgenticPlatformConnectors";

const flowEllipses = [
  {
    title: "Client Applications",
    subtitle: "Web, Mobile & Enterprise Apps",
    tone: "client" as const,
    connector: "ellipse-client",
  },
  {
    title: "eForte Agentic Platform",
    subtitle: "AI-Powered Intelligence Layer",
    tone: "platform" as const,
    connector: "ellipse-platform",
  },
  {
    title: "Azure | UX Pilot AI | AWS | Nvidia",
    subtitle: "Underlying Infrastructure & AI Services",
    tone: "infra" as const,
    connector: "ellipse-infra",
  },
];

function FlowEllipse({
  title,
  subtitle,
  tone,
  connector,
}: (typeof flowEllipses)[number]) {
  return (
    <div
      data-connector={connector}
      className={cn(
        diagram.ellipse,
        tone === "client" && diagram.client,
        tone === "platform" && diagram.platform,
        tone === "infra" && diagram.infrastructure,
        tone === "client" && diagram.pulse
      )}
    >
      <h3 className={diagram.ellipseTitle}>{title}</h3>
      <p className={diagram.ellipseSubtitle}>{subtitle}</p>
    </div>
  );
}

function FlowArrow() {
  return <div className={diagram.flowArrow} />;
}

type PlatformCardTone = "app" | "agent" | "infra";

function PlatformCard({
  title,
  subtitle,
  icon,
  tone = "agent",
  showArrow = false,
  compact = false,
}: {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  tone?: PlatformCardTone;
  showArrow?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        diagram.card,
        compact && diagram.compact,
        tone === "app" && diagram.topCard,
        tone === "infra" && diagram.bottomCard
      )}
    >
      {icon && (
        <div
          className={cn(
            diagram.icon,
            tone === "app" && diagram.pinkIcon,
            tone === "infra" && diagram.cyanIcon
          )}
        >
          {icon}
        </div>
      )}
      <div className={diagram.content}>
        <h3 className={diagram.contentTitle}>{title}</h3>
        {subtitle && <p className={diagram.contentSubtitle}>{subtitle}</p>}
      </div>
      {showArrow && <span className={diagram.arrowRight}>→</span>}
    </div>
  );
}

const coreCards = [
  {
    title: "Velocity AI – Security",
    icon: HiOutlineLockClosed,
    description: "The platform is designed to operate inside your AI infrastructure and follows OWASP best practices for LLM applications, prioritizing secure design from the ground up.",
  },
  {
    title: "Agentic Orchestration – Extensibility",
    icon: HiOutlineRocketLaunch,
    description: "Agents and libraries are built for customization, and the architecture makes it straightforward to add new agents or extend existing ones for specific use cases.",
  },
  {
    title: "Portability – Platform‑agnostic",
    icon: HiOutlineCube,
    description: "The platform runs on top of a multi‑agent orchestrator framework (such as LangGraph) that can operate on any modern AI infrastructure.",
  },
];

export default function AgenticOrchestrationPlatformSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section
      ref={ref}
      id="characteristics"
      className={`${section.padding} bg-black relative overflow-hidden`}
    >
      <div className={`${section.container} flex flex-col items-center relative z-10`}>
        <motion.p
          className={`${typography.sectionLabel} mb-4`}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          OUR SOLUTIONS
        </motion.p>
        <motion.h2
          className={`${typography.sectionTitle} md:text-[48px] lg:text-[48px] font-bold text-center text-white mb-6`}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
        >
          eForte Agentic Platform
        </motion.h2>
        <motion.p
          className={`${typography.lead} text-white text-center max-w-3xl mx-auto mb-12 md:mb-20`}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          The eForte Agentic Platform is a set of pre‑built agents and libraries built on top of an orchestrator‑agnostic multi‑agent framework that can run entirely within your own cloud infrastructure.
        </motion.p>

        {/* Diagram: left = vertical ovals + arrows, right = component grid */}
        <motion.div
          className="mb-16 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative flex w-full flex-col items-start justify-center gap-10 lg:flex-row lg:gap-0">
            <div className="flex w-full shrink-0 items-stretch lg:w-auto">
              <div className="flex w-full flex-col items-center pt-2 lg:w-[420px] lg:max-w-[420px]">
                {flowEllipses.map((ellipse, i) => (
                  <div key={ellipse.title} className="flex w-full flex-col items-center">
                    <FlowEllipse {...ellipse} />
                    {i < flowEllipses.length - 1 && <FlowArrow />}
                  </div>
                ))}
              </div>
              <AgenticPlatformConnectors />
            </div>

            {/* Right: platform module cards */}
            <div className="flex w-full min-w-0 flex-1 flex-col gap-4">
            <div data-connector="row-apps" className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <PlatformCard tone="app" icon={<HiOutlineDevicePhoneMobile />} title="Modern App" subtitle="Next-gen digital experiences" />
              <PlatformCard tone="app" icon={<HiOutlineServerStack />} title="Legacy App & Platforms" subtitle="Integrate, modernize, extend" />
            </div>

            <div data-connector="row-agents-3" className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              <PlatformCard compact icon={<FaRobot />} title="Finance Agent" />
              <PlatformCard compact icon={<HiOutlineIdentification />} title="KYC Agent" />
              <PlatformCard compact icon={<HiOutlineShieldExclamation />} title="Risk Financial Agent" />
            </div>

            <div data-connector="row-agents-4" className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
              <PlatformCard compact icon={<HiOutlineDocumentMagnifyingGlass />} title="Context Retriever Agent" />
              <PlatformCard compact icon={<HiOutlineCircleStack />} title="SQL Analyst Agent" />
              <PlatformCard compact icon={<HiOutlineChatBubbleLeftRight />} title="User Intention Classifier Agent" />
              <PlatformCard compact icon={<HiOutlineLightBulb />} title="Chain of Thought" />
            </div>

            <div data-connector="row-orchestrator" className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <PlatformCard icon={<HiOutlineCpuChip />} title="Multi-Agent Orchestrator" />
              <PlatformCard icon={<HiOutlineShieldCheck />} title="Guardrails" />
            </div>

            <div data-connector="row-infra" className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
              <PlatformCard compact tone="infra" icon={<HiOutlineCog6Tooth />} title="Orchestration" />
              <PlatformCard compact tone="infra" icon={<HiOutlineLockClosed />} title="Security & Governance" />
              <PlatformCard compact tone="infra" icon={<HiOutlineChartBar />} title="Monitoring" />
              <PlatformCard compact tone="infra" icon={<HiOutlineCloudArrowUp />} title="Deployment" />
              <PlatformCard compact tone="infra" icon={<HiOutlineArrowsPointingOut />} title="Scalability" />
            </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Core Characteristics */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[400px] bg-blue-500/5 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className={`${section.container} relative z-10 flex flex-col items-center`}>
        <motion.p
          className={`${typography.sectionLabel} mb-4`}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          KEY ATTRIBUTES
        </motion.p>
        <motion.h2
          className={`${typography.sectionTitle} md:text-[48px] lg:text-[48px] font-bold text-center text-white mb-12 md:mb-20`}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        >
          Core Characteristics of the Platform
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {coreCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative p-8 md:p-10 rounded-[12px] bg-[#05050A] border border-white/10 flex flex-col items-center text-center overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary-pink hover:shadow-[0_0_30px_rgba(211,40,122,0.15)] hover:-translate-y-1"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.08, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-blue-500/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center h-full w-full">
                <div className="mb-6 flex items-center justify-center">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-pink/20 text-primary-pink">
                    <card.icon className="h-8 w-8" strokeWidth={1.5} />
                  </span>
                </div>
                <h3 className={`${typography.cardTitle} text-white mb-3 md:mb-4`}>
                  {card.title}
                </h3>
                <p className={`${typography.cardBody} min-h-[60px] max-w-[90%]`}>
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* security-extensibility-portability.svg intentionally not shown — Key Attributes uses the cards above */}
      </div>
    </section>
  );
}
