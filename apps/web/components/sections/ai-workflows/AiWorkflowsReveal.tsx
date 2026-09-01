"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { cn } from "@/lib/utils";
import styles from "./aiWorkflows.module.css";

type RevealDirection = "top" | "bottom" | "left" | "right";
type RevealDuration = 200 | 300 | 400 | 500 | 600;

const directionClass: Record<RevealDirection, string> = {
  top: styles.revealTop,
  bottom: styles.revealBottom,
  left: styles.revealLeft,
  right: styles.revealRight,
};

const durationClass: Record<RevealDuration, string> = {
  200: styles.duration200,
  300: styles.duration300,
  400: styles.duration400,
  500: styles.duration500,
  600: styles.duration600,
};

const mobileDurationClass: Partial<Record<RevealDuration, string>> = {
  300: styles.mobileDuration300,
  400: styles.mobileDuration400,
  500: styles.mobileDuration500,
};

export default function AiWorkflowsReveal({
  children,
  className,
  direction = "bottom",
  duration = 400,
  mobileDuration,
  as: Tag = "div",
  once = false,
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  duration?: RevealDuration;
  mobileDuration?: RevealDuration;
  as?: ElementType;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInViewReplay(ref, {
    margin: "0px",
    amount: 0.25,
    once,
  });

  return (
    <Tag
      ref={ref}
      className={cn(
        styles.reveal,
        directionClass[direction],
        durationClass[duration],
        mobileDuration != null && mobileDurationClass[mobileDuration],
        inView && styles.revealActive,
        className
      )}
    >
      {children}
    </Tag>
  );
}
