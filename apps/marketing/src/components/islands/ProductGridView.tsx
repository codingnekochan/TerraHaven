import type { FilterCategory, ProductInterface } from "@terrahaven/shared";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGridView({
  productsList,
}: {
  productsList: any[];
}) {
  const categories: { category: string; value: FilterCategory }[] = [
    {
      category: "Best sellers",
      value: "best sellers",
    },
    {
      category: "New release",
      value: "new release",
    },
    {
      category: "Coming soon",
      value: "coming soon",
    },
  ];
  const [filter, setFilter] = useState<FilterCategory>("new release");
  const handleClick = (val: FilterCategory) => {
    setFilter(val);
  };
  console.log(filter);
  return (
    <section id="products" className="px-6 lg:px-30 py-10 lg:py-20">
      <div className="lg:flex justify-between">
        <h2 className="font-playfair font-semibold text-2xl max-lg:text-center lg:text-3xl tracking-wider text-black">
          Hot products
        </h2>
        <div className="max-lg:mt-6 flex justify-center items-center gap-4 lg:gap-10">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleClick(category.value)}
              className={`${category.value === filter ? "text-brand-secondary underline decoration-0" : "text-black60"} font-playfair text-sm md:text-base font-medium tracking-wider`}
            >
              <p>{category.category}</p>
            </button>
          ))}
        </div>
      </div>
      <div className=" mt-6 lg:mt-20 grid grid-cols-3 lg:grid-cols-4 gap-1.5 md:gap-2">
        {productsList
          .filter((product: ProductInterface) => product.category === filter)
          .map((product: ProductInterface) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </section>
  );
}
