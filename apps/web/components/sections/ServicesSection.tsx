"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef } from "react";
import { HiArrowRight } from "react-icons/hi";

type Accent = "blue" | "pink" | "bluePink";

interface ServiceCard {
  id: string;
  href: string;
  icon: string;
  title: string;
  label: string;
  description: string;
  accent: Accent;
}

const services: ServiceCard[] = [
  {
    id: "velocity-ai",
    href: "/velocity-ai",
    icon: "/assets/images/landing/velocityAI.png",
    title: "Velocity AI",
    label: "Methodology",
    description:
      "Our secure-first methodology dramatically shortens the time-to-market for intelligent digital solutions.",
    accent: "blue",
  },
  {
    id: "agentic-orchestration",
    href: "/agentic-orchestration",
    icon: "/assets/images/landing/agentic-orchestration.png",
    title: "Agentic Orchestration",
    label: "Delivery",
    description:
      "Specialized, AI-powered solution delivery for targeted, industry-specific operational excellence.",
    accent: "pink",
  },
  {
    id: "foundational-data-layer",
    href: "/foundational-data-layer",
    icon: "/assets/images/landing/foundational-data-layer.svg",
    title: "Foundational Data Layer",
    label: "Infrastructure",
    description:
      "Establishing the essential data infrastructure needed to build and sustain next-generation businesses.",
    accent: "bluePink",
  },
];

const accentStyles: Record<
  Accent,
  {
    glow: string;
    ring: string;
    line: string;
    orb: string;
  }
> = {
  blue: {
    glow: "bg-[#426CFF]/30",
    ring: "border-[#426CFF]/35",
    line: "from-[#426CFF] to-transparent",
    orb: "bg-[#426CFF]",
  },
  pink: {
    glow: "bg-primary-pink/30",
    ring: "border-primary-pink/35",
    line: "from-primary-pink to-transparent",
    orb: "bg-primary-pink",
  },
  bluePink: {
    glow: "bg-[#426CFF]/25",
    ring: "border-[#426CFF]/30",
    line: "from-[#426CFF] via-primary-pink to-transparent",
    orb: "bg-primary-pink",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.14,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);

  return (
    <section ref={ref} className="w-full bg-default pt-4 pb-16">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const accent = accentStyles[service.accent];

            return (
              <motion.article
                key={service.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative flex flex-col overflow-hidden rounded-[12px] border border-white/10 bg-[#0A0A1A] p-5 transition-colors duration-300 hover:border-primary-pink md:p-6"
              >
                {/* Soft accent glow — pulses gently */}
                <motion.div
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${accent.glow}`}
                  aria-hidden
                  animate={{
                    opacity: [0.45, 0.85, 0.45],
                    scale: [1, 1.12, 1],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r ${accent.line}`}
                  aria-hidden
                />

                {/* Icon stage */}
                <div className="relative mb-4 flex justify-center py-1">
                  {/* Orbiting dots */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 m-auto h-32 w-32"
                    aria-hidden
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 14 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <span
                      className={`absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full ${accent.orb} opacity-80`}
                    />
                    <span
                      className={`absolute bottom-2 left-3 h-1 w-1 rounded-full ${accent.orb} opacity-50`}
                    />
                  </motion.div>

                  <motion.div
                    className={`relative flex h-28 w-28 items-center justify-center rounded-full border bg-black/50 backdrop-blur-sm ${accent.ring}`}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3.2 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      animate={
                        service.accent === "pink"
                          ? { rotate: [0, 6, -6, 0] }
                          : service.accent === "blue"
                            ? { rotate: [0, -4, 4, 0] }
                            : { scale: [1, 1.04, 1] }
                      }
                      transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={service.icon}
                        alt=""
                        width={96}
                        height={96}
                        className="h-20 w-auto object-contain drop-shadow-[0_0_18px_rgba(66,108,255,0.25)] transition-transform duration-500 group-hover:scale-110"
                        aria-hidden
                      />
                    </motion.div>
                  </motion.div>
                </div>

                <motion.p
                  className="mb-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink"
                  initial={{ opacity: 0, x: -8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                  transition={{ delay: 0.25 + index * 0.1, duration: 0.4 }}
                >
                  {service.label}
                </motion.p>

                <h3 className="mb-3 text-[24px] font-semibold leading-tight text-white">
                  {service.title}
                </h3>

                <p className="mb-5 flex-1 text-[18px] leading-relaxed text-white">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="inline-flex h-10 w-fit items-center justify-center gap-2 rounded-full border border-primary-pink bg-transparent px-6 text-[14px] font-medium leading-none text-primary-pink transition-all duration-200 hover:bg-primary-pink hover:text-white"
                >
                  Learn more
                  <HiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
