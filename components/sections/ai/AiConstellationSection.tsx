"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { AI_ACCENT, aiConstellation } from "@/data/capabilities/ai";

export default function AiConstellationSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
      <Image
        src="/assets/images/industry/bg-constellation.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <p className="text-sm tracking-wide text-white md:text-[15px]">
              <span className="font-light italic">constellation</span>{" "}
              <span className="font-semibold uppercase tracking-[0.14em]">
                RESEARCH
              </span>
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.15] md:text-4xl lg:text-[42px]">
              {aiConstellation.title}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/75 md:text-base">
              {aiConstellation.description}
            </p>
            <Link
              href={aiConstellation.ctaHref}
              className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: `linear-gradient(90deg, ${AI_ACCENT} 0%, #BE185D 100%)`,
              }}
            >
              {aiConstellation.ctaLabel}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative mx-auto h-[280px] w-[280px] shrink-0 sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px] lg:mx-0 lg:h-[400px] lg:w-[400px]"
          >
            <Image
              src={aiConstellation.badgeImage}
              alt="Constellation Research AI-Exponential Services Firm 2026 Recognition"
              fill
              sizes="400px"
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
