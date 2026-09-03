"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";

const CASE_STUDY_IMG = "/assets/images/velocity-ai/case-study-myrow.png";

const stats = [
  { value: "+55%", label: "Boost in DORA metrics, accelerating feature delivery", color: "text-[#2563EB]", delay: 0 },
  { value: "100%", label: "Code review coverage, eliminating unreviewed merges", color: "text-purple-400", delay: 0.1 },
  { value: "-35%", label: "Shorter incident resolution cycles", color: "text-emerald-400", delay: 0.2 },
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
    <section ref={ref} className="py-24 bg-[#02040a]">
      <motion.div
        className="max-w-5xl mx-auto text-center mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">Case Study</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
          Velocity AI in action: AquaFit accelerates software delivery and performance insights
        </h2>
        <p className="text-white text-sm md:text-base mt-3 md:mt-4 max-w-2xl mx-auto leading-relaxed">
          AquaFit aims to revolutionize smart fitness devices by providing real-time workout analytics, personalized coaching, and seamless app experiences for its users.
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
            alt="Case study - Myrow"
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03050C] via-transparent to-transparent" />

          {/* Desktop: overlay stats on image */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              className={`absolute hidden md:block ${statPositions[index]} bg-[#03050C]/80 backdrop-blur-md border border-white/10 p-6 rounded-[12px] animate-float`}
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
              className="bg-[#03050C]/90 backdrop-blur-md border border-white/10 p-4 rounded-[12px]"
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
    </section>
  );
}
