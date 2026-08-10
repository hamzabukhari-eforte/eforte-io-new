"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import type { StudioProcessItem } from "./types";

type StudioProcessSectionProps = {
  items: StudioProcessItem[];
};

export default function StudioProcessSection({ items }: StudioProcessSectionProps) {
  return (
    <section className="bg-white pb-12 md:pb-20">
      <Container>
        <div className="space-y-16 md:space-y-20">
          {items.map((item, index) => {
            const imageFirst = item.imageSide === "left";

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.18 }}
                transition={{ duration: 0.5, delay: 0.04 * index }}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                <div className={imageFirst ? "md:order-1" : "md:order-2"}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 shadow-[0_24px_70px_rgba(10,10,26,0.12)]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-pink">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-default md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
                    {item.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
