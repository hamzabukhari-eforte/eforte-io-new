"use client";

import type { ReactNode } from "react";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ContactModalProvider from "@/components/providers/ContactModalProvider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ContactModalProvider>{children}</ContactModalProvider>
    </SmoothScrollProvider>
  );
}
