"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef } from "react";
import { FaCode, FaUserCheck, FaBalanceScale } from "react-icons/fa";

const EASE = [0.22, 1, 0.36, 1] as const;

interface FeatureCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  position: "top" | "bottom-left" | "bottom-right";
  accent: "pink" | "blue";
}

const features: FeatureCard[] = [
  {
    id: "ai-augmented",
    icon: <FaCode className="h-4 w-4" />,
    title: "AI-Augmented Development",
    description:
      "Boosting team efficiency and throughput via integrated AI tools and powerful, domain-specific AI agents.",
    position: "top",
    accent: "blue",
  },
  {
    id: "human-in-loop",
    icon: <FaUserCheck className="h-4 w-4" />,
    title: "Human-in-the-Loop AI",
    description:
      "Ensuring ethical governance, transparency, and robust data security by keeping human experts in the control pathway.",
    position: "bottom-left",
    accent: "blue",
  },
  {
    id: "responsible-ai",
    icon: <FaBalanceScale className="h-4 w-4" />,
    title: "Responsible AI",
    description:
      "The guiding principle for ensuring continuous human oversight and critical reasoning across all intelligent processes.",
    position: "bottom-right",
    accent: "blue",
  },
];

const badges = [
  { id: "iso", image: "/assets/images/landing/iso.png", alt: "ISO 27001 Certified" },
  { id: "soc2", image: "/assets/images/landing/soc.png", alt: "SOC 2 TYPE 2" },
  { id: "nist", image: "/assets/images/landing/nist.png", alt: "NIST Compliant" },
];

export default function VelocityAISection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);

  return (
    <section ref={ref} className="w-full bg-default py-16">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-16 xl:gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Main Title */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-4 md:mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Velocity AI The Secure Pathway to AI Value
            </motion.h2>

            {/* Subtitle */}
            <motion.h3
              className="text-xl font-semibold text-white mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              The Comprehensive Framework for High-Velocity, Ethical Digital Transformation.
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-base md:text-[17px] text-white font-light leading-relaxed mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              Velocity AI is our systematic approach, detailing best-in-class practices, optimized workflows, and AI/ML methodologies. It boosts digital delivery speed and quality, all while rigorously upholding Data Privacy & Security commitments.
            </motion.p>

            {/* Learn More Button */}
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

            {/* Badges */}
            <motion.div
              className="flex flex-wrap gap-3 md:gap-4 items-center"
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
                    className="h-16 md:h-20 lg:h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile/Tablet Layout - Icons and Text (xl and below) */}
          <div className="xl:hidden">
            <div className="flex flex-col gap-5 md:gap-6">
              {features.map((feature, index) => {
                const isPink = feature.accent === "pink";
                return (
                  <motion.div
                    key={feature.id}
                    className="flex flex-row items-start gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.1,
                      ease: EASE,
                    }}
                  >
                    <div className="shrink-0">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full border md:h-14 md:w-14 ${
                          isPink
                            ? "border-primary-pink bg-primary-pink/15 text-primary-pink"
                            : "border-[#426CFF] bg-[#426CFF]/15 text-[#426CFF]"
                        }`}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1.5 text-lg font-semibold text-white md:text-xl">
                        {feature.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-white md:text-[15px]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Desktop Layout - Central Image with Features (xl and above) */}
          <div className="relative hidden min-h-[520px] xl:block">
            {/* Theme glow — blue-led, light pink only */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="absolute h-[340px] w-[340px] rounded-full bg-[#426CFF]/28 blur-3xl" />
              <div className="absolute h-[260px] w-[260px] rounded-full bg-primary-pink/8 blur-2xl" />
            </div>

            {/* Central Image — scaled down */}
            <motion.div
              className="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
            >
              <div className="flex h-[300px] w-[300px] items-center justify-center">
                <Image
                  src="/assets/images/landing/AI-value.png"
                  alt="Velocity AI Core Framework"
                  width={300}
                  height={300}
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>

            {/* Feature Cards — scaled down, theme accents */}
            {features.map((feature, index) => {
              let positionClasses = "";
              if (feature.position === "top") {
                positionClasses =
                  "top-8 right-0 -translate-x-2";
              } else if (feature.position === "bottom-left") {
                positionClasses = "bottom-2 left-0";
              } else {
                positionClasses = "bottom-2 right-0";
              }

              const isPink = feature.accent === "pink";

              return (
                <motion.div
                  key={feature.id}
                  className={`absolute z-20 w-full max-w-[240px] ${positionClasses}`}
                  initial={{
                    opacity: 0,
                    y: feature.position === "top" ? -24 : 24,
                    x:
                      feature.position === "bottom-left"
                        ? -24
                        : feature.position === "bottom-right"
                          ? 24
                          : 0,
                  }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, x: 0 }
                      : {
                          opacity: 0,
                          y: feature.position === "top" ? -24 : 24,
                          x:
                            feature.position === "bottom-left"
                              ? -24
                              : feature.position === "bottom-right"
                                ? 24
                                : 0,
                        }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.55 + index * 0.15,
                    ease: EASE,
                  }}
                >
                  <div className="rounded-[12px] border border-white/10 bg-[#0A0A1A]/90 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#426CFF]/50">
                    <div
                      className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full border ${
                        isPink
                          ? "border-primary-pink/60 bg-primary-pink/10 text-primary-pink"
                          : "border-[#426CFF]/50 bg-[#426CFF]/15 text-[#426CFF]"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <h4 className="mb-2 text-[16px] font-semibold leading-snug text-white">
                      {feature.title}
                    </h4>
                    <p className="text-[13px] leading-relaxed text-white">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
