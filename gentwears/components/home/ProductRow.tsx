"use client";

import { useState } from "react";
import { Product } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import QuickViewModal from "@/components/ui/QuickViewModal";

interface ProductRowProps {
  eyebrow: string;
  title: string;
  products: Product[];
  dark?: boolean;
}

export default function ProductRow({ eyebrow, title, products, dark }: ProductRowProps) {
  const [quickView, setQuickView] = useState<Product | null>(null);

  return (
    <section className={dark ? "bg-ink py-24" : "max-w-7xl mx-auto px-5 md:px-8 py-24"}>
      <div className={dark ? "max-w-7xl mx-auto px-5 md:px-8" : ""}>
        <SectionHeading eyebrow={eyebrow} title={title} dark={dark} />
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12 ${dark ? "[&_h3]:text-ivory [&_p.text-muted]:text-ivory/60" : ""}`}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
          ))}
        </div>
      </div>
      {quickView && <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />}
    </section>
  );
}
