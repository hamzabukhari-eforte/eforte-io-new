export type GalleryCategory =
  | "great-place-to-work"
  | "our-offices"
  | "bootcamp"
  | "after-office"
  | "pet-friendly"
  | "expert-talks"
  | "our-chef";

export type GalleryCategoryOption = {
  id: GalleryCategory;
  label: string;
};

export type BentoImage = {
  id: string;
  src: string;
  alt: string;
};

export type BentoColumn = {
  /** Flex width ratio for this column */
  width: number;
  /** Flex height ratios for top and bottom images */
  heights: [number, number];
  images: [BentoImage, BentoImage];
};

export type BentoLayout = {
  columns: [BentoColumn, BentoColumn, BentoColumn];
};

/** Reference layout: narrow left & middle, wide right; staggered row gutters */
export const bentoColumnConfig: [
  { width: number; heights: [number, number] },
  { width: number; heights: [number, number] },
  { width: number; heights: [number, number] },
] = [
  { width: 32, heights: [56, 44] },
  { width: 24, heights: [64, 36] },
  { width: 44, heights: [34, 66] },
];

export const galleryCategories: GalleryCategoryOption[] = [
  { id: "great-place-to-work", label: "Great Place to Work" },
  { id: "our-offices", label: "Our offices" },
  { id: "bootcamp", label: "Bootcamp" },
  { id: "after-office", label: "After office" },
  { id: "pet-friendly", label: "Pet friendly" },
  { id: "expert-talks", label: "Expert talks" },
  { id: "our-chef", label: "Our chef" },
];

const imagePool = {
  officeWork: {
    id: "office-work",
    src: "/assets/images/industry/working.jpg",
    alt: "Team working in the office",
  },
  lounge: {
    id: "lounge",
    src: "/assets/images/case-study/CulturalFit.jpg",
    alt: "Team in the office lounge",
  },
  pingPong: {
    id: "ping-pong",
    src: "/assets/images/industry/driving-1.jpg",
    alt: "Team activity at the office",
  },
  outdoorEvent: {
    id: "outdoor-event",
    src: "/assets/images/industry/driving-2.jpg",
    alt: "Outdoor team gathering",
  },
  nightEvent: {
    id: "night-event",
    src: "/assets/images/industry/events.jpg",
    alt: "Company event with the team",
  },
  hallway: {
    id: "hallway",
    src: "/assets/images/industry/recognitions.jpg",
    alt: "Colleagues collaborating in the hallway",
  },
  bootcamp: {
    id: "bootcamp",
    src: "/assets/images/industry/accelerators-1.jpg",
    alt: "Bootcamp session",
  },
  kitchen: {
    id: "kitchen",
    src: "/assets/images/industry/accelerators-2.jpg",
    alt: "Team sharing a meal",
  },
  pets: {
    id: "pets",
    src: "/assets/images/industry/accelerators-3.jpg",
    alt: "Pet-friendly office moment",
  },
  team: {
    id: "team",
    src: "/assets/images/velocity-ai/cta-team.png",
    alt: "eForte team group photo",
  },
  accelerators4: {
    id: "accelerators-4",
    src: "/assets/images/industry/accelerators-4.jpg",
    alt: "Team collaboration session",
  },
  accelerators5: {
    id: "accelerators-5",
    src: "/assets/images/industry/accelerators-5.jpg",
    alt: "Office culture moment",
  },
} as const;

function makeBentoLayout(
  col1: [BentoImage, BentoImage],
  col2: [BentoImage, BentoImage],
  col3: [BentoImage, BentoImage]
): BentoLayout {
  return {
    columns: [
      { ...bentoColumnConfig[0], images: col1 },
      { ...bentoColumnConfig[1], images: col2 },
      { ...bentoColumnConfig[2], images: col3 },
    ],
  };
}

export const bentoLayouts: Record<GalleryCategory, BentoLayout> = {
  "great-place-to-work": makeBentoLayout(
    [imagePool.officeWork, imagePool.lounge],
    [imagePool.pingPong, imagePool.outdoorEvent],
    [imagePool.nightEvent, imagePool.hallway]
  ),
  "our-offices": makeBentoLayout(
    [imagePool.hallway, imagePool.lounge],
    [imagePool.officeWork, imagePool.accelerators5],
    [imagePool.team, imagePool.pets]
  ),
  bootcamp: makeBentoLayout(
    [imagePool.bootcamp, imagePool.officeWork],
    [imagePool.accelerators4, imagePool.hallway],
    [imagePool.team, imagePool.accelerators5]
  ),
  "after-office": makeBentoLayout(
    [imagePool.pingPong, imagePool.lounge],
    [imagePool.nightEvent, imagePool.outdoorEvent],
    [imagePool.outdoorEvent, imagePool.kitchen]
  ),
  "pet-friendly": makeBentoLayout(
    [imagePool.pets, imagePool.officeWork],
    [imagePool.lounge, imagePool.hallway],
    [imagePool.team, imagePool.pets]
  ),
  "expert-talks": makeBentoLayout(
    [imagePool.bootcamp, imagePool.officeWork],
    [imagePool.accelerators4, imagePool.team],
    [imagePool.hallway, imagePool.accelerators5]
  ),
  "our-chef": makeBentoLayout(
    [imagePool.kitchen, imagePool.outdoorEvent],
    [imagePool.lounge, imagePool.kitchen],
    [imagePool.nightEvent, imagePool.pets]
  ),
};
