"use client";

import { motion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";

const BLUE = "#426CFF";
const BLUE_SOFT = "#2563EB";
const PINK = "#D3287A";

const easeSoft = [0.45, 0, 0.55, 1] as const;

function CodeQualityIcon() {
  return (
    <svg viewBox="0 0 200 200" className="h-32 w-32 md:h-40 md:w-40" fill="none" aria-hidden>
      <defs>
        <radialGradient id="cqGlow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.35" />
          <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cqRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7C9BFF" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <motion.circle
        cx="100"
        cy="100"
        r="78"
        fill="url(#cqGlow)"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: easeSoft }}
      />
      <circle cx="100" cy="100" r="68" stroke="url(#cqRing)" strokeWidth="1.5" opacity="0.45" />
      <motion.circle
        cx="100"
        cy="100"
        r="52"
        stroke={BLUE}
        strokeWidth="2"
        strokeDasharray="4 14"
        opacity="0.55"
        animate={{ strokeDashoffset: [0, -72] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <circle cx="100" cy="100" r="36" stroke="white" strokeWidth="1.5" opacity="0.2" />

      <path
        d="M78 82 L64 100 L78 118"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M122 82 L136 100 L122 118"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M108 72 L92 128"
        stroke={PINK}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <motion.g
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: easeSoft }}
      >
        <circle cx="142" cy="62" r="22" fill="#0B1020" />
        <circle cx="142" cy="62" r="22" fill={BLUE} fillOpacity="0.18" />
        <circle cx="142" cy="62" r="22" stroke={BLUE} strokeWidth="2" />
        <path
          d="M132 62 L139 69 L154 52"
          stroke={PINK}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
}

function VelocityIcon() {
  const bars = [
    { x: 36, h: 40, y: 118 },
    { x: 64, h: 60, y: 98 },
    { x: 92, h: 84, y: 74 },
    { x: 120, h: 104, y: 54 },
    { x: 148, h: 122, y: 36 },
  ];

  return (
    <svg viewBox="0 0 200 200" className="h-32 w-32 md:h-40 md:w-40" fill="none" aria-hidden>
      <defs>
        <linearGradient id="velBar1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={BLUE_SOFT} stopOpacity="0.25" />
          <stop offset="100%" stopColor={BLUE} stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="velBar2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={BLUE_SOFT} stopOpacity="0.3" />
          <stop offset="100%" stopColor={BLUE} stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="velBar3" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={BLUE_SOFT} stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7C9BFF" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="velTrend" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={PINK} stopOpacity="0.4" />
          <stop offset="100%" stopColor={PINK} />
        </linearGradient>
        <filter id="velSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="100" cy="168" rx="62" ry="8" fill={BLUE} opacity="0.12" />

      {bars.map((bar, i) => (
        <motion.rect
          key={bar.x}
          x={bar.x}
          width="20"
          rx="6"
          fill={i < 2 ? "url(#velBar1)" : i < 4 ? "url(#velBar2)" : "url(#velBar3)"}
          animate={{
            height: [bar.h, bar.h * 1.04, bar.h * 0.97, bar.h],
            y: [bar.y, bar.y - bar.h * 0.04, bar.y + bar.h * 0.03, bar.y],
          }}
          transition={{
            duration: 5.5,
            delay: i * 0.18,
            repeat: Infinity,
            ease: easeSoft,
          }}
        />
      ))}

      <path
        d="M42 112 C70 96, 88 108, 108 82 C122 64, 138 58, 158 40"
        stroke="url(#velTrend)"
        strokeWidth="3.5"
        strokeLinecap="round"
        filter="url(#velSoft)"
      />
      <motion.g
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: easeSoft }}
      >
        <path
          d="M148 40 L158 40 L158 50"
          stroke={PINK}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="158" cy="40" r="4.5" fill={PINK} />
      </motion.g>
    </svg>
  );
}

function AiUtilizationIcon() {
  // Gauge cycle: rise → settle → hold → ease back
  const gaugeEase = [0.22, 1, 0.36, 1] as const;
  const cycle = {
    duration: 5.5,
    times: [0, 0.38, 0.48, 0.62, 1] as number[],
    ease: gaugeEase,
    repeat: Infinity,
    repeatDelay: 0.4,
  };

  return (
    <svg viewBox="0 0 200 200" className="h-32 w-32 md:h-40 md:w-40" fill="none" aria-hidden>
      <defs>
        <radialGradient id="aiGlow" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.28" />
          <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="aiArc" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={BLUE_SOFT} stopOpacity="0.4" />
          <stop offset="55%" stopColor={BLUE} />
          <stop offset="100%" stopColor={PINK} stopOpacity="0.85" />
        </linearGradient>
        <filter id="aiNeedleGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.circle
        cx="100"
        cy="108"
        r="72"
        fill="url(#aiGlow)"
        animate={{ opacity: [0.45, 1, 1, 0.85, 0.45] }}
        transition={cycle}
      />

      {/* Track */}
      <path
        d="M40 128 A70 70 0 0 1 160 128"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.08"
      />

      {/* Progress arc fills with the needle */}
      <motion.path
        d="M40 128 A70 70 0 0 1 160 128"
        stroke="url(#aiArc)"
        strokeWidth="10"
        strokeLinecap="round"
        initial={{ pathLength: 0.12 }}
        animate={{ pathLength: [0.12, 0.78, 0.74, 0.74, 0.12] }}
        transition={cycle}
      />

      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        const angle = (-160 + i * 20) * (Math.PI / 180);
        const inner = 54;
        const outer = i % 2 === 0 ? 62 : 58;
        return (
          <motion.line
            key={i}
            x1={100 + Math.cos(angle) * inner}
            y1={128 + Math.sin(angle) * inner}
            x2={100 + Math.cos(angle) * outer}
            y2={128 + Math.sin(angle) * outer}
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [
                0.2,
                i <= 6 ? 0.7 : 0.35,
                i <= 6 ? 0.55 : 0.3,
                i <= 6 ? 0.55 : 0.3,
                0.2,
              ],
            }}
            transition={{ ...cycle, delay: i * 0.03 }}
          />
        );
      })}

      {/* Hub: 2px outer only — no gray inner ring */}
      <circle cx="100" cy="128" r="10" fill="#0B1020" stroke={BLUE} strokeWidth="2" />
      <circle cx="100" cy="128" r="3.5" fill="white" />

      {/* Needle sweeps low → high, micro-settles, holds, returns */}
      <motion.g
        initial={{ rotate: -48 }}
        animate={{ rotate: [-48, 22, 16, 16, -48] }}
        transition={cycle}
        style={{ transformOrigin: "100px 128px" }}
      >
        <path
          d="M100 128 L138 72"
          stroke={PINK}
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#aiNeedleGlow)"
        />
        <circle cx="138" cy="72" r="5" fill={PINK} />
      </motion.g>

      <rect
        x="78"
        y="148"
        width="44"
        height="18"
        rx="9"
        fill={BLUE}
        fillOpacity="0.15"
        stroke={BLUE}
        strokeWidth="1.5"
      />
      {[90, 100, 110].map((cx, i) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy="157"
          r="2.5"
          fill={i === 0 ? PINK : i === 1 ? "white" : BLUE}
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{
            duration: 1.2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

const metricsCards: {
  title: string;
  sub: string;
  icon: ReactNode;
}[] = [
  {
    title: "Code quality improvements",
    sub: "Trackable with tools like SonarQube.",
    icon: <CodeQualityIcon />,
  },
  {
    title: "Development velocity",
    sub: "Measured through platforms such as Jira.",
    icon: <VelocityIcon />,
  },
  {
    title: "AI tool Utilization",
    sub: "Monitoring how AI is applied within development workflows.",
    icon: <AiUtilizationIcon />,
  },
];

export default function VelocityAIMetricsCoreSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section ref={ref} className={`bg-black relative overflow-hidden ${section.padding} ${section.paddingX}`}>
      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        <motion.p
          className={`${typography.sectionLabel} mb-4`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          VELOCITY AI: METRICS AT ITS CORE
        </motion.p>

        <motion.h2
          className={`${typography.sectionTitleLg} font-bold text-white mb-4 md:mb-8 leading-[1.1] max-w-5xl mx-auto`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          The Velocity AI framework measures AI-driven development performance across nearly 50 metric categories
        </motion.h2>

        <motion.p
          className="text-base text-white max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          covering both quantitative and qualitative indicators—from hard data to developer satisfaction and comparative insights.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {metricsCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative flex min-h-[260px] flex-col items-center justify-between overflow-hidden rounded-[12px] border border-transparent bg-[#1a1a1a] p-5 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:border-[#d32871] md:min-h-[320px] md:p-7 md:rounded-[12px]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full bg-blue-600/20 blur-[80px]" />
              <div className="relative z-10 flex w-full flex-1 items-center justify-center">
                {/* PNG images preserved for possible reuse:
                    /assets/images/velocity-ai/metrics-code-quality.png
                    /assets/images/velocity-ai/metrics-velocity.png
                    /assets/images/velocity-ai/metrics-ai-utilization.png */}
                <div className="transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                  {card.icon}
                </div>
              </div>
              <div className="relative z-10 mt-3 md:mt-4">
                <h3 className={`${typography.cardTitle} mb-2 text-white`}>{card.title}</h3>
                <p className={`${typography.cardBody} text-white`}>{card.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
