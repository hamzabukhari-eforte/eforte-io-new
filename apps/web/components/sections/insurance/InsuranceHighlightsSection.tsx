"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import { motion } from "@/lib/replayMotion";

const highlights = [
  {
    value: "10x",
    label:
      "Achieved a 10x acceleration in AI model prediction times for a key financial services client",
  },
  {
    value: "BLE",
    label: "Proven experience in wearables and BLE connected devices.",
  },
  {
    value: "28million+",
    label:
      "Handled massive scale data integration for one client and their 28 million+ clients",
  },
  {
    value: "HIPAA",
    label:
      "Established expertise in building user-centric apps & chatbots complying with regulations such as HIPAA.",
  },
];

export default function InsuranceHighlightsSection() {
  return (
    <section className="relative overflow-hidden bg-default py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70%]">
        <Image
          src="/assets/images/landing/legacy-intelligence.png"
          alt=""
          fill
          className="object-cover object-top"
          quality={100}
          aria-hidden
        />
      </div>

      <Container className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-semibold text-white md:text-4xl"
        >
          Highlights of our work
        </motion.h2>

        <div className="mx-auto mt-16 grid max-w-4xl gap-x-12 gap-y-16 sm:grid-cols-2 md:mt-24 md:gap-y-24">
          {highlights.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
              className="text-center"
            >
              <p className="mx-auto w-fit bg-linear-to-b from-white to-[#6E7BFF] bg-clip-text text-5xl font-medium leading-none text-transparent md:text-6xl">
                {item.value}
              </p>
              <p className="mx-auto mt-5 max-w-xs text-[15px] leading-relaxed text-white/70">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
