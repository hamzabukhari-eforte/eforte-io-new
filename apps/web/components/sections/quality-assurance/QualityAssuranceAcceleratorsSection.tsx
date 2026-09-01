"use client";

import Container from "@/components/atoms/Container";
import { motion } from "@/lib/replayMotion";
import {
  QA_ACCENT,
  qualityAssuranceAccelerators,
} from "@/data/capabilities/qualityAssurance";

export default function QualityAssuranceAcceleratorsSection() {
  return (
    <section className="bg-white">
      <Container>
        <div className="rounded-[12px] bg-black px-6 py-16 text-white md:rounded-[12px] md:px-10 lg:px-12">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-20"
          >
            <div className="flex shrink-0 items-center gap-3">
              <span
                className="h-px w-6 shrink-0"
                style={{ backgroundColor: QA_ACCENT }}
                aria-hidden
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                {qualityAssuranceAccelerators.eyebrow}
              </p>
            </div>
            <p className="max-w-xl text-[36px] font-semibold leading-snug lg:max-w-[520px]">
              {qualityAssuranceAccelerators.description}
            </p>
          </motion.div>

          {/* Cards — centered with clear gap */}
          <div className="mt-12 flex justify-center lg:mt-16">
            <div className="grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-4xl lg:gap-10">
              {qualityAssuranceAccelerators.items.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[12px] bg-[#161616] p-7 md:min-h-[440px] md:p-8 lg:min-h-[480px] lg:p-9"
                >
                  {item.glow === "diagonal" ? (
                    <div
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(90,160,240,0.65)_0%,rgba(10,46,193,0.25)_28%,transparent_55%)]"
                      aria-hidden
                    />
                  ) : (
                    <div
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(225deg,rgba(90,160,240,0.65)_0%,rgba(10,46,193,0.25)_28%,transparent_55%)]"
                      aria-hidden
                    />
                  )}
                  <div className="relative">
                    <h3 className="text-xl font-semibold leading-snug md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-white md:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
