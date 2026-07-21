"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Minus, Plus, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatNaira } from "@/lib/utils";
import Button from "@/components/ui/Button";
import CheckoutFlow from "./CheckoutFlow";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQty, removeFromCart, cartTotal, cartCount, clearCart } = useCart();
  const [step, setStep] = useState(0);

  if (!cartOpen) return null;

  const close = () => {
    setCartOpen(false);
    setStep(0);
  };

  return (
    <div className="fixed inset-0 z-[120] flex justify-end">
      <div className="absolute inset-0 bg-ink/50" onClick={close} />
      <div className="relative w-full max-w-md bg-ivory h-full flex flex-col animate-fadeUp">
        <div className="flex items-center justify-between p-6 border-b border-ink/10">
          <h3 className="font-display text-2xl">Your Bag ({cartCount})</h3>
          <button onClick={close} aria-label="Close cart"><X size={22} /></button>
        </div>

        {step === 0 && (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <p className="text-muted text-sm text-center py-16">Your bag is empty.</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="relative w-20 h-24 flex-shrink-0">
                      <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-display text-base">{item.name}</p>
                      <p className="text-xs text-muted mb-2">Size {item.size}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-ink/20">
                          <button onClick={() => updateQty(idx, -1)} className="p-1.5" aria-label="Decrease quantity"><Minus size={12} /></button>
                          <span className="w-7 text-center text-sm">{item.qty}</span>
                          <button onClick={() => updateQty(idx, 1)} className="p-1.5" aria-label="Increase quantity"><Plus size={12} /></button>
                        </div>
                        <p className="text-sm">{formatNaira(item.price * item.qty)}</p>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(idx)} className="text-muted hover:text-ink" aria-label="Remove item">
                      <X size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-6 border-t border-ink/10">
                <div className="flex justify-between mb-4 font-display text-lg">
                  <span>Subtotal</span>
                  <span>{formatNaira(cartTotal)}</span>
                </div>
                <Button variant="solid" className="w-full" onClick={() => setStep(1)}>
                  Checkout <ChevronRight size={14} />
                </Button>
              </div>
            )}
          </>
        )}

        {step > 0 && (
          <CheckoutFlow
            step={step}
            setStep={setStep}
            total={cartTotal}
            onFinish={() => {
              clearCart();
              close();
            }}
          />
        )}
      </div>
    </div>
  );
}
