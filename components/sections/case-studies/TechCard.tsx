import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  info: string;
}

export default function TechCard({ image, title, info }: CardProps) {
  return (
    <div
      className={`
        w-full max-w-md
        p-12 lg:p-8
        rounded-2xl
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        text-white
        shadow-[0_0_40px_rgba(255,255,255,0.05)]
      `}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10">
          <Image src={image} alt={title} width={32} height={32} />
        </div>
        <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      </div>

      <p className="text-sm text-white/70 leading-relaxed">{info}</p>
    </div>
  );
}

