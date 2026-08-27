"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { CYBER_ACCENT, cyberPillars } from "@/data/capabilities/cybersecurity";

export default function CyberPillarsSection() {
  return (
    <section className="bg-white">
      <div className="mx-[14px] rounded-b-[12px] bg-black py-16 text-white md:rounded-b-[12px] md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="inline-flex h-10 items-center justify-center rounded-full leading-none border px-4 py-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
            style={{ borderColor: CYBER_ACCENT }}
          >
            {cyberPillars.badge}
          </span>
          <h2 className="mt-5 text-3xl font-semibold md:text-4xl lg:text-[42px] max-w-md mx-auto">
            {cyberPillars.title}
          </h2>
          <p className="mt-4 text-[15px] text-white/65 md:text-base">
            {cyberPillars.subtitle}
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-5 md:grid-cols-3 md:gap-5 lg:mt-14">
          {cyberPillars.items.map((pillar, index) => {
            const featured = "featured" in pillar && pillar.featured;

            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex flex-col items-center rounded-[12px] border bg-[#0B0D12] px-6 py-10 text-center md:px-8 md:py-12"
                style={{
                  borderColor: featured
                    ? "rgba(211, 40, 122, 0.7)"
                    : "rgba(211, 40, 122, 0.35)",
                  boxShadow: featured
                    ? "0 0 48px rgba(211, 40, 122, 0.22)"
                    : "0 0 28px rgba(211, 40, 122, 0.1)",
                }}
              >
                <div className="relative h-24 w-24 shrink-0 md:h-28 md:w-28 lg:h-32 lg:w-32">
                  <Image
                    src={pillar.iconSrc}
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-7 text-xl font-semibold md:mt-8 md:text-2xl">
                  {pillar.title}
                </h3>
                <ul className="mx-auto mt-5 inline-block space-y-2.5 text-left md:mt-6">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] leading-snug text-white/80 md:text-[15px]"
                    >
                      <span
                        className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-white/80"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </Container>
      </div>
    </section>
  );
}
