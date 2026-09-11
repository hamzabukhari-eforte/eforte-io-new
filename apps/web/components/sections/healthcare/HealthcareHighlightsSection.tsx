"use client";

import { motion } from "@/lib/replayMotion";
import {
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineSwitchHorizontal,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";

const highlights: { icon: IconType; text: string }[] = [
  {
    icon: HiOutlineCube,
    text: "Full cycle product design and delivery for remote care and digital therapeutics platforms.",
  },
  {
    icon: HiOutlineShieldCheck,
    text: "Deep experience building consumer and clinical apps aligned with HIPAA and related health data regulations.",
  },
  {
    icon: HiOutlineSwitchHorizontal,
    text: "Proven integrations connecting care platforms with insurers, labs, and pharmacy networks.",
  },
  {
    icon: HiOutlineDeviceMobile,
    text: "Extensive hands on experience with wearables and BLE/NFC-connected health devices.",
  },
];

export default function HealthcareHighlightsSection() {
  return (
    <section className="bg-default pt-16 pb-8 md:pt-24 md:pb-10">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-semibold text-white md:text-4xl"
        >
          Highlights of our work
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px", amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-[12px] border border-white/5 bg-[#16161C] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary-pink/35 hover:bg-[#1C1C24] hover:shadow-[0_20px_48px_rgba(211,40,122,0.18)] md:p-7"
              >
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, margin: "-40px", amount: 0.4 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 18,
                    delay: 0.12 + index * 0.08,
                  }}
                  className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary-pink transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(211,40,122,0.55)]"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-primary-pink/25 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-100" />
                  <motion.span
                    initial={{ opacity: 0, scale: 0.4, rotate: -12 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 16,
                      delay: 0.28 + index * 0.08,
                    }}
                    className="relative z-10"
                  >
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                  </motion.span>
                </motion.span>

                <p className="mt-5 text-[14px] leading-relaxed text-white md:text-[15px] md:leading-6">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
