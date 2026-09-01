export type Benefit = {
  id: string;
  label: string;
  description: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  background: string;
  textColor: string;
};

export const benefits: Benefit[] = [
  {
    id: "health",
    label: "Health & Wellness Coverage",
    description:
      "Comprehensive medical benefits so you can focus on your work and your wellbeing.",
    iconSrc: "/assets/images/careers/private.svg",
    iconWidth: 65,
    iconHeight: 74,
    background:
      "radial-gradient(118.8% 118.8% at 7.68% -10.93%, rgba(255, 255, 255, 0.37) 0%, rgba(108, 239, 160, 0.15) 100%)",
    textColor: "#138010",
  },
  {
    id: "remote",
    label: "Flexible, Remote First Work",
    description:
      "Work where you're most productive, with hours that respect your life outside the office.",
    iconSrc: "/assets/images/careers/world.svg",
    iconWidth: 70,
    iconHeight: 69,
    background:
      "radial-gradient(118.8% 118.8% at 7.68% -10.93%, rgba(255, 255, 255, 0.37) 0%, rgba(54, 147, 176, 0.2) 100%)",
    textColor: "#0F579A",
  },
  {
    id: "learning",
    label: "Learning & Certification Stipend",
    description:
      "Annual budget toward courses, certifications, and conferences in your area of expertise.",
    iconSrc: "/assets/images/careers/english.svg",
    iconWidth: 84,
    iconHeight: 71,
    background:
      "radial-gradient(118.8% 118.8% at 7.68% -10.93%, rgba(255, 255, 255, 0.37) 0%, rgba(108, 184, 239, 0.15) 100%)",
    textColor: "#0F579A",
  },
  {
    id: "mentorship",
    label: "Mentorship & Career Pathing",
    description:
      "Structured growth plans and pairing with senior Polymaths who help you level up.",
    iconSrc: "/assets/images/careers/mentorship.svg",
    iconWidth: 72,
    iconHeight: 68,
    background:
      "radial-gradient(118.8% 118.8% at 7.68% -10.93%, rgba(255, 255, 255, 0.37) 0%, rgba(239, 115, 108, 0.15) 100%)",
    textColor: "#AE2121",
  },
  {
    id: "offsites",
    label: "Team Offsites & Socials",
    description:
      "Regular virtual and in person events that keep our distributed team genuinely connected.",
    iconSrc: "/assets/images/careers/team-building.svg",
    iconWidth: 78,
    iconHeight: 62,
    background:
      "radial-gradient(118.8% 118.8% at 7.68% -10.93%, rgba(255, 255, 255, 0.37) 0%, rgba(165, 108, 239, 0.15) 100%)",
    textColor: "#7E148F",
  },
  {
    id: "impact",
    label: "Work on Real Impact",
    description:
      "Ship features and AI driven systems that clients actually use not shelfware.",
    iconSrc: "/assets/images/careers/travel.svg",
    iconWidth: 69,
    iconHeight: 69,
    background:
      "radial-gradient(118.8% 118.8% at 7.68% -10.93%, rgba(255, 255, 255, 0.37) 0%, rgba(235, 171, 75, 0.2) 100%)",
    textColor: "#CD6022",
  },
];
