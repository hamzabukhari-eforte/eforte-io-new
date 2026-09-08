"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef } from "react";

interface FeatureBlock {
  id: string;
  title: string;
  description: string;
  position: "left" | "right" | "bottom";
  icon: string;
  /** Icon center as % of diagram box (from original SVG viewBox 595×526) */
  iconLeft: string;
  iconTop: string;
  /** Optional size override (px) when an asset renders smaller */
  iconSize?: number;
}

const features: FeatureBlock[] = [
  {
    id: "regulated-ai",
    title: "Regulated-by-Design AI",
    description:
      "Developing systems that are inherently aligned with global data privacy regulations and security standards from conception.",
    position: "left",
    icon: "/assets/images/landing/icon-shield.svg",
    iconLeft: "12.29%", // 73.13 / 595
    iconTop: "34.16%", // 179.671 / 526
    iconSize: 118,
  },
  {
    id: "verifiable-transparency",
    title: "Verifiable AI Transparency",
    description:
      "Guaranteeing AI models are accountable, auditable, and transparent, fostering stakeholder trust and aligning with internal corporate values.",
    position: "right",
    icon: "/assets/images/landing/icon-bolt.svg",
    iconLeft: "87.58%", // 521.129 / 595
    iconTop: "33.87%", // 178.139 / 526
    iconSize: 118,
  },
  {
    id: "human-oversight",
    title: "Human AI Oversight",
    description:
      "Establishing clear accountability frameworks, continuous ethical training, and human-in-the-loop mechanisms for ultimate control and safety.",
    position: "bottom",
    icon: "/assets/images/landing/icon-head.svg",
    iconLeft: "51.37%", // 305.68 / 595
    iconTop: "86.08%", // 452.801 / 526
    iconSize: 118,
  },
];

const MAIN_DELAY = 0.35;
const MAIN_DURATION = 0.85;
const ICONS_START = MAIN_DELAY + MAIN_DURATION * 0.55; // icons after main is mostly visible

export default function StrategicApproachSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);

  return (
    <section ref={ref} className="w-full bg-default py-16">
      <Container>
        <div>
          <motion.div
            className="mb-3 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
              Moving Beyond Compliance
            </span>
          </motion.div>

          <motion.h2
            className="text-center text-[48px] font-medium leading-tight tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Our Strategic Approach to AI Trust and Business Acceleration
          </motion.h2>

          {/* Mobile / tablet */}
          <div className="xl:hidden">
            <div className="mt-10 flex flex-col gap-8 md:gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.55,
                    delay: ICONS_START + index * 0.15,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="mb-4 md:mb-6"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.6 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: ICONS_START + index * 0.15,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src={feature.icon}
                      alt=""
                      width={147}
                      height={147}
                      className="h-[120px] w-[120px] md:h-[146px] md:w-[146px]"
                      aria-hidden
                    />
                  </motion.div>
                  <h3 className="mb-3 text-[24px] font-bold text-white md:mb-4">
                    {feature.title}
                  </h3>
                  <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-white">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop diagram */}
          <div className="relative mt-2 hidden min-h-[640px] xl:block">
            {/* Diagram stage — sized to SVG aspect */}
            <div className="absolute left-1/2 top-[38%] w-[480px] max-w-[90%] -translate-x-1/2 -translate-y-1/2 overflow-visible">
              <div className="relative aspect-[595/526] w-full overflow-visible">
                {/* 1) Main big circle + wireframe first */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.82 }
                  }
                  transition={{
                    duration: MAIN_DURATION,
                    delay: MAIN_DELAY,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src="/assets/images/landing/strategic-approach-core.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden
                  />
                </motion.div>

                {/* 2) Small icon circles after main appears */}
                {features.map((feature, index) => {
                  const size = feature.iconSize ?? 146;
                  return (
                    <motion.div
                      key={feature.id}
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 overflow-visible"
                      style={{ left: feature.iconLeft, top: feature.iconTop }}
                      initial={{ opacity: 0, scale: 0.45 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.45 }
                      }
                      transition={{
                        duration: 0.55,
                        delay: ICONS_START + index * 0.18,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        src={feature.icon}
                        alt=""
                        width={size}
                        height={size}
                        className="max-w-none object-contain"
                        style={{ width: size, height: size }}
                        aria-hidden
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Feature copy around diagram */}
            {features.map((feature, index) => {
              let positionClasses = "";
              if (feature.position === "left") {
                positionClasses = "left-10 -left-24 top-[32%] -translate-y-1/2";
              } else if (feature.position === "right") {
                positionClasses = "right-10 -right-24 top-[32%] -translate-y-1/2";
              } else {
                positionClasses = "bottom-2 left-1/2 -translate-x-1/2";
              }

              return (
                <motion.div
                  key={`copy-${feature.id}`}
                  className={`absolute w-80 ${positionClasses}`}
                  initial={{
                    opacity: 0,
                    y: feature.position === "bottom" ? 24 : 0,
                    x:
                      feature.position === "left"
                        ? -24
                        : feature.position === "right"
                          ? 24
                          : 0,
                  }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, x: 0 }
                      : {
                          opacity: 0,
                          y: feature.position === "bottom" ? 24 : 0,
                          x:
                            feature.position === "left"
                              ? -24
                              : feature.position === "right"
                                ? 24
                                : 0,
                        }
                  }
                  transition={{
                    duration: 0.5,
                    delay: ICONS_START + 0.2 + index * 0.18,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className={`flex flex-col ${
                      feature.position === "left"
                        ? "items-end text-right"
                        : feature.position === "right"
                          ? "items-start text-left"
                          : "items-center text-center"
                    }`}
                  >
                    <h3 className="mb-4 text-[24px] font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-[18px] leading-relaxed text-white">
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
