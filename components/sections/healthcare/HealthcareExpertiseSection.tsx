"use client";

import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

const stats = [
  {
    value: "13+",
    label: "13+ years of experience in health, fitness, and wellness technology",
  },
  {
    value: "40%",
    label:
      "40% of eForte's active engagements are in health and wellness product development",
  },
  {
    value: "6+",
    label:
      "6+ years, the average length of our long-term healthcare client partnerships",
  },
  {
    value: "#5",
    label:
      "Top 5 ranked healthtech engineering partner by an independent B2B research firm",
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
            Our health & wellbeing expertise
          </h2>
          <p className="max-w-xl text-[17px] leading-[26px] text-[#888888]">
            Our team partners with hospital networks, digital health startups,
            and consumer wellness brands to design experiences people actually
            want to use.
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
