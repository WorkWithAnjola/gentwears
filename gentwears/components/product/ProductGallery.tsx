"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";

export default function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(product.images[0]);

  return (
    <div>
      <div className="relative aspect-[3/4] bg-sand overflow-hidden mb-3">
        <Image src={active} alt={product.name} fill className="object-cover" />
      </div>
      <div className="flex gap-3">
        {product.images.map((im, i) => (
          <button
            key={i}
            onClick={() => setActive(im)}
            className={`relative w-20 h-24 overflow-hidden border ${active === im ? "border-gold" : "border-transparent"}`}
          >
            <Image src={im} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
