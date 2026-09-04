"use client";

import Image from "next/image";
// import Link from "next/link"; // preserved with Read Case Study CTA
import { motion } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";

const CASE_STUDY_IMG = "/assets/final-images/ai-pillars/velocity-ai/dart.png?v3";

const stats = [
  { value: "10x", label: "Faster resume screening with AI-powered parsing", color: "text-white", delay: 0 },
  { value: "Auto", label: "Skill and experience extraction from every upload", color: "text-white", delay: 0.1 },
  { value: "Smart", label: "Personalized growth insights for every candidate", color: "text-white", delay: 0.2 },
];

const statPositions = [
  "top-20 left-4 md:left-20",
  "bottom-40 right-4 md:right-20",
  "bottom-20 left-1/2 -translate-x-1/2",
];

export default function VelocityAICaseStudySection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section ref={ref} className="pt-16 bg-[#02040a]">
      <motion.div
        className="max-w-5xl mx-auto text-center mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className={`${typography.sectionLabel} mb-4`}>CASE STUDY</p>
        <h2 className="text-3xl md:text-[48px] lg:text-[48px] font-bold text-white">
          Velocity AI in action: DART accelerates intelligent resume screening and growth insights
        </h2>
        <p className="text-white text-sm md:text-base mt-3 md:mt-4 max-w-2xl mx-auto leading-relaxed">
          DART is an AI-powered resume screening platform that parses uploaded resumes, extracts skills and experience, and delivers personalized growth insights—helping organizations identify the right talent and guide employees toward meaningful development opportunities.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="relative h-[256px] sm:h-[360px] md:h-[500px] lg:h-[600px] rounded-[12px] md:rounded-[12px] overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src={CASE_STUDY_IMG}
            alt="Case study - DART AI resume screening"
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03050C] via-transparent to-transparent" />

          {/* Desktop: overlay stats on image */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              className={`absolute hidden md:block ${statPositions[index]} rounded-[12px] border border-white/25 bg-white/10 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150 animate-float`}
              style={{ animationDelay: `${index}s` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] md:text-xs text-white">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: stats below image with spacing (no overlap) */}
        <div className="md:hidden flex flex-col gap-4 mt-4 px-1">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              className="rounded-[12px] border border-white/25 bg-white/10 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
            >
              <div className={`text-xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-white leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Read Case Study CTA preserved for possible future reuse
      <motion.div
        className="text-center mt-8 md:mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      >
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center bg-gradient-to-r from-[#be185d] to-[#db2777] hover:from-[#db2777] hover:to-[#be185d] text-white px-9 py-0 rounded-full leading-none text-[15px] font-medium transition-all shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.23)] hover:-translate-y-0.5"
        >
          Read Case Study
        </Link>
      </motion.div>
      */}
    </section>
  );
}
