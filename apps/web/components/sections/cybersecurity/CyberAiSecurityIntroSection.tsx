"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { CYBER_ACCENT, cyberAiSecurityIntro } from "@/data/capabilities/cybersecurity";

export default function CyberAiSecurityIntroSection() {
  return (
    <section className="bg-white py-16 text-default md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="inline-flex h-10 items-center justify-center rounded-full leading-none border px-4 py-0 text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ borderColor: CYBER_ACCENT, color: CYBER_ACCENT }}
          >
            {cyberAiSecurityIntro.badge}
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl lg:text-[42px]">
            {cyberAiSecurityIntro.title}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#555] md:text-base">
            {cyberAiSecurityIntro.description}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-8 lg:mt-14">
          {cyberAiSecurityIntro.cards.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex  w-full flex-col items-center justify-center rounded-[12px] bg-[#0B0D12] px-8 py-10 text-center text-white md:px-12 md:py-12"
            >
              <div className="relative mx-auto h-28 w-28 shrink-0 md:h-36 md:w-36 lg:h-40 lg:w-40">
                <Image
                  src={card.iconSrc}
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden
                />
              </div>
              <h3 className="mt-8 text-xl font-semibold md:mt-10 md:text-2xl">
                {card.title}
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-white/70 md:mt-4">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
