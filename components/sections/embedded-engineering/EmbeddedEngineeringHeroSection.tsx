"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineChip } from "react-icons/hi";
import Container from "@/components/atoms/Container";

export default function EmbeddedEngineeringHeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/4">
        <Image
          src="/assets/images/industry/embedded-eng-banner.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/85 to-transparent lg:via-black/55" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-[13px] font-medium uppercase leading-[16px] tracking-[0.18em] text-white"
          >
            <HiOutlineChip className="h-4 w-4" />
            Embedded Engineering Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 text-[36px] font-semibold leading-[46px] text-white md:text-[42px] md:leading-[55px]"
          >
            Embedded engineering services for semiconductors and embedded systems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-7 max-w-xl text-[17px] font-light leading-[27px] text-white/85"
          >
            eForte accelerates embedded innovation through nearshore firmware
            development with our proven embedded development methodology leveraged
            by highly qualified software engineers. We collaborate with clients in
            real-time and build solutions tailored for the U.S. market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-9"
          >
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#2D52F0] bg-[#2D52F0] px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
