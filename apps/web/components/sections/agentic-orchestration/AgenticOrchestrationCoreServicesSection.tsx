"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";
import CoreServicesDiagram from "./CoreServicesDiagram";
import {
  AgentIcon,
  AiCoreIcon,
  FunnelIcon,
  GaugeIcon,
} from "@/components/sections/ai-workflows/workflow-diagram/icons";
import {
  ICON_BOX,
  type IconProps,
} from "@/components/sections/ai-workflows/workflow-diagram/primitives";

function ServiceCardIcon({
  Icon,
  inView,
  className = "h-6 w-6",
}: {
  Icon: (props: IconProps) => ReactNode;
  inView: boolean;
  className?: string;
}) {
  return (
    <svg viewBox={`0 0 ${ICON_BOX} ${ICON_BOX}`} className={className} aria-hidden>
      <Icon delay={0} inView={inView} reduce />
    </svg>
  );
}

const coreServices = [
  {
    Icon: FunnelIcon,
    title: "Strategic Assessment of AI Opportunities",
    description:
      "Leverage the eForte AI Agent Framework to identify and prioritize high-impact AI use cases, ensuring initiatives deliver maximum ROI and strategic value.",
    accentColor: "#22C55E",
    accentGlow: "rgba(34, 197, 94, 0.4)",
  },
  {
    Icon: AiCoreIcon,
    title: "AI Agent Design & Implementation",
    description:
      "Deliver custom AI agent solutions tailored to industry-specific challenges, alongside pre-built agents such as Financial Analyst Agents and Credit Scoring Agents.",
    accentColor: "#F97316",
    accentGlow: "rgba(249, 115, 22, 0.4)",
  },
  {
    Icon: AgentIcon,
    title: "AI Talent Augmentation",
    description:
      "Deploy cross-functional AI Pods to strengthen in-house teams, accelerating AI projects while maintaining quality and alignment with internal processes.",
    accentColor: "#EAB308",
    accentGlow: "rgba(234, 179, 8, 0.4)",
  },
  {
    Icon: GaugeIcon,
    title: "Model Optimization & Benchmarking",
    description:
      "Fine-tune and optimize models for performance, scalability, and accuracy, and benchmark multiple approaches against your specific use cases.",
    accentColor: "#0EA5E9",
    accentGlow: "rgba(14, 165, 233, 0.4)",
  },
];

function ServiceCard({
  Icon,
  title,
  description,
  inView,
  accentColor,
  accentGlow,
}: (typeof coreServices)[number] & { inView: boolean }) {
  const icon = <ServiceCardIcon Icon={Icon} inView={inView} />;

  return (
    <div
      className="group relative h-full overflow-hidden rounded-[12px] border bg-white/[0.02] p-6 transition-all duration-300 ease-out"
      style={{ borderColor: "rgba(255, 255, 255, 0.08)" } as CSSProperties}
      onMouseEnter={(event) => {
        event.currentTarget.style.borderColor = accentColor;
        event.currentTarget.style.boxShadow = `0 0 24px ${accentGlow}`;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
        event.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <div
          className="absolute right-0 bottom-0 h-full w-full min-h-[60vh] min-w-[50vw]"
          style={{
            background: `radial-gradient(ellipse 90% 90% at 100% 100%, ${accentGlow} 0%, transparent 50%)`,
          }}
        />
        <div className="absolute -right-10 -bottom-5 flex items-end justify-end p-0">
          <div className="origin-bottom-right -mr-2 -mb-2 scale-[4] opacity-20">
            <ServiceCardIcon Icon={Icon} inView={inView} className="h-8 w-8" />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>
        <h4 className={`${typography.cardTitle} text-white mb-2`}>{title}</h4>
        <p className={`${typography.cardBody}`}>{description}</p>
      </div>
    </div>
  );
}

export default function AgenticOrchestrationCoreServicesSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section
      ref={ref}
      id="core-ai-agent-dev-services"
      className={`${section.padding} pb-16 relative overflow-hidden ${section.paddingX}`}
    >
      <div className={`${section.container} flex flex-col items-center relative z-10`}>
        <motion.h2
          className={`${typography.sectionTitle} md:text-[48px] lg:text-[48px] font-bold text-center text-white mb-6`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Core AI Agent Development Services
        </motion.h2>
        <motion.p
          className={`${typography.lead} text-white text-center max-w-3xl mx-auto mb-10 md:mb-16`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          From opportunity assessment to production-grade optimization, our teams cover the full AI agent development lifecycle.
        </motion.p>

        <motion.div
          className="relative mx-auto mb-12 w-full max-w-5xl md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <CoreServicesDiagram className="h-37.5 w-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="h-full"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ scale: 1.03, transition: { duration: 0.25, delay: 0, ease: "easeOut" } }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              <ServiceCard {...service} inView={isInView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
