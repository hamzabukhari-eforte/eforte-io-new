"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { SiJira, SiGitlab, SiVscodium } from "react-icons/si";
import { section, typography } from "./layout";

const BENTO_CARD_1_IMG = "/assets/images/velocity-ai/bento-ai-pods.png";
const BENTO_CARD_3_IMG = "/assets/images/velocity-ai/bento-metrics-chart.png";

export default function VelocityAIFrameworkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.15 });

  return (
    <section ref={ref} className={`${section.padding} ${section.paddingX} max-w-7xl mx-auto`}>
      <motion.div
        className="text-center mb-10 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-4 md:mb-6">
          <span className={typography.badge + " text-white tracking-widest"}>
            5 Key Components
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-[40px] font-medium text-white tracking-tight">
          eForte Velocity AI framework
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        {/* Card 1: AI-enabled Pods */}
        <motion.div
          className="lg:col-span-4 bg-[#0A0B14] border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[320px] md:min-h-[480px] flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-50" />
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-48 h-48 rounded-full border border-dashed border-white/20 animate-spin-slow" />
              <Image
                src={BENTO_CARD_1_IMG}
                alt="AI-enabled Pods"
                width={180}
                height={180}
                className="w-full h-auto max-h-[180px] object-contain relative z-10 mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
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
          className="lg:col-span-4 bg-[#0A0B14] border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[320px] md:min-h-[480px] flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex-1 flex items-center justify-center relative bg-[#05060D] rounded-xl border border-white/5 overflow-hidden">
            <div className="w-full p-4 font-mono text-xs text-blue-300/80 leading-loose">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <div className="ml-auto flex gap-2 text-[10px] text-gray-500">
                  <span className="bg-white/10 px-1 rounded">HTML</span>
                  <span>React</span>
                </div>
              </div>
              <div className="opacity-70">
                <span className="text-gray-600">1</span> &lt;html lang=&quot;en&quot;&gt;<br />
                <span className="text-gray-600">2</span> &lt;head&gt;<br />
                <span className="text-gray-600">3</span> &nbsp;&nbsp;&lt;meta <span className="bg-blue-500/20 text-blue-200 px-1">charset=&quot;UTF-8&quot;</span>&gt;<br />
                <span className="text-gray-600">4</span> &nbsp;&nbsp;&lt;meta name=&quot;viewport&quot;
              </div>
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
          className="lg:col-span-4 bg-[#0A0B14] border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[320px] md:min-h-[480px] flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent opacity-30" />
            <div className="w-full h-full flex items-center justify-center p-4">
              <Image
                src={BENTO_CARD_3_IMG}
                alt="Defined metrics"
                width={200}
                height={200}
                className="w-full h-auto max-h-[200px] object-contain mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between text-[10px] text-gray-600 font-mono">
              <span>0</span><span>10</span><span>20</span><span>30</span><span>40</span><span>50</span>
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
          className="lg:col-span-7 bg-[#0A0B14] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[240px] flex flex-col md:flex-row items-center justify-between gap-6"
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
            <div className="w-14 h-14 bg-[#1C1D26] rounded-xl flex items-center justify-center border border-white/10 shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110 z-20">
              <SiJira className="text-white text-3xl opacity-90" />
            </div>
            <div className="w-12 h-12 bg-[#1C1D26] rounded-xl flex items-center justify-center border border-white/10 shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-110 z-10">
              <SiGitlab className="text-white text-2xl opacity-90" />
            </div>
            <div className="w-12 h-12 bg-[#1C1D26] rounded-xl flex items-center justify-center border border-white/10 shadow-lg transform rotate-12 hover:rotate-0 transition-all duration-300 hover:scale-110 z-30">
              <FaGithub className="text-white text-2xl" />
            </div>
            <div className="w-14 h-14 bg-[#1C1D26] rounded-xl flex items-center justify-center border border-white/10 shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110 z-20">
              <SiVscodium className="text-white text-3xl opacity-90" />
            </div>
          </div>
        </motion.div>

        {/* Card 5: Custom AI Agents */}
        <motion.div
          className="lg:col-span-5 bg-[#0A0B14] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[240px] flex flex-col md:flex-row items-center justify-between gap-6"
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
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-[2px] relative z-20 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <div className="w-full h-full rounded-full bg-[#0A0B14] flex items-center justify-center overflow-hidden">
                <span className="text-white text-2xl">🤖</span>
              </div>
            </div>
            <div className="absolute -bottom-4 right-0 bg-[#3B82F6] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-30">
              AI Steve
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
