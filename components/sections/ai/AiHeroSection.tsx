"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { AI_ACCENT } from "@/data/capabilities/ai";

export default function AiHeroSection() {
  return (
    <section className="relative flex min-h-[720px] flex-col justify-center overflow-hidden bg-black pt-28 pb-24 md:min-h-[860px] md:pt-36 md:pb-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="pointer-events-none absolute -right-[8%] top-[42%] h-[85%] w-[95%] -translate-y-1/2 sm:w-[80%] md:top-1/2 md:h-[110%] md:w-[70%] lg:-right-[4%] lg:w-[68%] xl:w-[62%]"
      >
        <Image
          src="/assets/images/capabilities/ai/hero.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 95vw, 70vw"
          className="object-contain object-center"
          aria-hidden
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-black via-black/85 to-black/20 md:via-black/75 md:to-transparent"
        aria-hidden
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl lg:max-w-[640px] xl:max-w-[720px]"
        >
          <p
            className="text-[13px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: AI_ACCENT }}
          >
            Artificial Intelligence Solutions
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-[48px]">
            eForte&apos;s AI Studio specializes in building industry-specific,
            enterprise-grade AI solutions
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-white/75 md:text-lg">
            <p>
              eForte&apos;s AI Studio helps organizations transform ideas into
              production-ready AI solutions. Our capabilities include building
              custom AI agents, generative AI and LLM-powered applications,
              computer vision, predictive analytics, and intelligent automation.
            </p>
            <p>
              Whether you&apos;re modernizing workflows, empowering teams with AI
              copilots, extracting insights from complex data, or creating new
              AI-driven products, our experts deliver tailored solutions aligned
              with your business objectives.
            </p>
          </div>
          <div className="mt-9">
            <ContactCTA
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: AI_ACCENT }}
            >
              Contact Us
            </ContactCTA>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
