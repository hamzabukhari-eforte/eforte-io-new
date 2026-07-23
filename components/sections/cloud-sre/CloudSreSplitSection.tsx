"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiCloud, HiShieldCheck } from "react-icons/hi";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { cloudSreSplitCards } from "@/data/capabilities/cloudSre";

const icons: Record<(typeof cloudSreSplitCards)[number]["iconId"], IconType> = {
  cloud: HiCloud,
  shield: HiShieldCheck,
};

function OrbitalIcon({ Icon }: { Icon: IconType }) {
  return (
    <span className="relative mx-auto flex h-16 w-16 items-center justify-center">
      <span
        className="absolute inset-0 rounded-full border border-default/20"
        aria-hidden
      />
      <span
        className="absolute inset-1.5 rounded-full border border-dashed border-default/25"
        aria-hidden
      />
      <Icon className="relative z-10 h-7 w-7 text-default" />
    </span>
  );
}

export default function CloudSreSplitSection() {
  return (
    <section className="relative z-10 -mt-10 bg-default md:-mt-14">
      <div className="rounded-t-[36px] bg-white pb-6 pt-20 text-default md:rounded-t-[42px] md:pb-8 md:pt-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#888]">
              Performance &amp; Security
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-[40px]">
              Explore our Cloud, SRE, DevOps and Cybersecurity solutions
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-0">
            {cloudSreSplitCards.map((card, index) => {
              const Icon = icons[card.iconId];
              return (
                <motion.article
                  key={card.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`flex flex-col items-center px-4 text-center md:px-12 ${
                    index === 0 ? "md:border-r md:border-[#E8E8E8]" : ""
                  }`}
                >
                  <OrbitalIcon Icon={Icon} />
                  <h3 className="mt-6 text-2xl font-semibold text-default">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#555]">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-default px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    {card.cta}
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
