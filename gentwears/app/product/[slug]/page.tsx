import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";
import ProductReviews from "@/components/product/ProductReviews";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-12">
      <p className="text-xs tracking-[0.2em] uppercase text-muted mb-8">
        Home / Shop / {product.name}
      </p>
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>
      <ProductReviews />
      <RelatedProducts products={related} />
    </section>
  );
}
