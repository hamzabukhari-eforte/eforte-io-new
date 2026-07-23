"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";
import { cloudSreAccelerators } from "@/data/capabilities/cloudSre";

const ACTIVE_TAB = "#D3287A";

export default function CloudSreAcceleratorsSection() {
  const [activeId, setActiveId] =
    useState<(typeof cloudSreAccelerators)[number]["id"]>(
      cloudSreAccelerators[0].id
    );
  const active =
    cloudSreAccelerators.find((item) => item.id === activeId) ??
    cloudSreAccelerators[0];

  return (
    <section className="bg-white py-20 text-default md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#888]">
            Increase Productivity
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-[42px]">
            Solution Accelerators
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#555] md:text-base">
            eForte Solution Accelerators are assets that are integral parts of
            our solutions and drive 50%+ increase in productivity, efficiency,
            and time to market.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-12 rounded-[20px] bg-black px-5 py-10 text-white md:mt-16 md:rounded-[24px] md:px-12 md:py-14"
        >
          <div
            role="tablist"
            aria-label="Solution accelerators"
            className="flex flex-wrap items-center justify-center gap-3 md:gap-5"
          >
            {cloudSreAccelerators.map((item) => {
              const isActive = item.id === active.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`accelerator-panel-${item.id}`}
                  id={`accelerator-tab-${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "cursor-pointer rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 md:px-7 md:py-4 md:text-[15px]",
                    isActive
                      ? "text-white"
                      : "bg-[#5A5A5A] text-[#A7A7A7] hover:text-white"
                  )}
                  style={
                    isActive ? { backgroundColor: ACTIVE_TAB } : undefined
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="relative mt-10 h-[520px] md:mt-14 md:h-[360px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                role="tabpanel"
                id={`accelerator-panel-${active.id}`}
                aria-labelledby={`accelerator-tab-${active.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 mx-auto grid max-w-[900px] content-center items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className="flex h-[180px] items-center justify-center sm:h-[220px] md:h-[280px]">
                  <div className="relative h-full w-full max-w-[340px]">
                    <Image
                      src={active.imageSrc}
                      alt={active.imageAlt}
                      fill
                      sizes="340px"
                      className="object-contain"
                      priority={active.id === "bootstrapper"}
                    />
                  </div>
                </div>

                <div className="space-y-4 text-[14px] leading-relaxed text-white/85 md:text-[15px]">
                  {active.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
