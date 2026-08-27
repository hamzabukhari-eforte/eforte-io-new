"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ContactCTA from "@/components/atoms/ContactCTA";
import QuoteCTA from "@/components/atoms/QuoteCTA";

const CTA_IMG = "/assets/images/velocity-ai/cta-team.png";

export default function VelocityAIFooterCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.15 });

  return (
    <section ref={ref} className="relative min-h-[320px] md:min-h-[400px] flex flex-col items-center justify-center text-center overflow-hidden py-16 md:py-24">
      <Image
        src={CTA_IMG}
        alt="Team"
        fill
        className="object-cover opacity-30 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03050C] via-[#03050C]/80 to-transparent" />

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
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <ContactCTA
            className="inline-flex h-10 items-center justify-center bg-gradient-to-r from-[#be185d] to-[#db2777] hover:from-[#db2777] hover:to-[#be185d] text-white px-9 py-0 rounded-full leading-none text-[15px] font-medium transition-all shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.23)] hover:-translate-y-0.5"
          >
            Get in touch
          </ContactCTA>
          <QuoteCTA
            className="inline-flex h-10 items-center justify-center border border-white/70 bg-transparent px-9 py-0 rounded-full leading-none text-[15px] font-medium text-white transition-all hover:bg-white hover:text-default hover:-translate-y-0.5"
          >
            Get a Quote
          </QuoteCTA>
        </div>
      </motion.div>
    </section>
  );
}
