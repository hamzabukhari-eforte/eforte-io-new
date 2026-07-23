"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { CLOUD_SRE_ACCENT } from "@/data/capabilities/cloudSre";

export default function CloudSreHeroSection() {
  return (
    <section className="relative overflow-hidden bg-black pb-28 pt-28 md:pb-36 md:pt-36">
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: CLOUD_SRE_ACCENT }}
            >
              Capabilities / Cloud, SRE &amp; DevOps
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-[48px]">
              Explore our Cloud, SRE, DevOps &amp; Cybersecurity solutions
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              With our Cloud, SRE, and DevOps Studio embrace cloud-native
              solutions for accelerated development, combined with reliable,
              secure, and scalable environments.
            </p>
            <div className="mt-9">
              <ContactCTA
                className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: CLOUD_SRE_ACCENT }}
              >
                Contact Us
              </ContactCTA>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto aspect-[493/404] w-full max-w-lg"
          >
            <Image
              src="/assets/images/capabilities/cloud-hero.svg"
              alt="Cloud, SRE and DevOps illustration"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-contain"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
