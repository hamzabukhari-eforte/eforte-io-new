"use client";

import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import ReactPlayer from "@/components/atoms/ReactPlayerClient";


const YOUTUBE_URL = "https://www.youtube.com/watch?v=AxnIFqEakag";

export default function AiQbricksVideoSection() {
  return (
    <section className="bg-white">
      <div className="rounded-b-[36px] bg-black pb-20 pt-4 text-white md:rounded-b-[42px] md:pb-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-5xl"
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
      </div>
    </section>
  );
}
