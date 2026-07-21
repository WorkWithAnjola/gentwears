"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types";

interface WishlistContextValue {
  wishlist: Product[];
  toggleWish: (product: Product) => void;
  isWished: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const toggleWish = (product: Product) => {
    setWishlist((prev) =>
      prev.find((p) => p.id === product.id) ? prev.filter((p) => p.id !== product.id) : [...prev, product]
    );
  };

  const isWished = (id: number) => !!wishlist.find((p) => p.id === id);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWish, isWished }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
