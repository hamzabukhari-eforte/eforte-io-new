"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import { cyberPillars } from "@/data/capabilities/cybersecurity";
import { motion } from "@/lib/replayMotion";

export default function CyberPillarsSection() {
  return (
    <section className="bg-white">
      <div className="mx-[14px] rounded-[12px] bg-black py-16 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-pink">
              {cyberPillars.badge}
            </span>
            <h2 className="mx-auto mt-3 max-w-2xl text-[36px] font-semibold leading-tight">
              {cyberPillars.title}
            </h2>
            <p className="mt-4 text-[16px] text-white">
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
                  className="flex flex-col items-center rounded-[12px] border bg-[#0B0D12] px-6 py-6 text-center md:px-7 md:py-7"
                  style={{
                    borderColor: featured
                      ? "rgba(211, 40, 122, 0.7)"
                      : "rgba(211, 40, 122, 0.35)",
                    boxShadow: featured
                      ? "0 0 48px rgba(211, 40, 122, 0.22)"
                      : "0 0 28px rgba(211, 40, 122, 0.1)",
                  }}
                >
                  <div className="relative h-16 w-16 shrink-0 md:h-20 md:w-20">
                    <Image
                      src={pillar.iconSrc}
                      alt=""
                      fill
                      className="object-contain"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-5 text-[36px] font-semibold leading-tight">
                    {pillar.title}
                  </h3>
                  <ul className="mx-auto mt-4 inline-block space-y-2.5 text-left">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[16px] leading-snug text-white"
                      >
                        <span
                          className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-white"
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
