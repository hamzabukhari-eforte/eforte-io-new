export type AboutLocation = {
  id: string;
  name: string;
  detail?: string;
};

export const aboutLocations: AboutLocation[] = [
  {
    id: "wilmington",
    name: "Wilmington, Delaware",
    detail: "Headquarters",
  },
  {
    id: "san-jose",
    name: "San Jose, California",
  },
  {
    id: "austin",
    name: "Austin, Texas",
  },
  {
    id: "remote",
    name: "Remote / Nearshore Delivery Centers",
  },
];
