import { MessageCircle } from "lucide-react";
import { Product } from "@/types";
import { formatNaira } from "@/lib/utils";

export default function WhatsAppBuyButton({ product, size }: { product: Product; size: string }) {
  const message = encodeURIComponent(
    `Hi Gentwears, I'd like to order:\n\n${product.name} (Size ${size}), ${formatNaira(product.price)}\n\nIs this available?`
  );
  const href = `https://wa.me/2349053247629?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs tracking-[0.15em] uppercase px-7 py-3.5 hover:opacity-90 transition-opacity"
    >
      <MessageCircle size={15} /> Buy via WhatsApp
    </a>
  );
}
