"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { cyberHero } from "@/data/capabilities/cybersecurity";

export default function CyberHeroSection() {
  return (
    <section className="relative flex min-h-[720px] flex-col overflow-hidden bg-[#020511] pt-28 md:min-h-[860px] md:pt-36">
      <Image
        src={cyberHero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#020511]/80 via-[#020511]/40 to-transparent md:via-[#020511]/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-[#020511]/90 via-[#020511]/35 to-transparent"
        aria-hidden
      />

      <Container className="relative z-10 mt-auto flex w-full flex-col gap-10 pb-16 md:flex-row md:items-end md:justify-between md:gap-12 md:pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl lg:max-w-[560px] xl:max-w-[640px]"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white">
            {cyberHero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-[48px]">
            {cyberHero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {cyberHero.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="shrink-0 md:pb-1"
        >
          <ContactCTA className="inline-flex h-10 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-default transition-opacity hover:opacity-90">
            {cyberHero.ctaLabel}
          </ContactCTA>
        </motion.div>
      </Container>
    </section>
  );
}
