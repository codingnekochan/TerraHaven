import useCarousel from "@/lib/hooks/useCarousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import FavoriteIcon from "../customIcons/FavoriteIcon";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import AboutCarouselCard from "./AboutCarouselCard";

export default function AboutCarouselView({ data }: { data: any[] }) {
  const { setCarouselApi, scrollSnaps, currentIndex, goToPrevious, gotoNext } =
    useCarousel();

  const autoplayPlugin = useRef(
    Autoplay({
      active: true,
      delay: 3000,
      stopOnInteraction: true,
      breakpoints: {
        "(max-width: 768px)": { active: false },
      },
    }),
  );

  useEffect(() => {}, []);
  return (
    <>
      <div className="mx-4 md:mx-17 lg:mx-30 mb-4 md:mb-7 lg:mb-10 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-4.5">
          <h2 className="font-playfair-italic text-base tracking-wider md:text-2xl lg:text-3xl italic text-brand-primary">
            Love Where You Live
          </h2>
          <div className="md:mt-2">
            <FavoriteIcon currentColor="#B74A0D" />
          </div>
        </div>
        <div className="max-md:hidden px-4 py-2.75 bg-brand-primary rounded-[30px] flex items-center gap-4">
          <ChevronLeft
            className="stroke-white50 stroke-[1.5px]"
            onClick={goToPrevious}
          />
          <p className="italic font-lato text-sm text-white">
            {currentIndex + 1} / {scrollSnaps.length}
          </p>
          <ChevronRight
            className="stroke-accent01 stroke-[1.5px]"
            onClick={gotoNext}
          />
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 4,
          loop: true,
          breakpoints: {
            "(max-width: 1024px)": { slidesToScroll: 3 },
            "(max-width: 768px)": { slidesToScroll: 1 },
          },
        }}
        setApi={setCarouselApi}
        plugins={[autoplayPlugin.current]}
        className="max-md:ml-4"
      >
        <CarouselContent className="max-md:-ml-2">
          {data.map((item, index) => (
            <CarouselItem
              className="basis-[30%] md:basis-1/3 lg:basis-1/4 max-md:pl-2"
              key={index}
            >
              <AboutCarouselCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
