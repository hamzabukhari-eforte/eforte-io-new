"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { qualityAssuranceHero } from "@/data/capabilities/qualityAssurance";

export default function QualityAssuranceHeroSection() {
  return (
    <section className="relative flex min-h-[760px] flex-col justify-center overflow-hidden bg-default pt-28 pb-20 md:min-h-screen md:pt-36">
      <div className="absolute inset-0">
        <Image
          src={qualityAssuranceHero.backgroundSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center"
          aria-hidden
        />
        {/* Keep diagram readable on the right; darken left for copy contrast */}
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/80 to-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_40%,rgba(56,189,248,0.18),transparent_36%)]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[13px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur"
          >
            <HiSparkles className="h-3.5 w-3.5 text-primary-pink" />
            {qualityAssuranceHero.label}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[48px]"
          >
            {qualityAssuranceHero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/82 md:text-lg"
          >
            {qualityAssuranceHero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9"
          >
            <ContactCTA className="inline-flex h-10 items-center justify-center rounded-full bg-primary-pink px-8 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(211,40,122,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-pink/90">
              {qualityAssuranceHero.ctaLabel}
            </ContactCTA>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
