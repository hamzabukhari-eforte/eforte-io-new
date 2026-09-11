"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FormSuccessStateProps {
  title: string;
  description: string;
  className?: string;
  onDone?: () => void;
  doneLabel?: string;
  tone?: "light" | "dark";
}

export default function FormSuccessState({
  title,
  description,
  className,
  onDone,
  doneLabel = "Done",
  tone = "light",
}: FormSuccessStateProps) {
  const isDark = tone === "dark";
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
          className="absolute inset-0 rounded-full bg-emerald-500/10"
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
            className="text-emerald-500/40"
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
            className="text-emerald-500"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
          />
        </svg>
      </div>

      <motion.p
        role="heading"
        aria-level={2}
        className={cn(
          "mt-6 text-xl font-semibold sm:text-2xl",
          isDark ? "text-white" : "text-gray-900"
        )}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.55 }}
      >
        {title}
      </motion.p>
      <motion.p
        className={cn(
          "mt-2 max-w-md text-sm leading-relaxed sm:text-base",
          isDark ? "text-white/70" : "text-gray-600"
        )}
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
          className={cn(
            "mt-8 inline-flex h-10 cursor-pointer items-center justify-center rounded-full px-8 py-0 text-sm leading-none font-semibold transition-all duration-200",
            isDark
              ? "bg-gradient-to-r from-[#be185d] to-[#db2777] text-white hover:from-[#db2777] hover:to-[#be185d]"
              : "border-2 border-primary-pink bg-white text-primary-pink hover:bg-primary-pink hover:text-white"
          )}
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
