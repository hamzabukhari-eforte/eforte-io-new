"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";

const roles = [
  { label: ["AI Product", "Manager"], x: 400, y: 230, dotX: 370, dotY: 230 },
  { label: ["Data", "Scientist"], x: 400, y: 390, dotX: 370, dotY: 390 },
  { label: ["AI", "Engineer"], x: 200, y: 390, dotX: 230, dotY: 390 },
  { label: ["ML Ops", "Engineer"], x: 200, y: 230, dotX: 230, dotY: 230 },
];

export default function AgenticOrchestrationAIPodsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px", amount: 0.3 });

  return (
    <section
      ref={ref}
      id="delivering-impact"
      className="py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden min-h-[700px] md:min-h-[800px] flex items-center"
    >
      <div className="absolute top-0 right-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-blue-500/5 rounded-full blur-[120px] md:blur-[150px] pointer-events-none z-0" />
      <div className={`${section.container} relative z-10 w-full`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col justify-center">
            <motion.h2
              className={`${typography.sectionTitleLg} text-white leading-[1.1] mb-6`}
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              AI Pods<span className="text-[#3b82f6] align-super text-2xl md:text-3xl ml-2">✦</span>
              <br />
              delivering
              <br />
              impact
            </motion.h2>
            <motion.h3
              className="text-xl md:text-2xl font-semibold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Cross-functional expertise tailored for your needs
            </motion.h3>
            <motion.div
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            >
              <p className={`${typography.lead} text-gray-400 max-w-xl`}>
                At the core of our AI delivery model are cross-functional AI Pods, designed to build, deploy, and scale industry-specific AI solutions.
              </p>
              <p className={`${typography.lead} text-gray-400 max-w-xl`}>
                Each Pod brings together AI Product Managers, AI Engineers, MLOps Engineers and Data Scientists, depending on the needs of the solution. Additional AI-enabled roles—such as Data Analysts, Data Engineers, Product Designers, Cybersecurity specialists, and QA professionals—also play a critical role.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] aspect-square">
              <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <radialGradient id="pods-centerGlowBlue" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity={0} />
                  </radialGradient>
                  <linearGradient id="pods-crosshairGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                  </linearGradient>
                  <linearGradient id="pods-crosshairGradientV" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                  </linearGradient>
                </defs>
                <g stroke="#3B82F6" strokeWidth="1" fill="none" className="opacity-20">
                  <circle cx="300" cy="300" r="100" />
                  <circle cx="300" cy="300" r="180" />
                  <circle cx="300" cy="300" r="260" />
                </g>
                <line x1="50" y1="300" x2="550" y2="300" stroke="url(#pods-crosshairGradient)" strokeWidth="1.5" />
                <line x1="300" y1="50" x2="300" y2="550" stroke="url(#pods-crosshairGradientV)" strokeWidth="1.5" />
                <circle cx="300" cy="300" r="60" fill="url(#pods-centerGlowBlue)" opacity={0.4} className="animate-pulse" style={{ animationDuration: "4s" }} />
                <circle cx="300" cy="300" r="40" fill="#1e3a8a" stroke="#60A5FA" strokeWidth="2" />
                <path d="M300 280 L305 295 L320 300 L305 305 L300 320 L295 305 L280 300 L295 295 Z" fill="white" className="animate-pulse" />
                <path d="M315 275 L318 282 L325 285 L318 288 L315 295 L312 288 L305 285 L312 282 Z" fill="white" opacity={0.8} />
                {roles.map((r, i) => (
                  <g key={i} className="transition-all duration-300 hover:scale-105 cursor-default">
                    <text x={r.x} y={r.y - 10} textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600">
                      {r.label[0]}
                    </text>
                    <text x={r.x} y={r.y + 10} textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600">
                      {r.label[1]}
                    </text>
                    <circle cx={r.dotX} cy={r.dotY} r="2" fill="#60A5FA" />
                  </g>
                ))}
                <path d="M300 300 L450 150 A212 212 0 0 1 512 300 Z" fill="url(#pods-centerGlowBlue)" opacity={0.1} className="animate-pulse" style={{ animationDuration: "4s" }} />
                <path d="M300 300 L150 450 A212 212 0 0 1 88 300 Z" fill="url(#pods-centerGlowBlue)" opacity={0.1} className="animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
