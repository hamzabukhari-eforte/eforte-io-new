"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useEffect, useRef, useState } from "react";

const THEME_BLUE = "#426CFF";
const ACCENT_PINK = "#D3287A";
const EASE = [0.22, 1, 0.36, 1] as const;

const copyContainer: Variants = {
  hidden: {
    transition: { staggerChildren: 0.06, staggerDirection: -1 },
  },
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    transition: { duration: 0.35, ease: EASE },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function NavigateAISection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, {
    amount: 0.2,
    exitMargin: "40px",
    exitDelayMs: 200,
    settleMs: 500,
  });

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
    <section ref={ref} className="relative w-full overflow-hidden bg-default py-16">
      {/* Ambient atmosphere */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-[8%] h-72 w-72 -translate-y-1/2 rounded-full bg-[#426CFF]/15 blur-3xl"
        aria-hidden
        animate={
          isInView
            ? { opacity: [0.35, 0.7, 0.35], scale: [1, 1.12, 1] }
            : { opacity: 0.25, scale: 1 }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/3 right-[5%] h-56 w-56 rounded-full bg-primary-pink/12 blur-3xl"
        aria-hidden
        animate={
          isInView
            ? { opacity: [0.3, 0.65, 0.3], scale: [1, 1.1, 1] }
            : { opacity: 0.2, scale: 1 }
        }
        transition={{
          duration: 5.5,
          delay: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container>
        <div className="relative grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — visual */}
          <motion.div
            key={`visual-${playId}`}
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: -40, scale: 0.94 }}
            animate={
              isInView
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: -40, scale: 0.94 }
            }
            transition={{ duration: 0.85, ease: EASE }}
          >
            {/* Orbit rings */}
            <motion.div
              className="pointer-events-none absolute h-[88%] w-[88%] max-w-[480px] rounded-full border border-[#426CFF]/25"
              aria-hidden
              animate={isInView ? { rotate: 360 } : { rotate: 0 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span
                className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#426CFF] shadow-[0_0_12px_#426CFF]"
                aria-hidden
              />
            </motion.div>
            <motion.div
              className="pointer-events-none absolute h-[102%] w-[102%] max-w-[540px] rounded-full border border-dashed border-primary-pink/20"
              aria-hidden
              animate={isInView ? { rotate: -360 } : { rotate: 0 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span
                className="absolute bottom-6 right-8 h-1.5 w-1.5 rounded-full bg-primary-pink shadow-[0_0_10px_#D3287A]"
                aria-hidden
              />
            </motion.div>

            <motion.div
              className="relative w-full max-w-lg overflow-hidden rounded-[16px]"
              animate={
                isInView ? { y: [0, -8, 0] } : { y: 0 }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Soft frame glow */}
              <div
                className="pointer-events-none absolute -inset-px rounded-[16px] opacity-80"
                style={{
                  background: `linear-gradient(135deg, ${THEME_BLUE}55, transparent 40%, ${ACCENT_PINK}40)`,
                }}
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[16px] bg-[#0A0A1A]">
                <Image
                  src="/assets/images/landing/navigate.png"
                  alt="AI Adoption Brain Network"
                  width={600}
                  height={600}
                  className="relative z-10 h-auto w-full object-cover"
                />
                {/* Bottom vignette */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/3 bg-linear-to-t from-[#0A0A1A]/80 to-transparent"
                  aria-hidden
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            key={`copy-${playId}`}
            className="relative flex flex-col"
            variants={copyContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="mb-3" variants={fadeUp}>
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
                WHITE PAPER
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mb-6 text-[36px] font-medium leading-[42px] tracking-tight text-white md:mb-8"
            >
              Navigate the Complexities of AI Adoption to Unlock Real-World
              Business Value.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mb-5 text-[18px] font-light leading-[24px] text-white md:mb-6"
            >
              AI is a game-changer, but successful implementation requires
              expert guidance. eForte empowers your organization to strategically
              adopt AI, transforming key operations from reactive to predictive.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mb-8 text-[18px] font-light leading-[24px] text-white md:mb-10"
            >
              Our expertise spans complex domains: from deploying sophisticated
              bankruptcy prediction models in finance to engineering
              personalized, adaptive learning systems in EdTech, ensuring high
              efficiency and impactful innovation.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link
                href="/white-papers/navigate-ai-adoption"
                className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full border border-primary-pink bg-transparent px-9 text-[15px] font-medium leading-none text-white transition-colors duration-300 hover:bg-primary-pink"
              >
                <span className="relative z-10">Read now</span>
              </Link>
              <motion.span
                className="hidden text-[13px] text-white/50 sm:inline"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Strategy · Finance · EdTech
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
