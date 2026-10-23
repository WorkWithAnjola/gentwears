import { useState } from "react";
import { Product } from "@/types";

export default function SizeGuide({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="text-xs tracking-[0.2em] uppercase text-muted underline hover:text-ink"
      >
        Size Guide
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-md bg-ivory p-6 rounded shadow-lg">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-ink hover:text-muted text-lg font-bold"
            >
              &times;
            </button>
            
            <h3 className="text-lg font-display mb-1">Footwear Size Guide</h3>
            <p className="text-xs text-muted mb-4">Standard European Sizing (EU 39 – 47)</p>
            
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="pb-2 font-medium">EU Size</th>
                  <th className="pb-2 font-medium">Fit / Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {["39", "40", "41", "42", "43", "44", "45", "46", "47"].map((size) => (
                  <tr key={size}>
                    <td className="py-2 font-medium">EU {size}</td>
                    <td className="py-2 text-muted">Standard True-to-Size Fit</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
