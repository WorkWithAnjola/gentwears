import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { img } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] overflow-hidden">
      <Image
        src={img("photo-1507003211169-0a1dd7228f2d")}
        alt="Gentwears hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />
      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-16 md:pb-24">
        <p className="animate-fadeUp font-body text-xs md:text-sm tracking-[0.35em] uppercase text-gold mb-4">
          Menswear · Unisex Footwear
        </p>
        <h1 className="animate-fadeUp font-display text-[13vw] leading-[0.95] md:text-8xl text-ivory font-medium max-w-3xl">
          Dressed with intent.
        </h1>
        <p className="animate-fadeUp font-body text-ivory/80 max-w-md mt-6 text-sm md:text-base leading-relaxed">
          Gentwears is premium menswear and unisex footwear for men who move deliberately — confident,
          understated, unmistakably theirs.
        </p>
        <div className="animate-fadeUp mt-8 flex gap-4">
          <Link href="/shop"><Button variant="gold">Shop Collection <ChevronRight size={14} /></Button></Link>
          <Link href="/about"><Button variant="ghost">Our Story</Button></Link>
        </div>
      </div>
    </section>
  );
}
