import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useCarousel from "@/lib/hooks/useCarousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

interface Props {
  data: {
    image?: string;
    name: string;
    content: string;
    job: string;
  }[];
}

function CarouselView({ data }: Props) {
  const {
    setCarouselApi,
    currentIndex,
    scrollSnaps,
    goToSelected,
    goToPrevious,
    gotoNext,
    carouselStart,
    carouselEnd,
  } = useCarousel();

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 3,
          breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 2 },
            "(max-width: 768px)": { slidesToScroll: 1 },
          },
        }}
        setApi={setCarouselApi}
      >
        <CarouselPrevious className="bg-brand-primary hover:bg-brand-primary hover:text-white text-white disabled:bg-brand-primary30 w-10 h-10 max-xl:hidden" />
        <CarouselContent>
          {data.map((testimonial, index) => (
            <CarouselItem className="md:basis-1/2 xl:basis-1/3" key={index}>
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="bg-brand-primary hover:bg-brand-primary hover:text-white text-white disabled:bg-brand-primary30 w-10 h-10 max-xl:hidden" />
      </Carousel>
      <div className="max-xl:hidden">
        {scrollSnaps.length > 0 && (
          <div className="flex justify-center mt-4">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 border border-brand-primary rounded-full mx-1 ${
                  currentIndex === index ? "bg-brand-primary" : "bg-inherit"
                }`}
                onClick={() => goToSelected(index)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="xl:hidden flex justify-end items-center gap-4 mt-4">
        <button
          onClick={goToPrevious}
          disabled={carouselStart}
          className={`bg-brand-primary w-7 h-7 md:w-8 md:h-8  rounded-full flex justify-center items-center ${carouselStart ? "bg-brand-primary30" : "bg-brand-primary"}`}
        >
          <ArrowLeft className="stroke-white w-4" />
        </button>
        <p className="text-sm font-lato font-medium leading-1.5 text-[#5E604BB0]">
          {currentIndex + 1}/{scrollSnaps.length}
        </p>
        <button
          onClick={gotoNext}
          disabled={carouselEnd}
          className={`bg-brand-primary w-7 md:w-8 h-7 md:h-8 rounded-full flex justify-center items-center ${carouselEnd ? "bg-brand-primary30" : "bg-brand-primary"}`}
        >
          <ArrowRight className="stroke-white w-4" />
        </button>
      </div>
    </>
  );
}

export default CarouselView;
