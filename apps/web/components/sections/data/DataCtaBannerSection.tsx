"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/atoms/Container";
import { motion } from "@/lib/replayMotion";

export default function DataCtaBannerSection() {
  return (
    <section className="bg-white py-10 md:py-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[12px] bg-black md:rounded-[12px]"
        >
          <Image
            src="/assets/final-images/capabilities/data/bg-learn.png"
            alt=""
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-cover object-right"
            aria-hidden
            priority={false}
          />
          <div className="absolute inset-0 bg-black/55" aria-hidden />

          <div className="relative grid items-center gap-8 px-8 py-12 md:grid-cols-[1fr_auto] md:gap-12 md:px-12 lg:px-14">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold leading-snug text-white md:text-3xl lg:text-[32px] lg:leading-snug">
                Discover how our AI Studio complements our Data Studio &amp; data
                engineering services.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white md:text-base">
              eForte’s AI Studio brings deep expertise in LLMs, generative AI, and computer vision to sit on top of the data foundations created by the Data Studio. Together, they help organizations optimize operations, unlock insights from diverse sources, and automate complex tasks with tailored AI solutions.
              </p>
            </div>

            <Link
              href="/capabilities/artificial-intelligence"
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-transparent bg-white px-8 text-sm font-semibold leading-none text-default transition-colors hover:border-white hover:bg-transparent hover:text-white"
            >
              Learn more
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
