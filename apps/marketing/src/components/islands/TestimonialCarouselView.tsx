import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useCarousel from "@/lib/hooks/useCarousel";
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
  const { setCarouselApi, currentIndex, scrollSnaps, goToSelected } =
    useCarousel();

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
              onClick={() => goToSelected(index)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default CarouselView;
