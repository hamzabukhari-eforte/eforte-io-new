"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import InfiniteCarousel from "@/components/sections/InfiniteCarousel";
import { defaultTrustedByLogos } from "@/data/trustedByLogos";
import type { IndustryPageContent } from "@/data/industries/types";

type IndustryHeroSectionProps = {
  content: IndustryPageContent["hero"];
};

export default function IndustryHeroSection({
  content,
}: IndustryHeroSectionProps) {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-default pt-28 pb-6 md:min-h-[500px] md:pt-36 md:pb-8 lg:min-h-[700px]">
      <div className="absolute inset-0">
        <Image
          src={content.imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/75 to-black/35" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full leading-none border border-white/25 bg-white/10 px-4 py-0 text-[13px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur"
          >
            <HiSparkles className="h-3.5 w-3.5 text-primary-pink" />
            {content.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[48px]"
          >
            {content.headline}
          </motion.h1>

          {content.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph.slice(0, 48)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 + index * 0.06 }}
              className={
                index === 0
                  ? "mt-6 max-w-2xl text-base leading-7 text-white/82 md:text-lg"
                  : "mt-4 max-w-2xl text-base leading-7 text-white/82 md:text-lg"
              }
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9"
          >
            <ContactCTA className="inline-flex h-10 items-center justify-center rounded-full leading-none bg-primary-pink px-8 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(211,40,122,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-pink/90">
              {content.ctaLabel}
            </ContactCTA>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-20 mt-6 w-full md:mt-8"
      >
        <InfiniteCarousel items={defaultTrustedByLogos} />
      </motion.div>
    </section>
  );
}
