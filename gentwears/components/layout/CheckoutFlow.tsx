"use client";

import { formatNaira } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface CheckoutFlowProps {
  step: number;
  setStep: (n: number) => void;
  total: number;
  onFinish: () => void;
}

const STEPS = ["Shipping", "Payment", "Review"];

export default function CheckoutFlow({ step, setStep, total, onFinish }: CheckoutFlowProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="flex items-center gap-2 mb-8 text-xs tracking-[0.15em] uppercase">
        {STEPS.map((s, i) => (
          <span key={s} className="flex items-center gap-2">
            <span className={i + 1 <= step ? "text-gold" : "text-muted"}>{s}</span>
            {i < STEPS.length - 1 && <span className="text-muted">—</span>}
          </span>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <input placeholder="Full Name" className="w-full border border-ink/20 px-4 py-3 bg-transparent text-sm" />
          <input placeholder="Delivery Address" className="w-full border border-ink/20 px-4 py-3 bg-transparent text-sm" />
          <input placeholder="Phone Number" className="w-full border border-ink/20 px-4 py-3 bg-transparent text-sm" />
          <Button variant="solid" className="w-full mt-4" onClick={() => setStep(2)}>Continue to Payment</Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <input placeholder="Card Number" className="w-full border border-ink/20 px-4 py-3 bg-transparent text-sm" />
          <div className="flex gap-4">
            <input placeholder="MM/YY" className="w-full border border-ink/20 px-4 py-3 bg-transparent text-sm" />
            <input placeholder="CVC" className="w-full border border-ink/20 px-4 py-3 bg-transparent text-sm" />
          </div>
          <Button variant="solid" className="w-full mt-4" onClick={() => setStep(3)}>Review Order</Button>
        </div>
      )}

      {step === 3 && (
        <div>
          <div className="flex justify-between font-display text-xl mb-6 pb-6 border-b border-ink/10">
            <span>Total</span>
            <span>{formatNaira(total)}</span>
          </div>
          <Button variant="gold" className="w-full" onClick={onFinish}>Place Order</Button>
        </div>
      )}
    </div>
  );
}
