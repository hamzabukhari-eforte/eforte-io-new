import type { IconType } from "react-icons";
import {
  HiHeart,
  HiGlobeAlt,
  HiUserGroup,
  HiShieldCheck,
  HiAcademicCap,
  HiPaperAirplane,
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
    label: "Private health insurance",
    icon: HiShieldCheck,
    bgClass: "bg-emerald-50",
    iconClass: "text-emerald-500",
    textClass: "text-emerald-700",
  },
  {
    id: "balance",
    label: "Flexibility and a strong work-life balance",
    icon: HiHeart,
    bgClass: "bg-rose-50",
    iconClass: "text-rose-500",
    textClass: "text-rose-600",
  },
  {
    id: "team-events",
    label: "Team-building events",
    icon: HiUserGroup,
    bgClass: "bg-violet-50",
    iconClass: "text-violet-500",
    textClass: "text-violet-700",
  },
  {
    id: "english",
    label: "English classes",
    icon: HiAcademicCap,
    bgClass: "bg-sky-50",
    iconClass: "text-sky-500",
    textClass: "text-sky-700",
  },
  {
    id: "offices",
    label: "Work from any of our offices",
    icon: HiGlobeAlt,
    bgClass: "bg-cyan-50",
    iconClass: "text-cyan-500",
    textClass: "text-cyan-700",
  },
  {
    id: "travel",
    label: "Travel while working",
    icon: HiPaperAirplane,
    bgClass: "bg-orange-50",
    iconClass: "text-orange-500",
    textClass: "text-orange-700",
  },
];
