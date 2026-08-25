"use client";

import { motion } from "framer-motion";
import {
  HiCloud,
  HiDesktopComputer,
  HiGlobe,
  HiLightningBolt,
  HiRefresh,
  HiShieldCheck,
  HiSparkles,
} from "react-icons/hi";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { cloudSreSolutions } from "@/data/capabilities/cloudSre";

const icons: Record<(typeof cloudSreSolutions)[number]["iconId"], IconType> = {
  rocket: HiLightningBolt,
  migrate: HiCloud,
  monitor: HiDesktopComputer,
  search: HiGlobe,
  sparkles: HiSparkles,
  timer: HiRefresh,
  secure: HiShieldCheck,
};

export default function CloudSreSolutionsSection() {
  return (
    <section id="solutions" className="bg-white">
      <div className="rounded-t-[12px] rounded-b-[12px] bg-[#F4F6FA] py-20 text-default md:rounded-t-[12px] md:rounded-b-[12px] md:py-28">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-semibold md:text-4xl"
          >
            Our Solutions
          </motion.h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {cloudSreSolutions.map((item, index) => {
              const Icon = icons[item.iconId];
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                  transition={{ duration: 0.45, delay: (index % 2) * 0.06 }}
                  className="flex h-full flex-col rounded-[12px] bg-white p-7 md:p-8"
                >
                  <Icon className="h-7 w-7 text-default" />
                  <h3 className="mt-5 text-xl font-semibold text-default">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#666]">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
