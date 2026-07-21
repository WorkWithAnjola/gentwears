import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { img } from "@/lib/utils";

const CATEGORIES = [
  { label: "Men's Clothing", href: "/shop?category=Clothing", image: img("photo-1594938298603-c8148c4dae35") },
  { label: "Unisex Shoes", href: "/shop?category=Shoes", image: img("photo-1595950653106-6c9ebd614d3a") },
];

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pb-24">
      <div className="grid md:grid-cols-2 gap-4">
        {CATEGORIES.map((c) => (
          <Link key={c.href} href={c.href} className="relative h-[420px] overflow-hidden group block">
            <Image src={c.image} alt={c.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-ink/35 group-hover:bg-ink/50 transition-colors" />
            <div className="absolute bottom-8 left-8 text-ivory">
              <h3 className="font-display text-3xl mb-2">{c.label}</h3>
              <span className="text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 border-b border-gold pb-1">
                Shop Now <ChevronRight size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
