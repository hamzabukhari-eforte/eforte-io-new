/**
 * Shared responsive layout for Agentic Orchestration page (aligned with velocity-ai and agentic-orchestration-mobile.html).
 * Mobile-first: base = mobile, md/lg = tablet/desktop.
 */
export const section = {
  padding: "pt-16",
  paddingX: "px-4 sm:px-6 md:px-8 lg:px-10",
  container: "max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10",
} as const;

export const typography = {
  badge: "text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em]",
  sectionLabel:
    "text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink",
  sectionTitle: "text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight",
  sectionTitleLg: "text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight",
  lead: "text-base font-light leading-relaxed",
  cardTitle: "text-lg md:text-xl font-semibold",
  cardBody: "text-base text-white leading-relaxed",
} as const;
