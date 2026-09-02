"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";

export default function AgenticOrchestrationAIPodsSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section
      ref={ref}
      id="delivering-impact"
      className={`${section.padding} bg-black relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-blue-500/5 rounded-full blur-[120px] md:blur-[150px] pointer-events-none z-0" />
      <div className={`${section.container} relative z-10 w-full`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col justify-center">
            <motion.h2
              className={`${typography.sectionTitleLg} text-white leading-[1.1] mb-6`}
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
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
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Cross-functional expertise tailored for your needs
            </motion.h3>
            <motion.div
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            >
              <p className={`${typography.lead} text-white max-w-xl`}>
                At the core of our AI delivery model are cross-functional AI Pods, designed to build, deploy, and scale industry-specific AI solutions.
              </p>
              <p className={`${typography.lead} text-white max-w-xl`}>
                Each Pod brings together AI Product Managers, AI Engineers, MLOps Engineers and Data Scientists, depending on the needs of the solution. Additional AI-enabled roles—such as Data Analysts, Data Engineers, Product Designers, Cybersecurity specialists, and QA professionals—also play a critical role.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[520px] aspect-square">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
              <Image
                src="/assets/images/package/ai-pillars/ai-pod-roles-diagram.svg"
                alt="Agentic Orchestration AI Pod roles: AI Product Manager, Data Scientist, AI Engineer, MLOps Engineer"
                fill
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
