"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineCpuChip,
  HiOutlineCheckCircle,
  HiOutlineChartBar,
  HiOutlinePresentationChartBar,
} from "react-icons/hi2";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";

type Service = {
  id: string;
  icon: IconType;
  iconColor: string;
  title: string;
  paragraphs: string[];
};

const services: Service[] = [
  {
    id: "firmware",
    icon: HiOutlineCpuChip,
    iconColor: "text-primary-pink",
    title: "Firmware development services",
    paragraphs: [
      "We excel in crafting high-performance firmware solutions tailored to device needs. Our embedded software engineers develop firmware for hardware platforms, including microcontrollers, microprocessors, and SOCs.",
      "Our expertise encompasses control algorithms, communication interfaces, and application-specific design.",
    ],
  },
  {
    id: "pre-post-silicon",
    icon: HiOutlineCpuChip,
    iconColor: "text-[#2D9BF0]",
    title: "Firmware development: Pre & post-silicon",
    paragraphs: [
      "Pre-silicon services include hardware-software co-design, simulation, and prototyping using simulators, emulators, and virtual prototypes.",
      "Post-silicon, we provide expert system bring-up, hardware-software integration, and validation on physical hardware. Expertise in bare-metal and RTOS configurations, custom device driver development, bootloader creation, and low-level system initialization.",
    ],
  },
  {
    id: "iot",
    icon: HiOutlineCpuChip,
    iconColor: "text-[#1FA971]",
    title: "IoT device development",
    paragraphs: [
      "We develop intelligent and connected devices with eForte's expertise in embedded software.",
      "Our embedded software engineers have deep experience, including custom communication interfaces for device interoperability, real-time data acquisition and edge processing, and AI/ML model integration for enhanced automation.",
    ],
  },
  {
    id: "testing",
    icon: HiOutlineCheckCircle,
    iconColor: "text-primary-pink",
    title: "Testing, verification, and validation",
    paragraphs: [
      "Ensure reliability and quality with testing methodologies and simulation platforms - including unit, integration, and system validation testing to ensure software and device function flawlessly before and after manufacturing which reduces costly re-work in the fabrication process.",
      "We also provide deep expertise in automated test frameworks for CI/CD.",
    ],
  },
  {
    id: "performance",
    icon: HiOutlineChartBar,
    iconColor: "text-[#E5484D]",
    title: "System performance optimization",
    paragraphs: [
      "We employ code profiling, memory optimization, and performance tuning to maximize efficiency and responsiveness of embedded systems. We utilize leading edge AI software development techniques to improve productivity and ensure quality.",
      "Our engineers specialize in power management for battery-operated and low-power devices, extending battery life and optimizing energy consumption.",
    ],
  },
  {
    id: "consulting",
    icon: HiOutlinePresentationChartBar,
    iconColor: "text-[#E8822E]",
    title: "Technical consulting and advisory",
    paragraphs: [
      "Expert guidance to navigate the complexities of embedded systems development - offering insights on embedded software architecture, firmware design, and system optimization.",
      "We conduct project reviews, risk assessments, and feasibility studies to identify potential challenges and optimize development strategies.",
    ],
  },
];

export default function EmbeddedEngineeringServicesSection() {
  return (
    <section className="bg-default">
      <div className="rounded-[12px] bg-white py-16 text-default md:rounded-[12px] md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 lg:grid-cols-2 lg:gap-16"
          >
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-default">
                Embedded Engineering Studio
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-default md:text-4xl">
                Our services
              </h2>
            </div>
            <p className="max-w-xl text-[15px] leading-relaxed text-[#666] lg:self-end">
              We cover the entire spectrum of embedded engineering development,
              from low-level bare-metal firmware design to OS-based embedded
              systems, SoCs, driver development, system optimization, testing, and
              chip bring-up.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative mt-10 aspect-1230/300 w-full overflow-hidden rounded-[12px] md:mt-12"
          >
            <Image
              src="/assets/images/industry/working.jpg"
              alt="eForte embedded engineering team at work"
              fill
              sizes="(max-width: 1400px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </motion.div>

          <div className="mt-14 grid gap-x-12 gap-y-14 md:mt-16 md:grid-cols-3 md:gap-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-9 w-9 ${service.iconColor}`} />
                    <h3 className="text-lg font-semibold leading-snug text-default">
                      {service.title}
                    </h3>
                  </div>
                  <div className="mt-4 space-y-4 text-[14px] leading-relaxed text-[#666]">
                    {service.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
