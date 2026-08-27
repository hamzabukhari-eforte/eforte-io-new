"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";

export default function ProductDesignHeroSection() {
  return (
    <section className="relative flex min-h-[760px] flex-col justify-center overflow-hidden bg-default pt-28 pb-20 md:min-h-screen md:pt-36">
      <div className="absolute inset-0">
        <Image
          src="/assets/final-images/capabilities/product-design/Capabilities_Product_Design_Studio_Hero_Section_Image.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/75 to-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(211,40,122,0.35),transparent_34%)]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full leading-none border border-white/25 bg-white/10 px-4 py-0 text-[13px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur"
          >
            <HiSparkles className="h-3.5 w-3.5 text-primary-pink" />
            Product Design
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[48px]"
          >
            eForte&apos;s Product Design Studio turns complex workflows into
            products people actually want to use
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/82 md:text-lg"
          >
            The most capable backend in the world fails if the people using it
            every day find it confusing or slow. Our Product Design Studio does
            the human-centered work — research, UX, UI, and design systems —
            that makes Velocity AI and Agentic Orchestration usable, trusted,
            and adopted. We design for how your teams and customers actually
            behave, not how a spec sheet assumes they will.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9"
          >
            <ContactCTA className="inline-flex h-10 items-center justify-center rounded-full leading-none bg-primary-pink px-8 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(211,40,122,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-pink/90">
              Contact Us
            </ContactCTA>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
