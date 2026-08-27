"use client";

import ContactCTA from "@/components/atoms/ContactCTA";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import Container from "@/components/atoms/Container";

export default function MediaEntertainmentHeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-default pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/industry/media-entertainment-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/65 to-black/35" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/40 px-4 py-0 text-[13px] font-normal uppercase leading-[16px] tracking-[0.18em] text-white"
          >
            <HiSparkles className="h-3.5 w-3.5" />
            Media &amp; Entertainment
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 text-[40px] font-semibold leading-[46px] text-white md:text-[56px] md:leading-[62px]"
          >
            AI-native solutions for media, entertainment, and gaming companies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-7 max-w-xl text-[15px] font-normal leading-[24px] text-white/85"
          >
            The media, entertainment, and gaming industries have already made the
            digital leap. Now, the next frontier is becoming AI-native. Streaming,
            gaming, publishing, and live events are being redefined by AI -
            delivering personalized, real-time, and immersive experiences at
            scale.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-5 max-w-xl text-[15px] font-normal leading-[24px] text-white/85"
          >
            At eForte, we help leading media and entertainment companies harness
            data and AI to build memorable brands and experiences via high-quality
            digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9"
          >
            <ContactCTA className="inline-flex h-10 items-center justify-center rounded-full leading-none border border-white bg-white px-8 text-sm font-medium text-default transition-all duration-300 hover:bg-transparent hover:text-white">
              Contact Us
            </ContactCTA>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
