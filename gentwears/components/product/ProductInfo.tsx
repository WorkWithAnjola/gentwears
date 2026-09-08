"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Product } from "@/types";
import { formatNaira } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Button from "@/components/ui/Button";
import SizeGuide from "./SizeGuide";
import WhatsAppBuyButton from "./WhatsAppBuyButton";
import DeliveryReturns from "./DeliveryReturns";

export default function ProductInfo({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes?.[0] ?? "");
  const { addToCart } = useCart();
  const { toggleWish, isWished } = useWishlist();
  const wished = isWished(Number(product.id));

  return (
    <div className="pt-2">
      <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">
        {product.shoeCollection || product.collection}
      </p>
      <h1 className="font-display text-4xl mb-2">{product.name}</h1>

      {(product.brand || product.model) && (
        <p className="text-sm text-muted mb-4">
          {product.brand && <span>Brand: {product.brand}</span>}
          {product.brand && product.model && <span className="mx-2">·</span>}
          {product.model && <span>Model: {product.model}</span>}
        </p>
      )}

      <p className="text-xl mb-6">{formatNaira(product.price)}</p>
      <p className="text-stone leading-relaxed mb-8">{product.description}</p>

      <div className="flex items-center justify-between mb-3">
        <p className="text-xs tracking-[0.2em] uppercase text-muted">Size</p>
        <SizeGuide product={product} />
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {product.sizes.map((s) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={`w-12 h-11 flex items-center justify-center text-sm border ${
              size === s ? "border-ink bg-ink text-ivory" : "border-ink/20 hover:border-ink"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="flex gap-3 mb-3">
        <Button variant="solid" className="flex-1" onClick={() => addToCart(product, size)}>
          Add to Cart
        </Button>
        <button
          onClick={() => toggleWish(product)}
          aria-label="Toggle wishlist"
          className={`w-14 h-14 flex items-center justify-center border ${wished ? "border-gold bg-gold/10" : "border-ink/20"}`}
        >
          <Heart size={18} className={wished ? "fill-gold text-gold" : ""} />
        </button>
      </div>

      <div className="mb-10">
        <WhatsAppBuyButton product={product} size={size} />
      </div>

      <DeliveryReturns />
    </div>
  );
}
