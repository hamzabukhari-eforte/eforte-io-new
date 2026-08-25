"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";
import type { StudioValueItem } from "./types";

const cardStyles: Record<
  StudioValueItem["variant"],
  { card: string; title: string; description: string }
> = {
  dark: {
    card: "bg-default text-white",
    title: "text-white",
    description: "text-white/75",
  },
  muted: {
    card: "bg-[#d7d7d7] text-default",
    title: "text-default",
    description: "text-default/75",
  },
  light: {
    card: "bg-white text-default border border-black/5",
    title: "text-default",
    description: "text-default/70",
  },
};

function ValueCard({
  item,
  index,
  iconPosition,
}: {
  item: StudioValueItem;
  index: number;
  iconPosition: "center" | "top-right";
}) {
  const styles = cardStyles[item.variant];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={cn(
        "flex min-h-[380px] flex-col justify-between rounded-[12px] p-8 md:min-h-[430px] md:p-10",
        styles.card
      )}
    >
      <div
        className={cn(
          "flex flex-1",
          iconPosition === "top-right"
            ? "items-start justify-end"
            : "items-center justify-center px-2 pt-4 md:pt-8"
        )}
      >
        <Image
          src={item.icon}
          alt=""
          width={245}
          height={186}
          className="h-28 w-auto max-w-full object-contain md:h-36"
          aria-hidden
        />
      </div>

      <div>
        <h3 className={cn("text-2xl font-semibold md:text-[28px]", styles.title)}>
          {item.title}
        </h3>
        <p className={cn("mt-3 max-w-sm text-sm leading-6 md:text-base", styles.description)}>
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

type StudioValuesSectionProps = {
  eyebrow: string;
  title: string;
  values: StudioValueItem[];
  iconPosition?: "center" | "top-right";
  className?: string;
};

export default function StudioValuesSection({
  eyebrow,
  title,
  values,
  iconPosition = "center",
  className,
}: StudioValuesSectionProps) {
  return (
    <section className="relative z-10 -mt-10 rounded-t-[12px] bg-[#f3f2f6] py-16 md:py-24">
      <Container className={className}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-default">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-default sm:text-4xl lg:text-[48px] lg:leading-[1.1]">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {values.map((item, index) => (
            <ValueCard
              key={item.id}
              item={item}
              index={index}
              iconPosition={iconPosition}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
