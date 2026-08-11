"use client";

import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { cyberStudioVideo } from "@/data/capabilities/cybersecurity";
import ReactPlayer from "@/components/atoms/ReactPlayerClient";


export default function CyberStudioVideoSection() {
  return (
    <section className="bg-white">
      <div className="mx-[14px] rounded-t-[36px] bg-black py-16 text-white md:rounded-t-[48px] md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
              {cyberStudioVideo.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              {cyberStudioVideo.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mx-auto mt-10 max-w-5xl md:mt-12"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <ReactPlayer
                src={cyberStudioVideo.youtubeUrl}
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
