"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

interface IntroSectionProps {
  title: string;
  description: string;
  image: string;
  link: string;
  theme: number[];
}

export default function IntroSection({
  title,
  description,
  image,
  link,
  theme,
}: IntroSectionProps) {
  const glowColor = `rgb(${theme[0]}, ${theme[1]}, ${theme[2]})`;

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" as const, delay: 0.3 },
    },
  };

  // `link` is kept for parity with the reference implementation.
  void link;

  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 75%)`,
          opacity: 0.45,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px]"
        aria-hidden
      />

      <Container className="relative z-10 flex h-[800px] flex-col justify-between pt-20">
        <motion.div
          className="flex flex-col items-center gap-4 px-4 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="text-center text-5xl font-semibold">{title}</h1>
          <p className="max-w-3xl text-center text-lg text-white/80">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="relative top-1 z-20 w-full flex-1 items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="relative bg-no-repeat object-contain"
          />
        </motion.div>
      </Container>
    </section>
  );
}
