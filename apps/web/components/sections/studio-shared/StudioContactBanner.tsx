"use client";

import Image from "next/image";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import type { StudioContactBannerContent } from "./types";
import { motion } from "@/lib/replayMotion";

type StudioContactBannerProps = {
  content: StudioContactBannerContent;
  imageSrc?: string;
};

export default function StudioContactBanner({
  content,
  imageSrc = "/assets/images/velocity-ai/cube-3d.png",
}: StudioContactBannerProps) {
  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[12px] bg-black md:rounded-[12px]"
        >
          <div className="absolute inset-y-0 right-0 hidden w-[48%] md:block">
            <Image
              src={imageSrc}
              alt=""
              fill
              sizes="40vw"
              className="object-contain object-right opacity-90"
              aria-hidden
            />
          </div>

          <div className="relative grid items-center gap-8 px-8 py-10 md:grid-cols-[1fr_auto] md:gap-12 md:px-12 md:py-14">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold leading-snug text-white md:text-3xl">
                {content.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70 md:text-base">
                {content.description}
              </p>
            </div>

            <ContactCTA className="inline-flex h-10 shrink-0 items-center justify-center rounded-full leading-none bg-primary-pink px-8 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(211,40,122,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-pink/90">
              {content.ctaLabel}
            </ContactCTA>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
