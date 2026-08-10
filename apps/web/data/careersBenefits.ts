import type { IconType } from "react-icons";
import {
  HiHeart,
  HiGlobeAlt,
  HiUserGroup,
  HiShieldCheck,
  HiAcademicCap,
  HiLightningBolt,
} from "react-icons/hi";

export type Benefit = {
  id: string;
  label: string;
  icon: IconType;
  bgClass: string;
  iconClass: string;
  textClass: string;
};

export const benefits: Benefit[] = [
  {
    id: "health",
    label: "Health & Wellness Coverage",
    icon: HiShieldCheck,
    bgClass: "bg-emerald-50",
    iconClass: "text-emerald-500",
    textClass: "text-emerald-700",
  },
  {
    id: "remote",
    label: "Flexible, Remote First Work",
    icon: HiGlobeAlt,
    bgClass: "bg-cyan-50",
    iconClass: "text-cyan-500",
    textClass: "text-cyan-700",
  },
  {
    id: "learning",
    label: "Learning & Certification Stipend",
    icon: HiAcademicCap,
    bgClass: "bg-sky-50",
    iconClass: "text-sky-500",
    textClass: "text-sky-700",
  },
  {
    id: "mentorship",
    label: "Mentorship & Career Pathing",
    icon: HiHeart,
    bgClass: "bg-rose-50",
    iconClass: "text-rose-500",
    textClass: "text-rose-600",
  },
  {
    id: "offsites",
    label: "Team Offsites & Socials",
    icon: HiUserGroup,
    bgClass: "bg-violet-50",
    iconClass: "text-violet-500",
    textClass: "text-violet-700",
  },
  {
    id: "impact",
    label: "Work on Real Impact",
    icon: HiLightningBolt,
    bgClass: "bg-orange-50",
    iconClass: "text-orange-500",
    textClass: "text-orange-700",
  },
];
