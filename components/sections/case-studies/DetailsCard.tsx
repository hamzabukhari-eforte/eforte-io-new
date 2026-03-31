import React from "react";
import Image from "next/image";

interface DetailProps {
  heading: string;
  description: string;
  image: string;
  format: string;
}

export default function DetailsCard({
  heading,
  description,
  image,
  format,
}: DetailProps) {
  const isLeft = format === "left";

  return (
    <div className="relative w-full">
      <div
        className={`
        grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
        rounded-3xl overflow-hidden
        bg-linear-to-br from-[#0b0c14] to-[#05060f]
        border border-white/10
        shadow-[0_0_80px_rgba(255,255,255,0.05)]
        p-8 lg:p-14
      `}
      >
        {isLeft && (
          <div className="flex flex-col gap-6 max-w-xl">
            <h2 className="text-2xl lg:text-4xl font-semibold text-white">
              {heading}
            </h2>
            <p className="text-white/70 leading-relaxed text-base lg:text-lg">
              {description}
            </p>
          </div>
        )}

        <Image
          src={image}
          alt={heading}
          className="w-full object-contain"
          width={200}
          height={200}
          quality={100}
        />

        {!isLeft && (
          <div className="flex flex-col gap-6 max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white">
              {heading}
            </h2>
            <p className="text-white/70 leading-relaxed text-base lg:text-lg">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

