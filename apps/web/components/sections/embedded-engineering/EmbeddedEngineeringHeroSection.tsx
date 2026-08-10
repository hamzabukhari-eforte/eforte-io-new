"use client";

import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EmbeddedEngineeringHeroSection() {
  return (
    <section className="relative overflow-hidden bg-black pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 75% 40%, rgba(211,40,122,0.28), transparent 60%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[13px] font-semibold uppercase tracking-[0.18em] text-primary-pink"
            >
              Capabilities / Embedded Engineering
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-5 text-[36px] font-semibold leading-[1.15] text-white md:text-[42px] md:leading-[1.2] lg:text-[48px]"
            >
              Embedded engineering services for semiconductors and embedded
              systems
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-6 text-[17px] font-light leading-[1.6] text-white/75"
            >
              eForte accelerates embedded innovation through nearshore firmware
              development with our proven methodology and highly qualified
              software engineers. We collaborate in real-time and build
              solutions tailored for the U.S. market.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-9"
            >
              <ContactCTA className="inline-flex h-12 items-center justify-center rounded-full bg-primary-pink px-8 text-sm font-medium text-white shadow-[0_18px_40px_rgba(211,40,122,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-pink/90">
                Let&apos;s Talk
              </ContactCTA>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none lg:aspect-[5/4]"
          >
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary-pink/30 via-transparent to-[#E5484D]/20 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/assets/images/industry/cpu-large.jpg"
                alt="Semiconductor chip and embedded systems hardware"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
