import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <p className="font-display text-2xl mb-4">GENTWEARS</p>
          <p className="text-sm text-ivory/70 leading-relaxed">
            Premium menswear and unisex footwear for men who move with intent.
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
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 border border-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ink transition-colors">
                <Icon size={14} />
              </a>
            ))}
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
