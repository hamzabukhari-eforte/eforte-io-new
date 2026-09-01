"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import { cyberAiSecurityIntro } from "@/data/capabilities/cybersecurity";
import { motion } from "@/lib/replayMotion";

export default function CyberAiSecurityIntroSection() {
  return (
    <section className="relative z-10 bg-default">
      <div className="rounded-t-[12px] bg-white py-16 text-black md:rounded-t-[12px]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-pink">
              {cyberAiSecurityIntro.badge}
            </span>
            <h2 className="mt-3 text-[36px] font-semibold leading-tight text-black">
              {cyberAiSecurityIntro.title}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-black">
              {cyberAiSecurityIntro.description}
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2 md:gap-6 lg:mt-14">
            {cyberAiSecurityIntro.cards.map((card, index) => (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex w-full flex-col items-center justify-center rounded-[12px] bg-[#0B0D12] px-6 py-7 text-center text-white md:px-8 md:py-8"
              >
                <div className="relative mx-auto h-20 w-20 shrink-0 md:h-24 md:w-24">
                  <Image
                    src={card.iconSrc}
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 text-[20px] font-semibold leading-tight md:mt-6">
                  {card.title}
                </h3>
                <p className="mx-auto mt-2.5 max-w-sm text-[16px] leading-relaxed text-white md:mt-3">
                  {card.description}
                </p>
              </motion.article>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
