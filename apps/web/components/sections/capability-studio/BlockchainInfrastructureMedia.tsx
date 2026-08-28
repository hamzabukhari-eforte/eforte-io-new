"use client";

import { motion } from "framer-motion";

type BlockchainInfrastructureMediaProps = {
  className?: string;
};

/** Chart bars grow from the baseline to full height (once on scroll). */
const bars = [
  {
    id: "bar-1",
    d: "M117.2,298.1H140c2.1,0,3.8,1.7,3.8,3.8V339c0,2.1-1.7,3.8-3.8,3.8h-22.8c-2.1,0-3.8-1.7-3.8-3.8v-37.1C113.4,299.8,115.1,298.1,117.2,298.1z",
    fill: "#F9A8D4",
  },
  {
    id: "bar-2",
    d: "M166.5,277.5h22.8c2.1,0,3.8,1.7,3.8,3.8v56.9c0,2.1-1.7,3.8-3.8,3.8h-22.8c-2.1,0-3.8-1.7-3.8-3.8v-56.9C162.7,279.2,164.4,277.5,166.5,277.5z",
    fill: "#F9A8D4",
  },
  {
    id: "bar-3",
    d: "M212,241.5c0-2.1,1.7-3.8,3.8-3.8h22.8c2.1,0,3.8,1.7,3.8,3.8v96.6c0,2.1-1.7,3.8-3.8,3.8h-22.8c-2.1,0-3.8-1.7-3.8-3.8V241.5z",
    fill: "#FBCFE8",
  },
  {
    id: "bar-4",
    d: "M265.1,252.9h22.8c2.1,0,3.8,1.7,3.8,3.8v81.7c0,2.1-1.7,3.8-3.8,3.8h-22.8c-2.1,0-3.8-1.7-3.8-3.8v-81.7C261.3,254.6,263,252.9,265.1,252.9z",
    fill: "#F472B6",
  },
  {
    id: "bar-5",
    d: "M310.7,222.5c0-2.1,1.7-3.8,3.8-3.8h22.8c2.1,0,3.8,1.7,3.8,3.8V339c0,2.1-1.7,3.8-3.8,3.8h-22.8c-2.1,0-3.8-1.7-3.8-3.8V222.5z",
    fill: "#E85A9B",
  },
  {
    id: "bar-6",
    d: "M363.8,278.3h22.8c2.1,0,3.8,1.7,3.8,3.8V339c0,2.1-1.7,3.8-3.8,3.8h-22.8c-2.1,0-3.8-1.7-3.8-3.8v-56.9C360,280,361.7,278.3,363.8,278.3z",
    fill: "#D3287A",
  },
] as const;

export default function BlockchainInfrastructureMedia({
  className,
}: BlockchainInfrastructureMediaProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 504.9 369.7"
      className={className}
      aria-hidden
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <defs>
        <clipPath id="blockchain-infra-window">
          <path d="M6.6,0h491.8c3.6,0,6.6,3.5,6.6,7.8v354.2c0,4.3-2.9,7.8-6.6,7.8H6.6c-3.6,0-6.6-3.5-6.6-7.8V7.8C0,3.5,2.9,0,6.6,0z" />
        </clipPath>
      </defs>

      <g clipPath="url(#blockchain-infra-window)">
        {/* Window chrome — static */}
        <path
          fill="#222222"
          d="M5.9,30.3c0-14,11.3-25.3,25.3-25.3h441.3c14,0,25.3,11.3,25.3,25.3v19.5H5.9V30.3z"
        />
        <path
          fill="#FFFFFF"
          d="M5.9,49.3h491.8v327.5c0,14-11.3,25.3-25.3,25.3H31.2c-14,0-25.3-11.3-25.3-25.3V49.3z"
        />
        <circle fill="#F472B6" cx="32.8" cy="27.5" r="6.9" />
        <circle fill="#F472B6" cx="58.2" cy="27.5" r="6.9" />
        <circle fill="#F472B6" cx="83.7" cy="27.5" r="6.9" />

        {/* Top UI chips — static */}
        <path
          fill="#FDF2F8"
          d="M340.1,78.4h94.3c5,0,9,4,9,9v38.2c0,5-4,9-9,9h-94.3c-5,0-9-4-9-9V87.4C331.1,82.4,335.1,78.4,340.1,78.4z"
        />
        <path
          fill="#E85A9B"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M364.8,98.6c0-2.5,2-4.5,4.5-4.5h35.9c2.5,0,4.5,2,4.5,4.5v13.5c0,2.5-2,4.5-4.5,4.5h-35.9c-2.5,0-4.5-2-4.5-4.5V98.6z"
        />
        <path
          fill="#FDF2F8"
          d="M66.1,112.1h170.7c2.5,0,4.5,2,4.5,4.5V130c0,2.5-2,4.5-4.5,4.5H66.1c-2.5,0-4.5-2-4.5-4.5v-13.5C61.6,114.1,63.6,112.1,66.1,112.1z"
        />
        <path
          fill="#FDF2F8"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61.6,82.9c0-2.5,2-4.5,4.5-4.5h127.3c2.5,0,4.5,2,4.5,4.5v13.5c0,2.5-2,4.5-4.5,4.5H66.1c-2.5,0-4.5-2-4.5-4.5V82.9z"
        />
        <path
          fill="#FDF2F8"
          d="M70.6,157h363.9c5,0,9,4,9,9v199.9c0,5-4,9-9,9H70.6c-5,0-9-4-9-9V166C61.6,161,65.6,157,70.6,157z"
        />

        {/* Bars — grow from baseline */}
        {bars.map((bar, index) => (
          <motion.path
            key={bar.id}
            d={bar.d}
            fill={bar.fill}
            fillRule="evenodd"
            clipRule="evenodd"
            style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
            variants={{
              hidden: { scaleY: 0 },
              visible: { scaleY: 1 },
            }}
            transition={{
              duration: 1.4,
              delay: 0.15 + index * 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </g>
    </motion.svg>
  );
}
