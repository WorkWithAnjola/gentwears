import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { RETAIL_BRANDS } from "@/data/products";

// Slugify a brand name for the URL, e.g. "New Balance" -> "new-balance"
const brandSlug = (brand: string) => brand.toLowerCase().replace(/\s+/g, "-");

export default function ShopByBrandGrid() {
  const brands = RETAIL_BRANDS.filter((b) => b !== "Gentwears");

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
      <SectionHeading eyebrow="Multi-Brand Marketplace" title="Shop by Brand" />
      <p className="text-stone max-w-xl -mt-4 mb-10">
        Gentwears is an independent retailer carrying authentic footwear from the brands below,
        alongside our own house line. We are not an official or authorized retailer of these
        brands — all trademarks belong to their respective owners.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <Link
            key={brand}
            href={`/shop/brand/${brandSlug(brand)}`}
            className="group flex items-center justify-center h-32 border border-ink/15 hover:border-gold hover:bg-ink hover:text-ivory transition-colors"
          >
            <span className="font-display text-xl md:text-2xl">{brand}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
