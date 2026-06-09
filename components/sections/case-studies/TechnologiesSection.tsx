"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import TechCard from "./TechCard";

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
    <Container>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={fadeUp}
        className="relative w-full py-12 px-12 lg:px-20 bg-[#05060f] overflow-hidden"
      >
        <motion.div
          variants={scaleIn}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at top left, ${glow} 0%, transparent 65%)`,
            opacity: 0.7,
            filter: "blur(50px)",
          }}
        />

        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            className="flex items-center flex-col justify-center w-full text-2xl lg:text-4xl font-semibold text-white pb-8"
          >
            <span className="text-sm flex items-center gap-2 text-gray-300 mb-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              Case Study
            </span>
            Technologies Used
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
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
                  <h2 className="text-lg font-semibold text-white tracking-wide">
                    {section.title}
                  </h2>

                  <motion.div
                    variants={stagger}
                    className="flex flex-wrap gap-4"
                  >
                    {section.items.map((item) => (
                      <motion.button
                        key={item.name}
                        variants={scaleIn}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowCard(item.name)}
                        className="
                          group relative flex items-center justify-center
                          w-14 h-14 rounded-xl
                          bg-white/5 border border-white/10
                          backdrop-blur-md
                          transition-all duration-300
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
        </div>
      </motion.section>
    </Container>
  );
}

