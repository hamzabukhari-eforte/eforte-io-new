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
    title: "Partnerships",
    description:
      "We're partners with, and collaborate closely with, Databricks, Snowflake, GCP, Azure, AWS and others.",
    iconName: "grid",
    accentColor: "#A855F7",
    accentGlow: "rgba(168, 85, 247, 0.4)",
  },
  {
    id: 2,
    title: "Modern Approach",
    description:
      "We offer our clients creativity, innovation and engineering executed with tried and tested methodologies.",
    iconName: "compass",
    accentColor: "#F97316",
    accentGlow: "rgba(249, 115, 22, 0.4)",
  },
  {
    id: 3,
    title: "Scalability",
    description:
      "We help our clients ramp up fast. With our dynamic onboarding model we have the processes to onboard highly educated IT professionals at speed.",
    iconName: "layers",
    accentColor: "#22C55E",
    accentGlow: "rgba(34, 197, 94, 0.4)",
  },
  {
    id: 4,
    title: "Top Talent",
    description:
      "Fast-growth, and emphasis on professional development mean very low attrition rates.",
    iconName: "medal",
    accentColor: "#EAB308",
    accentGlow: "rgba(234, 179, 8, 0.4)",
  },
  {
    id: 5,
    title: "Nearshore",
    description:
      "Our USA and South America locations ensure time zone alignment for efficient execution.",
    iconName: "flag",
    accentColor: "#0EA5E9",
    accentGlow: "rgba(14, 165, 233, 0.4)",
  },
  {
    id: 6,
    title: "Industry Expertise",
    description:
      "Deep experience in financial services, healthcare, insurance, retail, education.",
    iconName: "shield",
    accentColor: "#A855F7",
    accentGlow: "rgba(168, 85, 247, 0.35)",
  },
  {
    id: 7,
    title: "Innovation",
    description:
      "Innovation, continuous growth and optimization are key parts of our DNA.",
    iconName: "lightning",
    accentColor: "#EAB308",
    accentGlow: "rgba(234, 179, 8, 0.4)",
  },
  {
    id: 8,
    title: "Predictable Delivery",
    description:
      "Quality and exceptional business value drive every process we undertake.",
    iconName: "cube",
    accentColor: "#EA580C",
    accentGlow: "rgba(234, 88, 12, 0.4)",
  },
];
