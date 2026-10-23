import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <p className="font-display text-2xl mb-4">GENTWEARS</p>
          <p className="text-sm text-ivory/70 leading-relaxed mb-4">
            Premium menswear and unisex footwear for men who move with intent.
          </p>
          <p className="text-sm text-ivory/70">
            <a href="mailto:mygentwears@gmail.com" className="hover:text-gold underline">
              mygentwears@gmail.com
            </a>
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-ivory/50 mb-4">Shop</p>
          <div className="flex flex-col gap-2 text-sm text-ivory/70">
            <Link href="/shop" className="hover:text-gold">All Products</Link>
            <Link href="/shop?category=Clothing" className="hover:text-gold">Menswear</Link>
            <Link href="/shop?category=Shoes" className="hover:text-gold">Shoes</Link>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-ivory/50 mb-4">Company</p>
          <div className="flex flex-col gap-2 text-sm text-ivory/70">
            <Link href="/about" className="hover:text-gold">Our Story</Link>
            <Link href="/contact" className="hover:text-gold">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-ivory/50 mb-4">Follow</p>
          <div className="flex gap-3">
            {/* Instagram */}
            <a 
              href="https://instagram.com/mygentwears" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="w-9 h-9 border border-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ink transition-colors"
            >
              <Instagram size={14} />
            </a>
            {/* TikTok */}
            <a 
              href="https://tiktok.com/@mygentwears" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok"
              className="w-9 h-9 border border-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ink transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            {/* Twitter */}
            <a 
              href="https://twitter.com/mygentwears" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              className="w-9 h-9 border border-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ink transition-colors"
            >
              <Twitter size={14} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6 border-t border-ivory/10 text-xs text-ivory/50 flex flex-col sm:flex-row justify-between gap-2">
        <p>© 2026 Gentwears. All rights reserved.</p>
        <p>Designed for men who move with intent.</p>
      </div>
    </footer>
  );
}
