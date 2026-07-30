"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "@/components/atoms/ContactCTA";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import InfiniteCarousel from "@/components/sections/InfiniteCarousel";
import { defaultTrustedByLogos } from "@/data/trustedByLogos";

const rotatingImages = [
  { src: "/assets/images/case-study/krank-banner.png", alt: "Krank platform" },
  {
    src: "/assets/images/case-study/oddysee-banner.png",
    alt: "Oddysee platform",
  },
  {
    src: "/assets/images/case-study/invesment-banner.png",
    alt: "Investment Markets platform",
  },
  { src: "/assets/images/case-study/prism-banner.png", alt: "Prism platform" },
  {
    src: "/assets/images/case-study/scheduling1.png",
    alt: "Scheduling engine",
  },
  { src: "/assets/images/case-study/sellsMart4.png", alt: "Sellsmart POS" },
  { src: "/assets/images/case-study/Validatr.png", alt: "Validatr platform" },
];

const ROTATE_INTERVAL_MS = 3500;

export default function HealthcareHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % rotatingImages.length);
    }, ROTATE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const image = rotatingImages[activeIndex];

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-linear-to-br from-[#0a3fb0] via-[#0a2a8f] to-[#061a5c] pt-28 pb-10 md:pt-36 md:pb-14">
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[70%] w-[60%] -translate-y-1/2 lg:block xl:w-[55%]"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={image.src}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 120 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="60vw"
              className="object-contain object-right"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/80"
            >
              Health &amp; Wellbeing
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Human-centered health technology, built with Velocity AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              For over 18 years, eForte has helped health systems, digital
              therapeutics companies, and wellness brands turn ambitious ideas
              into secure, scalable products — spanning patient portals,
              connected devices, virtual care platforms, and AI-assisted clinical
              tools.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              We combine deep health-domain knowledge with our Velocity AI,
              Agentic Orchestration, and Foundational Data Layer pillars to help
              healthcare innovators move from concept to compliant,
              production-ready software faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/impact-studies"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-default transition-all duration-200 hover:bg-white/90"
              >
                View portfolio
                <HiArrowRight className="h-4 w-4" />
              </Link>
              <ContactCTA className="inline-flex h-12 items-center justify-center rounded-full border border-white/50 px-8 text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-default">
                Contact Us
              </ContactCTA>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative aspect-4/3 w-full lg:hidden"
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={image.src}
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 120 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain object-center"
                />
              </motion.div>
            </AnimatePresence>
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
