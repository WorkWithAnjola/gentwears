"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types";
import ProductCard from "@/components/ui/ProductCard";
import QuickViewModal from "@/components/ui/QuickViewModal";

interface ShopGridProps {
  products: Product[];
  search: string;
}

export default function ShopGrid({ products, search }: ShopGridProps) {
  const [sortBy, setSortBy] = useState("featured");
  const [quickView, setQuickView] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    if (sortBy === "price-low") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [products, search, sortBy]);

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-8">
        <p className="text-sm text-muted">{filtered.length} products</p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-xs tracking-wide uppercase border border-ink/20 px-3 py-2 bg-transparent"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-muted py-20 text-sm">No products match your search.</p>
      )}
      {quickView && <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />}
    </div>
  );
}
