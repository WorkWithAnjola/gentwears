"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import ShopFilters from "@/components/shop/ShopFilters";
import ShopGrid from "@/components/shop/ShopGrid";
import SearchBar from "@/components/shop/SearchBar";

function ShopContent() {
  const params = useSearchParams();
  const initialCategory = params.get("category") || "All";
  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () => PRODUCTS.filter((p) => category === "All" || p.category === category),
    [category]
  );

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-14">
      <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">Home / Shop</p>
      <h1 className="font-display text-4xl md:text-5xl mb-10">The Full Edit</h1>

      <div className="flex flex-col md:flex-row gap-10">
        <ShopFilters category={category} setCategory={setCategory} />
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} />
          <ShopGrid products={filtered} search={search} />
        </div>
      </div>
    </section>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopContent />
    </Suspense>
  );
}
