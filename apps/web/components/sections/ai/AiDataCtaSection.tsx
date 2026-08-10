"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

export default function AiDataCtaSection() {
  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[28px] bg-black md:rounded-[36px]"
        >
          <div className="absolute inset-y-0 right-0 hidden w-[48%] md:block">
            <Image
              src="/assets/images/velocity-ai/cube-3d.png"
              alt=""
              fill
              sizes="40vw"
              className="object-contain object-right opacity-90"
              aria-hidden
            />
          </div>

          <div className="relative grid items-center gap-8 px-8 py-10 md:grid-cols-[1fr_auto] md:gap-12 md:px-12 md:py-14">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold leading-snug text-white md:text-3xl">
                Data and AI solutions working together: Explore our Data Studio.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70 md:text-base">
                With a focus on custom solutions ranging from data warehousing,
                advanced GenAI and machine learning models to data strategy and
                monetization, the eForte Data Studio is committed to transforming
                data into a strategic asset.
              </p>
            </div>

            <Link
              href="/capabilities/data"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-default transition-opacity hover:opacity-90"
            >
              Learn more
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
