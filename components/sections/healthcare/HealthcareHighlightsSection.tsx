"use client";

import { motion } from "framer-motion";
import {
  HiOutlineCube,
  HiOutlineChatAlt2,
  HiOutlineSwitchHorizontal,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import Container from "@/components/atoms/Container";

const highlights = [
  {
    icon: HiOutlineCube,
    text: "End-to-end 360 product design & management, including telehealth product development.",
  },
  {
    icon: HiOutlineChatAlt2,
    text: "Established expertise in building user-centric apps & chatbots complying with regulations such as HIPAA.",
  },
  {
    icon: HiOutlineSwitchHorizontal,
    text: "Streamlined healthcare integrations, such as with insurance providers.",
  },
  {
    icon: HiOutlineDeviceMobile,
    text: "Proven experience in wearables and BLE connected devices.",
  },
];

export default function HealthcareHighlightsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-semibold text-[#011C57] md:text-4xl"
        >
          Highlights of our work
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-black/5 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                <Icon className="h-9 w-9 text-[#002EC1]" strokeWidth={2} />
                <p className="mt-6 text-[15px] leading-relaxed text-[#888888]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
