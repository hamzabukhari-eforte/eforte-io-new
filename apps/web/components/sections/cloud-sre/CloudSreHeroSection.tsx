"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";

export default function CloudSreHeroSection() {
  return (
    <section className="relative flex min-h-[760px] flex-col justify-center overflow-hidden bg-default pt-28 pb-20 md:min-h-screen md:pt-36">
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full leading-none border border-white/25 bg-white/10 px-4 py-0 text-[13px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur"
            >
              <HiSparkles className="h-3.5 w-3.5 text-primary-pink" />
              Cloud, SRE & DevOps
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[48px]"
            >
              eForte&apos;s Cloud, SRE & DevOps Studio keeps your systems fast,
              reliable, and ready to scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 max-w-2xl text-base leading-7 text-white md:text-lg"
            >
              Every AI system, application, and data pipeline we build needs
              somewhere reliable to run. Our Cloud, SRE & DevOps Studio designs
              cloud infrastructure, automates deployment pipelines, and keeps
              production systems healthy — so the technology we build together
              stays fast and available as usage grows. We treat reliability as
              a discipline, not an afterthought: monitoring, incident response,
              and infrastructure-as-code built in from day one.
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

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative mx-auto flex w-full max-w-[430px] items-center justify-center lg:mx-0 lg:max-w-none lg:justify-end"
          >
            <Image
              src="/assets/final-images/capabilities/cloud-sre/cloud_sre_hero.png"
              alt=""
              width={520}
              height={520}
              priority
              sizes="(max-width: 1024px) min(90vw, 430px), min(40vw, 520px)"
              quality={90}
              className="h-auto w-full max-h-[420px] object-contain object-center lg:max-h-[520px] lg:object-right"
              aria-hidden
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
