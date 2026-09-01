"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";
import { cloudSreAccelerators } from "@/data/capabilities/cloudSre";
import { motion } from "@/lib/replayMotion";

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
    <section className="bg-white py-16 text-default">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
            Increase Productivity
          </p>
          <h2 className="mt-4 text-[36px] font-semibold leading-tight">
            Solution Accelerators
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-black md:text-base">
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
          className="mt-12 rounded-[12px] bg-black px-5 py-8 text-white md:mt-16 md:rounded-[12px] md:px-12 md:py-10"
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
                    "inline-flex items-center justify-center h-10 cursor-pointer rounded-full leading-none px-5 py-0 text-sm font-medium transition-all duration-200 md:px-7 md:py-0 md:text-[15px]",
                    isActive
                      ? "text-white"
                      : "bg-[#5A5A5A] text-white hover:text-white"
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

          <div className="relative mt-8 md:mt-10">
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
                className="mx-auto grid max-w-[900px] items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className="flex h-[220px] items-center justify-center sm:h-[260px] md:h-[300px]">
                  <div className="relative h-full w-full max-w-[400px]">
                    <Image
                      key={active.imageSrc}
                      src={active.imageSrc}
                      alt={active.imageAlt}
                      fill
                      sizes="(max-width: 640px) 90vw, 400px"
                      quality={100}
                      unoptimized
                      className="object-contain"
                      priority={active.id === "bootstrapper"}
                    />
                  </div>
                </div>

                <div className="space-y-4 text-[14px] leading-relaxed text-white md:text-[15px]">
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
