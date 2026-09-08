"use client";

import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useEffect, useRef, useState } from "react";

const THEME_BLUE = "#426CFF";
const ACCENT_PINK = "#D3287A";
const EASE = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    text: "AI & Generative AI (GenAI) Readiness",
    accent: "pink" as const,
  },
  {
    text: "Real-time Analytics & Business Intelligence",
    accent: "blue" as const,
  },
  {
    text: "Scalable Data Management Systems",
    accent: "pink" as const,
  },
  {
    text: "Optimized Data Storage Solutions",
    accent: "blue" as const,
  },
  {
    text: "Strict Data Governance and Quality Control",
    accent: "pink" as const,
  },
];

const leftContainer: Variants = {
  hidden: {
    transition: { staggerChildren: 0.06, staggerDirection: -1 },
  },
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    transition: { duration: 0.35, ease: EASE },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
    scale: 0.96,
    transition: { duration: 0.4, ease: EASE },
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: EASE, delay: 0.12 },
  },
};

const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    x: 16,
    transition: { duration: 0.3, ease: EASE },
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.3 + i * 0.1,
      ease: EASE,
    },
  }),
};

function AnimatedCheck({ color, delay }: { color: string; delay: number }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M5 13l4 4L19 7"
        stroke={color}
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 0.7, delay, ease: EASE },
          opacity: { duration: 0.3, delay },
        }}
      />
    </motion.svg>
  );
}

export default function FoundationalDataLayerSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, {
    amount: 0.2,
    exitMargin: "40px",
    exitDelayMs: 200,
    settleMs: 500,
  });

  /** Remount animated tree after user leaves and re-enters the section */
  const [playId, setPlayId] = useState(0);
  const hasLeft = useRef(false);

  useEffect(() => {
    if (!isInView) {
      hasLeft.current = true;
      return;
    }
    if (hasLeft.current) {
      setPlayId((id) => id + 1);
      hasLeft.current = false;
    }
  }, [isInView]);

  return (
    <section ref={ref} className="w-full bg-default pt-16">
      <Container>
        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div
            className="pointer-events-none absolute -left-8 top-1/4 h-48 w-48 rounded-full bg-primary-pink/10 blur-3xl"
            aria-hidden
            animate={
              isInView
                ? { opacity: [0.4, 0.9, 0.4], scale: [1, 1.12, 1] }
                : { opacity: 0.35, scale: 1 }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-4 bottom-1/4 h-56 w-56 rounded-full bg-[#426CFF]/10 blur-3xl"
            aria-hidden
            animate={
              isInView
                ? { opacity: [0.35, 0.85, 0.35], scale: [1, 1.1, 1] }
                : { opacity: 0.3, scale: 1 }
            }
            transition={{
              duration: 5.5,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* key=playId forces fresh create animation on scroll-back */}
          <motion.div
            key={`left-${playId}`}
            className="relative flex flex-col lg:pr-4"
            variants={leftContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span
              variants={fadeUp}
              className="mb-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink"
            >
              Data Foundation
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mb-4 text-[36px] font-medium leading-tight tracking-tight text-white"
            >
              Future-Proof Foundational Data Layer
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              className="mb-5 max-w-xl text-[22px] font-semibold leading-snug text-white md:text-[24px]"
            >
              Forging the Rock-Solid Data Infrastructure Essential for the
              AI-Native Enterprise.
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="mb-6 max-w-xl text-[18px] font-light leading-relaxed text-white"
            >
              We help clients master the complete data lifecycle— from
              high-volume ingestion to rigorous governance—building the robust,
              scalable data foundation required for every AI and GenAI
              initiative.
            </motion.p>

        
          </motion.div>

          <motion.div
            key={`right-${playId}`}
            className="relative flex justify-center lg:justify-end"
            variants={panelVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div
              className="relative w-full max-w-md overflow-hidden rounded-[16px] border border-white/10 bg-[#0A0A1A]/80 p-3.5 md:p-4"
              style={{
                boxShadow: `0 0 48px -16px ${ACCENT_PINK}55, inset 0 1px 0 rgba(255,255,255,0.06)`,
              }}
            >
              <div className="relative flex flex-col gap-2.5">
                {features.map((feature, index) => {
                  const isPink = feature.accent === "pink";
                  const color = isPink ? ACCENT_PINK : THEME_BLUE;
                  const checkDelay = 0.5 + index * 0.11;

                  return (
                    <motion.div
                      key={feature.text}
                      custom={index}
                      variants={rowVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{
                        x: 6,
                        transition: { duration: 0.35, ease: EASE },
                      }}
                      className="group relative flex items-center gap-3.5 overflow-hidden rounded-[12px] border border-white/8 bg-white/[0.04] px-3.5 py-3 transition-[border-color,background-color] duration-300 hover:border-primary-pink/40 hover:bg-white/[0.06] md:gap-4 md:px-4 md:py-3.5"
                    >
                      <motion.div
                        className={cn(
                          "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border md:h-10 md:w-10"
                        )}
                        style={{
                          borderColor: `${color}55`,
                          background: `linear-gradient(145deg, ${color}28, transparent 70%)`,
                          boxShadow: `0 0 14px ${color}22`,
                        }}
                        initial={{ scale: 0.5, opacity: 0, rotate: -12 }}
                        animate={
                          isInView
                            ? { scale: 1, opacity: 1, rotate: 0 }
                            : { scale: 0.5, opacity: 0, rotate: -12 }
                        }
                        transition={{
                          duration: 0.65,
                          delay: isInView ? 0.4 + index * 0.1 : 0,
                          ease: EASE,
                        }}
                      >
                        {isInView ? (
                          <AnimatedCheck color={color} delay={checkDelay} />
                        ) : null}
                      </motion.div>

                      <motion.span
                        className="flex-1 text-[14px] leading-snug text-white md:text-[15px]"
                        initial={{ opacity: 0, x: 10 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: 10 }
                        }
                        transition={{
                          duration: 0.6,
                          delay: isInView ? 0.45 + index * 0.1 : 0,
                          ease: EASE,
                        }}
                      >
                        {feature.text}
                      </motion.span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
