"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Container from "@/components/atoms/Container";
import {
  bentoLayouts,
  galleryCategories,
  type BentoColumn,
  type BentoImage,
  type GalleryCategory,
} from "@/data/careersGallery";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function BentoImageTile({
  image,
  flexRatio,
  index,
}: {
  image: BentoImage;
  flexRatio: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease }}
      style={{ flex: `${flexRatio} 1 0%` }}
      className="relative min-h-[180px] w-full overflow-hidden rounded-[12px] sm:min-h-[220px] md:min-h-0"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover"
      />
    </motion.div>
  );
}

function BentoColumnStack({
  column,
  columnIndex,
}: {
  column: BentoColumn;
  columnIndex: number;
}) {
  return (
    <div
      style={{ flex: `${column.width} 1 0%` }}
      className="flex min-h-0 w-full min-w-0 flex-col gap-4 md:h-full md:gap-4"
    >
      {column.images.map((image, imageIndex) => (
        <BentoImageTile
          key={`${image.id}-${columnIndex}-${imageIndex}`}
          image={image}
          flexRatio={column.heights[imageIndex]}
          index={columnIndex * 2 + imageIndex}
        />
      ))}
    </div>
  );
}

export default function CareersPhotoGallerySection() {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("great-place-to-work");
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInViewReplay(introRef, {
    margin: "-60px",
    amount: 0.15,
  });

  const layout = bentoLayouts[activeCategory];

  return (
    <section className="relative z-10 -mt-6 rounded-t-[12px] bg-white pb-20 pt-14 md:pb-28 md:pt-20">
      <Container>
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 24 }}
          animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease }}
          className="mb-8 text-center md:mb-10"
        >
          <h2 className="text-3xl font-semibold text-default md:text-4xl lg:text-[42px]">
            Life at eForte
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
            A glimpse into how our team works, learns, and celebrates together.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-2 md:mb-12 md:gap-3">
          {galleryCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "h-10 rounded-full border px-4 py-2 text-sm font-medium transition-all md:px-5",
                  isActive
                    ? "border-[#3b82f6] bg-[#3b82f6] text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900"
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease }}
            className="flex flex-col gap-4 md:h-[480px] md:flex-row md:gap-4 lg:h-[520px]"
          >
            {layout.columns.map((column, columnIndex) => (
              <BentoColumnStack
                key={`${activeCategory}-col-${columnIndex}`}
                column={column}
                columnIndex={columnIndex}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
