import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import AboutCarouselCard from "./AboutCarouselCard";

export default function AboutCarouselView({ data }: { data: any[] }) {
  return (
    <>
      <Carousel opts={{ align: "start", slidesToScroll: 1 }}>
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem className="basis-1/5" key={index}>
              <AboutCarouselCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
