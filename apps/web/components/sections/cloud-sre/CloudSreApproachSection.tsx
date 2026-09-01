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
import {
  CLOUD_SRE_ACCENT,
  cloudSrePrinciples,
} from "@/data/capabilities/cloudSre";

const tabIcons: Record<(typeof cloudSrePrinciples)[number]["id"], IconType> = {
  iac: HiTerminal,
  automation: HiCog,
  monitoring: HiChartBar,
  scalability: HiArrowsExpand,
  security: HiShieldCheck,
};

export default function CloudSreApproachSection() {
  const [activeId, setActiveId] =
    useState<(typeof cloudSrePrinciples)[number]["id"]>(
      cloudSrePrinciples[0].id
    );
  const active =
    cloudSrePrinciples.find((item) => item.id === activeId) ??
    cloudSrePrinciples[0];

  return (
    <section className="bg-default">
      <div className="rounded-[12px] bg-black py-16 text-white md:rounded-[12px]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-20"
          >
            <h2 className="max-w-md text-[36px] font-semibold leading-tight">
              Our approach to cloud engineering
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white lg:pt-2">
              We embrace 5 key principles as part of our cloud engineering
              philosophy, centered around agility, resilience, automation,
              scalability, and best-in-class security.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-16 xl:gap-20">
            <div className="flex h-full flex-col justify-between gap-1 lg:min-h-0">
              {cloudSrePrinciples.map((item) => {
                const Icon = tabIcons[item.id];
                const isActive = item.id === active.id;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    layout
                    onClick={() => setActiveId(item.id)}
                    transition={{ layout: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
                    className={`w-full cursor-pointer overflow-hidden text-left transition-colors duration-300 ${
                      isActive
                        ? "rounded-[12px] bg-[#1A1A1A] px-4 py-4 md:px-5 md:py-5"
                        : "rounded-[12px] bg-transparent px-4 py-2.5 hover:bg-white/5 md:px-5 md:py-3"
                    }`}
                    style={{
                      borderBottom: isActive
                        ? `2px solid ${CLOUD_SRE_ACCENT}`
                        : "2px solid transparent",
                    }}
                    aria-expanded={isActive}
                  >
                    <div className="flex items-start gap-3">
                      <motion.span
                        layout
                        className={`mt-0.5 flex shrink-0 items-center justify-center rounded-[12px] text-white transition-colors duration-300 ${
                          isActive ? "h-6 w-6" : "h-4 w-4 bg-transparent"
                        }`}
                        style={{
                          backgroundColor: isActive
                            ? CLOUD_SRE_ACCENT
                            : "transparent",
                        }}
                      >
                        <Icon
                          className={
                            isActive ? "h-3.5 w-3.5" : "h-4 w-4"
                          }
                        />
                      </motion.span>

                      <div className="min-w-0 flex-1">
                        <motion.p
                          layout="position"
                          className={`text-[20px] leading-snug text-white transition-all duration-300 ${
                            isActive ? "font-semibold" : "font-medium"
                          }`}
                        >
                          {item.title}
                        </motion.p>

                        <AnimatePresence initial={false}>
                          {isActive ? (
                            <motion.div
                              key={`${item.id}-desc`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                height: {
                                  duration: 0.32,
                                  ease: [0.22, 1, 0.36, 1],
                                },
                                opacity: { duration: 0.22, delay: 0.04 },
                              }}
                              className="overflow-hidden"
                            >
                              <p className="mt-2 text-[16px] leading-relaxed text-white">
                                {item.description}
                              </p>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="flex h-full flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="flex flex-col gap-4"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px]">
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1400px) 55vw, 800px"
                      quality={90}
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[955/219] w-full overflow-hidden rounded-[12px]">
                    <Image
                      src={active.toolsImage}
                      alt={`${active.title} tools`}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1400px) 55vw, 800px"
                      quality={90}
                      className="object-contain object-center"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
