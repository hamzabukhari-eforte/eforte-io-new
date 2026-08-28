"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import type { StudioAccentId, StudioProprietaryTech } from "@/data/capabilities/types";

type CapabilityStudioProprietaryTechSectionProps = {
  accent: StudioAccentId;
  items: StudioProprietaryTech[];
};

export default function CapabilityStudioProprietaryTechSection({
  accent: _accent,
  items,
}: CapabilityStudioProprietaryTechSectionProps) {
  return (
    <section className="relative z-10">
      <div className="rounded-t-[12px] bg-[#F5F5F5] py-16 text-black">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-[36px] font-semibold leading-tight text-black">
              eForte&apos;s proprietary accelerators
            </h2>
          </motion.div>

          <div className="mt-12 flex flex-col gap-14 md:mt-16 md:gap-16">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-14 lg:items-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-pink">
                    Proprietary Technology
                  </span>
                  <h3 className="mt-3 text-[36px] font-semibold leading-tight text-black">
                    {item.name}
                  </h3>
                  {item.tagline ? (
                    <p className="mt-2 text-base font-medium text-primary-pink">
                      {item.tagline}
                    </p>
                  ) : null}
                  <p className="mt-5 text-[16px] leading-relaxed text-black">
                    {item.description}
                  </p>
                </motion.div>

                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {item.benefits.map((benefit) => {
                    const colonIndex = benefit.indexOf(":");
                    const title =
                      colonIndex >= 0
                        ? benefit.slice(0, colonIndex + 1)
                        : benefit;
                    const detail =
                      colonIndex >= 0 ? benefit.slice(colonIndex + 1) : "";

                    return (
                      <li
                        key={benefit}
                        className="flex h-full flex-col gap-3 rounded-[12px] bg-white p-6 shadow-sm"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-pink/10 text-primary-pink">
                          <HiCheck className="h-4 w-4" />
                        </span>
                        <p className="text-[16px] leading-relaxed text-black">
                          <span className="font-semibold text-black">{title}</span>
                          {detail}
                        </p>
                      </li>
                    );
                  })}
                </motion.ul>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
