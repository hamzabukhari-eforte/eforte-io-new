"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import InfiniteCarousel from "@/components/sections/InfiniteCarousel";
import { defaultTrustedByLogos } from "@/data/trustedByLogos";
import type { IndustryPageContent } from "@/data/industries/types";

type IndustryHeroSectionProps = {
  content: IndustryPageContent["hero"];
};

export default function IndustryHeroSection({ content }: IndustryHeroSectionProps) {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-default pt-28 pb-10 md:pt-36 md:pb-14">
      <div className="absolute inset-0">
        <Image
          src={content.imageSrc}
          alt=""
          fill
          priority
          className="object-cover object-[center_30%]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/30" />
      </div>

      <Container className="relative z-10 flex flex-1 items-center">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-white/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
          >
            {content.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {content.headline}
          </motion.h1>

          {content.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph.slice(0, 32)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 + index * 0.06 }}
              className={
                index === 0
                  ? "mt-7 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
                  : "mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
              }
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9"
          >
            <ContactCTA className="inline-flex h-12 items-center justify-center rounded-full border border-white/50 px-8 text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-default">
              {content.ctaLabel}
            </ContactCTA>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 mt-12"
      >
        <InfiniteCarousel items={defaultTrustedByLogos} />
      </motion.div>
    </section>
  );
}
