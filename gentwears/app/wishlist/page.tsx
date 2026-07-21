"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product } from "@/types";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/ui/ProductCard";
import QuickViewModal from "@/components/ui/QuickViewModal";
import Button from "@/components/ui/Button";

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const [quickView, setQuickView] = useState<Product | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 min-h-[50vh]">
      <h1 className="font-display text-4xl mb-10">Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <Heart size={40} className="mx-auto mb-4 text-muted" />
          <p className="text-muted mb-6">Nothing saved yet.</p>
          <Link href="/shop"><Button variant="outline">Browse the Shop</Button></Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
          {wishlist.map((p) => (
            <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
          ))}
        </div>
      )}
      {quickView && <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />}
    </section>
  );
}
