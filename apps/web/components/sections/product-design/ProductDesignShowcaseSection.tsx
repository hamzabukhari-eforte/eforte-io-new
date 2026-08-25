"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Container from "@/components/atoms/Container";
import { productDesignShowcase } from "@/data/productDesign";
import { cn } from "@/lib/utils";
import "swiper/css";

const AUTOPLAY_INTERVAL_MS = 4500;

function SuccessStoryCard({
  story,
}: {
  story: (typeof productDesignShowcase)[number];
}) {
  return (
    <article
      className="grid h-full overflow-hidden rounded-[28px] text-white lg:grid-cols-[1.05fr_0.95fr]"
      style={{ background: story.background }}
    >
      <div className="flex flex-col justify-between gap-6 p-6 md:gap-7 md:p-8 lg:p-10">
        <div>
          <p className="text-2xl font-semibold tracking-tight md:text-[28px]">
            {story.brand}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight md:mt-4 md:text-3xl lg:text-[34px] lg:leading-[1.15]">
            {story.category}
          </h3>
          <div className="mt-4 space-y-3 text-sm leading-7 text-white/85 md:mt-5 md:text-base">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <Link
          href={story.href}
          className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-default transition-colors hover:bg-white/90"
        >
          Learn more
        </Link>
      </div>

      <div className="flex min-h-[220px] w-full pr-[20px] lg:min-h-0">
        <div className="relative min-h-[220px] w-full overflow-hidden lg:min-h-full">
          <Image
            src={story.image}
            alt={story.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </article>
  );
}

export default function ProductDesignShowcaseSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      const swiper = swiperRef.current;
      if (!swiper || swiper.destroyed) return;

      const nextIndex = (swiper.activeIndex + 1) % productDesignShowcase.length;
      swiper.slideTo(nextIndex);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [activeIndex]);

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <Container>
        <h2 className="text-center text-3xl font-semibold text-default sm:text-4xl lg:text-[48px] lg:leading-[1.1]">
          Our success stories
        </h2>

        <div className="mt-10 md:mt-14">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            spaceBetween={20}
            slidesPerView={1.04}
            breakpoints={{
              768: { slidesPerView: 1.08, spaceBetween: 24 },
              1024: { slidesPerView: 1.12, spaceBetween: 28 },
              1280: { slidesPerView: 1.15, spaceBetween: 32 },
            }}
            className="overflow-visible! [&_.swiper-wrapper]:items-stretch"
          >
            {productDesignShowcase.map((story) => (
              <SwiperSlide key={story.id} className="h-auto!">
                <SuccessStoryCard story={story} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 md:mt-10">
          {productDesignShowcase.map((story, index) => (
            <button
              key={story.id}
              type="button"
              aria-label={`Go to success story ${index + 1}`}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                activeIndex === index ? "bg-default" : "bg-default/20"
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
