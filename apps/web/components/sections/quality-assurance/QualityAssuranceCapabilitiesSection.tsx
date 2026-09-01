"use client";

import { motion } from "@/lib/replayMotion";
import {
  LuSparkles,
  LuRefreshCcw,
  LuZap,
  LuGauge,
  LuChartPie,
  LuFlaskConical,
} from "react-icons/lu";
import { FaChessRook } from "react-icons/fa";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import {
  QA_ACCENT,
  qualityAssuranceCapabilities,
} from "@/data/capabilities/qualityAssurance";

const icons: Record<
  (typeof qualityAssuranceCapabilities.items)[number]["icon"],
  IconType
> = {
  sparkles: LuSparkles,
  refresh: LuRefreshCcw,
  bolt: LuZap,
  gauge: LuGauge,
  chart: LuChartPie,
  beaker: LuFlaskConical,
  rook: FaChessRook,
};

export default function QualityAssuranceCapabilitiesSection() {
  return (
    <section className="bg-white py-16 text-black">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-20"
        >
          <div className="flex shrink-0 items-center gap-3">
            <span
              className="h-px w-6 shrink-0"
              style={{ backgroundColor: QA_ACCENT }}
              aria-hidden
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
              {qualityAssuranceCapabilities.eyebrow}
            </p>
          </div>
          <p className="max-w-xl text-[36px] font-semibold leading-snug text-black lg:max-w-[560px]">
            {qualityAssuranceCapabilities.description}
          </p>
        </motion.div>

        {/* Cards — independent left inset */}
        <div className="mt-14 lg:mt-16 lg:pl-[18%] xl:pl-[20%]">
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            {qualityAssuranceCapabilities.items.map((item, index) => {
              const Icon = icons[item.icon];
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                  transition={{ duration: 0.4, delay: (index % 2) * 0.06 }}
                >
                  <Icon
                    className="h-8 w-8"
                    style={{ color: QA_ACCENT }}
                    aria-hidden
                  />
                  <h3 className="mt-5 text-xl font-semibold md:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-black md:text-base">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
