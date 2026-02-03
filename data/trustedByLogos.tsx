import {
  SiGoogle,
  SiShopify,
  SiSlack,
  SiPaypal,
  SiAmazonwebservices,
} from "react-icons/si";

const iconWrapperClass = "flex items-center justify-center h-12 md:h-16 px-4 text-white";

export const defaultTrustedByLogos = [
  {
    id: "google-g",
    content: (
      <div className={iconWrapperClass}>
        <SiGoogle className="text-2xl md:text-3xl" />
      </div>
    ),
  },
  {
    id: "shopify",
    content: (
      <div className={iconWrapperClass}>
        <SiShopify className="text-2xl md:text-3xl" />
      </div>
    ),
  },
  {
    id: "land-id",
    content: (
      <div className="flex items-center justify-center h-12 md:h-16 px-4">
        <span className="text-white text-lg md:text-xl font-normal">Land id.</span>
      </div>
    ),
  },
  {
    id: "slack",
    content: (
      <div className={iconWrapperClass}>
        <SiSlack className="text-2xl md:text-3xl" />
      </div>
    ),
  },
  {
    id: "nest",
    content: (
      <div className="flex items-center justify-center h-12 md:h-16 px-4">
        <span className="text-white text-lg md:text-xl font-normal lowercase">nest</span>
      </div>
    ),
  },
  {
    id: "paypal",
    content: (
      <div className={iconWrapperClass}>
        <SiPaypal className="text-2xl md:text-3xl" />
      </div>
    ),
  },
  {
    id: "idb",
    content: (
      <div className="flex items-center justify-center h-12 md:h-16 px-4">
        <span className="text-white text-xl md:text-2xl font-semibold">IDB</span>
      </div>
    ),
  },
  {
    id: "aws",
    content: (
      <div className={iconWrapperClass}>
        <SiAmazonwebservices className="text-2xl md:text-3xl" />
      </div>
    ),
  },
];
