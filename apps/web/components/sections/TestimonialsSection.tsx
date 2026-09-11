"use client";

import Container from "@/components/atoms/Container";
import {
  getTestimonialSlides,
  testimonials,
  type Testimonial,
} from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const EASE = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 3000;

function TestimonialCard({
  item,
  index,
}: {
  item: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center self-start text-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.08 + index * 0.08, ease: EASE }}
    >
      <h3 className="mb-4 text-2xl font-bold text-white md:mb-6 md:text-3xl">
        {item.companyName}
      </h3>
      <p className="mb-6 flex-1 text-base font-light leading-relaxed text-white md:mb-8 md:text-[17px]">
        {item.testimonial}
      </p>
      <div className="text-[15px] text-white">
        <span className="font-bold">{item.author}</span>
        <span className="mx-2">|</span>
        <span>{item.title}</span>
        {item.website ? (
          <>
            <span className="mx-2">-</span>
            <span>{item.website}</span>
          </>
        ) : null}
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);
  const slides = getTestimonialSlides(testimonials);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number, dir?: number) => {
      setDirection(dir ?? (index > active ? 1 : -1));
      setActive((index + slides.length) % slides.length);
    },
    [active, slides.length]
  );

  const goPrev = () => goTo(active - 1, -1);
  const goNext = () => goTo(active + 1, 1);

  useEffect(() => {
    if (paused || !isInView || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setActive((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, isInView, slides.length, active]);

  return (
    <section ref={ref} className="w-full bg-default">
      <Container>
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="mb-3 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
              WHAT OUR CLIENTS SAY
            </span>
          </motion.div>

          <motion.h2
            className="text-[48px] font-medium leading-tight tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            Trusted by Industry Leaders
          </motion.h2>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative min-h-[320px] md:min-h-[280px]">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -48 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12"
                >
                  {slides[active]?.map((item, index) => (
                    <TestimonialCard key={item.id} item={item} index={index} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Side chevrons — vertically centered on the cards */}
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonials"
              className="absolute top-1/2 left-0 z-10 hidden h-11 w-11 -translate-x-full -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/50 transition-colors hover:border-primary-pink hover:text-primary-pink lg:flex"
            >
              <HiChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonials"
              className="absolute top-1/2 right-0 z-10 hidden h-11 w-11 translate-x-full -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/50 transition-colors hover:border-primary-pink hover:text-primary-pink lg:flex"
            >
              <HiChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-6 sm:mt-12">
            <div className="flex items-center gap-5">
              {/* Mobile chevrons */}
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonials"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/50 transition-colors hover:border-primary-pink hover:text-primary-pink lg:hidden"
              >
                <HiChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === active}
                    onClick={() => goTo(i)}
                    className={cn(
                      "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                      i === active
                        ? "w-7 bg-primary-pink"
                        : "w-1.5 bg-white/25 hover:bg-white/45"
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonials"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/50 transition-colors hover:border-primary-pink hover:text-primary-pink lg:hidden"
              >
                <HiChevronRight className="h-5 w-5" />
              </button>
            </div>

            <Link
              href="/reviews"
              className="inline-flex h-10 cursor-pointer items-center justify-center rounded-full border border-primary-pink px-9 text-[15px] font-medium leading-none text-primary-pink transition-all duration-200 hover:bg-primary-pink hover:text-white"
            >
              View all
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
