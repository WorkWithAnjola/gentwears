"use client";

interface ShopFiltersProps {
  category: string;
  setCategory: (c: string) => void;
}

export default function ShopFilters({ category, setCategory }: ShopFiltersProps) {
  return (
    <aside className="md:w-56 flex-shrink-0">
      <div className="mb-8">
        <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Category</p>
        {["All", "Clothing", "Shoes"].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`block w-full text-left py-1.5 text-sm ${
              category === c ? "text-gold font-medium" : "text-ink/70 hover:text-ink"
            }`}
          >
            {c === "All" ? "All Products" : c}
          </button>
        ))}
      </div>
      <div className="mb-8">
        <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Collection</p>
        {["Signature", "New Arrivals"].map((c) => (
          <p key={c} className="py-1.5 text-sm text-ink/70">{c}</p>
        ))}
      </div>
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Price</p>
        <p className="text-sm text-ink/70">₦38,000 — ₦165,000</p>
      </div>
    </aside>
  );
}
