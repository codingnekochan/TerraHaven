import type { ProductInterface } from "@terrahaven/shared";

export default function ProductCard({ title, image }: ProductInterface) {
  return (
    <div className="bg-black5 rounded-[5px] md:px-5 lg:px-10 md:pt-5 lg:pt-10 md:pb-2 lg:pb-4">
      <div className="h-27.5 lg:h-47.5">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <div className="max-md:hidden flex justify-between items-center mt-10">
        <p className="md:text-xs lg:text-sm text-black60 font-lato font-normal">{title}</p>
        <a
          href="#"
          className="md:text-xs lg:text-sm text-brand-secondary font-lato font-medium italic"
        >
          Order now
        </a>
      </div>
    </div>
  );
}
