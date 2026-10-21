export default function BrandStatement() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
      <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-snug text-ink max-w-4xl mx-auto">
        &ldquo;Confidence isn&apos;t loud. It&apos;s a well-cut shoulder, a fabric that moves right, and shoes that carry you the way you already carry yourself.&rdquo;
      </p>
      <p className="mt-6 text-xs tracking-[0.2em] uppercase text-muted">&mdash; The Gentwears Studio</p>

      {/* Two side-by-side images underneath the quote */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="overflow-hidden rounded shadow-sm">
          <img 
            src="/images/mens-clothing.webp" 
            alt="Menswear Collection" 
            className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
          />
        </div>
        <div className="overflow-hidden rounded shadow-sm">
          <img 
            src="/images/unisex-shoes.webp" 
            alt="Footwear Collection" 
            className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}