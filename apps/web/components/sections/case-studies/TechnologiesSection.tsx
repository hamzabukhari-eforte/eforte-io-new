"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/atoms/Container";
import TechCard from "./TechCard";
import { motion } from "@/lib/replayMotion";

type TechItem = {
  name: string;
  info: string;
  image: string;
};

interface TechProps {
  theme: number[];
  frontend: TechItem[];
  backend: TechItem[];
  database: TechItem[];
  others: TechItem[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function TechnologiesSection({
  theme,
  frontend,
  backend,
  database,
  others,
}: TechProps) {
  const [showCard, setShowCard] = useState(frontend[0].name);

  const allTech = [...frontend, ...backend, ...database, ...others];
  const selectedTech = allTech.find((item) => item.name === showCard);

  const glow = `rgba(${theme[0]}, ${theme[1]}, ${theme[2]}, 0.5)`;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={fadeUp}
      className="relative w-full overflow-hidden bg-[#05060f]"
    >
      <motion.div
        variants={scaleIn}
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at top left, ${glow} 0%, transparent 65%)`,
          opacity: 0.7,
          filter: "blur(50px)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 px-6 pb-24 pt-12 sm:px-8 md:px-12 lg:px-16 lg:pb-28 xl:px-20">
        <motion.div
          variants={fadeUp}
          className="flex w-full flex-col items-center justify-center pb-8 text-2xl font-semibold text-white lg:text-4xl"
        >
          <span className="mb-2 flex items-center gap-2 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Case Study
          </span>
          Technologies Used
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={stagger} className="flex flex-col gap-8">
            {[
              { title: "Front End", items: frontend },
              { title: "Back End", items: backend },
              { title: "Database", items: database },
              { title: "Others", items: others },
            ].map((section) => (
              <motion.div
                key={section.title}
                variants={fadeUp}
                className="flex flex-col gap-4"
              >
                <h2 className="text-lg font-semibold tracking-wide text-white">
                  {section.title}
                </h2>

                <motion.div variants={stagger} className="flex flex-wrap gap-4">
                  {section.items.map((item) => (
                    <motion.button
                      key={item.name}
                      variants={scaleIn}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowCard(item.name)}
                      className="
                          group relative flex h-14 w-14 items-center justify-center
                          rounded-[12px] border border-white/10 bg-white/5
                          backdrop-blur-md transition-all duration-300
                          hover:border-white/30
                        "
                      style={{
                        boxShadow:
                          showCard === item.name
                            ? `0 0 20px ${glow}`
                            : undefined,
                      }}
                    >
                      <Image
                        src={
                          item.image ||
                          "/assets/images/case-study/reactIcon.svg"
                        }
                        alt={item.name}
                        width={28}
                        height={28}
                        className="opacity-80 group-hover:opacity-100"
                      />
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            key={showCard}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center"
          >
            {selectedTech && (
              <TechCard
                title={selectedTech.name}
                image={selectedTech.image}
                info={selectedTech.info}
              />
            )}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
