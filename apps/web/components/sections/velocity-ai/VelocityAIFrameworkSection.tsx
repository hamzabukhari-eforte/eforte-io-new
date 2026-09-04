"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { SiJira, SiGitlab, SiVscodium } from "react-icons/si";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";

const BLUE = "#426CFF";
const PINK = "#D3287A";

/* PNG paths preserved for possible reuse:
   /assets/images/velocity-ai/bento-ai-pods.png
   /assets/images/velocity-ai/bento-metrics-chart.png */

const easeSoft = [0.45, 0, 0.55, 1] as const;

function AiPodsSvg() {
  // AI at the center of a cross-functional engineering pod
  const roles = [
    { x: 110, y: 28, label: "Design" },
    { x: 178, y: 80, label: "Build" },
    { x: 110, y: 132, label: "Test" },
    { x: 42, y: 80, label: "Ship" },
  ];

  return (
    <svg
      viewBox="0 0 220 160"
      className="h-auto w-full max-h-[180px] transition-transform duration-500 group-hover:scale-105"
      fill="none"
      aria-hidden
    >
      <defs>
        <radialGradient id="podCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.45" />
          <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="podRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={BLUE} />
          <stop offset="100%" stopColor={PINK} stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <motion.circle
        cx="110"
        cy="80"
        r="62"
        fill="url(#podCoreGlow)"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: easeSoft }}
      />

      {roles.map((role, i) => (
        <motion.line
          key={`line-${role.label}`}
          x1="110"
          y1="80"
          x2={role.x}
          y2={role.y}
          stroke="url(#podRing)"
          strokeWidth="1.5"
          animate={{ opacity: [0.3, 0.75, 0.3] }}
          transition={{
            duration: 3.2,
            delay: i * 0.35,
            repeat: Infinity,
            ease: easeSoft,
          }}
        />
      ))}

      <motion.circle
        cx="110"
        cy="80"
        r="54"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        animate={{ strokeDashoffset: [0, -40] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {roles.map((role, i) => (
        <motion.g
          key={role.label}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 3.5,
            delay: i * 0.4,
            repeat: Infinity,
            ease: easeSoft,
          }}
          style={{ transformOrigin: `${role.x}px ${role.y}px` }}
        >
          <circle cx={role.x} cy={role.y} r="16" fill="#0B1020" stroke={BLUE} strokeWidth="1.5" />
          <circle cx={role.x} cy={role.y - 3} r="4" fill="white" opacity="0.85" />
          <path
            d={`M${role.x - 7} ${role.y + 8} Q${role.x} ${role.y + 2} ${role.x + 7} ${role.y + 8}`}
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </motion.g>
      ))}

      <motion.g
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: easeSoft }}
        style={{ transformOrigin: "110px 80px" }}
      >
        <circle cx="110" cy="80" r="22" fill="#0B1020" stroke="url(#podRing)" strokeWidth="2" />
        <circle cx="110" cy="80" r="22" fill={BLUE} fillOpacity="0.15" />
      </motion.g>

      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "110px 80px" }}
      >
        <path
          d="M110 66 L113 76 L123 79 L113 82 L110 92 L107 82 L97 79 L107 76 Z"
          fill={PINK}
        />
      </motion.g>
      <circle cx="110" cy="80" r="3" fill="white" />
    </svg>
  );
}

function EngineeringFrameworkSvg() {
  const stages = [
    { y: 36, label: "Design", accent: BLUE, progress: 12 },
    { y: 84, label: "Develop", accent: "#7C9BFF", progress: 20 },
    { y: 132, label: "Deliver", accent: PINK, progress: 28 },
  ];

  return (
    <svg
      viewBox="0 0 240 180"
      className="h-auto w-full max-h-[200px] transition-transform duration-500 group-hover:scale-105"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="fwAiRibbon" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={BLUE} />
          <stop offset="100%" stopColor={PINK} />
        </linearGradient>
      </defs>

      <motion.path
        d="M48 28 V152"
        stroke="url(#fwAiRibbon)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          duration: 5.5,
          times: [0, 0.45, 0.7, 1],
          repeat: Infinity,
          ease: easeSoft,
          repeatDelay: 0.4,
        }}
      />
      <motion.circle
        cx="48"
        cy="28"
        r="6"
        fill={BLUE}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: easeSoft }}
      />
      <motion.circle
        cx="48"
        cy="152"
        r="6"
        fill={PINK}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, delay: 0.4, repeat: Infinity, ease: easeSoft }}
      />

      {stages.map((stage, i) => (
        <motion.g
          key={stage.label}
          initial={{ opacity: 0.35, x: -6 }}
          animate={{ opacity: [0.4, 1, 1, 0.4], x: [-6, 0, 0, -6] }}
          transition={{
            duration: 5.5,
            delay: 0.35 + i * 0.35,
            times: [0, 0.2, 0.75, 1],
            repeat: Infinity,
            ease: easeSoft,
            repeatDelay: 0.4,
          }}
        >
          <rect
            x="68"
            y={stage.y - 18}
            width="148"
            height="36"
            rx="10"
            fill="#12162a"
            stroke="white"
            strokeOpacity="0.1"
          />
          <rect x="68" y={stage.y - 18} width="5" height="36" rx="2" fill={stage.accent} />
          <line
            x1="48"
            y1={stage.y}
            x2="68"
            y2={stage.y}
            stroke={stage.accent}
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <motion.rect
            x="78"
            y={stage.y - 9}
            width="28"
            height="18"
            rx="5"
            fill={stage.accent}
            fillOpacity="0.2"
            stroke={stage.accent}
            strokeWidth="1"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 2.2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: easeSoft,
            }}
          />
          <text
            x="92"
            y={stage.y + 4}
            fill={stage.accent}
            fontSize="8"
            fontFamily="sans-serif"
            fontWeight="700"
            textAnchor="middle"
          >
            AI
          </text>
          <text
            x="118"
            y={stage.y + 5}
            fill="white"
            fontSize="13"
            fontFamily="sans-serif"
            fontWeight="600"
          >
            {stage.label}
          </text>
          <rect x="176" y={stage.y - 4} width="28" height="8" rx="3" fill="white" fillOpacity="0.08" />
          <motion.rect
            x="176"
            y={stage.y - 4}
            height="8"
            rx="3"
            fill={stage.accent}
            fillOpacity="0.7"
            initial={{ width: 0 }}
            animate={{ width: [0, stage.progress, stage.progress, 0] }}
            transition={{
              duration: 5.5,
              delay: 0.5 + i * 0.35,
              times: [0, 0.35, 0.75, 1],
              repeat: Infinity,
              ease: easeSoft,
              repeatDelay: 0.4,
            }}
          />
        </motion.g>
      ))}
    </svg>
  );
}

function MetricsKpiSvg() {
  return (
    <svg
      viewBox="0 0 240 180"
      className="h-auto w-full max-h-[200px] transition-transform duration-500 group-hover:scale-105"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="kpiAiBar" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.35" />
          <stop offset="100%" stopColor={BLUE} />
        </linearGradient>
        <linearGradient id="kpiUplift" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={BLUE} />
          <stop offset="100%" stopColor={PINK} />
        </linearGradient>
      </defs>

      <rect
        x="20"
        y="24"
        width="140"
        height="132"
        rx="12"
        fill="#12162a"
        stroke="white"
        strokeOpacity="0.1"
      />

      <text x="36" y="48" fill="white" fontSize="10" fontFamily="sans-serif" opacity="0.5">
        Baseline vs AI
      </text>

      <text x="36" y="78" fill="white" fontSize="9" fontFamily="sans-serif" opacity="0.55">
        Non-AI
      </text>
      <rect x="36" y="86" width="100" height="12" rx="4" fill="white" fillOpacity="0.08" />
      <motion.rect
        x="36"
        y="86"
        height="12"
        rx="4"
        fill="white"
        fillOpacity="0.28"
        initial={{ width: 0 }}
        animate={{ width: [0, 48, 48, 0] }}
        transition={{
          duration: 5,
          times: [0, 0.35, 0.7, 1],
          repeat: Infinity,
          ease: easeSoft,
          repeatDelay: 0.35,
        }}
      />

      <text x="36" y="122" fill={BLUE} fontSize="9" fontFamily="sans-serif" fontWeight="600">
        With AI
      </text>
      <rect x="36" y="130" width="100" height="12" rx="4" fill="white" fillOpacity="0.08" />
      <motion.rect
        x="36"
        y="130"
        height="12"
        rx="4"
        fill="url(#kpiAiBar)"
        initial={{ width: 0 }}
        animate={{ width: [0, 92, 92, 0] }}
        transition={{
          duration: 5,
          delay: 0.2,
          times: [0, 0.4, 0.7, 1],
          repeat: Infinity,
          ease: easeSoft,
          repeatDelay: 0.35,
        }}
      />

      <motion.g
        animate={{ opacity: [0.7, 1, 0.7], scale: [0.97, 1.03, 0.97] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: easeSoft }}
        style={{ transformOrigin: "198px 68px" }}
      >
        <rect
          x="172"
          y="40"
          width="52"
          height="56"
          rx="10"
          fill="#0B1020"
          stroke="url(#kpiUplift)"
          strokeWidth="1.5"
        />
        <text
          x="198"
          y="68"
          fill={PINK}
          fontSize="16"
          fontFamily="sans-serif"
          fontWeight="700"
          textAnchor="middle"
        >
          +55%
        </text>
        <text
          x="198"
          y="84"
          fill="white"
          fontSize="8"
          fontFamily="sans-serif"
          opacity="0.55"
          textAnchor="middle"
        >
          uplift
        </text>
      </motion.g>

      <motion.rect
        x="172"
        y="108"
        width="52"
        height="22"
        rx="6"
        fill="#12162a"
        stroke="white"
        strokeOpacity="0.1"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: easeSoft }}
      />
      <text x="198" y="123" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
        KPI
      </text>
      <motion.rect
        x="172"
        y="136"
        width="52"
        height="22"
        rx="6"
        fill="#12162a"
        stroke={PINK}
        strokeOpacity="0.4"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 2.8, delay: 0.35, repeat: Infinity, ease: easeSoft }}
      />
      <text x="198" y="151" fill={PINK} fontSize="9" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
        Score
      </text>
    </svg>
  );
}

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
              <AiPodsSvg />
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
              <EngineeringFrameworkSvg />
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
              <MetricsKpiSvg />
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
