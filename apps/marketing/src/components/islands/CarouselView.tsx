import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 3,
      }}
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
  );
}

export default CarouselView;
