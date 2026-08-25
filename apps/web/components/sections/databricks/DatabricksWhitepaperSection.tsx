"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { databricksWhitepaper } from "@/data/databricks";

export default function DatabricksWhitepaperSection() {
  return (
    <section className="bg-black py-10 md:py-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[12px] bg-[#1A1A1A] p-6 text-white md:rounded-[12px] md:p-10 lg:p-12"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex justify-center lg:justify-start">
              <Image
                src={databricksWhitepaper.coverSrc}
                alt={databricksWhitepaper.coverAlt}
                width={480}
                height={560}
                className="h-auto w-full max-w-[380px] -rotate-3 origin-bottom object-contain lg:max-w-[440px]"
              />
            </div>

            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                {databricksWhitepaper.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-[40px]">
                {databricksWhitepaper.title}
              </h2>
              <div className="mt-5 space-y-4 text-[15px] font-light leading-relaxed text-white/75 md:text-base">
                {databricksWhitepaper.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Link
                href={databricksWhitepaper.ctaHref}
                className="mt-8 inline-flex h-10 items-center justify-center rounded-full bg-[#E5484D] px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                {databricksWhitepaper.ctaLabel}
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
