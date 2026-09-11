"use client";

import type { ReactNode } from "react";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ContactModalProvider from "@/components/providers/ContactModalProvider";
import CallbackModalProvider from "@/components/providers/CallbackModalProvider";
import QuoteModalProvider from "@/components/providers/QuoteModalProvider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <CallbackModalProvider>
        <ContactModalProvider>
          <QuoteModalProvider>{children}</QuoteModalProvider>
        </ContactModalProvider>
      </CallbackModalProvider>
    </SmoothScrollProvider>
  );
}
