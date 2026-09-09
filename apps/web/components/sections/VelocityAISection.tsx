"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef } from "react";
import { FaCode, FaUserCheck, FaBalanceScale, FaBrain } from "react-icons/fa";

interface FeatureCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  position: "top" | "bottom-left" | "bottom-right";
}

const features: FeatureCard[] = [
  {
    id: "ai-augmented",
    icon: <FaCode className="h-6 w-6" />,
    title: "AI-Augmented Development",
    description:
      "Boosting team efficiency and throughput via integrated AI tools and powerful, domain-specific AI agents.",
    position: "top",
  },
  {
    id: "human-in-loop",
    icon: <FaUserCheck className="h-6 w-6" />,
    title: "Human-in-the-Loop AI",
    description:
      "Ensuring ethical governance, transparency, and robust data security by keeping human experts in the control pathway.",
    position: "bottom-left",
  },
  {
    id: "responsible-ai",
    icon: <FaBalanceScale className="h-6 w-6" />,
    title: "Responsible AI",
    description:
      "The guiding principle for ensuring continuous human oversight and critical reasoning across all intelligent processes.",
    position: "bottom-right",
  },
];

const badges = [
  { id: "iso", image: "/assets/images/landing/iso.png", alt: "ISO 27001 Certified" },
  { id: "soc2", image: "/assets/images/landing/soc.png", alt: "SOC 2 TYPE 2" },
  { id: "nist", image: "/assets/images/landing/nist.png", alt: "NIST Compliant" },
];

/** Card orbit around the center circle — keeps “Velocity AI” text clear */
const cardLayout: Record<
  FeatureCard["position"],
  { className: string; from: { opacity: number; x: number; y: number; scale: number } }
> = {
  top: {
    // Top-center above the circle
    className: "left-1/2 top-[calc(50%-325px)] w-[210px] -translate-x-1/2",
    from: { opacity: 0, x: 0, y: -28, scale: 0.94 },
  },
  "bottom-left": {
    // Nudged right toward the circle
    className: "left-[calc(50%-330px)] top-[calc(50%+8px)] w-[210px]",
    from: { opacity: 0, x: -28, y: 20, scale: 0.94 },
  },
  "bottom-right": {
    // Nudged left toward the circle
    className: "left-[calc(50%+120px)] top-[calc(50%+8px)] w-[210px]",
    from: { opacity: 0, x: 28, y: 20, scale: 0.94 },
  },
};

export default function VelocityAISection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);

  return (
    <section ref={ref} className="w-full bg-default py-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:gap-16 xl:grid-cols-2 xl:gap-20">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.h2
              className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:mb-6 md:text-4xl lg:text-[40px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Velocity AI The Secure Pathway to AI Value
            </motion.h2>

            <motion.h3
              className="mb-6 text-xl font-semibold text-white md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              The Comprehensive Framework for High-Velocity, Ethical Digital
              Transformation.
            </motion.h3>

            <motion.p
              className="mb-8 text-base font-light leading-relaxed text-white md:mb-10 md:text-[17px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              Velocity AI is our systematic approach, detailing best-in-class
              practices, optimized workflows, and AI/ML methodologies. It boosts
              digital delivery speed and quality, all while rigorously upholding
              Data Privacy & Security commitments.
            </motion.p>

            <motion.div
              className="mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              <Link
                href="/velocity-ai"
                className="inline-flex h-10 cursor-pointer items-center justify-center rounded-full border border-primary-pink bg-transparent px-9 py-0 text-[15px] font-medium leading-none text-primary-pink transition-all duration-200 hover:border-primary-pink hover:bg-primary-pink hover:text-white"
              >
                Learn more
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              {badges.map((badge) => (
                <div key={badge.id} className="flex items-center justify-center">
                  <Image
                    src={badge.image}
                    alt={badge.alt}
                    width={100}
                    height={100}
                    className="h-16 w-auto object-contain md:h-20 lg:h-20"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile/Tablet Layout */}
          <div className="xl:hidden">
            <div className="flex flex-col gap-6 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="flex flex-row items-start gap-4 md:gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div className="shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#426CFF] bg-[#426CFF]/20 md:h-20 md:w-20">
                      <div className="text-2xl text-[#426CFF] md:text-3xl">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-white md:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-white">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout — red center, blue feather, blue cards */}
          <div className="relative mx-auto hidden h-[640px] w-full max-w-[720px] overflow-visible xl:block">
            {/* Circle sits above cards so Velocity AI stays readable */}
            <motion.div
              className="absolute top-1/2 left-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative flex h-[175px] w-[175px] items-center justify-center">
                <div className="pointer-events-none absolute -inset-7 rounded-full bg-[#426CFF]/30 blur-3xl" />
                <div className="pointer-events-none absolute -inset-4 rounded-full bg-[#426CFF]/20 blur-2xl" />
                <div className="pointer-events-none absolute -inset-2 rounded-full border border-[#426CFF]/50 blur-[2px]" />
                <div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_32px_10px_rgba(66,108,255,0.45)]" />

                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center rounded-full border border-primary-pink/35 bg-[radial-gradient(circle_at_center,rgba(211,40,122,0.28)_0%,rgba(211,40,122,0.12)_55%,rgba(10,10,26,0.85)_100%)]">
                  <motion.div
                    className="mb-2.5"
                    animate={
                      isInView
                        ? {
                            y: [0, -4, 0],
                            scale: [1, 1.06, 1],
                            filter: [
                              "drop-shadow(0 0 8px rgba(211,40,122,0.4))",
                              "drop-shadow(0 0 16px rgba(211,40,122,0.75))",
                              "drop-shadow(0 0 8px rgba(211,40,122,0.4))",
                            ],
                          }
                        : { y: 0, scale: 1 }
                    }
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaBrain className="h-10 w-10 text-primary-pink" />
                  </motion.div>
                  <p className="text-[21px] font-bold leading-none tracking-tight text-primary-pink">
                    Velocity AI
                  </p>
                  <p className="mt-2 text-[12px] font-medium tracking-wide text-white">
                    Core Framework
                  </p>
                </div>
              </div>
            </motion.div>

            {features.map((feature, index) => {
              const layout = cardLayout[feature.position];

              return (
                <div
                  key={feature.id}
                  className={`absolute z-10 ${layout.className}`}
                >
                  <motion.div
                    initial={layout.from}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0, y: 0, scale: 1 }
                        : layout.from
                    }
                    transition={{
                      duration: 0.75,
                      delay: 0.4 + index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  >
                    <div className="rounded-[10px] border border-[#426CFF]/30 bg-[#0A0A1A]/95 p-4 shadow-[0_8px_28px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-colors duration-300 hover:border-[#426CFF]">
                      <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-[#426CFF] bg-[#426CFF]/20">
                        <div className="scale-75 text-[#426CFF]">{feature.icon}</div>
                      </div>
                      <h4 className="mb-1.5 text-[15px] font-bold leading-snug text-white">
                        {feature.title}
                      </h4>
                      <p className="text-[12px] leading-relaxed text-white">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
