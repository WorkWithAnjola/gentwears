import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { img } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function CTABand() {
  return (
    <section className="relative h-[50vh] min-h-[380px] overflow-hidden">
      <Image src={img("photo-1516257984-b1b4d707412e")} alt="Gentwears lifestyle" fill className="object-cover" />
      <div className="absolute inset-0 bg-ink/55 flex items-center">
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full">
          <h2 className="font-display text-3xl md:text-5xl text-ivory max-w-lg mb-6">
            New season. Same standard.
          </h2>
          <Link href="/shop"><Button variant="gold">Explore the Edit <ChevronRight size={14} /></Button></Link>
        </div>
      </div>
    </section>
  );
}
