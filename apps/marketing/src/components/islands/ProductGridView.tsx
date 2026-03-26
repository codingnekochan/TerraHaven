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
    <section id="products" className="px-30 py-20">
      <div className="flex justify-between">
        <h2>Hot products</h2>
        <div className=" flex justify-center items-center gap-10">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleClick(category.value)}
              className={`${category.value === filter ? "text-brand-secondary underline decoration-0" : "text-black60"} font-playfair text-base font-medium tracking-wider`}
            >
              <p>{category.category}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-20 grid grid-cols-4 gap-2">
        {productsList
          .filter((product: ProductInterface) => product.category === filter)
          .map((product: ProductInterface) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </section>
  );
}
