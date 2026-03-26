import type { ProductInterface } from "@terrahaven/shared";

export default function ProductCard({ title, image }: ProductInterface) {
  return (
    <div className="bg-black5 rounded-[5px] px-10 pt-10 pb-4">
      <div className="h-47.5">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-between items-center mt-10">
        <p className="text-sm text-black60 font-lato font-normal">{title}</p>
        <a
          href="#"
          className="text-sm text-brand-secondary font-lato font-medium italic"
        >
          Order now
        </a>
      </div>
    </div>
  );
}
