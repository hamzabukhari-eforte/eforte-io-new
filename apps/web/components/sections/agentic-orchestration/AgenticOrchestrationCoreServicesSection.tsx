"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaSearchDollar, FaRobot, FaUsersCog, FaTachometerAlt } from "react-icons/fa";
import { section, typography } from "./layout";

const coreServices = [
  {
    icon: FaSearchDollar,
    title: "Strategic Assessment of AI Opportunities",
    description:
      "Leverage the eForte AI Agent Framework to identify and prioritize high-impact AI use cases, ensuring initiatives deliver maximum ROI and strategic value.",
  },
  {
    icon: FaRobot,
    title: "AI Agent Design & Implementation",
    description:
      "Deliver custom AI agent solutions tailored to industry-specific challenges, alongside pre-built agents such as Financial Analyst Agents and Credit Scoring Agents.",
  },
  {
    icon: FaUsersCog,
    title: "AI Talent Augmentation",
    description:
      "Deploy cross-functional AI Pods to strengthen in-house teams, accelerating AI projects while maintaining quality and alignment with internal processes.",
  },
  {
    icon: FaTachometerAlt,
    title: "Model Optimization & Benchmarking",
    description:
      "Fine-tune and optimize models for performance, scalability, and accuracy, and benchmark multiple approaches against your specific use cases.",
  },
];

export default function AgenticOrchestrationCoreServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px", amount: 0.15 });

  return (
    <section
      ref={ref}
      id="core-ai-agent-dev-services"
      className={`py-16 md:py-24 border-t border-white/5 bg-[#030304] relative overflow-hidden ${section.paddingX}`}
    >
      <div className={`${section.container} flex flex-col items-center relative z-10`}>
        <motion.h2
          className={`${typography.sectionTitle} md:text-5xl lg:text-6xl font-bold text-center text-white mb-6`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Core AI Agent Development Services
        </motion.h2>
        <motion.p
          className={`${typography.lead} text-gray-400 text-center max-w-3xl mx-auto mb-10 md:mb-16`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          From opportunity assessment to production-grade optimization, our teams cover the full AI agent development lifecycle.
        </motion.p>

        <motion.div
          className="relative w-full max-w-4xl aspect-[1200/896] mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <Image
            src="/assets/images/package/ai-pillars/core-ai-agent-dev-services.svg"
            alt="Core AI Agent Development Services: Strategic Assessment, AI Agent Design & Implementation, AI Talent Augmentation, Model Optimization & Benchmarking"
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-contain rounded-[12px]"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-6 rounded-[12px] transition-all duration-300 hover:bg-white/[0.02]"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-[12px] bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300 mb-4">
                  <service.icon className="text-white group-hover:text-blue-400 transition-colors duration-300 text-lg" />
                </div>
                <h4 className={`${typography.cardTitle} text-white mb-2`}>{service.title}</h4>
                <p className={`${typography.cardBody}`}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
