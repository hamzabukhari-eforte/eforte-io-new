"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import InfiniteCarousel from "@/components/sections/InfiniteCarousel";
import { defaultTrustedByLogos } from "@/data/trustedByLogos";

const HERO_IMAGE =
  "/assets/final-images/industries/financial-services/finance-studio-hero-v6.png";
// Previous hero graphics preserved for possible future reuse:
// "/assets/final-images/industries/financial-services/finance-studio-hero-v5.png"
// "/assets/final-images/industries/financial-services/finance-studio-hero-v4.png"
// "/assets/final-images/industries/financial-services/finance-studio-hero-blue-red-accent.png"
// "/assets/final-images/industries/financial-services/finance-studio-hero-blue.png"
// "/assets/final-images/industries/financial-services/finance-studio-hero.png"
// "/assets/images/package/industries/finance-industry-hero.svg"

const complianceBadges = [
  { src: "/assets/images/landing/soc.png", alt: "SOC 2 TYPE 2" },
  { src: "/assets/images/landing/iso.png", alt: "ISO 27001 Certified" },
  { src: "/assets/images/landing/nist.png", alt: "NIST Compliant" },
];

const HERO_PROOF_INTERVAL_MS = 4500;

const heroProofPoints = [
  {
    value: "80%",
    label:
      "of eForte's finance clients have partnered with us for more than three years.",
  },
  {
    value: "20+",
    label: "years of banking and financial services experience",
  },
  {
    value: "100M+",
    label: "people using financial systems we helped build",
  },
] as const;

function HeroProofRotator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const point = heroProofPoints[activeIndex];

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroProofPoints.length);
    }, HERO_PROOF_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, activeIndex]);

  return (
    <div
      className="flex min-h-[72px] min-w-[240px] flex-col justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[48px] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={point.value}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-4"
            aria-live="polite"
          >
            <span className="shrink-0 text-4xl font-semibold leading-none text-white md:text-[40px]">
              {point.value}
            </span>
            <span className="max-w-[240px] text-xs leading-snug text-white">
              {point.label}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function FinancialServicesHeroSection() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-default pt-28 pb-6 md:min-h-[500px] md:pt-36 md:pb-8 lg:min-h-[700px]">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
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
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full leading-none border border-white/25 bg-white/10 px-4 py-0 text-[13px] font-medium uppercase tracking-[0.18em] text-primary-pink backdrop-blur"
          >
            <HiSparkles className="h-3.5 w-3.5 text-primary-pink" />
            FINANCE STUDIO
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[48px]"
          >
            Intelligent infrastructure for the next era of financial services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-7 text-white md:text-lg"
          >
            eForte partners with banks, lenders, and payment innovators to turn
            financial services ambitions into shipped products, engineering
            secure, scalable systems across lending, payments, and embedded
            finance, powered by data and applied AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9"
          >
            <ContactCTA className="inline-flex h-10 items-center justify-center rounded-full leading-none bg-primary-pink px-8 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(211,40,122,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-pink/90">
              Contact Us
            </ContactCTA>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-3">
              {complianceBadges.map((badge) => (
                <div
                  key={badge.alt}
                  className="relative h-16 w-16 md:h-[72px] md:w-[72px]"
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    className="object-contain"
                    sizes="72px"
                  />
                </div>
              ))}
            </div>

            <HeroProofRotator />
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
