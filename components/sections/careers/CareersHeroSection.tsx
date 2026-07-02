"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import ContactCTA from "@/components/atoms/ContactCTA";

const HERO_IMAGE = "/assets/images/industry/working.jpg";

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function CareersHeroSection() {
  return (
    <section className="relative z-0 flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-[80vh]">
      <Image
        src={HERO_IMAGE}
        alt="eForte team collaborating in the office"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      <Container className="relative z-10 py-32 md:py-40">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={heroItem}
            className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.12]"
          >
            Make a Difference, Thrive, and Enjoy Every Moment!
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/90 md:mt-6 md:text-lg"
          >
            We&apos;re proud partners of market leaders, collaborating to innovate,
            inspire, and build a brighter tomorrow. Join our fast-growing team of
            visionaries and take your career to the next level.
          </motion.p>
          <motion.div variants={heroItem} className="mt-8 md:mt-10">
            <ContactCTA className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#be185d] to-[#db2777] px-10 text-sm font-medium text-white transition-all hover:from-[#db2777] hover:to-[#be185d] hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(219,39,119,0.39)]">
              Contact Us
            </ContactCTA>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
