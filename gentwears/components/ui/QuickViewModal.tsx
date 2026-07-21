"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { Product } from "@/types";
import { formatNaira } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Button from "./Button";

export default function QuickViewModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [size, setSize] = useState(product.sizes[0]);
  const { addToCart } = useCart();

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/60" onClick={onClose} />
      <div className="relative bg-ivory max-w-2xl w-full grid md:grid-cols-2 max-h-[90vh] overflow-y-auto animate-fadeUp">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-ivory rounded-full w-8 h-8 flex items-center justify-center">
          <X size={16} />
        </button>
        <div className="relative aspect-[3/4] bg-sand">
          <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
        </div>
        <div className="p-7">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">{product.collection}</p>
          <h2 className="font-display text-2xl mb-2">{product.name}</h2>
          <p className="text-lg mb-4">{formatNaira(product.price)}</p>
          <p className="text-sm text-stone leading-relaxed mb-6">{product.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`w-10 h-10 text-xs flex items-center justify-center border ${
                  size === s ? "border-ink bg-ink text-ivory" : "border-ink/20"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="solid" onClick={() => { addToCart(product, size); onClose(); }}>
              Add to Cart
            </Button>
            <Link href={`/product/${product.slug}`} onClick={onClose}>
              <Button variant="outline" className="w-full">View Full Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
