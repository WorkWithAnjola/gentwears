"use client";

import Link from "next/link";
import { X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Wishlist", href: "/wishlist" },
];

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[110] bg-ink text-ivory flex flex-col p-8">
      <button onClick={onClose} className="self-end mb-10" aria-label="Close menu"><X size={26} /></button>
      <div className="flex flex-col gap-7 text-2xl font-display">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={onClose} className="hover:text-gold">
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
