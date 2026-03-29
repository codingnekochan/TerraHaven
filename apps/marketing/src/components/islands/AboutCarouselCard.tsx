import { AboutImage } from "@/assets/images";

export default function AboutCarouselCard({ item }: { item: string }) {
  return (
    <div className="w-full rounded-[6px] h-30 md:h-87.5 overflow-hidden">
      <img
        src={item ?? AboutImage.src}
        className="object-cover w-full h-full "
        loading="lazy"
      />
    </div>
  );
}
