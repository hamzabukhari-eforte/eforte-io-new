"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AI_ACCENT, aiWhitePaper } from "@/data/capabilities/ai";

export default function AiWhitePaperSection() {
  return (
    <section className="bg-black">
      <div className="overflow-hidden rounded-[12px] bg-white text-default md:rounded-[12px]">
        <div className="mx-auto grid w-full max-w-[1400px] items-end gap-10 px-4 pt-16 sm:px-6 md:gap-12 md:px-8 md:pt-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:px-12 lg:pt-24 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center self-end lg:justify-start"
          >
            <Image
              src={aiWhitePaper.coverImage}
              alt="Data & AI maturity white paper cover"
              width={520}
              height={636}
              className="-rotate-3 origin-bottom h-auto w-full max-w-[420px] lg:max-w-[500px]"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="max-w-xl self-center pb-16 md:pb-20 lg:pb-24"
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6B6B6B]">
              {aiWhitePaper.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.15] md:text-4xl lg:text-[40px]">
              {aiWhitePaper.title}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#555] md:text-base">
              {aiWhitePaper.description}
            </p>
            <Link
              href={aiWhitePaper.ctaHref}
              className="mt-8 inline-flex h-10 items-center justify-center rounded-full leading-none px-8 py-0 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: AI_ACCENT }}
            >
              {aiWhitePaper.ctaLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
