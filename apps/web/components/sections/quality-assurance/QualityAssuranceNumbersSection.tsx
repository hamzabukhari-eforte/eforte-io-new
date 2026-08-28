"use client";

import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { qualityAssuranceNumbers } from "@/data/capabilities/qualityAssurance";

export default function QualityAssuranceNumbersSection() {
  return (
    <section className="bg-white pt-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[12px] bg-black px-6 py-16 text-white md:rounded-[12px] md:px-10 lg:px-12"
        >
          <div className="relative grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-start lg:gap-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              {qualityAssuranceNumbers.eyebrow}
            </p>
            <div className="max-w-3xl">
              <h2 className="text-[36px] font-semibold leading-snug">
                {qualityAssuranceNumbers.title}
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white md:text-base">
                {qualityAssuranceNumbers.description}
              </p>
            </div>
          </div>

          <div className="relative mt-12 grid auto-rows-[280px] items-end gap-4 sm:grid-cols-2 lg:mt-14 lg:auto-rows-[292px] lg:grid-cols-4 lg:gap-5">
            {qualityAssuranceNumbers.stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px", amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative flex h-[230px] w-full flex-col justify-between self-end overflow-hidden rounded-[12px] bg-[#1A1A1A] p-5 transition-all duration-300 ease-out hover:h-full hover:bg-linear-to-b hover:from-[#5AA0F0] hover:to-[#0A2EC1] hover:shadow-[0_20px_40px_rgba(10,46,193,0.35)] md:h-[240px] md:p-6"
              >
                <p className="text-[14px] leading-snug text-white md:text-[15px]">
                  {stat.label}
                </p>
                <p className="mt-8 bg-linear-to-b from-[#5AA0F0] to-[#0A2EC1] bg-clip-text text-5xl font-semibold tracking-tight text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white md:text-6xl lg:text-[64px]">
                  {stat.value}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
