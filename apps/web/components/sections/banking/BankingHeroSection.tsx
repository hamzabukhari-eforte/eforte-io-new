"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/atoms/Container";
import TrustedBySection from "@/components/sections/TrustedBySection";
import { defaultTrustedByLogos } from "@/data/trustedByLogos";

const stats = [
  { value: "20+", label: "years of banking and financial services experience" },
  { value: "100M+", label: "people using financial systems we helped build" },
  { value: "75%", label: "of our largest clients are in banking and finance" },
];

export default function BankingHeroSection() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-default pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden h-full w-screen -translate-x-1/2 md:block">
          <Image
            src="/assets/images/industry/banking-bg-hero.jpg"
            alt=""
            width={1920}
            height={1080}
            priority
            className="pointer-events-none scale-125 select-none object-cover object-center"
            aria-hidden
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.75)_78%)]" />

        <Container className="relative z-10 flex justify-center text-center">
          <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/90"
          >
            Banking
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mx-auto max-w-[450px] text-4xl font-semibold leading-tight text-white sm:text-5xl"
          >
            Driving the shift to AI-driven banking
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            Banks are reimagining how they operate, engage, and grow in the AI era. eForte is
            enabling financial institutions to lead this change.
            <br />
            <br />
            We build data and AI-driven banking solutions that modernize core banking services,
            strengthen bank compliance, and enhance financial cybersecurity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            {[
              { src: "/assets/images/landing/soc.png", alt: "SOC 2 badge" },
              { src: "/assets/images/landing/iso.png", alt: "ISO 27001 badge" },
              { src: "/assets/images/landing/nist.png", alt: "NIST badge" },
            ].map((badge) => (
              <div
                key={badge.src}
                className="flex h-20 items-center justify-center md:h-24"
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={96}
                  height={96}
                  className="h-full w-auto object-contain shadow-[0_0_20px_rgba(59,111,232,0.2)]"
                />
              </div>
            ))}
          </motion.div>
          </div>
        </Container>
      </section>

      <TrustedBySection items={defaultTrustedByLogos} />

      <section className="bg-default pb-40">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                className="relative flex flex-col items-center justify-center border border-white/10 px-6 py-12 text-center transition-all duration-300 hover:border-white/30 md:px-10"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(to bottom, #0A0A1A, #10082C, #2A0079)"
                      : "transparent",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              >
                <p className="text-5xl font-medium leading-none text-white md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-4 max-w-[260px] text-base leading-snug text-desc md:text-[17px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
