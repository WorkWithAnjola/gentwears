import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[75vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden bg-stone/20">
      <Image
        src="/images/homepage-hero.webp"
        alt="Gentwears New Season"
        fill
        className="object-cover brightness-[0.8]"
        priority
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center text-white space-y-6">
        {/* Distinctive Top Category Tag */}
        <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-medium bg-black/40 px-3.5 py-1.5 rounded-full inline-block backdrop-blur-md border border-white/10">
          New Arrival Curation
        </span>

        <h1 className="font-display text-4xl md:text-6xl tracking-wide leading-tight">
          New season. Same standard.
        </h1>
        
        <p className="text-sm md:text-base text-stone-200 max-w-lg mx-auto font-light leading-relaxed">
          Elevate your rotation with our handpicked selection of premium menswear and footwear designed for everyday distinction.
        </p>
        
        {/* Unique Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 pt-3">
          <Link
            href="/shop"
            className="bg-gold text-ink font-medium px-7 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-gold/90 transition-all transform hover:-translate-y-0.5 rounded-sm shadow-lg flex items-center gap-2"
          >
            Shop Collection <span className="text-sm">&rarr;</span>
          </Link>
          <Link
            href="/about"
            className="bg-white/10 backdrop-blur-md border border-white/40 text-white font-medium px-7 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-white/20 transition-all rounded-sm shadow-md"
          >
            Discover Our Craft
          </Link>
        </div>
      </div>
    </section>
  );
}
