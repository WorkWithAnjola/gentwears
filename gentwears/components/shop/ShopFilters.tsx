"use client";

import { RETAIL_BRANDS } from "@/data/products";

interface ShopFiltersProps {
  category: string;
  setCategory: (c: string) => void;
  brand: string;
  setBrand: (b: string) => void;
}

export default function ShopFilters({ category, setCategory, brand, setBrand }: ShopFiltersProps) {
  return (
    <aside className="md:w-56 flex-shrink-0">
      <div className="mb-8">
        <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Category</p>
        {["All", "Clothing", "Shoes"].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`block w-full text-left py-1.5 text-sm ${
              category === c ? "text-gold font-medium" : "text-ink/70 hover:text-ink"
            }`}
          >
            {c === "All" ? "All Products" : c}
          </button>
        ))}
      </div>

      <div className="mb-8">
        <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Brand</p>
        <button
          onClick={() => setBrand("All")}
          className={`block w-full text-left py-1.5 text-sm ${
            brand === "All" ? "text-gold font-medium" : "text-ink/70 hover:text-ink"
          }`}
        >
          All Brands
        </button>
        {RETAIL_BRANDS.map((b) => (
          <button
            key={b}
            onClick={() => setBrand(b)}
            className={`block w-full text-left py-1.5 text-sm ${
              brand === b ? "text-gold font-medium" : "text-ink/70 hover:text-ink"
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="mb-8">
        <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Collection</p>
        {["Signature", "New Arrivals"].map((c) => (
          <p key={c} className="py-1.5 text-sm text-ink/70">{c}</p>
        ))}
      </div>
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Price</p>
        <p className="text-sm text-ink/70">₦38,000 — ₦385,000</p>
      </div>
    </aside>
  );
}
