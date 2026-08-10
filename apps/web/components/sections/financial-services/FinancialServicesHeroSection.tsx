"use client";

import Image from "next/image";
import ContactCTA from "@/components/atoms/ContactCTA";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

const complianceBadges = [
  { src: "/assets/images/landing/soc.png", alt: "SOC 2 Type 2" },
  { src: "/assets/images/landing/iso.png", alt: "ISO 27001 Certified" },
  { src: "/assets/images/landing/nist.png", alt: "NIST Compliant" },
];

export default function FinancialServicesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-default pb-16 pt-28 md:pb-24 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(ellipse_at_center, rgba(124, 76, 255, 0.18), transparent_70%)] lg:block" />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-white"
            >
              Finance Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[48px]"
            >
              Intelligent infrastructure for the next era of financial services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-desc md:text-[17px]"
            >
              eForte partners with banks, lenders, and payment innovators to turn
              financial services ambitions into shipped products, engineering
              secure, scalable systems across lending, payments, and embedded
              finance, powered by data and applied AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8"
            >
              <ContactCTA className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-8 text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-default">
                Contact Us
              </ContactCTA>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-3">
                {complianceBadges.map((badge) => (
                  <div
                    key={badge.alt}
                    className="relative h-16 w-16 md:h-[72px] md:w-[72px]"
                  >
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      fill
                      className="object-contain"
                      sizes="72px"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-baseline gap-3">
                <span className="text-4xl font-semibold leading-none text-white md:text-[40px]">
                  80%
                </span>
                <span className="max-w-[240px] text-xs leading-snug text-desc">
                  of eForte&apos;s finance clients have partnered with us for more
                  than three years
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative w-full"
          >
            <div className="relative aspect-1230/1054 w-full">
              <Image
                src="/assets/images/package/industries/finance-industry-hero.svg"
                alt="Financial services dashboard preview"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
