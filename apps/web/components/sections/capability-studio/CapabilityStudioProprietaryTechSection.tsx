"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { getStudioAccent } from "@/data/capabilities/accents";
import type { StudioAccentId, StudioProprietaryTech } from "@/data/capabilities/types";

type CapabilityStudioProprietaryTechSectionProps = {
  accent: StudioAccentId;
  items: StudioProprietaryTech[];
};

export default function CapabilityStudioProprietaryTechSection({
  accent,
  items,
}: CapabilityStudioProprietaryTechSectionProps) {
  const tokens = getStudioAccent(accent);

  return (
    <section className="bg-[#F5F5F5] py-16 text-default md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span
            className={`text-xs font-semibold uppercase tracking-[0.15em] ${tokens.textClass}`}
          >
            Proprietary Technology
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
            eForte&apos;s proprietary accelerators
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-col gap-6 md:mt-16">
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-sm md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
                <div>
                  {item.tagline ? (
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.12em] ${tokens.textClass}`}
                    >
                      {item.tagline}
                    </p>
                  ) : null}
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-default md:text-[28px]">
                    {item.name}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#666] md:text-base">
                    {item.description}
                  </p>
                </div>
                <ul className="flex flex-col justify-center gap-3">
                  {item.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 rounded-xl bg-[#F7F7F7] px-4 py-3 text-[14px] leading-relaxed text-[#374151]"
                    >
                      <HiCheck className={`mt-0.5 h-4 w-4 shrink-0 ${tokens.textClass}`} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
