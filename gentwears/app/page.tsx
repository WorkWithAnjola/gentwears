import { PRODUCTS } from "@/data/products";
import Hero from "@/components/home/Hero";
import BrandStatement from "@/components/home/BrandStatement";
import CategoryGrid from "@/components/home/CategoryGrid";
import ShopByBrandGrid from "@/components/home/ShopByBrandGrid";
import ProductRow from "@/components/home/ProductRow";
import CTABand from "@/components/home/CTABand";
import Reviews from "@/components/home/Reviews";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  const signature = PRODUCTS.filter((p) => p.tag === "House Brand");
  const newArrivals = PRODUCTS.filter((p) => p.category === "Sneakers");
  const bestSellers = PRODUCTS.filter((p) => p.tag === "House Brand");

  return (
    <>
      <Hero />
      <BrandStatement />
      <CategoryGrid />
      <ProductRow eyebrow="Curated" title="Featured Collection" products={signature} />
      <ShopByBrandGrid />
      <ProductRow eyebrow="Just In" title="Latest Arrivals" products={newArrivals} dark />
      <ProductRow eyebrow="Most Loved" title="Best Sellers" products={bestSellers} />
      <CTABand />
      <Reviews />
      <Newsletter />
    </>
  );
}
