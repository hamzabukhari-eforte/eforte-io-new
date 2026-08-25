"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaShieldAlt, FaSyncAlt, FaTasks, FaHandsHelping } from "react-icons/fa";
import { section, typography } from "./layout";

const methodologyPillars = [
  {
    icon: FaShieldAlt,
    title: "Security First",
    description:
      "A security-first mindset ensures safe innovation. eForte follows OWASP best practices, reducing risk throughout the AI lifecycle.",
  },
  {
    icon: FaSyncAlt,
    title: "Model-Centric Sprints",
    description:
      "Sprints focus on both code iteration and AI behavior training. Short feedback loops enable continuous learning and refinement of agent behavior.",
  },
  {
    icon: FaTasks,
    title: "AI-First Backlog Management",
    description:
      "Backlogs include data pipeline tasks alongside standard development stories, with agent-centric stories that prioritize learning and model improvement as core outcomes.",
  },
  {
    icon: FaHandsHelping,
    title: "Human-in-the-Loop",
    description:
      "Human feedback is embedded throughout the process, allowing AI agents to learn from real-world interactions and evolve over time.",
  },
];

export default function AgenticOrchestrationMethodologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px", amount: 0.15 });

  return (
    <section
      ref={ref}
      id="agentic-methodology"
      className={`py-16 md:py-24 border-t border-white/5 bg-black relative overflow-hidden ${section.paddingX}`}
    >
      <div className={`${section.container} flex flex-col items-center relative z-10`}>
        <motion.div
          className="inline-flex h-10 items-center justify-center px-4 py-1.5 md:px-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6 md:mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={`${typography.badge} text-white tracking-widest`}>OUR METHODOLOGY</span>
        </motion.div>
        <motion.h2
          className={`${typography.sectionTitle} md:text-5xl lg:text-6xl font-bold text-center text-white mb-6`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
        >
          Key Aspects of Our Methodology
        </motion.h2>
        <motion.p
          className={`${typography.lead} text-gray-400 text-center max-w-3xl mx-auto mb-10 md:mb-16`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          The eForte Agentic Methodology (EAM) extends standard Agile practices with patterns tailored specifically for AI agents. It provides a structured, secure process to manage the full lifecycle of AI agents: from discovery and design to deployment and continuous improvement.
        </motion.p>

        <motion.div
          className="relative w-full max-w-3xl aspect-[1200/896] mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          <Image
            src="/assets/images/package/ai-pillars/agentic-methodology-diagram.svg"
            alt="The eForte Agentic Methodology: Security First, Model-Centric Sprints, AI-First Backlog, Human-in-the-Loop"
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-contain rounded-[12px]"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {methodologyPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="group relative p-6 rounded-[12px] bg-[#05050A] border border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-[12px] bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300 mb-4">
                  <pillar.icon className="text-white group-hover:text-blue-400 transition-colors duration-300 text-lg" />
                </div>
                <h4 className={`${typography.cardTitle} text-white mb-2`}>{pillar.title}</h4>
                <p className={`${typography.cardBody}`}>{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
