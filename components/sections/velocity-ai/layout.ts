/**
 * Shared responsive layout for Velocity AI page (aligned with velocityAI-mobile.html).
 * Mobile-first: base = mobile, md/lg = tablet/desktop.
 */
export const section = {
  /** Section vertical + horizontal padding */
  padding: "py-16 md:py-24 lg:py-32",
  /** Horizontal padding only (use with section.padding for full control) */
  paddingX: "px-4 sm:px-6 md:px-8 lg:px-10",
  /** Section + container: use as base class for section content wrapper */
  container: "max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10",
} as const;

export const typography = {
  /** Small badge/label (e.g. "Core Metrics", "5 Key Components") */
  badge: "text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em]",
  /** Section title - mobile to desktop */
  sectionTitle: "text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight",
  /** Section title - larger variant (hero, engineering) */
  sectionTitleLg: "text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight",
  /** Lead/body under section title */
  lead: "text-sm md:text-base lg:text-[17px] font-light leading-relaxed",
  /** Card title */
  cardTitle: "text-lg md:text-xl font-semibold",
  /** Card body */
  cardBody: "text-sm md:text-[15px] text-gray-400 leading-relaxed",
} as const;
