"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiChip,
  HiCloud,
  HiDatabase,
  HiShieldCheck,
  HiSparkles,
} from "react-icons/hi";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { dataStudioTabs } from "@/data/capabilities/data";

const tabIcons: Record<(typeof dataStudioTabs)[number]["id"], IconType> = {
  governance: HiShieldCheck,
  storage: HiCloud,
  management: HiDatabase,
  analytics: HiChip,
  genai: HiSparkles,
};

export default function DataGovernanceSection() {
  const [activeTab, setActiveTab] = useState<(typeof dataStudioTabs)[number]["id"]>(
    dataStudioTabs[0].id
  );
  const activeItem =
    dataStudioTabs.find((item) => item.id === activeTab) ?? dataStudioTabs[0];

  return (
    <section className="bg-white py-16 text-default">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">The Studio</h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#666]">
                eForte&apos;s Data Studio is your one-stop shop for harnessing the
                true power of your data. We specialize in crafting bespoke data
                platforms, seamlessly integrating diverse data sources, and
                scaling your data team with expert talent.
              </p>
            </div>
            <div>
              <p className="max-w-xl text-[15px] leading-relaxed text-[#666]">
                Our seasoned data engineers, analysts, scientists, and architects
                are dedicated to helping you unlock valuable insights, drive
                growth, and optimize your data assets through comprehensive
                solutions and expert guidance.
              </p>
            </div>
          </div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,640px)] lg:gap-16">
            <div className="space-y-3">
              {dataStudioTabs.map((item) => {
                const Icon = tabIcons[item.id];
                const isActive = item.id === activeItem.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full cursor-pointer rounded-[12px] px-5 py-4 text-left transition-all ${
                      isActive
                        ? "bg-[#EAF4FC]"
                        : "bg-transparent hover:bg-[#F8F8F8]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[12px] ${
                          isActive
                            ? "bg-[#2563EB] text-white"
                            : "bg-[#848884] text-white"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xl font-medium text-default">
                          {item.label}
                        </p>
                        {isActive ? (
                          <p className="mt-3 max-w-md text-base leading-relaxed">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="relative mx-auto w-full max-w-105">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative aspect-[1.05/1]"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.label}
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-contain object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
