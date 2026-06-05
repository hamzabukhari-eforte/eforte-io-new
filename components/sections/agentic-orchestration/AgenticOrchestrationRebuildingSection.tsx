"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";

const industries = [
  { label: "Fintech & Banking", href: "/industries/fintech" },
  { label: "Health & Life Sciences", href: "/industries/health" },
  { label: "Heavy Industries", href: "/industries/heavy-industries" },
  { label: "Automobile", href: "/industries/automobile" },
  { label: "Insurance", href: "/industries/insurance" },
  { label: "BPO & Shared Services", href: "/industries/bpo" },
  { label: "Hospitality", href: "/industries/hospitality" },
];

export default function AgenticOrchestrationRebuildingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px", amount: 0.3 });

  return (
    <section
      ref={ref}
      id="rebuilding-industries"
      className={`bg-black overflow-hidden relative ${section.padding} ${section.paddingX}`}
    >
      <div className={`${section.container} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={`${typography.sectionTitleLg} text-white leading-[1.1] mb-6 md:mb-8`}>
            Rebuilding industries with AI
          </h2>
          <p className={`${typography.lead} text-gray-400 max-w-xl mb-8 md:mb-12`}>
            eForte empowers organizations to create AI agents and solutions that streamline operations, enhance efficiency, and unlock new revenue streams. By combining specialized AI teams with your deep domain expertise, we operate as a single, integrated unit focused on delivering measurable business impact from day one.
          </p>
          <div className="space-y-4 md:space-y-6">
            <p className="text-lg md:text-xl font-medium text-white">
              Industries We&apos;re Transforming
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {industries.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="px-3 py-2 md:px-5 md:py-2.5 rounded-full bg-[#1A1A1A] border border-white/5 text-sm md:text-[15px] font-medium text-gray-300 hover:bg-[#252525] hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] aspect-square">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-blue-900/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
            <svg
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-2xl"
            >
              <defs>
                <linearGradient id="rebuild-circleStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity={0.5} />
                </linearGradient>
                <radialGradient id="rebuild-circleFill" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="40%" stopColor="#1E3A8A" stopOpacity={0.1} />
                  <stop offset="100%" stopColor="#1E3A8A" stopOpacity={0.4} />
                </radialGradient>
                <radialGradient id="rebuild-centerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
                </radialGradient>
                <filter id="rebuild-softGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <g transform="translate(300, 300)">
                <g transform="translate(0, -90)" className="group hover:scale-[1.03] transition-transform duration-500 origin-center cursor-pointer">
                  <circle cx="0" cy="0" r="130" fill="url(#rebuild-circleFill)" stroke="url(#rebuild-circleStroke)" strokeWidth="1.5" className="transition-all duration-500 hover:fill-blue-900/30" />
                  <text x="0" y="-10" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" letterSpacing="0.02em" className="drop-shadow-lg">
                    <tspan x="0" dy="0">Industry</tspan>
                    <tspan x="0" dy="24">Knowledge</tspan>
                  </text>
                </g>
                <g transform="translate(-85, 60)" className="group hover:scale-[1.03] transition-transform duration-500 origin-center cursor-pointer">
                  <circle cx="0" cy="0" r="130" fill="url(#rebuild-circleFill)" stroke="url(#rebuild-circleStroke)" strokeWidth="1.5" className="transition-all duration-500 hover:fill-blue-900/30" />
                  <text x="0" y="20" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" letterSpacing="0.02em" className="drop-shadow-lg">
                    <tspan x="0" dy="0">Digital</tspan>
                    <tspan x="0" dy="24">Capabilities</tspan>
                  </text>
                </g>
                <g transform="translate(85, 60)" className="group hover:scale-[1.03] transition-transform duration-500 origin-center cursor-pointer">
                  <circle cx="0" cy="0" r="130" fill="url(#rebuild-circleFill)" stroke="url(#rebuild-circleStroke)" strokeWidth="1.5" className="transition-all duration-500 hover:fill-blue-900/30" />
                  <text x="0" y="20" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" letterSpacing="0.02em" className="drop-shadow-lg">
                    <tspan x="0" dy="0">Data</tspan>
                    <tspan x="0" dy="24">&amp; AI</tspan>
                  </text>
                </g>
                <g>
                  <path d="M0 -35 Q30 -10 30 25 Q0 50 -30 25 Q-30 -10 0 -35 Z" fill="url(#rebuild-centerGlow)" filter="url(#rebuild-softGlow)" opacity={0.8} className="animate-pulse" style={{ animationDuration: "4s" }} />
                  <text x="0" y="-5" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" letterSpacing="0.01em" className="drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                    <tspan x="0" dy="0">eForte</tspan>
                    <tspan x="0" dy="20">AI Solutions</tspan>
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
