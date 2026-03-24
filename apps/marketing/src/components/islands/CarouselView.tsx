import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
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
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!carouselApi) return;
    setScrollSnaps(carouselApi.scrollSnapList());
    setCurrentIndex(carouselApi.selectedScrollSnap());

    const handleSlideChange = () => {
      setScrollSnaps(carouselApi.scrollSnapList());
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("scroll", handleSlideChange);

    return () => {
      carouselApi.off("scroll", handleSlideChange);
    };
  }, [carouselApi]);

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 3,
        }}
        setApi={setCarouselApi}
      >
        <CarouselPrevious className="bg-brand-primary hover:bg-brand-primary hover:text-white text-white disabled:bg-brand-primary30 w-10 h-10" />
        <CarouselContent>
          {data.map((testimonial, index) => (
            <CarouselItem className="basis-1/3" key={index}>
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="bg-brand-primary hover:bg-brand-primary hover:text-white text-white disabled:bg-brand-primary30 w-10 h-10" />
      </Carousel>
      {scrollSnaps.length > 0 && (
        <div className="flex justify-center mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 border border-brand-primary rounded-full mx-1 ${
                currentIndex === index ? "bg-brand-primary" : "bg-inherit"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default CarouselView;
