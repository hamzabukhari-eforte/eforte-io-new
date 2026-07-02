"use client";

import { useContactModal } from "@/components/providers/ContactModalProvider";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ContactCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  onOpen?: () => void;
}

export default function ContactCTA({
  children,
  className,
  onOpen,
  type = "button",
  ...props
}: ContactCTAProps) {
  const { openContactModal } = useContactModal();

  return (
    <button
      type={type}
      className={cn("cursor-pointer", className)}
      onClick={(event) => {
        props.onClick?.(event);
        if (event.defaultPrevented) return;
        onOpen?.();
        openContactModal();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
