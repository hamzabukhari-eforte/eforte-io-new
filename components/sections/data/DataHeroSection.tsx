"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { DATA_ACCENT } from "@/data/capabilities/data";

export default function DataHeroSection() {
  return (
    <section className="relative flex min-h-[720px] flex-col justify-center overflow-hidden bg-black pt-28 pb-20 md:min-h-screen md:pt-36">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[75%] w-[58%] -translate-y-1/2 lg:block"
      >
        <Image
          src="/assets/images/industry/bi.jpg"
          alt=""
          fill
          priority
          sizes="58vw"
          className="object-cover object-center opacity-90"
          aria-hidden
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="absolute inset-8 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm"
        >
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="grid h-full grid-cols-2 gap-3"
          >
            <div className="rounded-lg bg-[#2D52F0]/30 p-3">
              <motion.div
                animate={{ scaleX: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="h-2 w-full origin-left rounded bg-[#2D52F0]"
              />
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-3 h-16 rounded bg-white/10"
              />
            </div>
            <div className="rounded-lg bg-white/5 p-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="mx-auto mt-4 h-14 w-14 rounded-full border-4 border-[#2D52F0]/60 border-t-[#F15B50]"
              />
            </div>
            <div className="col-span-2 rounded-lg bg-white/5 p-3">
              <motion.div
                animate={{ width: ["40%", "85%", "40%"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="h-2 rounded bg-[#1FA971]"
              />
              <div className="mt-4 flex items-end gap-2">
                {[20, 40, 28, 50, 32].map((height, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [height, height + 12, height] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                    className="w-full rounded-sm bg-[#2D52F0]/50"
                    style={{ height }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-black"
          aria-hidden
        />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-black/50 lg:via-black/80 lg:to-transparent"
        aria-hidden
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p
            className="text-[13px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: DATA_ACCENT }}
          >
            Capabilities / Data
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-[48px]">
            Unlock the full potential of your data with our data engineering
            solutions
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            Empower your business with expert data engineering services — from
            architecture and pipelines to governance, analytics, and AI-ready
            platforms built for scale.
          </p>
          <div className="mt-9">
            <ContactCTA
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: DATA_ACCENT }}
            >
              Let&apos;s Talk
            </ContactCTA>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
