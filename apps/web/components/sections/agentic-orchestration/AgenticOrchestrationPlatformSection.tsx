"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaLock, FaRocket, FaCube, FaDatabase } from "react-icons/fa";
import { section, typography } from "./layout";

const stackTiers = [
  { label: "Client Applications", gradient: "from-[#5b21b6] via-[#4c1d95] to-[#2e1065]", border: "border-[#a78bfa]/40" },
  { label: "eForte Agentic Platform", gradient: "from-[#1e3a8a] via-[#172554] to-[#0f172a]", border: "border-[#60a5fa]/40" },
  { label: "Azure | UX Pilot AI | AWS | Nvidia", gradient: "from-[#0e7490] via-[#155e75] to-[#083344]", border: "border-[#22d3ee]/40", small: true },
];

/** Rounded block with optional Data cylinder icon (for Modern App / Legacy App) */
function AppBlock({ label }: { label: string }) {
  return (
    <div className="relative flex-1 min-h-[72px] md:min-h-[80px] rounded-[12px] bg-gradient-to-r from-[#2e1065] to-[#1e1b4b] border border-[#6d28d9]/30 flex items-center pl-6 pr-12 shadow-lg overflow-visible">
      <span className="text-white font-medium text-sm md:text-base">{label}</span>
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <div className="relative w-10 h-12">
          <div className="absolute top-0 w-10 h-3 bg-[#7c3aed] rounded-[50%] border border-[#a78bfa] z-20" />
          <div className="absolute top-1.5 w-10 h-9 bg-[#5b21b6] border-l border-r border-b border-[#7c3aed] rounded-b-[12px] flex items-center justify-center z-10">
            <FaDatabase className="text-[8px] text-white/90" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Generic platform block (blue or teal) */
function Block({
  label,
  className = "",
  size = "md",
  teal = false,
}: {
  label: string;
  className?: string;
  size?: "sm" | "md";
  teal?: boolean;
}) {
  const base = "rounded-[12px] flex items-center justify-center px-2 md:px-3 text-center font-medium text-white shadow-md";
  const blue = "bg-[#0f172a] border border-[#1e3a8a] bg-gradient-to-b from-[#172554] to-[#0f172a] py-2 md:py-0";
  const tealClass = "bg-gradient-to-b from-[#0e7490] to-[#0f172a] border border-[#0891b2]/40 hover:brightness-110 transition-all";
  const h = size === "sm" ? "h-[72px] md:h-[80px]" : "h-[72px]";
  return (
    <div className={`${base} ${teal ? tealClass : blue} ${h} ${className}`}>
      <span className="text-xs md:text-sm leading-tight">{label}</span>
    </div>
  );
}

const coreCards = [
  {
    title: "Velocity AI – Security",
    icon: FaLock,
    description: "The platform is designed to operate inside your AI infrastructure and follows OWASP best practices for LLM applications, prioritizing secure design from the ground up.",
  },
  {
    title: "Agentic Orchestration – Extensibility",
    icon: FaRocket,
    description: "Agents and libraries are built for customization, and the architecture makes it straightforward to add new agents or extend existing ones for specific use cases.",
  },
  {
    title: "Portability – Platform‑agnostic",
    icon: FaCube,
    description: "The platform runs on top of a multi‑agent orchestrator framework (such as LangGraph) that can operate on any modern AI infrastructure.",
  },
];

export default function AgenticOrchestrationPlatformSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px", amount: 0.15 });

  return (
    <section
      ref={ref}
      id="characteristics"
      className="py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden"
    >
      <div className={`${section.container} flex flex-col items-center relative z-10 py-8 md:py-12`}>
        <motion.div
          className="inline-flex h-10 items-center justify-center px-4 py-0 md:px-5 rounded-full leading-none border border-white/20 bg-white/5 backdrop-blur-sm mb-6 md:mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={`${typography.badge} text-white tracking-widest`}>OUR SOLUTIONS</span>
        </motion.div>
        <motion.h2
          className={`${typography.sectionTitle} md:text-5xl lg:text-6xl font-bold text-center text-white mb-6`}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
        >
          eForte Agentic Platform
        </motion.h2>
        <motion.p
          className={`${typography.lead} text-gray-400 text-center max-w-3xl mx-auto mb-12 md:mb-20`}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          The eForte Agentic Platform is a set of pre‑built agents and libraries built on top of an orchestrator‑agnostic multi‑agent framework that can run entirely within your own cloud infrastructure.
        </motion.p>

        {/* Diagram: left = vertical ovals + arrows, right = component grid */}
        <motion.div
          className="w-full flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16 xl:gap-24 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          {/* Left: Vertical stack (3 ovals + funnel arrows) */}
          <div className="flex flex-col items-center justify-start w-full lg:max-w-[380px] pt-2">
            {stackTiers.map((tier, i) => (
              <div key={tier.label} className="relative w-full flex flex-col items-center">
                <div
                  className={`w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] h-20 md:h-24 lg:h-28 rounded-[50%] bg-gradient-to-b ${tier.gradient} border-t ${tier.border} flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.15)] relative overflow-hidden`}
                >
                  <div className="absolute top-0 left-[15%] right-[15%] h-[40%] bg-black/20 rounded-[50%] blur-md" />
                  <span className={`text-white font-medium ${tier.small ? "text-xs md:text-sm" : "text-base md:text-lg"} relative z-20 text-center px-3`}>
                    {tier.label}
                  </span>
                </div>
                {i < stackTiers.length - 1 && (
                  <div className="flex flex-col items-center w-12 h-10 mt-1 mb-2">
                    <div
                      className="w-full h-full bg-gradient-to-b from-[#2e1065] to-transparent opacity-80"
                      style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                    />
                    <span className="text-[#a78bfa]/50 text-xs -mt-1">▼</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Component grid */}
          <div className="flex flex-col gap-3 md:gap-4 w-full lg:max-w-[600px]">
            {/* Row 1: Modern App | Legacy App (with Data cylinder) */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <AppBlock label="Modern App" />
              <AppBlock label="Legacy App & Platforms" />
            </div>
            {/* Row 2: Finance Agent, KYC Agent, Risk Financial Agent, ... */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {["Finance Agent", "KYC Agent", "Risk Financial Agent"].map((l) => (
                <Block key={l} label={l} className="flex-1 min-w-[100px]" />
              ))}
              <Block label="..." className="w-14 h-[72px] md:w-16 shrink-0" />
            </div>
            {/* Row 3: Context Retriever, SQL Analyst, User Intention, Chain of Thought, ... */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {["Context Retriever Agent", "SQL Analyst Agent", "User Intention Classifier Agent", "Chain of Thought"].map((l) => (
                <Block key={l} label={l} className="flex-1 min-w-[120px]" size="sm" />
              ))}
              <Block label="..." className="w-14 h-[80px] md:w-16 shrink-0" />
            </div>
            {/* Row 4: Multi-Agent Orchestrator | Guardrails */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Block label="Multi-Agent Orchestrator" className="flex-1" />
              <Block label="Guardrails" className="flex-1" />
            </div>
            {/* Row 5: Orchestration, Security & Governance, Monitoring, Deployment, Scalability (teal) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
              {["Orchestration", "Security & Governance", "Monitoring", "Deployment", "Scalability"].map((l) => (
                <Block key={l} label={l} teal className="text-xs md:text-[13px]" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Core Characteristics */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[400px] bg-blue-500/5 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className={`${section.container} relative z-10 flex flex-col items-center pt-8 md:pt-16`}>
        <motion.div
          className="inline-flex h-10 items-center justify-center px-5 py-0 md:px-6 rounded-full leading-none border border-white/20 bg-white/5 backdrop-blur-sm mb-8 md:mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-[10px] md:text-[13px] font-semibold text-white tracking-wide uppercase">KEY ATTRIBUTES</span>
        </motion.div>
        <motion.h2
          className={`${typography.sectionTitle} md:text-5xl lg:text-6xl font-bold text-center text-white mb-12 md:mb-20`}
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
              className="group relative p-8 md:p-10 rounded-[12px] bg-[#05050A] border border-white/10 flex flex-col items-center text-center overflow-hidden cursor-pointer transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.08, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-blue-500/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center h-full w-full">
                <div className="mb-6 relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <div className="absolute inset-0 border border-blue-500/30 rounded-full group-hover:border-blue-500/50 transition-colors duration-300" />
                  <div
                    className="relative w-12 h-14 bg-blue-500/10 border border-blue-500/50 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/70 transition-all duration-300"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  >
                    <card.icon className="text-blue-400 text-xl drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  </div>
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

        <motion.div
          className="relative mt-14 aspect-[1200/500] w-full max-w-4xl md:mt-20"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/assets/images/package/ai-pillars/security-extensibility-portability.svg"
            alt="Three pillars of the eForte Agentic Platform: Security, Extensibility, Portability"
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
