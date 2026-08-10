"use client";

import { motion } from "framer-motion";
import { HiLockClosed, HiLightBulb, HiServer } from "react-icons/hi";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { dataAcceleratorGroups } from "@/data/capabilities/data";

const iconMap: Record<(typeof dataAcceleratorGroups)[number]["iconId"], IconType> =
  {
    lock: HiLockClosed,
    bulb: HiLightBulb,
    server: HiServer,
  };

export default function DataAcceleratorsSection() {
  return (
    <section className="relative z-0 -mt-9 bg-white pb-20 pt-28 text-default md:-mt-11 md:pb-28 md:pt-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              eForte Solution Accelerators for Data Engineering
            </h2>
            <p className="mt-3 text-[15px] text-default md:text-base">
              A selection of some of our solution accelerators
            </p>
          </div>
          <div className="shrink-0 md:text-center">
            <p className="text-6xl font-light leading-none text-[#8EC5FF] md:text-7xl">
              50%
            </p>
            <p className="mt-2 max-w-[180px] text-sm leading-snug text-default md:mx-auto">
              Faster productivity, efficiency &amp; time to market
            </p>
          </div>
        </motion.div>

        <div className="mt-14 divide-y divide-[#E6EAF0] border-y border-[#E6EAF0]">
          {dataAcceleratorGroups.map((group, groupIndex) => {
            const Icon = iconMap[group.iconId];

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                transition={{ duration: 0.45, delay: groupIndex * 0.06 }}
                className="grid items-start gap-8 py-10 lg:grid-cols-[220px_1fr] lg:gap-12"
              >
                <div className="flex items-start gap-3.5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-primary-pink/10 text-primary-pink">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="pt-0.5">
                    <p className="text-lg font-semibold leading-tight text-default">
                      {group.title}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-[#6B7280]">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <article
                      key={item.title}
                      className="flex h-full flex-col rounded-[12px] bg-[#F4F7FB] p-6"
                    >
                      <h3 className="text-[17px] font-semibold leading-snug text-default">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-[#374151]">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
