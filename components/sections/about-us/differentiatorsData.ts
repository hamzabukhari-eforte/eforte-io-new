export interface DifferentiatorCard {
  id: number;
  title: string;
  description: string;
  iconName:
    | "grid"
    | "compass"
    | "layers"
    | "medal"
    | "flag"
    | "shield"
    | "lightning"
    | "cube"
    | "placeholder";
  accentColor: string;
  accentGlow: string;
}

export const differentiatorsCards: DifferentiatorCard[] = [
  {
    id: 1,
    title: "Staff Augmentation Excellence",
    description:
      "We embed highly skilled engineers directly into client teams, with a dynamic onboarding model built to ramp up fast without sacrificing quality.",
    iconName: "layers",
    accentColor: "#22C55E",
    accentGlow: "rgba(34, 197, 94, 0.4)",
  },
  {
    id: 2,
    title: "Full Focus, One Team, One Client",
    description:
      "Every Scrum team we assign works with complete focus on a single client relationship, avoiding the context switching that slows other outsourcing models down.",
    iconName: "compass",
    accentColor: "#F97316",
    accentGlow: "rgba(249, 115, 22, 0.4)",
  },
  {
    id: 3,
    title: "Top Talent, Low Attrition",
    description:
      "Our emphasis on professional development and a genuinely engaged culture keeps attrition low and institutional knowledge with your project.",
    iconName: "medal",
    accentColor: "#EAB308",
    accentGlow: "rgba(234, 179, 8, 0.4)",
  },
  {
    id: 4,
    title: "Nearshore & Global Delivery",
    description:
      "Our delivery centers are positioned for efficient time zone alignment with North American clients, without sacrificing access to global talent.",
    iconName: "flag",
    accentColor: "#0EA5E9",
    accentGlow: "rgba(14, 165, 233, 0.4)",
  },
  {
    id: 5,
    title: "AI Native Engineering",
    description:
      "Velocity AI, Agentic Orchestration, and the Foundational Data Layer are built into how we approach every engagement, not bolted on afterward.",
    iconName: "lightning",
    accentColor: "#A855F7",
    accentGlow: "rgba(168, 85, 247, 0.4)",
  },
  {
    id: 6,
    title: "Industry Expertise",
    description:
      "Deep experience across Finance, Insurance, Health & Wellbeing, Heavy Industry, Automobile, Hospitality, and BPO & Shared Services.",
    iconName: "shield",
    accentColor: "#A855F7",
    accentGlow: "rgba(168, 85, 247, 0.35)",
  },
  {
    id: 7,
    title: "Predictable Delivery",
    description:
      "Quality and exceptional business value drive every process we undertake, backed by transparent communication and consistent documentation.",
    iconName: "cube",
    accentColor: "#EA580C",
    accentGlow: "rgba(234, 88, 12, 0.4)",
  },
];
