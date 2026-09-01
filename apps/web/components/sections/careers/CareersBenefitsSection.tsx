"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/atoms/Container";
import { benefits } from "@/data/careersBenefits";
import { useInViewReplay } from "@/lib/useInViewReplay";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function BenefitCard({
  benefit,
}: {
  benefit: (typeof benefits)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.5, ease }}
      className="w-full p-3 text-center md:w-1/2 lg:w-1/3"
    >
      <div
        className="h-full rounded-[20px] px-5 py-6"
        style={{ background: benefit.background }}
      >
        <figure className="m-0 flex justify-center">
          <Image
            src={benefit.iconSrc}
            alt=""
            width={benefit.iconWidth}
            height={benefit.iconHeight}
            className="h-auto w-auto"
            aria-hidden
          />
        </figure>
        <p
          className="mt-[30px] text-[15px] leading-snug font-medium"
          style={{ color: benefit.textColor }}
        >
          {benefit.label}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-black/70">
          {benefit.description}
        </p>
      </div>
    </motion.li>
  );
}

export default function CareersBenefitsSection() {
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInViewReplay(introRef, { margin: "0px", amount: 0.25 });

  return (
    <section className="bg-white pt-16">
      <Container>
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 24 }}
          animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold text-black md:text-4xl lg:text-[48px]">
            What&apos;s in it for you?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black md:mt-6 md:text-lg">
            We invest in the people who invest in us.
          </p>
        </motion.div>

        <ul className="mx-auto mt-12 flex flex-wrap items-stretch lg:mt-16">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
