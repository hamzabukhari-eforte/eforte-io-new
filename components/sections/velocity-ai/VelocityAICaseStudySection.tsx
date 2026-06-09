"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";

const CASE_STUDY_IMG = "/assets/images/velocity-ai/case-study-myrow.png";

const stats = [
  { value: "+50%", label: "Improvement in key DORA metrics", color: "text-[#2563EB]", delay: 0 },
  { value: "100%", label: "Copy line of code released before merging", color: "text-purple-400", delay: 0.1 },
  { value: "30%", label: "Faster new innovation cycles", color: "text-emerald-400", delay: 0.2 },
];

const statPositions = [
  "top-20 left-4 md:left-20",
  "bottom-40 right-4 md:right-20",
  "bottom-20 left-1/2 -translate-x-1/2",
];

export default function VelocityAICaseStudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.15 });

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
          Myrow transforms its development processes
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-3 md:mt-4 max-w-2xl mx-auto leading-relaxed">
          Myrow&apos;s mission is to transform traditional rowing workouts with expert-led classes and real-time performance analytics.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="relative h-[256px] sm:h-[360px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden group"
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
              className={`absolute hidden md:block ${statPositions[index]} bg-[#03050C]/80 backdrop-blur-md border border-white/10 p-6 rounded-xl animate-float`}
              style={{ animationDelay: `${index}s` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] md:text-xs text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: stats below image with spacing (no overlap) */}
        <div className="md:hidden flex flex-col gap-4 mt-4 px-1">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              className="bg-[#03050C]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
            >
              <div className={`text-xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-gray-300 leading-snug">{stat.label}</div>
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
          className="inline-block bg-gradient-to-r from-[#be185d] to-[#db2777] hover:from-[#db2777] hover:to-[#be185d] text-white px-9 py-3.5 rounded-full text-[15px] font-medium transition-all shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.23)] hover:-translate-y-0.5"
        >
          Read Case Study
        </Link>
      </motion.div>
    </section>
  );
}
