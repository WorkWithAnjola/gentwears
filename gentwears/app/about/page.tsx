import Image from "next/image";

export const metadata = {
  title: "Our Story — Gentwears",
  description: "Discover the story behind Gentwears, your premier destination for menswear and footwear in Lagos.",
};

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-5 md:px-8 py-20 text-ink">
      <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">The Brand</p>
      <h1 className="font-display text-4xl md:text-5xl mb-8">Our Story</h1>

      {/* Studio Image Showcase */}
      <div className="relative w-full h-[350px] md:h-[450px] mb-12 bg-stone/10 overflow-hidden rounded-sm">
        <Image
          src="/products/about-studio.JPG"
          alt="Gentwears Studio Lagos"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-8 text-stone leading-relaxed">
        <div>
          <h2 className="text-ink font-medium text-lg mb-3">Moving With Intent</h2>
          <p>
            Founded in Lagos, a city defined by relentless motion and ambition, Gentwears was built for men who move with purpose. We believe that what you wear is an extension of your drive. Every piece in our collection is carefully chosen to reflect understated elegance, rugged durability, and effortless style.
          </p>
        </div>

        <div>
          <h2 className="text-ink font-medium text-lg mb-3">Curated Menswear and Footwear</h2>
          <p>
            From high-end technical sneakers and iconic streetwear silhouettes to tailored menswear essentials, we bridge the gap between luxury and everyday utility. We source exceptional pieces designed to stand the test of time, ensuring you look sharp whether you are stepping into a boardroom or navigating the city streets.
          </p>
        </div>

        <div>
          <h2 className="text-ink font-medium text-lg mb-3">Personalized Service</h2>
          <p>
            We do things differently. By keeping our checkout personal and direct through WhatsApp, we ensure every single customer gets tailored sizing advice, real-time updates, and VIP attention from the moment you browse to the moment your order arrives at your door.
          </p>
        </div>

        <div className="pt-8 border-t border-stone/20">
          <p className="text-sm font-medium text-ink">
            Welcome to Gentwears. Step into confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
