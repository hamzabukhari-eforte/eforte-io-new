"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";
import PartnerLogosRow from "@/components/atoms/PartnerLogosRow";

const industryLinks = [
  "Health & Life-Science",
  "Fintech",
  "High-Tech",
];

export default function AgenticOrchestrationHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden flex flex-col justify-center items-center bg-black pt-24 pb-16 md:pt-40 md:pb-20 md:min-h-[700px] lg:min-h-[900px] ${section.paddingX}`}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-30%] md:right-[-10%] w-[120%] md:w-[80%] h-[140%] md:h-[120%] bg-[#581c87] rounded-full blur-[120px] md:blur-[180px] opacity-80 md:opacity-90" />
        <div className="absolute top-[10%] right-[10%] w-[80%] md:w-[60%] h-[100%] md:h-[80%] bg-[#4338ca] rounded-full blur-[100px] md:blur-[150px] opacity-70 md:opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-0" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <motion.div
          className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#33334d]/80 backdrop-blur-sm border border-white/10 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={`${typography.badge} text-white tracking-wide`}>
            AI AGENT DEVELOPMENT SERVICES
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px] font-medium tracking-tight mb-6 leading-[1.1] text-white drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          The Agentic Orchestration
        </motion.h1>

        <motion.p
        className="text-sm md:text-lg lg:text-xl text-white max-w-2xl mx-auto mb-8 md:mb-12 px-2 font-light leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          AI Agents Tailored for Industry-Specific Challenges.
        </motion.p>

        <motion.p
          className={`${typography.lead} text-gray-300 max-w-2xl mx-auto mb-8 md:mb-16 px-2`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        >
          We specialize in creating powerful, autonomous AI agents capable of dramatically accelerating business processes and operations. Our AI Pods integrate seamlessly with client teams to develop industry-specific AI solutions.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-sm text-white font-medium mb-8 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {industryLinks.map((label, i) => (
            <span key={label} className="hover:text-[#7c3aed] cursor-pointer transition-colors">
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        >
          <Link
            href="#"
            className="inline-block bg-gradient-to-r from-[#be185d] to-[#db2777] hover:from-[#db2777] hover:to-[#be185d] text-white px-8 py-3 md:px-9 md:py-3.5 rounded-full text-sm md:text-[15px] font-semibold transition-all shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.23)] hover:-translate-y-0.5"
          >
            Let&apos;s build intelligence together
          </Link>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <PartnerLogosRow />
        </motion.div>
      </div>
    </section>
  );
}
