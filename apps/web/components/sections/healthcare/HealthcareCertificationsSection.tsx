"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef, type ReactNode } from "react";
import { FaBalanceScale, FaShieldAlt, FaAward } from "react-icons/fa";

const EASE = [0.22, 1, 0.36, 1] as const;

function CertLogo({
  src,
  alt,
  width,
  height,
  delay,
  isInView,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width, height }}
      title={alt}
      initial={{ opacity: 0, scale: 0.7, y: 12 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.7, y: 12 }
      }
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      <motion.div
        className="h-full w-full"
        animate={isInView ? { y: [0, -4, 0] } : { y: 0 }}
        transition={{
          duration: 3.2 + delay,
          delay: delay + 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-contain drop-shadow-[0_0_18px_rgba(66,108,255,0.25)]"
        />
      </motion.div>
    </motion.div>
  );
}

function ThemeCard({
  index,
  isInView,
  children,
  certs,
}: {
  index: number;
  isInView: boolean;
  children: ReactNode;
  certs: ReactNode;
}) {
  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-[12px] border border-white/10 bg-[#0A0A1A] p-5 transition-[border-color,transform] duration-300 hover:border-primary-pink md:p-5"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.7,
        delay: 0.25 + index * 0.12,
        ease: EASE,
      }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: EASE } }}
    >
      <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
      <div className="relative mt-auto border-t border-white/10 pt-3">
        {certs}
      </div>
    </motion.article>
  );
}

export default function HealthcareCertificationsSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, {
    amount: 0.15,
    exitMargin: "40px",
    exitDelayMs: 200,
    settleMs: 500,
  });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-default pt-8 pb-10 md:pt-10 md:pb-12"
    >
      <motion.div
        className="pointer-events-none absolute top-24 left-1/4 h-64 w-64 rounded-full bg-primary-pink/10 blur-3xl"
        aria-hidden
        animate={
          isInView
            ? { opacity: [0.35, 0.7, 0.35], scale: [1, 1.1, 1] }
            : { opacity: 0.25, scale: 1 }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-1/5 bottom-20 h-72 w-72 rounded-full bg-[#426CFF]/10 blur-3xl"
        aria-hidden
        animate={
          isInView
            ? { opacity: [0.3, 0.65, 0.3], scale: [1, 1.12, 1] }
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
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center text-3xl font-semibold text-white md:text-4xl"
        >
          Certified for the standards healthcare demands
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Card 1 — SOC / ISO / NIST */}
          <ThemeCard
            index={0}
            isInView={isInView}
            certs={
              <div className="flex min-h-[72px] flex-wrap items-center gap-2.5">
                <CertLogo
                  src="/assets/images/landing/soc.png"
                  alt="SOC 2 Type 2 certified"
                  width={56}
                  height={56}
                  delay={0.7}
                  isInView={isInView}
                />
                <CertLogo
                  src="/assets/images/landing/iso.png"
                  alt="ISO 27001 certified"
                  width={56}
                  height={56}
                  delay={0.82}
                  isInView={isInView}
                />
                <CertLogo
                  src="/assets/images/landing/nist.png"
                  alt="NIST AI compliant"
                  width={56}
                  height={56}
                  delay={0.94}
                  isInView={isInView}
                />
              </div>
            }
          >
            <div className="mb-3">
              <div className="mb-2 flex items-center gap-3">
                <motion.div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#426CFF]/40 bg-[#426CFF]/15 text-[#426CFF]"
                  animate={isInView ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                  transition={{
                    duration: 2.6,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaAward className="text-xl" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-white md:text-xl">
                    Enterprise Certifications
                  </h3>
                  <p className="mt-0.5 text-[12px] text-white/80 md:text-[13px]">
                    SOC 2 Type 2 · ISO 27001 · NIST AI
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-3 border-t border-white/10" />

            <div className="mb-1">
              <h4 className="mb-2 text-lg font-bold text-white md:text-xl">
                Security Standards
              </h4>
              <p className="text-[14px] leading-relaxed text-white md:text-[15px]">
                eForte holds ISO 27001 and SOC 2 Type 2 certifications and aligns
                with the NIST AI Risk Management Framework, giving healthcare
                partners confidence in how we handle sensitive data at every
                stage.
              </p>
            </div>
          </ThemeCard>

          {/* Card 2 — HIPAA */}
          <ThemeCard
            index={1}
            isInView={isInView}
            certs={
              <div className="flex min-h-[72px] items-center">
                <CertLogo
                  src="/assets/images/landing/HIPAA.png"
                  alt="HIPAA compliance"
                  width={64}
                  height={76}
                  delay={0.85}
                  isInView={isInView}
                />
              </div>
            }
          >
            <div className="mb-3">
              <div className="mb-2 flex items-center gap-3">
                <motion.div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#426CFF]/40 bg-[#426CFF]/15 text-[#426CFF]"
                  animate={isInView ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                  transition={{
                    duration: 2.6,
                    delay: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaShieldAlt className="text-xl" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-white md:text-xl">
                    HIPAA Aligned
                  </h3>
                  <p className="mt-0.5 text-[12px] text-white/80 md:text-[13px]">
                    Clinical &amp; consumer health platforms
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-3 border-t border-white/10" />

            <div className="mb-1">
              <h4 className="mb-2 text-lg font-bold text-white md:text-xl">
                HIPAA Compliance Expertise
              </h4>
              <p className="text-[14px] leading-relaxed text-white md:text-[15px]">
                Our team has built numerous HIPAA aligned platforms across
                clinical and consumer health settings.
              </p>
            </div>
          </ThemeCard>

          {/* Card 3 — FDA */}
          <ThemeCard
            index={2}
            isInView={isInView}
            certs={
              <div className="flex min-h-[72px] items-center">
                <CertLogo
                  src="/assets/images/industry/fda.svg"
                  alt="FDA"
                  width={96}
                  height={64}
                  delay={0.9}
                  isInView={isInView}
                />
              </div>
            }
          >
            <div className="mb-3">
              <div className="mb-2 flex items-center gap-3">
                <motion.div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary-pink/40 bg-primary-pink/15 text-primary-pink"
                  animate={isInView ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                  transition={{
                    duration: 2.8,
                    delay: 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaBalanceScale className="text-xl" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-white md:text-xl">
                    FDA-Ready Delivery
                  </h3>
                  <p className="mt-0.5 text-[12px] text-white/80 md:text-[13px]">
                    Regulated product submissions
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-3 border-t border-white/10" />

            <div className="mb-1">
              <h4 className="mb-2 text-lg font-bold text-white md:text-xl">
                FDA-Cleared Support
              </h4>
              <p className="text-[14px] leading-relaxed text-white md:text-[15px]">
                Our team has supported FDA-cleared product submissions across
                clinical and consumer health settings.
              </p>
            </div>
          </ThemeCard>
        </div>
      </Container>
    </section>
  );
}
