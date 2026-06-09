"use client";

import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

const stats = [
  {
    value: "20+",
    label: "20+ years of experience in healthcare.",
  },
  {
    value: "1/3",
    label: "Over ⅓ of our revenue comes from health, fitness, and wellness.",
  },
  {
    value: "5+",
    label:
      "Clients work with us on long-term, transformative engagements. Over 5 years is average.",
  },
  {
    value: "#1",
    label:
      "We've been recognized as the #1 Health App developer by B2B research firm, Clutch.",
  },
];

export default function HealthcareExpertiseSection() {
  return (
    <section className="relative z-10 -mt-10 rounded-t-[40px] bg-white pt-16 pb-20 text-default md:pt-20 md:pb-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16"
        >
          <h2 className="text-[38px] font-semibold leading-[42px] text-[#011C57]">
            Our healthcare expertise
          </h2>
          <p className="max-w-xl text-[17px] leading-[26px] text-[#888888]">
            Our experienced team collaborates with leading healthcare
            organizations and innovative healthtech startups. We build powerful,
            secure digital experiences.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <p className="w-fit bg-linear-to-b from-[#5AA0F0] to-[#0A2EC1] bg-clip-text text-[72px] font-normal leading-[80px] text-transparent lg:text-[102px] lg:leading-[110px]">
                {stat.value}
              </p>
              <p className="mt-4 text-[16px] leading-[22px] text-[#002EC1]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
