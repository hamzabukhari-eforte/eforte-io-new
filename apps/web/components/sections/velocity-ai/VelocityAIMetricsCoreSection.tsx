"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";

const METRICS_IMGS = [
  "/assets/images/velocity-ai/metrics-code-quality.png",
  "/assets/images/velocity-ai/metrics-velocity.png",
  "/assets/images/velocity-ai/metrics-ai-utilization.png",
];

const metricsCards = [
  { title: "Code quality improvements", sub: "Trackable with tools like SonarQube.", img: METRICS_IMGS[0] },
  { title: "Development velocity", sub: "Measured through platforms such as Jira.", img: METRICS_IMGS[1] },
  { title: "AI tool Utilization", sub: "Monitoring how AI is applied within development workflows.", img: METRICS_IMGS[2] },
];

export default function VelocityAIMetricsCoreSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section ref={ref} className={`bg-black relative overflow-hidden ${section.padding} ${section.paddingX}`}>
      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        <motion.div
          className="inline-flex h-10 items-center justify-center px-4 py-0 md:px-6 md:py-0 rounded-full leading-none border border-[#D3287A] bg-blue-900/10 backdrop-blur-sm mb-6 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={typography.badge + " text-white tracking-[0.1em]"}>
            VELOCITY AI: METRICS AT ITS CORE
          </span>
        </motion.div>

        <motion.h2
          className={`${typography.sectionTitleLg} font-bold text-white mb-4 md:mb-8 leading-[1.1] max-w-5xl mx-auto`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          The Velocity AI framework measures AI-driven development performance across nearly 50 metric categories
        </motion.h2>

        <motion.p
          className={typography.lead + " text-white max-w-3xl mx-auto mb-12 md:mb-24"}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          covering both quantitative and qualitative indicators—from hard data to developer satisfaction and comparative insights.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {metricsCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-[#050511] rounded-[12px] md:rounded-[12px] p-6 md:p-10 flex flex-col items-center justify-between min-h-[320px] md:min-h-[440px] border border-white/5 hover:border-blue-500/30 transition-all duration-300 group relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />
              <div className="flex-1 flex items-center justify-center w-full relative z-10">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={192}
                  height={192}
                  className="w-48 h-48 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="relative z-10 mt-4 md:mt-6">
                <h3 className={typography.cardTitle + " text-white mb-2"}>{card.title}</h3>
                <p className={typography.cardBody + " text-white"}>{card.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
