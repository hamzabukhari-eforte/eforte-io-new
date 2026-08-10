export type ValueIconName =
  | "impact"
  | "relationships"
  | "standards"
  | "team"
  | "grow"
  | "determination"
  | "action"
  | "deliver";

export interface ValueItem {
  id: number;
  /** Optional small line above the main title (e.g. "Seek & Measure") */
  titleLine1?: string;
  /** Main title */
  title: string;
  description: string;
  iconName: ValueIconName;
}

export const values: ValueItem[] = [
  {
    id: 1,
    title: "Client First",
    description:
      "Every decision we make starts with what creates the most value for the client we're serving.",
    iconName: "impact",
  },
  {
    id: 2,
    title: "Dependable and Trustworthy",
    description:
      "We build relationships on consistency, transparency, and follow through, engagement after engagement.",
    iconName: "relationships",
  },
  {
    id: 3,
    title: "Integrity in Everything",
    description:
      "Our commitment to ethical conduct and honest communication has earned the long term trust of our partners.",
    iconName: "standards",
  },
  {
    id: 4,
    title: "Full Focus, One Team, One Client",
    description:
      "We keep our Scrum teams dedicated and focused, rather than splitting attention across competing priorities.",
    iconName: "team",
  },
  {
    id: 5,
    title: "Quality and Continuous Improvement",
    description:
      "We hold ourselves to rising standards, treating every project as an opportunity to get better.",
    iconName: "grow",
  },
  {
    id: 6,
    title: "Inventive and Resourceful",
    description:
      "We approach hard problems with curiosity, finding practical solutions even when the answer isn't obvious.",
    iconName: "action",
  },
  {
    id: 7,
    title: "Inspirational Growth",
    description:
      "We invest in our people's development, because the strength of our team is what makes strong outcomes possible for our clients.",
    iconName: "deliver",
  },
];
