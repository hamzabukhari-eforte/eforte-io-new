"use client";

import { useQuoteModal } from "@/components/providers/QuoteModalProvider";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface QuoteCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  onOpen?: () => void;
}

export default function QuoteCTA({
  children,
  className,
  onOpen,
  type = "button",
  ...props
}: QuoteCTAProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <button
      type={type}
      className={cn("cursor-pointer", className)}
      onClick={(event) => {
        props.onClick?.(event);
        if (event.defaultPrevented) return;
        onOpen?.();
        openQuoteModal();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
