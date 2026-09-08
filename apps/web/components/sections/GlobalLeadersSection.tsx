"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { FaBalanceScale, FaShieldAlt } from "react-icons/fa";

const EASE = [0.22, 1, 0.36, 1] as const;

const headerContainer: Variants = {
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    transition: { duration: 0.35, ease: EASE },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

function CertLogo({
  src,
  alt,
  width,
  height,
  delay,
  isInView,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  delay: number;
  isInView: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className ?? ""}`}
      style={{ width, height }}
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
        animate={
          isInView
            ? { y: [0, -4, 0] }
            : { y: 0 }
        }
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
      className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#0A0A1A] p-6 transition-[border-color,transform] duration-300 hover:border-primary-pink md:p-7"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.7,
        delay: 0.35 + index * 0.12,
        ease: EASE,
      }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: EASE } }}
    >
      <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>

      {/* Certifications footer — aligned across cards */}
      <div className="relative mt-auto border-t border-white/10 pt-5">
        {certs}
      </div>
    </motion.article>
  );
}

export default function GlobalLeadersSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, {
    amount: 0.15,
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
    <section ref={ref} className="relative w-full overflow-hidden bg-default">
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
        <motion.div
          key={`header-${playId}`}
          className="mx-auto max-w-4xl text-center"
          variants={headerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="mb-3">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
              WE ARE A SEASONED PROFESSIONAL TEAM
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mb-4 text-[48px] font-medium leading-tight tracking-tight text-white md:mb-6"
          >
            Powered by Global Leaders.
          </motion.h2>

          <motion.h2
            variants={fadeUp}
            className="mb-8 text-[48px] font-medium leading-tight tracking-tight text-white md:mb-12"
          >
            Recognized for Excellence.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-12 max-w-4xl text-[18px] font-light leading-relaxed text-white md:mb-16"
          >
            Combine the world&apos;s most advanced AI infrastructure with
            award-winning delivery. As an IBM Global Entrepreneur and ISO
            27001-certified partner, we build secure, scalable, enterprise-grade
            solutions trusted globally.
          </motion.p>
        </motion.div>

        <div
          key={`cards-${playId}`}
          className="mt-12 grid grid-cols-1 items-stretch gap-6 md:mt-16 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8"
        >
          {/* Card 1 */}
          <ThemeCard
            index={0}
            isInView={isInView}
            certs={
              <div className="flex min-h-[100px] items-center gap-4">
                <CertLogo
                  src="/assets/images/landing/IBM.png"
                  alt="IBM Global Entrepreneur"
                  width={88}
                  height={80}
                  delay={0.7}
                  isInView={isInView}
                />
                <CertLogo
                  src="/assets/images/landing/Expertise.png"
                  alt="Expertise.com"
                  width={90}
                  height={90}
                  delay={0.82}
                  isInView={isInView}
                />
              </div>
            }
          >
            <div className="mb-5">
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
                IBM GLOBAL ENTREPRENEUR
              </span>
            </div>

            <p className="mb-5 text-[15px] leading-relaxed text-white">
              Recognized for innovation and leadership in emerging technologies
              with the Blockchain & AI Award.
            </p>

            <div className="mb-5 border-t border-white/10" />

            <div className="mb-2">
              <h4 className="mb-3 text-xl font-bold text-white">
                Industry Awards
              </h4>
              <p className="text-[15px] leading-relaxed text-white">
                Rated &quot;A&quot; by Expertise.com among top software service
                providers for quality, trust, and performance.
              </p>
            </div>
          </ThemeCard>

          {/* Card 2 */}
          <ThemeCard
            index={1}
            isInView={isInView}
            certs={
              <div className="flex min-h-[100px] items-center">
                <CertLogo
                  src="/assets/images/landing/iso.png"
                  alt="ISO 27001 Certified"
                  width={80}
                  height={80}
                  delay={0.85}
                  isInView={isInView}
                />
              </div>
            }
          >
            <div className="mb-5">
              <div className="mb-3 flex items-center gap-4">
                <motion.div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#426CFF]/40 bg-[#426CFF]/15 text-[#426CFF]"
                  animate={
                    isInView
                      ? { scale: [1, 1.06, 1] }
                      : { scale: 1 }
                  }
                  transition={{
                    duration: 2.6,
                    delay: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaShieldAlt className="text-2xl" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    ISO 27001 Certified
                  </h3>
                  <p className="mt-1 text-[13px] text-white">
                    Demonstrating best-in-class information security.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-5 border-t border-white/10" />

            <div className="mb-2">
              <h4 className="mb-3 text-xl font-bold text-white">
                Security & Scale
              </h4>
              <p className="text-[15px] leading-relaxed text-white">
                Our certifications and expertise demonstrate an unwavering
                commitment to enterprise-grade security and data protection.
              </p>
            </div>
          </ThemeCard>

          {/* Card 3 */}
          <ThemeCard
            index={2}
            isInView={isInView}
            certs={
              <div className="flex min-h-[100px] items-center gap-4">
                <CertLogo
                  src="/assets/images/landing/CADP.png"
                  alt="CAIDP Member"
                  width={140}
                  height={90}
                  delay={0.9}
                  isInView={isInView}
                />
                <CertLogo
                  src="/assets/images/landing/HIPAA.png"
                  alt="HIPAA Compliant"
                  width={75}
                  height={90}
                  delay={1.02}
                  isInView={isInView}
                />
              </div>
            }
          >
            <div className="mb-5">
              <div className="mb-3 flex items-center gap-4">
                <motion.div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-pink/40 bg-primary-pink/15 text-primary-pink"
                  animate={
                    isInView
                      ? { scale: [1, 1.06, 1] }
                      : { scale: 1 }
                  }
                  transition={{
                    duration: 2.8,
                    delay: 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaBalanceScale className="text-2xl" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Ethical & Compliant
                  </h3>
                  <p className="mt-1 text-[13px] text-white">
                    Adherence to global standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-5 border-t border-white/10" />

            <div className="mb-5">
              <h4 className="mb-2 text-xl font-bold text-white">
                CAIDP Member:
              </h4>
              <p className="mb-4 text-[15px] leading-relaxed text-white">
                Aligned with global standards for ethical and responsible AI.
              </p>
            </div>

            <div className="mb-2">
              <h4 className="mb-2 text-xl font-bold text-white">
                HIPAA Compliance Expertise:
              </h4>
              <p className="text-[15px] leading-relaxed text-white">
                Proven experience delivering solutions meeting healthcare data
                protection requirements.
              </p>
            </div>
          </ThemeCard>
        </div>
      </Container>
    </section>
  );
}
