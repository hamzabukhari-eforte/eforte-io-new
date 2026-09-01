"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { motion } from "@/lib/replayMotion";
import {
  HiTerminal,
  HiCog,
  HiChartBar,
  HiArrowsExpand,
  HiShieldCheck,
} from "react-icons/hi";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { AI_ACCENT, aiSolutions } from "@/data/capabilities/ai";

const tabIcons: Record<(typeof aiSolutions)[number]["id"], IconType> = {
  agentic: HiTerminal,
  vision: HiCog,
  discovery: HiChartBar,
  ml: HiArrowsExpand,
  team: HiShieldCheck,
};

export default function AiSolutionsSection() {
  const [activeId, setActiveId] = useState<(typeof aiSolutions)[number]["id"]>(
    aiSolutions[0].id
  );
  const active =
    aiSolutions.find((item) => item.id === activeId) ?? aiSolutions[0];

  return (
    <section className="bg-black py-16 text-white">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl text-[36px] font-semibold leading-tight tracking-tight"
        >
          eForte AI and machine learning solutions
        </motion.h2>

        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-14 xl:gap-20">
          <div className="flex h-full min-h-[420px] flex-col justify-between gap-1 md:min-h-[460px] lg:min-h-0">
            {aiSolutions.map((item) => {
              const Icon = tabIcons[item.id];
              const isActive = item.id === active.id;

              if (isActive) {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className="w-full cursor-pointer rounded-[12px] bg-[#1A1A1A] px-4 py-4 text-left md:px-5 md:py-5"
                    style={{ borderBottom: `2px solid ${AI_ACCENT}` }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[12px] text-white"
                        style={{ backgroundColor: AI_ACCENT }}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-base font-semibold leading-snug text-white md:text-lg">
                          {item.title}
                        </p>
                        <p className="mt-2 min-h-[4.75rem] text-sm leading-relaxed text-white md:min-h-[5.25rem] md:text-[15px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left text-[#8A8A8A] transition-colors hover:text-[#B0B0B0] md:px-5 md:py-3"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="text-[15px] font-medium leading-snug md:text-base">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative aspect-16/11 w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 620px"
                  className="object-cover"
                  priority={active.id === "agentic"}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
