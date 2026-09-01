"use client";

import { motion } from "@/lib/replayMotion";
import {
  HiRefresh,
  HiChartBar,
  HiTerminal,
  HiGlobe,
  HiExclamation,
  HiShieldCheck,
} from "react-icons/hi";
import { FaBolt, FaStar } from "react-icons/fa";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import {
  cyberServices,
  cyberTransformation,
} from "@/data/capabilities/cybersecurity";

const serviceIcons: Record<(typeof cyberServices)[number]["icon"], IconType> = {
  loop: HiRefresh,
  chart: HiChartBar,
  terminal: HiTerminal,
  globe: HiGlobe,
  warning: HiExclamation,
  shield: HiShieldCheck,
};

export default function CyberServicesSection() {
  return (
    <section className="bg-white pb-16 text-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 border-t border-[#E8E8E8] pt-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
        >
          <div>
            <div className="relative flex h-16 w-16 items-center justify-center rounded-[12px] bg-primary-pink">
              <HiShieldCheck className="h-8 w-8 text-white" />
              <span className="absolute bottom-2 right-2 text-[10px] text-white">
                ✦
              </span>
            </div>
            <h2 className="mt-6 text-[36px] font-semibold leading-tight text-black">
              {cyberTransformation.title}
            </h2>
          </div>

          <div>
            <h3 className="text-[36px] font-semibold leading-snug text-black">
              {cyberTransformation.heading}
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {cyberTransformation.tenets.map((tenet) => (
                <span
                  key={tenet.id}
                  className="inline-flex h-[25px] items-center justify-center gap-2 rounded-full leading-none border border-black/20 px-4 py-0.5 text-sm font-medium text-black"
                >
                  {tenet.icon === "star" ? (
                    <FaStar className="h-3.5 w-3.5" />
                  ) : (
                    <FaBolt className="h-3.5 w-3.5" />
                  )}
                  {tenet.label}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-black">
              {cyberTransformation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
          {cyberServices.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-[12px] text-white"
                  style={{ backgroundColor: service.iconBg }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[24px] font-semibold leading-tight text-black">
                  {service.title}
                </h3>
                <div className="mt-4 space-y-3 text-[16px] leading-relaxed text-black">
                  {service.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
