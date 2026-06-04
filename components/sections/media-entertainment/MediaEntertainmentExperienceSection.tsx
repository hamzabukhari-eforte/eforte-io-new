"use client";

import { Hanken_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["200", "400"],
});

type StatItem = {
  id: string;
  main: string;
  accent: string;
  description: string;
};

const stats: StatItem[] = [
  {
    id: "years",
    main: "20",
    accent: "+",
    description:
      "years of experience working with some of the world's best known brands.",
  },
  {
    id: "professionals",
    main: "900",
    accent: "+",
    description:
      "highly qualified professionals and engineers of 10 expert AI-driven Studios.",
  },
  {
    id: "consumers",
    main: "Milli",
    accent: "ons",
    description:
      "of consumers enjoy digital experiences built by eForte everyday.",
  },
];

export default function MediaEntertainmentExperienceSection() {
  return (
    <section className="bg-default py-20 text-white md:py-28">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className={`text-center text-[38px] font-normal leading-[46px] text-white ${hankenGrotesk.className}`}
        >
          Our experience
        </motion.h2>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <p
                className={`w-fit bg-linear-to-r from-white from-5% via-[#6E8FE6] via-40% to-[#2A3AE0] bg-clip-text text-[88px] font-extralight leading-[110px] tracking-tight text-transparent lg:text-[132px] lg:leading-[158px] ${hankenGrotesk.className}`}
              >
                {stat.main}
                {stat.accent}
              </p>
              <div className="h-px w-full bg-white/30" />
              <p className="mt-6 max-w-xs text-[16px] font-light leading-[22px] text-white/90">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
