"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import type { IndustryPageContent } from "@/data/industries/types";
import { motion } from "@/lib/replayMotion";

type IndustryHighlightsSectionProps = {
  highlights: IndustryPageContent["highlights"];
};

export default function IndustryHighlightsSection({
  highlights,
}: IndustryHighlightsSectionProps) {
  if (highlights.length === 0) return null;

  return (
    <section className="relative w-full bg-default pt-20 pb-8 md:pt-28 md:pb-10">
      <Container>
        <div className="absolute inset-0">
          <Image
            src="/assets/images/landing/legacy-intelligence.png"
            alt=""
            fill
            className="object-cover object-top"
            quality={100}
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 z-10 bg-default/20" />

        <div className="relative z-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-semibold text-white md:text-4xl"
          >
            Highlights of our work
          </motion.h2>

          <div className="mx-auto mt-16 grid max-w-4xl gap-x-12 gap-y-16 sm:grid-cols-2 md:mt-24">
            {highlights.map((item, index) => (
              <motion.div
                key={`${item.value}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
                className="text-center"
              >
                <p className="mx-auto w-fit bg-linear-to-b from-white to-[#6E7BFF] bg-clip-text text-5xl font-medium leading-none text-transparent md:text-6xl">
                  {item.value}
                </p>
                <p className="mx-auto mt-5 max-w-sm text-[18px] leading-relaxed text-white">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
