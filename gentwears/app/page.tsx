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
