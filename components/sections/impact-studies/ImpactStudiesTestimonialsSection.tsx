"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { impactStudiesTestimonials } from "@/data/impactStudiesHomepage";
import { useInViewReplay } from "@/lib/useInViewReplay";
import styles from "./impact-studies.module.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function ImpactStudiesTestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(
    null
  );
  const inView = useInViewReplay(ref, { margin: "-80px", amount: 0.25 });

  return (
    <section
      ref={ref}
      className={styles.testimonials}
      aria-label="Client testimonials"
    >
      <motion.div
        className={styles.testimonialsInner}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {paginationEl ? (
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={500}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: paginationEl,
              clickable: true,
            }}
          >
            {impactStudiesTestimonials.map((item) => (
              <SwiperSlide key={item.id} className={styles.testimonialSlide}>
                <p className={styles.testimonialCompany}>{item.company}</p>
                <p className={styles.testimonialQuote}>
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className={styles.testimonialAttr}>{item.attribution}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div ref={setPaginationEl} className={styles.testimonialsPagination} />
      </motion.div>
    </section>
  );
}
