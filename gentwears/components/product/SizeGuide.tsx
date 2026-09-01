"use client";

import { useState } from "react";
import { X, Ruler } from "lucide-react";
import { Product } from "@/types";

const CLOTHING_SIZES = [
  { size: "S", chest: '36-38"', waist: '30-32"' },
  { size: "M", chest: '39-41"', waist: '33-35"' },
  { size: "L", chest: '42-44"', waist: '36-38"' },
  { size: "XL", chest: '45-47"', waist: '39-41"' },
];

const SHOE_SIZES = [
  { eu: "40", uk: "6.5", us: "7.5" },
  { eu: "41", uk: "7.5", us: "8.5" },
  { eu: "42", uk: "8", us: "9" },
  { eu: "43", uk: "9", us: "10" },
  { eu: "44", uk: "9.5", us: "10.5" },
  { eu: "45", uk: "10.5", us: "11.5" },
];

export default function SizeGuide({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const isShoe = product.category === "Shoes";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-muted hover:text-gold underline underline-offset-4"
      >
        <Ruler size={13} /> Size Guide
      </button>

      {open && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/60" onClick={() => setOpen(false)} />
          <div className="relative bg-ivory max-w-md w-full p-7 animate-fadeUp">
            <button onClick={() => setOpen(false)} className="absolute top-5 right-5" aria-label="Close">
              <X size={18} />
            </button>
            <h3 className="font-display text-2xl mb-1">Size Guide</h3>
            <p className="text-xs text-muted mb-6">{isShoe ? "Shoe sizing (EU / UK / US)" : "Clothing sizing (inches)"}</p>

            {isShoe ? (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ink/10 text-left text-xs uppercase tracking-wide text-muted">
                    <th className="pb-2">EU</th>
                    <th className="pb-2">UK</th>
                    <th className="pb-2">US</th>
                  </tr>
                </thead>
                <tbody>
                  {SHOE_SIZES.map((s) => (
                    <tr key={s.eu} className="border-b border-ink/5">
                      <td className="py-2">{s.eu}</td>
                      <td className="py-2">{s.uk}</td>
                      <td className="py-2">{s.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ink/10 text-left text-xs uppercase tracking-wide text-muted">
                    <th className="pb-2">Size</th>
                    <th className="pb-2">Chest</th>
                    <th className="pb-2">Waist</th>
                  </tr>
                </thead>
                <tbody>
                  {CLOTHING_SIZES.map((s) => (
                    <tr key={s.size} className="border-b border-ink/5">
                      <td className="py-2">{s.size}</td>
                      <td className="py-2">{s.chest}</td>
                      <td className="py-2">{s.waist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <p className="text-xs text-muted mt-5">
              Between sizes? We recommend sizing up. Message us on WhatsApp for a personal fit check.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
