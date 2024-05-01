import { ReactNode, useRef, useEffect, useState, MouseEventHandler } from "react";
import { SmallArrow } from "../svgs";

interface Props {
  children: ReactNode[];
}

export const PrevArrow = (onClickHandler: MouseEventHandler<HTMLButtonElement>, hasPrev: boolean, label: string) => (
  <button onClick={onClickHandler} disabled={!hasPrev}  className={`absolute top-1/2 left-3 md:left-10 -translate-y-1/2 justify-between bg-white/50 rounded-full hover:bg-white px-3 py-1 cursor-pointer z-10 ${!hasPrev ? 'hidden' : ''}`}>
    <div className="w-3 md:w-4">
      <SmallArrow />
    </div>
  </button>
);

export const NextArrow = (onClickHandler: MouseEventHandler<HTMLButtonElement>, hasNext: boolean, label: string) => (
  <button onClick={onClickHandler} disabled={!hasNext} className={`absolute top-1/2 right-3 md:right-10 -translate-y-1/2 justify-between bg-white/50 rounded-full hover:bg-white px-3 py-1 cursor-pointer ${!hasNext ? 'hidden' : ''}`}>
    <div className="w-3 md:w-4 rotate-180">
      <SmallArrow />
    </div>
  </button>
);

const Carousel = ({ children }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

  useEffect(() => {
    const carouselNode = carouselRef.current;

    const handleScroll = () => {
      if (carouselNode) {
        const scrollLeft = carouselNode.scrollLeft;
        const scrollWidth = carouselNode.scrollWidth;
        const clientWidth = carouselNode.clientWidth;

        const isLeftVisible = scrollLeft > 0;
        const isRightVisible = scrollLeft + clientWidth < scrollWidth;

        setIsLeftArrowVisible(isLeftVisible);
        setIsRightArrowVisible(isRightVisible);
      }
    };

    if (carouselNode) {
      carouselNode.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselNode) {
        carouselNode.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const changeSlide = (direction: number) => {
    if (carouselRef.current) {
      const currentScrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth;

      const newScrollLeft = currentScrollLeft + direction * cardWidth;
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div className="w-full overflow-x-scroll snap-x snap-mandatory scrollable" ref={carouselRef}>
        <div className="flex gap-6">
          {children &&
            children.map((child, i) => (
              <div key={`${i}-carousel`} id={`item-${i}`} className="flex-shrink-0 w-full snap-start">
                {child}
              </div>
            ))}
        </div>
      </div>
      {isLeftArrowVisible && (
        <div onClick={() => changeSlide(-1)} className="absolute top-1/2 left-3 md:left-10 -translate-y-1/2 justify-between bg-white/50 rounded-full hover:bg-white px-3 py-1 cursor-pointer">
          <div className="w-3 md:w-4">
            <SmallArrow />
          </div>
        </div>
      )}
      {isRightArrowVisible && (
        <div onClick={() => changeSlide(1)} className="absolute top-1/2 right-3 md:right-10 -translate-y-1/2 justify-between bg-white/50 rounded-full hover:bg-white px-3 py-1 cursor-pointer">
          <div className="w-3 md:w-4 rotate-180">
            <SmallArrow />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
