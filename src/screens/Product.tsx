import { useEffect, useState } from "react";
import { FilterProductComponents } from "../module/product/components/FilterProductComponents";
import { ProductAcordion } from "../module/product/components/ProductAcordion";
import { ProductFilter } from "../module/product/components/ProductFilter";
import type { Product } from "../types";
import product from "../utils/products.json";
import { scrollToTop } from "../utils/scrollToTop";

export default function Product() {
  const [filters, setFilters] = useState({
    search: "",
    type: [] as string[],
    // maxPrice: 50,
  });

  useEffect(() => {
    scrollToTop({ smooth: true });
  }, []);

  const filteredProducts = product.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesCategory =
      filters.type.length === 0 || filters.type.includes(item?.type);
    // const matchesPrice = item.price <= filters.maxPrice;
    // console.log("🚀 ~ Product ~ matchesPrice:", matchesPrice);
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-gradient-section flex flex-col scroll-smooth">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
        <h2 className="text-2xl md:text-5xl font-extrabold text-secondary mb-8 drop-shadow-text">
          Nuestra Colección de Postres 🍰
        </h2>
        <p className="text-lg md:text-xl text-white/75 mb-12 max-w-2xl">
          Explora todos nuestros deliciosos pasteles y postres, elaborados con
          los mejores ingredientes para endulzar tu día.
        </p>
        <div className="hidden md:flex w-full gap-4 p-0">
          <FilterProductComponents onFilterChange={setFilters} />
          <ProductFilter products={filteredProducts} />
        </div>
        <ProductAcordion />
      </div>
    </section>
  );
}
