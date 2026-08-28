"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";
import type { StudioProcessItem } from "./types";

type StudioProcessSectionProps = {
  items: StudioProcessItem[];
  className?: string;
  imageFit?: "cover" | "contain";
  /** Solid black body text + 36px titles / 16px descriptions */
  solidTypography?: boolean;
};

export default function StudioProcessSection({
  items,
  className,
  imageFit = "cover",
  solidTypography = false,
}: StudioProcessSectionProps) {
  const sizedFrame = imageFit === "contain";

  return (
    <section className={cn("bg-white py-16", className)}>
      <Container>
        <div className="space-y-16">
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
                  {sizedFrame ? (
                    <div className="h-[380px] w-[608px] max-w-full overflow-hidden rounded-[12px] shadow-[0_24px_70px_rgba(10,10,26,0.12)]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        width={608}
                        height={380}
                        sizes="608px"
                        unoptimized
                        className="size-full object-fill"
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] bg-gray-100 shadow-[0_24px_70px_rgba(10,10,26,0.12)]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-pink">
                    {item.eyebrow}
                  </p>
                  <h3
                    className={cn(
                      "mt-3 font-semibold leading-tight",
                      solidTypography
                        ? "text-[36px] text-black"
                        : "text-2xl text-default md:text-4xl"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-5 max-w-xl leading-relaxed",
                      solidTypography
                        ? "text-[16px] text-black"
                        : "text-base leading-7 text-gray-600"
                    )}
                  >
                    {item.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "inline-flex h-[25px] items-center justify-center rounded-full leading-none border px-3 py-0 text-xs font-medium",
                          solidTypography
                            ? "border-black/15 text-black"
                            : "border-gray-200 text-gray-600"
                        )}
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
