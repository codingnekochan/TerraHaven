import useCarousel from "@/lib/hooks/useCarousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import FavoriteIcon from "../customIcons/favoriteIcon";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import AboutCarouselCard from "./AboutCarouselCard";

export default function AboutCarouselView({ data }: { data: any[] }) {
  const { setCarouselApi, scrollSnaps, currentIndex, goToPrevious, gotoNext } =
    useCarousel();
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  useEffect(() => {}, []);
  return (
    <>
      <div className="mx-30 mb-10 flex justify-between items-center">
        <div className="flex items-center gap-4.5">
          <h2 className="font-playfair-italic text-3xl italic text-brand-primary">
            Love Where You Live
          </h2>
          <div className="mt-2">
            <FavoriteIcon currentColor="#B74A0D" />
          </div>
        </div>
        <div className="px-4 py-2.75 bg-brand-primary rounded-[30px] flex items-center gap-4">
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
        opts={{ align: "start", slidesToScroll: 4, loop: true }}
        setApi={setCarouselApi}
        plugins={[autoplayPlugin.current]}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem className="basis-1/4" key={index}>
              <AboutCarouselCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
