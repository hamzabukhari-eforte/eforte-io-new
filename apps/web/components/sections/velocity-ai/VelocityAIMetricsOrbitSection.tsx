"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
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
import { section, typography } from "./layout";

const orbitItems = [
  { id: "efficiency", title: "Efficiency Metrics", desc: "Optimize resource\nusage and process flow.", icon: FaTachometerAlt, pos: "center", size: "lg" },
  { id: "dx", title: "Developer Experience\nMetrics", desc: "Monitor satisfaction,\nengagement, and\nworkflow efficiency.", icon: FaMountain, pos: "top-left" },
  { id: "security", title: "Security Metrics", desc: "Track vulnerabilities,\ncompliance,\nand risk mitigation.", icon: FaShieldAlt, pos: "top-right" },
  { id: "maintainability", title: "Code\nMaintainability\nMetrics", desc: "Ensure long-term\nreliability and\nreadability.", icon: FaTerminal, pos: "far-left" },
  { id: "productivity", title: "Team Productivity\nMetrics", desc: "Measure output, velocity,\nand collaboration\neffectiveness.", icon: FaUsers, pos: "far-right" },
  { id: "quality", title: "Code\nQuality Metrics", desc: "Assess bugs, coverage,\nand technical debt.", icon: FaCheck, pos: "bottom-left" },
  { id: "delivery", title: "Delivery\nMetrics", desc: "Evaluate deployment\nfrequency, lead times,\nand release success.", icon: FaBoxOpen, pos: "bottom-right" },
];

const posClasses: Record<string, string> = {
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30",
  "top-left": "top-[20%] left-[25%] z-20",
  "top-right": "top-[20%] right-[25%] z-20",
  "far-left": "top-[50%] left-[8%] -translate-y-1/2 z-20",
  "far-right": "top-[50%] right-[8%] -translate-y-1/2 z-20",
  "bottom-left": "bottom-[15%] left-[25%] z-20",
  "bottom-right": "bottom-[15%] right-[25%] z-20",
};

export default function VelocityAIMetricsOrbitSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section ref={ref} className={`bg-black relative overflow-hidden flex flex-col items-center ${section.padding} ${section.paddingX}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/10 via-black to-black pointer-events-none z-0 max-w-full max-h-full hidden lg:block" />

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <motion.div
          className="inline-flex h-10 items-center justify-center px-4 py-0 md:px-6 rounded-full leading-none border border-white/20 bg-white/5 backdrop-blur-sm mb-4 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={typography.badge + " text-white"}>
            Core Metrics
          </span>
        </motion.div>

        <motion.h2
          className={`${typography.sectionTitle} font-medium text-white mb-4 md:mb-6 tracking-tight`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Sample Views
        </motion.h2>

        <motion.p
          className={typography.lead + " text-gray-300 max-w-xl mx-auto mb-8 md:mb-12"}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Our team tracks a comprehensive set of metrics to evaluate performance, identify opportunities, and drive continuous improvement.
        </motion.p>

        {/* Mobile/tablet: stacked cards (like velocityAI-mobile.html) */}
        <motion.div
          className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {orbitItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className="flex flex-col items-center text-center bg-gradient-to-b from-[#1e1b4b] to-[#0f0a2a] border border-indigo-500/30 rounded-[12px] p-6"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
              >
                <div className="w-16 h-16 rounded-[12px] bg-gradient-to-b from-[#1e1b4b] to-[#0f0a2a] border border-indigo-500/30 flex items-center justify-center mb-3 mx-auto">
                  <Icon className="text-2xl text-white" />
                </div>
                <h3 className="text-sm font-medium text-white mb-1 whitespace-pre-line">{item.title.replace(/\n/g, " ")}</h3>
                <p className="text-xs text-gray-400 leading-tight whitespace-pre-line">{item.desc.replace(/\n/g, " ")}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Desktop: orbit layout */}
        <motion.div
          className="hidden lg:block relative w-full max-w-[1000px] mx-auto h-[550px] mt-16 perspective-[2000px] min-h-[500px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[700px] max-w-[90%] h-[300px] rounded-full border border-white/5 bg-gradient-to-b from-fuchsia-900/10 to-transparent shadow-[0_0_80px_rgba(134,25,143,0.15)] [transform:rotateX(75deg)]" />
            <div className="absolute w-[500px] max-w-[70%] h-[200px] rounded-full border border-white/5 bg-gradient-to-b from-fuchsia-900/15 to-transparent shadow-[0_0_60px_rgba(134,25,143,0.2)] [transform:rotateX(75deg)]" />
            <div className="absolute w-[300px] max-w-[50%] h-[120px] rounded-full border border-white/5 bg-gradient-to-b from-fuchsia-900/20 to-transparent shadow-[0_0_40px_rgba(134,25,143,0.25)] [transform:rotateX(75deg)]" />
          </div>
          {orbitItems.map((item, index) => {
            const Icon = item.icon;
            const isCenter = item.pos === "center";
            const boxSize = isCenter ? "w-24 h-24" : "w-20 h-20";
            const iconSize = isCenter ? "text-4xl" : "text-3xl";
            return (
              <motion.div
                key={item.id}
                className={`absolute flex flex-col items-center ${posClasses[item.pos]}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
              >
                <div
                  className={`${boxSize} rounded-[12px] bg-gradient-to-b from-[#1e1b4b] to-[#0f0a2a] border border-indigo-500/30 flex items-center justify-center mb-3 shadow-[0_0_30px_rgba(79,70,229,0.2)] hover:scale-110 transition-transform duration-300 relative overflow-hidden group cursor-default ${isCenter ? "mb-4 shadow-[0_0_40px_rgba(79,70,229,0.4)]" : ""}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-transparent opacity-40" />
                  <Icon className={`${iconSize} text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.45)] relative z-10`} />
                </div>
                <h3 className="text-white font-medium text-[12px] md:text-[14px] text-center leading-tight mb-1 whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[10px] md:text-[11px] text-center leading-tight whitespace-pre-line">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
