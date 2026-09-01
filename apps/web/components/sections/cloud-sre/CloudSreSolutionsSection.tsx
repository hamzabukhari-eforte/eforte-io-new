"use client";

import { motion } from "@/lib/replayMotion";
import {
  HiCloud,
  HiCloudArrowUp,
  HiGlobeAlt,
  HiRocketLaunch,
  HiShieldCheck,
  HiSparkles,
} from "react-icons/hi2";
import { LuMonitorCog, LuMousePointer2 } from "react-icons/lu";
import { MdTimer } from "react-icons/md";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { cloudSreSolutions } from "@/data/capabilities/cloudSre";
import { cn } from "@/lib/utils";

/** Globe + pointer — matches the SRE & observability mark */
const GlobeCursorIcon: IconType = ({ className }) => (
  <span className={cn("relative inline-flex size-8", className)}>
    <HiGlobeAlt className="size-full" />
    <LuMousePointer2 className="absolute -bottom-0.5 -right-0.5 size-3.5" />
  </span>
);

/** Cloud + shield check — matches the security & compliance mark */
const CloudShieldIcon: IconType = ({ className }) => (
  <span className={cn("relative inline-flex size-8", className)}>
    <HiCloud className="size-full" />
    <HiShieldCheck className="absolute left-1/2 top-[58%] size-3.5 -translate-x-1/2 -translate-y-1/2 text-white" />
  </span>
);

const icons: Record<(typeof cloudSreSolutions)[number]["iconId"], IconType> = {
  rocket: HiRocketLaunch,
  migrate: HiCloudArrowUp,
  monitor: LuMonitorCog,
  search: GlobeCursorIcon,
  sparkles: HiSparkles,
  timer: MdTimer,
  secure: CloudShieldIcon,
};

export default function CloudSreSolutionsSection() {
  return (
    <section id="solutions" className="bg-white">
      <div className="rounded-t-[12px] rounded-b-[12px] bg-[#F4F6FA] py-16 text-default md:rounded-t-[12px] md:rounded-b-[12px]">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-center text-[36px] font-semibold leading-tight"
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
                  className="flex h-full flex-col rounded-[12px] bg-white p-7 shadow-[0_0_0_1px_rgba(10,10,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,10,26,0.08)] md:p-8"
                >
                  <Icon className="size-8 shrink-0 text-default" />
                  <h3 className="mt-5 text-[20px] font-semibold text-default">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-black">
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
