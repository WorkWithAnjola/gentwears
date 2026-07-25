import { notFound } from "next/navigation";
import { PRODUCTS, RETAIL_BRANDS } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import BrandDisclaimer from "@/components/shop/BrandDisclaimer";

const brandSlug = (brand: string) => brand.toLowerCase().replace(/\s+/g, "-");

export function generateStaticParams() {
  return RETAIL_BRANDS.filter((b) => b !== "Gentwears").map((b) => ({ brand: brandSlug(b) }));
}

export function generateMetadata({ params }: { params: { brand: string } }) {
  const brand = RETAIL_BRANDS.find((b) => brandSlug(b) === params.brand);
  return { title: brand ? `${brand} — Gentwears` : "Brand — Gentwears" };
}

export default function BrandPage({ params }: { params: { brand: string } }) {
  const brand = RETAIL_BRANDS.find((b) => brandSlug(b) === params.brand);
  if (!brand) notFound();

  const products = PRODUCTS.filter((p) => p.retailBrand === brand);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
      <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">Home / Shop by Brand</p>
      <h1 className="font-display text-4xl md:text-5xl mb-4">{brand}</h1>
      <p className="text-stone max-w-lg mb-4">
        Authentic {brand} footwear, curated and sold by Gentwears.
      </p>
      <BrandDisclaimer brand={brand} />

      {products.length === 0 ? (
        <p className="text-muted py-16">No {brand} products currently in stock. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 mt-10">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
