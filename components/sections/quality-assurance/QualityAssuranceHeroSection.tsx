"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { qualityAssuranceHero } from "@/data/capabilities/qualityAssurance";

export default function QualityAssuranceHeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-white text-default">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={qualityAssuranceHero.backgroundSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-20 lg:pb-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A8A8A] md:text-xs">
              {qualityAssuranceHero.label}
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-default sm:text-4xl lg:text-[48px]">
              {qualityAssuranceHero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#555] md:text-lg">
              {qualityAssuranceHero.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="shrink-0 md:pb-1"
          >
            <ContactCTA className="inline-flex items-center justify-center rounded-full bg-primary-pink px-8 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_rgba(211,40,122,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-pink/90 md:px-10 md:py-4 md:text-base">
              {qualityAssuranceHero.ctaLabel}
            </ContactCTA>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
