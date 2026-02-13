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
    titleLine1: "Seek & Measure",
    title: "Impact. Drive Results",
    description:
      "We are focused on seeking and measuring the impact of our actions, with a strong commitment to driving tangible results. Every project and initiative is approached with a results-oriented mindset.",
    iconName: "impact",
  },
  {
    id: 2,
    titleLine1: "Foster Strong",
    title: "Relationships",
    description:
      "Building and maintaining robust relationships is at the heart of our approach. We foster a culture of trust, respect, and mutual support, both within our team and in our interactions with clients. Strong relationships are fundamental to effective collaboration and are the foundation for creating lasting partnerships.",
    iconName: "relationships",
  },
  {
    id: 3,
    title: "Strive for the Highest Standards",
    description:
      "Our ethos is grounded in striving for excellence in everything we do. We set the bar high and relentlessly pursue the highest standards.",
    iconName: "standards",
  },
  {
    id: 4,
    title: "Team over Individuals",
    description:
      "We believe that the collective strength of our team is greater than the sum of individual efforts. We prioritize teamwork and collaboration, valuing each member's unique contributions while focusing on shared goals. This team-centric approach fosters a united effort towards achieving exceptional outcomes.",
    iconName: "team",
  },
  {
    id: 5,
    title: "Hire and Grow the Best",
    description:
      "We believe in attracting and nurturing top talent. Hiring and growing the best individuals is pivotal to our success. We invest in our team's professional development and provide opportunities for growth, recognizing that our people are the cornerstone of our excellence.",
    iconName: "grow",
  },
  {
    id: 6,
    title: "Determination",
    description:
      "Driving force behind our pursuit of goals. We face challenges with resilience and perseverance, pushing boundaries to achieve our objectives. This unwavering determination is essential for overcoming obstacles and realizing our vision of success.",
    iconName: "determination",
  },
  {
    id: 7,
    title: "Action-Oriented Approach",
    description:
      "Embracing calculated risk-taking, we prioritize prompt and decisive action, recognizing its importance in driving progress and success.",
    iconName: "action",
  },
  {
    id: 8,
    title: "Deliver, Have Fun, and Inspire",
    description:
      "Our mantra is to deliver outstanding results, enjoy the journey, and inspire those around us. We believe in balancing hard work with fun, fostering an enjoyable and motivating work environment.",
    iconName: "deliver",
  },
];
