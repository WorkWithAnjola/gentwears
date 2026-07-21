import { REVIEWS } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";

export default function Reviews() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
      <SectionHeading eyebrow="Word of Mouth" title="From the Gentwears Community" />
      <div className="grid md:grid-cols-3 gap-6">
        {REVIEWS.map((r, i) => (
          <div key={i} className="border border-ink/10 p-7">
            <div className="mb-4"><StarRating rating={r.rating} /></div>
            <p className="text-sm text-stone leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
            <p className="text-xs tracking-[0.15em] uppercase text-muted">{r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
