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
    <Container>
      <div className="relative w-full h-[800px] pt-20 flex flex-col justify-between bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 75%)`,
            opacity: 0.45,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none z-0" />

        <motion.div
          className="relative z-10 flex flex-col items-center gap-4 px-12 lg:px-16"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="text-5xl font-semibold text-center">{title}</h1>
          <p className="text-lg text-white/80 max-w-3xl text-center">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="relative z-20 w-full flex-1 items-center justify-center top-1"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="relative object-contain bg-no-repeat"
          />
        </motion.div>
      </div>
    </Container>
  );
}

