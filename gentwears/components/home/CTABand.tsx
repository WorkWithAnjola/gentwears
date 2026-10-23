import Link from "next/link";
import Image from "next/image";

export default function CTABand() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden my-12 bg-stone/20">
      <Image
        src="/images/mens-clothing.webp"
        alt="Gentwears Collection"
        fill
        className="object-cover brightness-[0.85]"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center text-white space-y-6">
        <h2 className="font-display text-3xl md:text-5xl tracking-wide">
          New season. Same standard.
        </h2>
        <p className="text-sm md:text-base text-stone-200 max-w-md mx-auto font-light">
          Explore our latest collection crafted for everyday distinction.
        </p>
        <div>
          <Link
            href="/shop"
            className="inline-block bg-gold text-ink font-medium px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-gold/90 transition-colors rounded-sm shadow-md"
          >
            Explore the Edit
          </Link>
        </div>
      </div>
    </section>
  );
}
