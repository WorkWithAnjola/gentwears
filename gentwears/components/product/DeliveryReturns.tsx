"use client";

import { useState } from "react";
import { ChevronDown, Truck, RefreshCw } from "lucide-react";

function AccordionItem({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/10">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="flex items-center gap-2.5 text-sm font-medium">
          <Icon size={16} className="text-gold" /> {title}
        </span>
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-4 text-sm text-stone leading-relaxed">{children}</div>}
    </div>
  );
}

export default function DeliveryReturns() {
  return (
    <div className="mt-2">
      <AccordionItem icon={Truck} title="Delivery Information">
        <p className="mb-2">
          Orders within Lagos are delivered in 1 to 2 business days. Nationwide delivery across
          Nigeria takes 3 to 5 business days.
        </p>
        <p>Free delivery within Lagos on orders over ₦75,000. A flat ₦3,500 fee applies below that threshold.</p>
      </AccordionItem>
      <AccordionItem icon={RefreshCw} title="Returns & Exchanges">
        <p className="mb-2">
          Items can be exchanged within 7 days of delivery, provided they are unworn and in original
          packaging with tags attached.
        </p>
        <p>
          To start a return, message us on WhatsApp with your order number. See our full{" "}
          <a href="/legal/returns" className="underline text-ink hover:text-gold">Returns Policy</a> for details.
        </p>
      </AccordionItem>
    </div>
  );
}
