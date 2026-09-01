"use client";

import Container from "@/components/atoms/Container";
import ReactPlayer from "@/components/atoms/ReactPlayerClient";
import { motion } from "@/lib/replayMotion";


const YOUTUBE_URL = "https://www.youtube.com/watch?v=AxnIFqEakag";

export default function EmbeddedEngineeringStudioVideoSection() {
  return (
    <section className="bg-white py-20 text-default md:pt-28">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[14px] font-normal uppercase leading-[17px] tracking-[0.2em] text-default/70"
        >
          Embedded Engineering Studio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-4 max-w-3xl text-center text-[32px] font-normal leading-[40px] text-default md:text-[38px] md:leading-[46px]"
        >
          eForte&apos;s embedded engineering leaders take center stage at Embedded
          World North America
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mt-12 max-w-5xl md:mt-16"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-[12px] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
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
