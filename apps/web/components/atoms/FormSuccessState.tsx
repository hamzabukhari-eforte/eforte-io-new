"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FormSuccessStateProps {
  title: string;
  description: string;
  className?: string;
  onDone?: () => void;
  doneLabel?: string;
}

export default function FormSuccessState({
  title,
  description,
  className,
  onDone,
  doneLabel = "Done",
}: FormSuccessStateProps) {
  return (
    <motion.div
      className={cn(
        "mt-8 flex flex-col items-center px-2 py-6 text-center sm:mt-10 sm:py-8",
        className
      )}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
        <motion.span
          className="absolute inset-0 rounded-full bg-primary-pink/10"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <svg
          viewBox="0 0 56 56"
          className="relative h-20 w-20 sm:h-24 sm:w-24"
          aria-hidden="true"
        >
          <motion.circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-primary-pink/35"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          />
          <motion.path
            d="M16.5 29.5 L24.5 37 L40 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary-pink"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
          />
        </svg>
      </div>

      <motion.p
        role="heading"
        aria-level={2}
        className="mt-6 text-xl font-semibold text-gray-900 sm:text-2xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.55 }}
      >
        {title}
      </motion.p>
      <motion.p
        className="mt-2 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.65 }}
      >
        {description}
      </motion.p>

      {onDone ? (
        <motion.button
          type="button"
          onClick={onDone}
          className="mt-8 cursor-pointer inline-flex items-center justify-center h-10 rounded-full leading-none border-2 border-primary-pink bg-white px-8 py-0 text-sm font-semibold text-primary-pink transition-all duration-200 hover:bg-primary-pink hover:text-white"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.75 }}
        >
          {doneLabel}
        </motion.button>
      ) : null}
    </motion.div>
  );
}
