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
    // overflow-x clips the scroll track; vertical padding keeps tooltip room
    // inside the clip box (overflow-x-hidden forces overflow-y to clip too)
    <div className={`relative w-full overflow-x-hidden ${className}`}>
      {/* Top padding keeps name tooltips fully inside the clip box.
          overflow-x-hidden also clips the y-axis, so do not pull this up with
          negative margin or the pills get cut off. */}
      <div className="pb-4 pt-12">
        <div className="flex animate-scroll">
          {/* Duplicate items for seamless infinite scroll; margin matches gap so spacing is even at loop */}
          {[...Array(3)].map((_, setIndex) => (
            <div
              key={setIndex}
              className={`mr-8 flex ${gap} shrink-0 md:mr-12 lg:mr-16`}
            >
              {items.map((item) => (
                <div
                  key={`${setIndex}-${item.id}`}
                  className="relative z-30 shrink-0 overflow-visible hover:z-[200]"
                >
                  {item.content}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
