export type Benefit = {
  id: string;
  label: string;
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
    iconSrc: "/assets/images/careers/hearth.svg",
    iconWidth: 82,
    iconHeight: 68,
    background:
      "radial-gradient(118.8% 118.8% at 7.68% -10.93%, rgba(255, 255, 255, 0.37) 0%, rgba(239, 115, 108, 0.15) 100%)",
    textColor: "#AE2121",
  },
  {
    id: "offsites",
    label: "Team Offsites & Socials",
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
    iconSrc: "/assets/images/careers/travel.svg",
    iconWidth: 69,
    iconHeight: 69,
    background:
      "radial-gradient(118.8% 118.8% at 7.68% -10.93%, rgba(255, 255, 255, 0.37) 0%, rgba(235, 171, 75, 0.2) 100%)",
    textColor: "#CD6022",
  },
];
