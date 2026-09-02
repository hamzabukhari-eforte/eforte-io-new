"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaWindowMaximize, FaComments, FaCogs, FaNetworkWired } from "react-icons/fa";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";

const useCases = [
  {
    icon: FaWindowMaximize,
    title: "LLM Apps",
    description: "Advanced Retrieval-Augmented Generation (RAG) applications seamlessly integrated into your organization.",
    items: ["Internal document search", "Contract drafting assistance", "Financial analysis copilots"],
  },
  {
    icon: FaComments,
    title: "Chat Bots",
    description: "Custom text and voice chatbots that interact naturally with people and systems.",
    items: ["Financial analyst assistants", "Call center support bots", "Guided medical exam assistants"],
  },
  {
    icon: FaCogs,
    title: "Automations",
    description: "AI-powered automations that boost productivity and minimize manual work.",
    items: ["Document processing and parsing", "Financial process automation", "Orchestrated system-to-system workflows"],
  },
  {
    icon: FaNetworkWired,
    title: "Agentic Workflows",
    description: "Multi-step AI workflows that reason, plan, and execute end-to-end solutions for complex problems.",
    items: ["Autonomous customer service agents", "Revenue accelerates growth agents", "Recruiting and talent-matching agents"],
  },
];

export default function AgenticOrchestrationUseCasesSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section
      ref={ref}
      id="use-cases"
      className={`${section.padding} border-t border-white/5 bg-[#030304] ${section.paddingX}`}
    >
      <div className={`${section.container} mb-12 md:mb-16`}>
        <motion.h2
          className={`${typography.sectionTitle} md:text-5xl lg:text-6xl font-bold text-center text-white mb-6 md:mb-8`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          eForte AI Solutions
        </motion.h2>
        <motion.p
          className={`${typography.lead} text-white text-center max-w-3xl mx-auto`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          eForte delivers the full spectrum of GenAI solutions, helping organizations automate, augment, and transform business processes.
        </motion.p>
        <motion.div
          className="relative mx-auto mt-10 aspect-[1079/457] w-full max-w-7xl md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <Image
            src="/assets/images/package/ai-pillars/ai-solutions-4cards.svg"
            alt="Diagram of eForte AI Solutions showing four offerings: LLM Apps, Chat Bots, Automations, and Agentic Workflows"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
            className="object-contain"
          />
        </motion.div>
      </div>
      <div className={`${section.container}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {useCases.map((uc, index) => (
            <motion.div
              key={uc.title}
              className="group relative p-6 rounded-[12px] transition-all duration-300 hover:bg-white/[0.02] -m-6 md:m-0"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 rounded-[12px] bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
                    <uc.icon className="text-white group-hover:text-blue-400 transition-colors duration-300 text-lg" />
                  </div>
                  <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors duration-300 text-base md:text-lg">
                    {uc.title}
                  </h4>
                </div>
                <p className="text-xs text-white mb-4 md:mb-6 min-h-[40px]">
                  {uc.description}
                </p>
                <ul className="space-y-2 md:space-y-3">
                  {uc.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs md:text-sm text-white bg-[#0A0A0A] px-3 py-2 md:px-4 md:py-3 rounded border border-white/5 hover:border-blue-500/30 transition-colors duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
