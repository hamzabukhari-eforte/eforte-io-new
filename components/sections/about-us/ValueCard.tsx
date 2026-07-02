"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ValueIconName, ValueItem } from "./valuesData";

const valueImageMap: Record<ValueIconName, string> = {
  impact: "/assets/images/about/drive.svg",
  relationships: "/assets/images/about/hearth.svg",
  standards: "/assets/images/about/check.svg",
  team: "/assets/images/about/handshake.svg",
  grow: "/assets/images/about/cup.svg",
  determination: "/assets/images/about/hand.svg",
  action: "/assets/images/about/oriented.svg",
  deliver: "/assets/images/about/magic.svg",
};

const imageSlotClass =
  "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-48 lg:h-48 shrink-0 flex items-center justify-center overflow-hidden";

function ValueImage({ name }: { name: ValueIconName }) {
  const src = valueImageMap[name];
  return (
    <div className={imageSlotClass}>
      <Image
        src={src}
        alt=""
        width={100}
        height={100}
        className="w-80 h-full object-contain"
        aria-hidden
      />
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: i * 0.08,
    },
  }),
};

export default function ValueCard({
  item,
  index,
}: {
  item: ValueItem;
  index: number;
}) {
  return (
    <motion.div
      className="relative flex min-h-48 items-start gap-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-40px", amount: 0.15 }}
      variants={cardVariants}
      custom={index}
    >
      <div className="shrink-0 -mt-4 pt-0.5 md:-mt-5">
        <ValueImage name={item.iconName} />
      </div>
      <div className="min-w-0 flex-1 -ml-6 py-3 pl-8 pr-4 sm:-ml-8 md:-ml-28 md:py-20 md:pl-10 md:pr-5">
        {item.titleLine1 != null && (
          <p className="bold text-lg text-white mb-0.5 md:text-xl lg:text-2xl xl:text-3xl">
            {item.titleLine1}
          </p>
        )}
        <h3 className="bold mb-2 text-lg text-white md:text-xl lg:text-2xl xl:text-3xl">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-desc md:text-base">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
