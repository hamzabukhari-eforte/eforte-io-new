"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { SiJira, SiGitlab, SiVscodium } from "react-icons/si";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";
import {
  AiPodsSvg,
  EngineeringFrameworkSvg,
  MetricsKpiSvg,
} from "./VelocityFrameworkVisuals";

/* SVG visuals live in VelocityFrameworkVisuals.tsx
   PNG paths preserved for possible reuse:
   /assets/images/velocity-ai/bento-ai-pods.png
   /assets/images/velocity-ai/bento-metrics-chart.png */
export default function VelocityAIFrameworkSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section ref={ref} className={`${section.padding} ${section.paddingX} max-w-7xl mx-auto`}>
      <motion.div
        className="text-center mb-10 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className={`${typography.sectionLabel} mb-4 md:mb-6`}>
          5 KEY COMPONENTS
        </p>
        <h3 className="text-2xl md:text-[48px] lg:text-[48px] font-medium text-white tracking-tight">
          eForte Velocity AI framework
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        {/* Card 1: AI-enabled Pods */}
        <motion.div
          className="lg:col-span-4 bg-[#0A0B14] border border-white/5 rounded-[12px] p-6 md:p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[320px] md:min-h-[480px] flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-50" />
            <div className="relative z-10 w-full max-w-[220px]">
              <AiPodsSvg idPrefix="vai-pods" />
            </div>
          </div>
          <div className="mt-4 md:mt-6 relative z-10">
            <h4 className={typography.cardTitle + " text-white mb-2 md:mb-3"}>AI-enabled Pods</h4>
            <p className={typography.cardBody}>
              Velocity AI Pods embed AI into the full engineering lifecycle, making it a core part of daily workflows.
            </p>
          </div>
        </motion.div>

        {/* Card 2: AI-Augmented Framework */}
        <motion.div
          className="lg:col-span-4 bg-[#0A0B14] border border-white/5 rounded-[12px] p-6 md:p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[320px] md:min-h-[480px] flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative z-10 w-full max-w-[240px]">
              <EngineeringFrameworkSvg idPrefix="vai-fw" />
            </div>
          </div>
          <div className="mt-4 md:mt-6 relative z-10">
            <h4 className={typography.cardTitle + " text-white mb-2 md:mb-3"}>AI-Augmented Engineering Framework</h4>
            <p className={typography.cardBody}>
              A proven methodology from eForte that systematizes how AI enhances design, development, and delivery processes.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Metrics */}
        <motion.div
          className="lg:col-span-4 bg-[#0A0B14] border border-white/5 rounded-[12px] p-6 md:p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[320px] md:min-h-[480px] flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent opacity-30" />
            <div className="relative z-10 w-full max-w-[240px]">
              <MetricsKpiSvg idPrefix="vai-kpi" />
            </div>
          </div>
          <div className="mt-4 md:mt-6 relative z-10">
            <h4 className={typography.cardTitle + " text-white mb-2 md:mb-3"}>Defined metrics &amp; KPIs</h4>
            <p className={typography.cardBody}>
              Clear performance metrics that quantify AI&apos;s impact against non-AI baselines, enabling measurable improvement.
            </p>
          </div>
        </motion.div>

        {/* Card 4: Certified Tools (wide) */}
        <motion.div
          className="lg:col-span-7 bg-[#0A0B14] border border-white/5 rounded-[12px] p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[240px] flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="max-w-[45%] relative z-10 pr-6">
            <h4 className={typography.cardTitle + " text-white mb-2 md:mb-3"}>Certified tools and platforms</h4>
            <p className={typography.cardBody}>
              All tools and platforms are reviewed and approved by AI and security specialists before adoption to ensure reliability and compliance.
            </p>
          </div>
          <div className="flex-1 relative h-32 flex items-center justify-end gap-4 flex-wrap">
            <div className="w-14 h-14 bg-[#1C1D26] rounded-[12px] flex items-center justify-center border border-white/10 shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110 z-20">
              <SiJira className="text-white text-3xl opacity-90" />
            </div>
            <div className="w-12 h-12 bg-[#1C1D26] rounded-[12px] flex items-center justify-center border border-white/10 shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-110 z-10">
              <SiGitlab className="text-white text-2xl opacity-90" />
            </div>
            <div className="w-12 h-12 bg-[#1C1D26] rounded-[12px] flex items-center justify-center border border-white/10 shadow-lg transform rotate-12 hover:rotate-0 transition-all duration-300 hover:scale-110 z-30">
              <FaGithub className="text-white text-2xl" />
            </div>
            <div className="w-14 h-14 bg-[#1C1D26] rounded-[12px] flex items-center justify-center border border-white/10 shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110 z-20">
              <SiVscodium className="text-white text-3xl opacity-90" />
            </div>
          </div>
        </motion.div>

        {/* Card 5: Custom AI Agents */}
        <motion.div
          className="lg:col-span-5 bg-[#0A0B14] border border-white/5 rounded-[12px] p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[240px] flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <div className="max-w-[50%] relative z-10">
            <h4 className={typography.cardTitle + " text-white mb-2 md:mb-3"}>Custom AI Agents</h4>
            <p className={typography.cardBody}>
              Secure, tailored AI agents designed to drive productivity, consistency, and efficiency across engineering teams.
            </p>
          </div>
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#426CFF]/20 blur-2xl" />
            <div className="w-16 h-16 rounded-full bg-[#426CFF] p-[2px] relative z-20 shadow-[0_0_20px_rgba(66,108,255,0.5)]">
              <div className="w-full h-full rounded-full bg-[#0A0B14] flex items-center justify-center overflow-hidden">
                <span className="text-white text-2xl">🤖</span>
              </div>
            </div>
            <div className="inline-flex items-center justify-center h-10 absolute -bottom-4 right-0 bg-[#426CFF] text-white text-[10px] font-bold px-3 py-0 rounded-full leading-none shadow-lg z-30">
              AI Steve
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
