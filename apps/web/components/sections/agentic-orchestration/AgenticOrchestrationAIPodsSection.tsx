"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { section } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";

export default function AgenticOrchestrationAIPodsSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section
      ref={ref}
      id="delivering-impact"
      className={`${section.padding} bg-black relative overflow-hidden py-16 border-y border-gray-900 max-w-7xl mx-auto`}
    >
      <div className="absolute top-0 right-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-blue-500/5 rounded-full blur-[120px] md:blur-[150px] pointer-events-none z-0" />
      <div className={`${section.container} relative z-10 w-full`}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] gap-8 lg:gap-16 xl:gap-24 items-start">
          <motion.h2
            className="text-[48px] font-medium tracking-tight text-white leading-[1.1]"
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            AI Pods<span className="text-primary-pink align-super text-xl ml-2">✦</span>
            <br />
            delivering
            <br />
            impact
          </motion.h2>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
              Cross-functional expertise tailored for your needs
            </h3>
            <div className="space-y-4 md:space-y-6">
              <p className="text-[18px] font-light leading-relaxed text-white">
                At the core of our AI delivery model are cross-functional AI Pods, designed to build, deploy, and scale industry-specific AI solutions.
              </p>
              <p className="text-[18px] font-light leading-relaxed text-white">
                Each Pod brings together AI Product Managers, AI Engineers, MLOps Engineers and Data Scientists, depending on the needs of the solution. Additional AI-enabled roles—such as Data Analysts, Data Engineers, Product Designers, Cybersecurity specialists, and QA professionals—also play a critical role.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
