import Image from "next/image";
import { img } from "@/lib/utils";

export const metadata = {
  title: "Our Story — Gentwears",
  description: "The story, mission, and style philosophy behind Gentwears.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image src={img("photo-1490114538077-0a7f8cb49891")} alt="About Gentwears" fill className="object-cover" />
        <div className="absolute inset-0 bg-ink/50 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-5 md:px-8 pb-14">
            <h1 className="font-display text-5xl md:text-7xl text-ivory max-w-4xl">Our Story</h1>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 space-y-16">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Our Vision</p>
          <p className="font-display text-2xl md:text-3xl leading-snug">
            To dress a generation of men who understand that real confidence doesn&apos;t need to shout.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            Gentwears began with a simple frustration: most menswear either tried too hard or didn&apos;t
            try at all. We set out to build the space between — pieces cut with intent, made to be worn
            for years, not seasons.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Our Style Philosophy</p>
          <p className="text-stone leading-relaxed">
            Every Gentwears piece sits at the intersection of tailoring and street sensibility. Structured
            where it matters, relaxed where it counts. We work in a disciplined palette — ink, ivory, sand,
            and a single gold thread — so that the fit and the fabric do the talking, not the noise.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Why Gentwears</p>
          <ul className="space-y-3 text-stone">
            <li className="flex gap-3"><span className="text-gold">—</span> Premium fabrics sourced for drape, not just durability</li>
            <li className="flex gap-3"><span className="text-gold">—</span> Unisex footwear built on a genuinely shared last, not a resized men&apos;s shoe</li>
            <li className="flex gap-3"><span className="text-gold">—</span> Small-batch production — we&apos;d rather sell out than dilute quality</li>
            <li className="flex gap-3"><span className="text-gold">—</span> A team that actually answers on WhatsApp</li>
          </ul>
        </div>
      </section>
    </>
  );
}
