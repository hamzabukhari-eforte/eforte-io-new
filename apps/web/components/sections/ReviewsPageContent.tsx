"use client";

import Container from "@/components/atoms/Container";
import { clientReviews, type ClientReview } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";
import {
  HiCode,
  HiCalendar,
  HiBriefcase,
  HiStar,
} from "react-icons/hi";

const EASE = [0.22, 1, 0.36, 1] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold text-white md:text-xl">{rating.toFixed(1)}</span>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const fill = Math.min(1, Math.max(0, rating - i));
          return (
            <span key={i} className="relative inline-flex h-5 w-5">
              <HiStar className="absolute inset-0 h-5 w-5 text-white/20" />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <HiStar className="h-5 w-5 text-[#F5C518]" />
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

function MetaRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-primary-pink/30 bg-primary-pink/10 text-primary-pink">
        {icon}
      </div>
      <div>
        <p className="text-[13px] text-white">{label}</p>
        <p className="mt-0.5 text-[16px] font-semibold text-primary-pink md:text-[17px]">
          {value}
        </p>
      </div>
    </div>
  );
}

function ReviewerAvatar({ review }: { review: ClientReview }) {
  const initials = review.author
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  if (review.avatarSrc) {
    return (
      <Image
        src={review.avatarSrc}
        alt={review.author}
        width={56}
        height={56}
        className="h-14 w-14 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary-pink/40 bg-primary-pink/15 text-sm font-semibold text-primary-pink">
      {initials}
    </div>
  );
}

function ReviewDetailBlock({
  review,
  index,
  isInView,
}: {
  review: ClientReview;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.article
      className={cn(
        "rounded-[16px] border border-white/10 bg-[#0A0A1A] p-6 md:p-8 lg:p-10",
        index > 0 && "mt-8 md:mt-10"
      )}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.08,
        ease: EASE,
      }}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        {/* Left — company + project meta */}
        <div>
          <h2 className="mb-4 text-[32px] font-semibold leading-tight text-white md:text-[36px]">
            {review.companyName}
          </h2>
          <p className="mb-8 text-[16px] leading-relaxed text-white md:text-[17px]">
            {review.description}
          </p>

          <div className="flex flex-col gap-5">
            <MetaRow
              icon={<HiCode className="h-5 w-5" />}
              label="Project Category"
              value={review.category}
            />
            <MetaRow
              icon={<HiCalendar className="h-5 w-5" />}
              label="Project Duration"
              value={review.duration}
            />
            <MetaRow
              icon={<HiBriefcase className="h-5 w-5" />}
              label={review.metaLabel}
              value={review.metaValue}
            />
          </div>
        </div>

        {/* Right — headline, rating, feedback, reviewer */}
        <div>
          <h3 className="mb-3 text-[24px] font-semibold leading-snug text-primary-pink md:text-[28px]">
            {review.comment}
          </h3>
          <div
            className="mb-6 h-1 w-24 rounded-full bg-primary-pink"
            aria-hidden
          />

          <div className="mb-8">
            <StarRating rating={review.rating} />
          </div>

          <div className="mb-8">
            <h4 className="mb-3 text-[18px] font-semibold text-white">
              Feedback Summary
            </h4>
            <p className="text-[16px] leading-relaxed text-white md:text-[17px]">
              {review.feedback}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[18px] font-semibold text-white">
              The Reviewer
            </h4>
            <div className="flex items-center gap-4">
              <ReviewerAvatar review={review} />
              <div>
                <p className="text-[14px] text-white">{review.designation}</p>
                <p className="mt-0.5 text-[17px] font-semibold text-white">
                  {review.author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ReviewsPageContent() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { amount: 0.05 });

  return (
    <main
      ref={ref}
      className="min-h-screen bg-default pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <Container>
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="mb-3 inline-block text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
            CLIENT REVIEWS
          </span>
          <h1 className="mb-5 text-[40px] font-medium leading-tight tracking-tight text-white md:text-[48px]">
            Satisfactory reviews of clients
          </h1>
          <p className="text-[18px] font-light leading-relaxed text-white">
            Real feedback from teams we partnered with — project details,
            ratings, and reviewer notes from the eForte client archive.
          </p>
        </motion.div>

        <div>
          {clientReviews.map((review, index) => (
            <ReviewDetailBlock
              key={review.id}
              review={review}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          className="mt-14 flex justify-center md:mt-16"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
        >
          <Link
            href="/"
            className="inline-flex h-10 cursor-pointer items-center justify-center rounded-full border border-primary-pink px-9 text-[15px] font-medium leading-none text-primary-pink transition-all duration-200 hover:bg-primary-pink hover:text-white"
          >
            Back to home
          </Link>
        </motion.div>
      </Container>
    </main>
  );
}
