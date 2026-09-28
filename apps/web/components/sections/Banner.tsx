"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Banner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[85vh] max-h-[1024px] w-full items-center overflow-hidden bg-default">
      {/* Preserved previous banner art for possible reuse:
      <Image src="/assets/images/landing/banner.png" ... />
      */}
      {/* Network art pinned to the right; black field fills the left */}
      <div className="pointer-events-none absolute inset-0 bg-black" aria-hidden />
      <Image
        src="/assets/final-images/home/hero.jpg?v3"
        alt="Abstract network visualization representing eForte AI transformation"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-contain object-right"
      />

      {/* Match capabilities / industries banner treatment */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] bg-black/50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[6] bg-[radial-gradient(circle_at_78%_35%,rgba(211,40,122,0.28),transparent_34%)]"
        aria-hidden
      />

      <div className="relative z-10 w-full py-20 md:py-28 lg:py-[120px]">
        <Container>
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={
              prefersReducedMotion ? false : { opacity: 1, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.3, ease: "easeOut" }
            }
          >
            <motion.h1
              className="mb-4 text-[48px] font-medium leading-[1.1] tracking-tight text-white sm:mb-5 sm:text-[48px] md:mb-6 md:text-[64px] md:leading-[1.08] lg:text-[90px] lg:leading-tight"
              initial={prefersReducedMotion ? false : { opacity: 1, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.3, ease: "easeOut" }
              }
            >
              The Integrated AI Transformation Partner.
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-[16px] font-light leading-relaxed text-white sm:text-[18px] md:max-w-none md:text-[20px] lg:text-[24px]"
              initial={prefersReducedMotion ? false : { opacity: 1, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.3, delay: 0.05, ease: "easeOut" }
              }
            >
              eForte delivers end-to-end data and AI solutions, combining
              secure-first methodologies with intelligent automation. We provide
              custom AI-Augmented Software and intelligent AI-Powered Business
              Workflows, all built on a robust, future-proof Foundational Data
              Layer. We are shaping the future by integrating advanced AI with
              high-quality UX and enterprise security.
            </motion.p>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
