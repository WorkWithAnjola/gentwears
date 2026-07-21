"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, setCartOpen } = useCart();
  const { wishlist } = useWishlist();

  return (
    <>
      <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <button className="md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={22} />
          </button>

          <Link href="/" className="font-display text-xl md:text-2xl tracking-wide">
            GENTWEARS
          </Link>

          <nav className="hidden md:flex items-center gap-9 text-xs tracking-[0.15em] uppercase">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <Link href="/shop?category=Clothing" className="hover:text-gold transition-colors">Menswear</Link>
            <Link href="/shop?category=Shoes" className="hover:text-gold transition-colors">Shoes</Link>
            <Link href="/about" className="hover:text-gold transition-colors">About</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4 md:gap-5">
            <button className="hidden sm:block hover:text-gold" aria-label="Search"><Search size={19} /></button>
            <Link href="/wishlist" className="relative hover:text-gold" aria-label="Wishlist">
              <Heart size={19} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-ink text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <button onClick={() => setCartOpen(true)} className="relative hover:text-gold" aria-label="Cart">
              <ShoppingBag size={19} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-ink text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}
