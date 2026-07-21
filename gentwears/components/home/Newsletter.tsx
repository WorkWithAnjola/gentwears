"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-ink py-20">
      <div className="max-w-xl mx-auto text-center px-6">
        <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Stay in the Loop</p>
        <h2 className="font-display text-3xl text-ivory mb-6">Join the Gentwears List</h2>
        {done ? (
          <p className="text-ivory/80 text-sm">You&apos;re on the list — welcome to Gentwears.</p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ivory/30 px-4 py-3 text-ivory text-sm placeholder:text-ivory/40 focus:outline-none focus:border-gold"
            />
            <Button variant="gold" type="submit">Subscribe</Button>
          </form>
        )}
      </div>
    </section>
  );
}
