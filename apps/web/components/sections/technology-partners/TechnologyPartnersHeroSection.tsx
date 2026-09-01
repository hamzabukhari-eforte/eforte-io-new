"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { technologyPartnersContent } from "@/data/technologyPartners";

const { hero } = technologyPartnersContent;

export default function TechnologyPartnersHeroSection() {
  return (
    <section className="relative flex min-h-[760px] flex-col justify-center overflow-hidden bg-default pt-28 pb-20 md:min-h-screen md:pt-36">
      <div className="absolute inset-0">
        <Image
          src="/assets/final-images/technology-partners/Technology_Partners_Hero.png?v3"
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
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full leading-none border border-white bg-black px-4 py-0 text-[12px] font-medium uppercase tracking-[0.18em] text-white"
          >
            <HiSparkles className="h-3.5 w-3.5 text-primary-pink" />
            {hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[48px]"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-2xl text-[16px] leading-7 text-white md:text-[16px]"
          >
            {hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9"
          >
            <ContactCTA className="inline-flex h-10 items-center justify-center rounded-full leading-none bg-primary-pink px-8 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(211,40,122,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-pink/90">
              Get in touch
            </ContactCTA>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
