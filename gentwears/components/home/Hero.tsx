import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-stone/20">
      <Image
        src="/images/homepage-hero.webp"
        alt="Gentwears New Season"
        fill
        className="object-cover brightness-[0.85]"
        priority
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center text-white space-y-6">
        <h1 className="font-display text-4xl md:text-6xl tracking-wide">
          New season. Same standard.
        </h1>
        <p className="text-sm md:text-base text-stone-200 max-w-lg mx-auto font-light">
          Explore our latest curation of premium menswear and footwear designed for everyday distinction.
        </p>
        
        {/* Compact Side-by-Side Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/shop"
            className="bg-gold text-ink font-medium px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-gold/90 transition-colors rounded-sm shadow-md"
          >
            Explore the Edit
          </Link>
          <Link
            href="/about"
            className="border border-white/80 text-white font-medium px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-colors rounded-sm shadow-md"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
