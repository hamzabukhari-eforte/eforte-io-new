"use client";

import ContactCTA from "@/components/atoms/ContactCTA";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AgenticOrchestrationFooterCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.15 });

  return (
    <section
      ref={ref}
      className="relative min-h-[320px] md:min-h-[400px] flex flex-col items-center justify-center text-center overflow-hidden py-16 md:py-24 bg-[#03050C]"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#03050C] via-[#03050C]/90 to-black/80" />

      <motion.div
        className="relative z-10 px-4 sm:px-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
          Let&apos;s Build the Future Together
        </h2>
        <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
          Partner with eForte&apos;s experts to explore your idea or product and discover how Velocity AI, Agentic Orchestration, and a robust Foundational Data Layer can accelerate innovation and business impact.
        </p>
        <ContactCTA
          className="inline-flex h-10 items-center justify-center bg-gradient-to-r from-[#be185d] to-[#db2777] hover:from-[#db2777] hover:to-[#be185d] text-white px-8 py-0 md:px-9 md:py-0.5 rounded-full text-sm md:text-[15px] font-medium transition-all shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.23)] hover:-translate-y-0.5"
        >
          Get in touch
        </ContactCTA>
      </motion.div>
    </section>
  );
}
