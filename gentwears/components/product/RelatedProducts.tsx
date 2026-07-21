"use client";

import { useState } from "react";
import { Product } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import QuickViewModal from "@/components/ui/QuickViewModal";

export default function RelatedProducts({ products }: { products: Product[] }) {
  const [quickView, setQuickView] = useState<Product | null>(null);
  if (products.length === 0) return null;

  return (
    <div className="mt-24">
      <SectionHeading eyebrow="You May Also Like" title="Related Pieces" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
        ))}
      </div>
      {quickView && <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />}
    </div>
  );
}
