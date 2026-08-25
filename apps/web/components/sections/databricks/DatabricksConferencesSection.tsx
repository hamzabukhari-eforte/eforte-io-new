"use client";

import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { databricksConferences } from "@/data/databricks";
import ReactPlayer from "@/components/atoms/ReactPlayerClient";


export default function DatabricksConferencesSection() {
  return (
    <section className="bg-black pb-16 pt-6 text-white md:pb-24 md:pt-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 lg:grid-cols-[0.55fr_1fr] lg:items-start lg:gap-16"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
            {databricksConferences.eyebrow}
          </p>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-white/90 md:text-xl">
            {databricksConferences.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative mt-10 overflow-hidden rounded-[12px] md:mt-12 md:rounded-[12px]"
        >
          <div className="relative aspect-[16/9] w-full bg-[#12141B]">
            <ReactPlayer
              src={databricksConferences.youtubeUrl}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
              config={{
                youtube: {
                  rel: 0,
                },
              }}
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-linear-to-b from-black/70 via-black/20 to-transparent px-6 py-8 md:px-10 md:py-10">
              <h2 className="mx-auto max-w-3xl text-center text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-[36px]">
                {databricksConferences.eventTitle}
              </h2>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
