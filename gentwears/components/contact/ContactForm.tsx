"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-ink/10 p-8 text-center">
        <Check size={28} className="mx-auto mb-3 text-gold" />
        <p className="font-display text-xl mb-1">Message sent</p>
        <p className="text-sm text-muted">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
      <input required placeholder="Your Name" className="w-full border border-ink/20 px-4 py-3 bg-transparent text-sm" />
      <input required type="email" placeholder="Email Address" className="w-full border border-ink/20 px-4 py-3 bg-transparent text-sm" />
      <textarea required placeholder="Your Message" rows={5} className="w-full border border-ink/20 px-4 py-3 bg-transparent text-sm resize-none" />
      <Button variant="solid" type="submit" className="w-full">Send Message</Button>
    </form>
  );
}
