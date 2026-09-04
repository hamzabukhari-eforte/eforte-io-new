"use client";

import { motion } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { useInViewReplay } from "@/lib/useInViewReplay";
import {
  FaTachometerAlt,
  FaMountain,
  FaShieldAlt,
  FaTerminal,
  FaUsers,
  FaCheck,
  FaBoxOpen,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { section, typography } from "./layout";

const ACCENT = "#d32871";
const ACCENT_GLOW = "rgba(211, 40, 113, 0.4)";
const ICON_PINK = "#D3287A";
const ICON_BG = "rgba(211, 40, 113, 0.22)";

const metricViews: {
  id: string;
  title: string;
  desc: string;
  icon: IconType;
}[] = [
  {
    id: "efficiency",
    title: "Efficiency Metrics",
    desc: "Optimize resource usage and process flow.",
    icon: FaTachometerAlt,
  },
  {
    id: "dx",
    title: "Developer Experience Metrics",
    desc: "Monitor satisfaction, engagement, and workflow efficiency.",
    icon: FaMountain,
  },
  {
    id: "security",
    title: "Security Metrics",
    desc: "Track vulnerabilities, compliance, and risk mitigation.",
    icon: FaShieldAlt,
  },
  {
    id: "maintainability",
    title: "Code Maintainability Metrics",
    desc: "Ensure long-term reliability and readability.",
    icon: FaTerminal,
  },
  {
    id: "productivity",
    title: "Team Productivity Metrics",
    desc: "Measure output, velocity, and collaboration effectiveness.",
    icon: FaUsers,
  },
  {
    id: "quality",
    title: "Code Quality Metrics",
    desc: "Assess bugs, coverage, and technical debt.",
    icon: FaCheck,
  },
  {
    id: "delivery",
    title: "Delivery Metrics",
    desc: "Evaluate deployment frequency, lead times, and release success.",
    icon: FaBoxOpen,
  },
];

const rowOne = metricViews.slice(0, 4);
const rowTwo = metricViews.slice(4);

export default function VelocityAIMetricsOrbitSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section
      ref={ref}
      className={`bg-black relative overflow-hidden ${section.padding} ${section.paddingX}`}
    >
      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        <motion.p
          className={`${typography.sectionLabel} mb-4`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          CORE METRICS
        </motion.p>

        <motion.h2
          className={`${typography.sectionTitle} font-bold text-white mb-4 md:mb-6 tracking-tight`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Sample Views
        </motion.h2>

        <motion.p
          className={`${typography.lead} text-white max-w-xl mx-auto mb-10 md:mb-14`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Our team tracks a comprehensive set of metrics to evaluate performance,
          identify opportunities, and drive continuous improvement.
        </motion.p>

        <div className="mx-auto flex max-w-6xl flex-col gap-5 md:gap-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {rowOne.map((item, index) => (
              <MetricCard
                key={item.id}
                item={item}
                isInView={isInView}
                delay={0.3 + index * 0.06}
              />
            ))}
          </div>

          <div className="flex flex-col items-stretch justify-center gap-5 sm:flex-row sm:flex-wrap md:gap-6">
            {rowTwo.map((item, index) => (
              <MetricCard
                key={item.id}
                item={item}
                isInView={isInView}
                delay={0.55 + index * 0.06}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-4.5rem)/4)]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  item,
  isInView,
  delay,
  className = "",
}: {
  item: (typeof metricViews)[number];
  isInView: boolean;
  delay: number;
  className?: string;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-[12px] border bg-[#1a1a1a] px-4 py-5 text-left transition-all duration-300 ease-out md:px-5 md:py-6 ${className}`}
      style={{ borderColor: "rgba(255,255,255,0.08)" } as CSSProperties}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      onMouseEnter={(event) => {
        event.currentTarget.style.borderColor = ACCENT;
        event.currentTarget.style.boxShadow = `0 0 24px ${ACCENT_GLOW}`;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        event.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Methodology-style hover: corner glow + watermark icon */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <div
          className="absolute right-0 bottom-0 h-full w-full min-h-[60vh] min-w-[50vw]"
          style={{
            background: `radial-gradient(ellipse 90% 90% at 100% 100%, ${ACCENT_GLOW} 0%, transparent 50%)`,
          }}
        />
        <div className="absolute -right-10 -bottom-5 flex items-end justify-end p-0">
          <div className="origin-bottom-right -mr-2 -mb-2 scale-[4] opacity-20">
            <Icon size={32} color={ACCENT} />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full md:h-11 md:w-11"
            style={{ backgroundColor: ICON_BG }}
          >
            <Icon size={18} color={ICON_PINK} className="shrink-0" />
          </div>
        </div>
        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 md:text-xl">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-white transition-colors duration-300 md:text-base">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}
