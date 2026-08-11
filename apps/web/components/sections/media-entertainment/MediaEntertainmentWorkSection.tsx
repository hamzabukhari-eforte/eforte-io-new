"use client";

import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import ReactPlayer from "@/components/atoms/ReactPlayerClient";


const YOUTUBE_URL = "https://www.youtube.com/watch?v=AxnIFqEakag";

export default function MediaEntertainmentWorkSection() {
  return (
    <section className="bg-default py-16 text-white md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold leading-tight text-white md:text-4xl"
          >
            Our work in action
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="max-w-xl text-[15px] leading-relaxed text-white/60 md:text-base"
          >
            eForte powered the 2025 US Open Pickleball Championships, the world&apos;s
            biggest pickleball event, drawing 50,000+ fans and live coverage on
            streaming and national TV. Our technology was key, delivering
            real-time &ldquo;on-court view&rdquo; experiences for fans and a platform that
            flawlessly managed everything from court assignments to medal
            ceremonies.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <ReactPlayer
              src={YOUTUBE_URL}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
              config={{
                youtube: {
                  rel: 0,
                },
              }}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
