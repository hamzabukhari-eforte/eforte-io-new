"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/atoms/Container";
import { useInViewReplay } from "@/lib/useInViewReplay";

const TEAM_IMAGE = "/assets/images/velocity-ai/cta-team.png";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function CareersValuesIntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewReplay(ref, { margin: "-60px", amount: 0.15 });

  return (
    <section id="our-values" className="scroll-mt-24 bg-default pb-10 pt-16 md:pb-14 md:pt-20">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease }}
          className="grid gap-8 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-[42px] lg:leading-tight">
            Our Values
          </h2>
          <p className="text-base leading-relaxed text-desc md:text-lg md:leading-relaxed">
            The principles that guide how we work, every single day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="relative mt-10 aspect-[21/9] w-full overflow-hidden rounded-2xl md:mt-14 md:rounded-3xl"
        >
          <Image
            src={TEAM_IMAGE}
            alt="eForte team group photo"
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-cover"
          />
        </motion.div>
      </Container>
    </section>
  );
}
