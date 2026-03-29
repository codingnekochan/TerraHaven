import type { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function useCarousel() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const updateSelectedClass = (api: CarouselApi) => {
    api?.slideNodes().forEach((slide, index) => {
      if (index === api.selectedScrollSnap()) {
        slide.classList.add("is-selected");
      } else {
        slide.classList.remove("is-selected");
      }
    });
  };
  useEffect(() => {
    if (!carouselApi) return;

    setScrollSnaps(carouselApi.scrollSnapList());
    setCurrentIndex(carouselApi.selectedScrollSnap());
    updateSelectedClass(carouselApi);
    const handleSlideChange = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      updateSelectedClass(carouselApi);
    };

    carouselApi.on("select", handleSlideChange);

    return () => {
      carouselApi.off("select", handleSlideChange);
    };
  }, [carouselApi]);

  const gotoNext = () => {
    carouselApi?.scrollNext();
  };
  const goToSelected = (index: number) => {
    carouselApi?.scrollTo(index);
  };
  const goToPrevious = () => {
    carouselApi?.scrollPrev();
  };

  return {
    setCarouselApi,
    currentIndex,
    scrollSnaps,
    goToSelected,
    goToPrevious,
    gotoNext,
    carouselStart: currentIndex === 0,
    carouselEnd: currentIndex === scrollSnaps.length - 1,
  };
}
