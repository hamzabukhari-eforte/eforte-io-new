"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

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
            Grow, Build, and Belong.
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/90 md:mt-6 md:text-lg"
          >
            At eForte, we believe great software is built by great people. Join a
            team of engineers, designers, and strategists who turn ambitious ideas
            into working products and take your career further while you do it.
          </motion.p>
          <motion.div
            variants={heroItem}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10"
          >
            <Link
              href="#open-roles"
              className="inline-flex h-10 items-center justify-center rounded-full leading-none bg-gradient-to-r from-[#be185d] to-[#db2777] px-8 text-sm font-medium text-white shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] transition-all hover:-translate-y-0.5 hover:from-[#db2777] hover:to-[#be185d]"
            >
              Explore Open Roles
            </Link>
            <Link
              href="#our-values"
              className="inline-flex h-10 items-center justify-center rounded-full leading-none border border-white/50 px-8 text-sm font-medium text-white transition-all hover:border-white hover:bg-white hover:text-default"
            >
              Learn About Our Culture
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
