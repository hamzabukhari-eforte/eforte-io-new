"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";
import AgenticMethodologyDiagram from "./AgenticMethodologyDiagram";
import AgenticMethodologyCard, {
  type MethodologyIconName,
} from "./AgenticMethodologyCard";

const methodologyPillars: {
  iconName: MethodologyIconName;
  title: string;
  description: string;
  accentColor: string;
  accentGlow: string;
}[] = [
  {
    iconName: "shield",
    title: "Security First",
    description:
      "A security-first mindset ensures safe innovation. eForte follows OWASP best practices, reducing risk throughout the AI lifecycle.",
    accentColor: "#22C55E",
    accentGlow: "rgba(34, 197, 94, 0.4)",
  },
  {
    iconName: "cycle",
    title: "Model-Centric Sprints",
    description:
      "Sprints focus on both code iteration and AI behavior training. Short feedback loops enable continuous learning and refinement of agent behavior.",
    accentColor: "#F97316",
    accentGlow: "rgba(249, 115, 22, 0.4)",
  },
  {
    iconName: "backlog",
    title: "AI-First Backlog Management",
    description:
      "Backlogs include data pipeline tasks alongside standard development stories, with agent-centric stories that prioritize learning and model improvement as core outcomes.",
    accentColor: "#EAB308",
    accentGlow: "rgba(234, 179, 8, 0.4)",
  },
  {
    iconName: "users",
    title: "Human-in-the-Loop",
    description:
      "Human feedback is embedded throughout the process, allowing AI agents to learn from real-world interactions and evolve over time.",
    accentColor: "#0EA5E9",
    accentGlow: "rgba(14, 165, 233, 0.4)",
  },
];

export default function AgenticOrchestrationMethodologySection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section
      ref={ref}
      id="agentic-methodology"
      className={`${section.padding} border-t border-white/5 bg-black relative overflow-hidden ${section.paddingX}`}
    >
      <div className={`${section.container} flex flex-col items-center relative z-10`}>
        <motion.p
          className={`${typography.sectionLabel} mb-4`}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          OUR METHODOLOGY
        </motion.p>
        <motion.h2
          className={`${typography.sectionTitle} md:text-[48px] lg:text-[48px] font-bold text-center text-white mb-6`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
        >
          Key Aspects of Our Methodology
        </motion.h2>
        <motion.p
          className={`${typography.lead} text-white text-center max-w-3xl mx-auto`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          The eForte Agentic Methodology (EAM) extends standard Agile practices with patterns tailored specifically for AI agents. It provides a structured, secure process to manage the full lifecycle of AI agents: from discovery and design to deployment and continuous improvement.
        </motion.p>

        <motion.div
          className="relative  w-full max-w-xl"
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <AgenticMethodologyDiagram className="h-auto w-full" />
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {methodologyPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              <AgenticMethodologyCard
                iconName={pillar.iconName}
                title={pillar.title}
                description={pillar.description}
                accentColor={pillar.accentColor}
                accentGlow={pillar.accentGlow}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
