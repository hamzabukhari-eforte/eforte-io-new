export type Location = {
  id: string;
  city: string;
  addressLines: [string, string, string];
  imageSrc: string;
  mapsUrl: string;
};

export const locations: Location[] = [
  {
    id: "austin",
    city: "Austin",
    addressLines: ["1141 Shady Lane", "TX 78721", "United States"],
    imageSrc: "/assets/images/case-study/corporate.webp",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1141+Shady+Lane+Austin+TX+78721",
  },
  {
    id: "chicago",
    city: "Chicago",
    addressLines: [
      "350 N Orleans St, Suite #9000N",
      "IL 60654",
      "United States",
    ],
    imageSrc: "/assets/images/case-study/real-estate.webp",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=350+N+Orleans+St+Chicago+IL+60654",
  },
  {
    id: "nashville",
    city: "Nashville",
    addressLines: ["500 Madison Street", "TN 37208", "United States"],
    imageSrc: "/assets/images/case-study/government.webp",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=500+Madison+Street+Nashville+TN+37208",
  },
  {
    id: "new-york",
    city: "New York",
    addressLines: [
      "540 Madison Avenue, 2nd Floor",
      "NY 10022",
      "United States",
    ],
    imageSrc: "/assets/images/case-study/tech.webp",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=540+Madison+Avenue+New+York+NY+10022",
  },
  {
    id: "montevideo",
    city: "Montevideo",
    addressLines: [
      "José A. Iturriaga 3597, Buceo",
      "Montevideo",
      "Uruguay",
    ],
    imageSrc: "/assets/images/industry/recognitions.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jose+A+Iturriaga+3597+Montevideo+Uruguay",
  },
  {
    id: "cali",
    city: "Cali",
    addressLines: ["Calle 18N # 9N-41", "Valle del Cauca", "Colombia"],
    imageSrc: "/assets/images/industry/events.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Calle+18N+9N-41+Cali+Colombia",
  },
];
