"use client";

import type { ReactNode } from "react";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ContactModalProvider from "@/components/providers/ContactModalProvider";
import QuoteModalProvider from "@/components/providers/QuoteModalProvider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ContactModalProvider>
        <QuoteModalProvider>{children}</QuoteModalProvider>
      </ContactModalProvider>
    </SmoothScrollProvider>
  );
}
