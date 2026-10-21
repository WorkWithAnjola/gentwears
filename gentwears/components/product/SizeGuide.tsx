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
            
            <h3 className="text-lg font-display mb-2">Footwear Size Guide</h3>
            <p className="text-xs text-muted mb-4">Standard US Sizing</p>
            
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="pb-2 font-medium">US Size</th>
                  <th className="pb-2 font-medium">UK Size</th>
                  <th className="pb-2 font-medium">EU Size</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                <tr>
                  <td className="py-2">US 8</td>
                  <td className="py-2">7</td>
                  <td className="py-2">41</td>
                </tr>
                <tr>
                  <td className="py-2">US 8.5</td>
                  <td className="py-2">7.5</td>
                  <td className="py-2">42</td>
                </tr>
                <tr>
                  <td className="py-2">US 9</td>
                  <td className="py-2">8</td>
                  <td className="py-2">42.5</td>
                </tr>
                <tr>
                  <td className="py-2">US 9.5</td>
                  <td className="py-2">8.5</td>
                  <td className="py-2">43</td>
                </tr>
                <tr>
                  <td className="py-2">US 10</td>
                  <td className="py-2">9</td>
                  <td className="py-2">44</td>
                </tr>
                <tr>
                  <td className="py-2">US 10.5</td>
                  <td className="py-2">9.5</td>
                  <td className="py-2">44.5</td>
                </tr>
                <tr>
                  <td className="py-2">US 11</td>
                  <td className="py-2">10</td>
                  <td className="py-2">45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}