"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product } from "@/types";
import { formatNaira } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductCard({ product, onQuickView }: { product: Product; onQuickView?: (p: Product) => void }) {
  const [hover, setHover] = useState(false);
  const { addToCart } = useCart();
  const { toggleWish, isWished } = useWishlist();
  const wished = isWished(product.id);

  return (
    <div className="group animate-fadeUp">
      <div
        className="relative aspect-[3/4] overflow-hidden bg-sand"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={hover ? product.images[1] : product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {product.tag && (
          <span className="absolute top-3 left-3 bg-ink text-ivory text-[10px] tracking-[0.15em] uppercase px-3 py-1.5">
            {product.tag}
          </span>
        )}

        <button
          onClick={() => toggleWish(product)}
          aria-label="Toggle wishlist"
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-ivory/90 hover:bg-ivory transition-colors"
        >
          <Heart size={16} className={wished ? "fill-gold text-gold" : "text-ink"} />
        </button>

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex">
          <button
            onClick={() => onQuickView?.(product)}
            className="flex-1 bg-ivory/95 text-ink font-body text-[11px] tracking-[0.15em] uppercase py-3 hover:bg-ivory"
          >
            Quick View
          </button>
          <button
            onClick={() => addToCart(product, product.sizes[0])}
            className="flex-1 bg-ink text-ivory font-body text-[11px] tracking-[0.15em] uppercase py-3 hover:bg-gold hover:text-ink"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="pt-4 flex items-start justify-between">
        <div>
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted mb-1">{product.collection}</p>
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-display text-lg hover:text-gold transition-colors">{product.name}</h3>
          </Link>
        </div>
        <p className="font-body text-sm whitespace-nowrap pl-3">{formatNaira(product.price)}</p>
      </div>
    </div>
  );
}
