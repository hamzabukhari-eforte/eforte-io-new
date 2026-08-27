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
    <section
      ref={ref}
      className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden bg-[#03050C] py-16 text-center md:min-h-[400px]"
    >
      <Image
        src={CTA_IMG}
        alt="Team"
        fill
        className="object-cover object-center opacity-40 grayscale"
      />
      <div className="absolute inset-0 bg-[#03050C]/70" aria-hidden />

      <motion.div
        className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl lg:text-4xl">
          Let&apos;s Build the Future Together
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-white md:mb-8 md:text-base">
          Partner with eForte&apos;s experts to explore your idea or product and
          discover how Velocity AI, Agentic Orchestration, and a robust
          Foundational Data Layer can accelerate innovation and business impact.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <ContactCTA className="inline-flex h-10 items-center justify-center rounded-full bg-primary-pink px-9 py-0 text-[15px] font-medium leading-none text-white transition-all hover:-translate-y-0.5 hover:bg-primary-pink/90">
            Get in touch
          </ContactCTA>
          <QuoteCTA className="inline-flex h-10 items-center justify-center rounded-full border border-transparent bg-white px-9 py-0 text-[15px] font-medium leading-none text-default transition-all hover:-translate-y-0.5 hover:border-white hover:bg-transparent hover:text-white">
            Get a Quote
          </QuoteCTA>
        </div>
      </motion.div>
    </section>
  );
}
