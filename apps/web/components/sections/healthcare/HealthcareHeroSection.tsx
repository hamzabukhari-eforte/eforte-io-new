"use client";

import Image from "next/image";
import Link from "next/link";
import ContactCTA from "@/components/atoms/ContactCTA";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";
import Container from "@/components/atoms/Container";
import InfiniteCarousel from "@/components/sections/InfiniteCarousel";
import { defaultTrustedByLogos } from "@/data/trustedByLogos";

const HERO_IMAGE =
  "/assets/final-images/industries/healthcare/hero-v4.png";
// Previous hero art preserved for possible future reuse:
// "/assets/images/package/industries/health-wellbeing-industry-hero.png"
// "/assets/images/package/industries/health-wellbeing-industry-hero.svg"

export default function HealthcareHeroSection() {
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
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/78 to-black/35" />
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
            Health &amp; Wellbeing
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[48px]"
          >
            Human centered health technology, built with Velocity AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/82 md:text-lg"
          >
            For over 18 years, eForte has helped health systems, digital
            therapeutics companies, and wellness brands turn ambitious ideas
            into secure, scalable products, spanning patient portals, connected
            devices, virtual care platforms, and AI assisted clinical tools.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 max-w-2xl text-base leading-7 text-white/82 md:text-lg"
          >
            We combine deep health-domain knowledge with our Velocity AI,
            Agentic Orchestration, and Foundational Data Layer pillars to help
            healthcare innovators move from concept to compliant, production
            ready software faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/impact-studies"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold leading-none text-default transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
            >
              View portfolio
              <HiArrowRight className="h-4 w-4" />
            </Link>
            <ContactCTA className="inline-flex h-10 items-center justify-center rounded-full border border-transparent bg-primary-pink px-8 text-sm font-semibold leading-none text-white shadow-[0_18px_40px_rgba(211,40,122,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-pink/90">
              Contact Us
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
