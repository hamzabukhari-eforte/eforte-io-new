export type Location = {
  id: string;
  city: string;
  addressLines: [string, string, string];
  imageSrc: string;
  mapsUrl: string;
};

/**
 * Canonical office list — aligned with About Us (`aboutLocations`).
 * Prior Chicago / Nashville / New York / Montevideo / Cali entries were
 * intentionally removed from active use; restore from git history if needed.
 */
export const locations: Location[] = [
  {
    id: "wilmington",
    city: "Wilmington",
    addressLines: [
      "1207 Delaware Ave, Suite 2858",
      "DE 19806",
      "United States",
    ],
    imageSrc: "/assets/images/case-study/corporate.webp",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1207+Delaware+Ave+Suite+2858+Wilmington+DE+19806",
  },
  {
    id: "san-jose",
    city: "San Jose",
    addressLines: ["San Jose", "CA", "United States"],
    imageSrc: "/assets/images/case-study/tech.webp",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=San+Jose+California+United+States",
  },
  {
    id: "austin",
    city: "Austin",
    addressLines: ["1141 Shady Lane", "TX 78721", "United States"],
    imageSrc: "/assets/images/case-study/corporate.webp",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1141+Shady+Lane+Austin+TX+78721",
  },
  {
    id: "remote",
    city: "Remote / Nearshore",
    addressLines: [
      "Delivery centers",
      "Remote & nearshore",
      "Global",
    ],
    imageSrc: "/assets/images/industry/recognitions.jpg",
    mapsUrl: "/about-us",
  },
];
