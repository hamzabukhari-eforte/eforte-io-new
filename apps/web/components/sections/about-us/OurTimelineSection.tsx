"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { timelineItems } from "./timelineData";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "swiper/css";

function TimelineCard({
  year,
  description,
  imageSrc,
  imageAlt,
}: {
  year: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) {
  const { isActive } = useSwiperSlide();

  return (
    <div className="relative w-full h-full rounded-[12px] overflow-hidden aspect-4/5 min-h-[320px] md:min-h-[400px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 280px, 320px"
      />
      {/* Full image overlay - all cards */}
      <div className="absolute inset-0 bg-black/20" aria-hidden />
      {/* Text block: no overlay when inactive; blue fading overlay when active or hovered */}
      <div
        className={`absolute inset-x-0 bottom-0 p-5 md:p-6 h-[25vh] flex flex-col justify-end transition-all duration-300 ${
          isActive
            ? "bg-linear-to-t from-[#1e3a8a] via-[#1e3a8a]/80 to-transparent"
            : "group-hover:bg-linear-to-t group-hover:from-[#1e3a8a] group-hover:via-[#1e3a8a]/80 group-hover:to-transparent"
        }`}
      >
        <span className="text-lg md:text-xl font-bold text-white">{year}</span>
        <p className="mt-1 text-sm md:text-base leading-snug text-white">
          {description}
        </p>
      </div>
    </div>
  );
}

const sortedItems = [...timelineItems].sort((a, b) => b.id - a.id);
const total = sortedItems.length;
const tripleItems = [...sortedItems, ...sortedItems, ...sortedItems];
const middleStart = total;

export default function OurTimelineSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const isTransitioning = useRef(false);

  const goToNext = () => {
    const swiper = swiperRef.current;
    if (!swiper || isTransitioning.current) return;
    const currentIndex = swiper.activeIndex;
    swiper.slideTo(currentIndex + 1, 300);
  };

  const goToPrev = () => {
    const swiper = swiperRef.current;
    if (!swiper || isTransitioning.current) return;
    const currentIndex = swiper.activeIndex;
    swiper.slideTo(currentIndex - 1, 300);
  };

  const goToSlide = (index: number) => {
    const ref = swiperRef.current;
    if (!ref || isTransitioning.current) return;
    const swiper = "slideTo" in ref ? ref : (ref as { swiper: SwiperType }).swiper;
    if (swiper?.slideTo) swiper.slideTo(index, 300);
  };

  const handleTransitionEnd = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    isTransitioning.current = false;
    const idx = swiper.activeIndex;
    if (idx >= total * 2) {
      swiper.slideTo(idx - total, 0);
    } else if (idx < total) {
      swiper.slideTo(idx + total, 0);
    }
  };

  const handleTransitionStart = () => {
    isTransitioning.current = true;
  };

  return (
    <section className="w-full bg-default pt-16 pb-0">
      {/* <Container> */}
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10 md:mb-14">
          Our Timeline
        </h2>

        <div className="relative overflow-x-hidden w-full">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            initialSlide={middleStart}
            onSlideChangeTransitionStart={handleTransitionStart}
            onSlideChangeTransitionEnd={handleTransitionEnd}
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides
            slidesPerGroup={1}
            slideToClickedSlide
            className="w-full"
            breakpoints={{
              640: { spaceBetween: 24 },
              1024: { spaceBetween: 28 },
              1280: { spaceBetween: 32 },
              1536: { spaceBetween: 36 },
              1920: { spaceBetween: 40 },
            }}
          >
            {tripleItems.map((item, index) => (
              <SwiperSlide
                key={`${item.id}-${index}`}
                className="group w-[280px]! md:w-[320px]! lg:w-[360px]! py-20 transition-transform duration-300 [&.swiper-slide-active]:scale-110 [&.swiper-slide-active]:z-10"
              >
                <div
                  className="w-full h-full cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      goToSlide(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to timeline: ${item.year}`}
                >
                  <TimelineCard
                    year={item.year}
                    description={item.description}
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center gap-4 mt-8 md:mt-10">
          <button
            type="button"
            onClick={goToPrev}
            className="flex h-10 w-12 cursor-pointer items-center justify-center rounded-full leading-none border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Go to newer year"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="flex h-10 w-12 cursor-pointer items-center justify-center rounded-full leading-none border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Go to older year"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>
        </div>
      {/* </Container> */}
    </section>
  );
}
