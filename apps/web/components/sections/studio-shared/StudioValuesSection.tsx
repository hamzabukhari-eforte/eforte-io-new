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
    card: "bg-black text-white",
    title: "text-white",
    description: "text-white",
  },
  muted: {
    card: "bg-[#d7d7d7] text-black",
    title: "text-black",
    description: "text-black",
  },
  light: {
    card: "bg-white text-black border border-black/5",
    title: "text-black",
    description: "text-black",
  },
};

function ValueCard({
  item,
  index,
  iconPosition,
  titleClassName,
  descriptionClassName,
}: {
  item: StudioValueItem;
  index: number;
  iconPosition: "center" | "top-right";
  titleClassName?: string;
  descriptionClassName?: string;
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
        <h3
          className={cn(
            "text-2xl font-semibold leading-tight md:text-[28px]",
            styles.title,
            titleClassName
          )}
        >
          {item.title}
        </h3>
        <p
          className={cn(
            "mt-3 max-w-sm text-sm leading-relaxed md:text-base",
            styles.description,
            descriptionClassName
          )}
        >
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
  eyebrowClassName?: string;
  headingClassName?: string;
  cardTitleClassName?: string;
  cardDescriptionClassName?: string;
};

export default function StudioValuesSection({
  eyebrow,
  title,
  values,
  iconPosition = "center",
  className,
  eyebrowClassName,
  headingClassName,
  cardTitleClassName,
  cardDescriptionClassName,
}: StudioValuesSectionProps) {
  return (
    <section
      className={cn(
        "relative z-10 -mt-10 rounded-t-[12px] bg-[#f3f2f6] py-16",
        className
      )}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.22em] text-black",
              eyebrowClassName
            )}
          >
            {eyebrow}
          </p>
          <h2
            className={cn(
              "mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-[48px] lg:leading-[1.1]",
              headingClassName
            )}
          >
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
              titleClassName={cardTitleClassName}
              descriptionClassName={cardDescriptionClassName}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
