"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import Lenis from "lenis";

type LenisControlContextValue = {
  stop: () => void;
  start: () => void;
  scrollTo: (
    target: string | HTMLElement | number,
    options?: { offset?: number; duration?: number }
  ) => void;
};

const LenisControlContext = createContext<LenisControlContextValue | null>(null);

export function useLenisControl() {
  return useContext(LenisControlContext);
}

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const stop = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  const start = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  const scrollTo = useCallback(
    (
      target: string | HTMLElement | number,
      options?: { offset?: number; duration?: number }
    ) => {
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(target, options);
        return;
      }

      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
        return;
      }

      const element =
        typeof target === "string"
          ? document.querySelector(target)
          : target;
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    []
  );

  return (
    <LenisControlContext.Provider value={{ stop, start, scrollTo }}>
      {children}
    </LenisControlContext.Provider>
  );
}
