import type { StudioAccentId } from "./types";

export type StudioAccentTokens = {
  id: StudioAccentId;
  /** Primary accent hex for buttons, highlights, marks */
  color: string;
  textClass: string;
  bgClass: string;
  softBgClass: string;
  underlineClass: string;
};

export const studioAccents: Record<StudioAccentId, StudioAccentTokens> = {
  coral: {
    id: "coral",
    color: "#F15B50",
    textClass: "text-[#F15B50]",
    bgClass: "bg-[#F15B50]",
    softBgClass: "bg-[#F15B50]/10",
    underlineClass: "border-[#F15B50]",
  },
  blue: {
    id: "blue",
    color: "#2F6BFF",
    textClass: "text-[#2F6BFF]",
    bgClass: "bg-[#2F6BFF]",
    softBgClass: "bg-[#2F6BFF]/10",
    underlineClass: "border-[#2F6BFF]",
  },
  purple: {
    id: "purple",
    color: "#D348EA",
    textClass: "text-[#D348EA]",
    bgClass: "bg-[#D348EA]",
    softBgClass: "bg-[#D348EA]/10",
    underlineClass: "border-[#D348EA]",
  },
};

export function getStudioAccent(id: StudioAccentId): StudioAccentTokens {
  return studioAccents[id];
}
