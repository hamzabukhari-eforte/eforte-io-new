"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 animate-pulse rounded-2xl bg-black/80" />
  ),
});

const YOUTUBE_URL = "https://www.youtube.com/watch?v=AxnIFqEakag";

export default function HealthcareStoryVideoSection() {
  return (
    <section className="bg-default pb-20 text-white md:pb-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
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
    </section>
  );
}
