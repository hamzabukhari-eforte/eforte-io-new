"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative flex min-h-[85vh] max-h-[1024px] w-full items-center overflow-hidden bg-default">
      {/* Preserved previous banner art for possible reuse:
      <Image src="/assets/images/landing/banner.png" ... />
      */}
      {/* Network art pinned to the right; black field fills the left */}
      <div className="pointer-events-none absolute inset-0 bg-black" aria-hidden />
      <Image
        src="/assets/final-images/home/hero.jpg?v3"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-contain object-right"
        aria-hidden
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

      <div className="relative z-10 w-full py-[120px]">
        <Container>
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.h1
              className="mb-6 text-[90px] font-medium leading-tight tracking-tight text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              The Integrated AI Transformation Partner.
            </motion.h1>
            <motion.p
              className="mx-auto text-[24px] font-light leading-relaxed text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            >
              eForte delivers end-to-end data and AI solutions, combining
              secure-first methodologies with intelligent automation. We provide
              custom AI-Augmented Software and intelligent AI-Powered Business
              Workflows, all built on a robust, future-proof Foundational Data
              Layer. We are Shaping the Future by Integrating Advanced AI with
              High-Quality UX and Enterprise Security.
            </motion.p>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
