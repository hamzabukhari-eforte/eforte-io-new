interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  gap?: string;
  className?: string;
}

export default function InfiniteCarousel({
  items,
  gap = "gap-8 md:gap-12 lg:gap-16",
  className = "",
}: InfiniteCarouselProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="flex animate-scroll">
        {/* Duplicate items for seamless infinite scroll */}
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className={`flex ${gap} shrink-0`}>
            {items.map((item) => (
              <div key={`${setIndex}-${item.id}`} className="shrink-0">
                {item.content}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
