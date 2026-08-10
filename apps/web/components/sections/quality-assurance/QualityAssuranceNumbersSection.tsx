"use client";

import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { qualityAssuranceNumbers } from "@/data/capabilities/qualityAssurance";

export default function QualityAssuranceNumbersSection() {
  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[28px] bg-black px-6 pb-10 pt-10 text-white md:rounded-[36px] md:px-10 md:pb-12 md:pt-12 lg:px-12"
        >
          <div className="relative grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-start lg:gap-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
              {qualityAssuranceNumbers.eyebrow}
            </p>
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold leading-snug md:text-2xl lg:text-[28px] lg:leading-snug">
                {qualityAssuranceNumbers.title}
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/70 md:text-base">
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
                className="group relative flex h-[230px] w-full flex-col justify-between self-end overflow-hidden rounded-2xl bg-[#1A1A1A] p-5 transition-all duration-300 ease-out hover:h-full hover:bg-linear-to-b hover:from-[#4ADE80] hover:to-[#16A34A] hover:shadow-[0_20px_40px_rgba(34,197,94,0.25)] md:h-[240px] md:p-6"
              >
                <p className="text-[14px] leading-snug text-white/85 md:text-[15px]">
                  {stat.label}
                </p>
                <p className="mt-8 text-5xl font-semibold tracking-tight text-transparent [-webkit-text-stroke:1.5px_#4ADE80] transition-all duration-300 group-hover:text-white group-hover:[-webkit-text-stroke:0] md:text-6xl lg:text-[64px]">
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
