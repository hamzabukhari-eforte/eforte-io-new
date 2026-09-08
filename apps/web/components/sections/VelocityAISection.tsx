"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef } from "react";
import { FaCode, FaUserCheck, FaBalanceScale } from "react-icons/fa";

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

          {/* Desktop Layout — pink center, blue cards */}
          <div className="relative hidden min-h-[700px] xl:block">
            {/* Pink glow around middle circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-[500px] w-[500px] rounded-full border border-primary-pink/20 blur-3xl" />
              <div className="absolute h-[400px] w-[400px] rounded-full border border-primary-pink/30 blur-2xl" />
              <div className="absolute h-[380px] w-[380px] rounded-full bg-primary-pink/25 blur-3xl" />
            </div>

            <motion.div
              className="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <div className="flex h-64 w-64 items-center justify-center xl:h-[500px] xl:w-[500px]">
                <Image
                  src="/assets/images/landing/AI-value.png"
                  alt="Velocity AI Core Framework"
                  width={400}
                  height={400}
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>

            {features.map((feature, index) => {
              let positionClasses = "";
              if (feature.position === "top") {
                positionClasses =
                  "top-30 -right-45 -translate-x-1/2 -translate-y-1/2";
              } else if (feature.position === "bottom-left") {
                positionClasses = "-bottom-5 -left-16";
              } else {
                positionClasses = "-bottom-5 -right-16";
              }

              return (
                <motion.div
                  key={feature.id}
                  className={`absolute z-10 w-full max-w-[320px] ${positionClasses}`}
                  initial={{
                    opacity: 0,
                    y: feature.position === "top" ? -30 : 30,
                    x:
                      feature.position === "bottom-left"
                        ? -30
                        : feature.position === "bottom-right"
                          ? 30
                          : 0,
                  }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, x: 0 }
                      : {
                          opacity: 0,
                          y: feature.position === "top" ? -30 : 30,
                          x:
                            feature.position === "bottom-left"
                              ? -30
                              : feature.position === "bottom-right"
                                ? 30
                                : 0,
                        }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.2,
                    ease: "easeOut",
                  }}
                >
                  <div className="rounded-[12px] border border-[#426CFF]/30 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#426CFF]">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#426CFF] bg-[#426CFF]/20">
                      <div className="text-[#426CFF]">{feature.icon}</div>
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-white">
                      {feature.title}
                    </h4>
                    <p className="text-[15px] leading-relaxed text-white">
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
