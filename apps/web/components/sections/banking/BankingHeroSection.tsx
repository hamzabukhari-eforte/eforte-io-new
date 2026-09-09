"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import IndustryHeroSection from "@/components/sections/industry-page/IndustryHeroSection";
import { motion } from "@/lib/replayMotion";

const stats = [
  { value: "20+", label: "years of banking and financial services experience" },
  { value: "100M+", label: "people using financial systems we helped build" },
  { value: "75%", label: "of our largest clients are in banking and finance" },
];

const bankingHero = {
  badge: "Banking",
  headline: "Driving the shift to AI-driven banking",
  paragraphs: [
    "Banks are reimagining how they operate, engage, and grow in the AI era. eForte is enabling financial institutions to lead this change.",
    "We build data and AI-driven banking solutions that modernize core banking services, strengthen bank compliance, and enhance financial cybersecurity.",
  ],
  ctaLabel: "Contact Us",
  imageSrc: "/assets/final-images/industries/banking/hero-v4.png",
  // Previous hero graphics preserved for possible future reuse:
  // "/assets/final-images/industries/banking/hero-v3.png",
  // "/assets/final-images/industries/banking/hero-v2.png",
};

export default function BankingHeroSection() {
  return (
    <>
      <IndustryHeroSection content={bankingHero} />

      {/* Logos now sit in the hero (Finance layout). TrustedBySection preserved for reuse:
      <TrustedBySection items={defaultTrustedByLogos} />
      */}

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
