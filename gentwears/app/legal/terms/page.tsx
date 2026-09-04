export const metadata = { title: "Terms & Conditions — Gentwears" };

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl mb-3">Terms & Conditions</h1>
      <p className="text-xs text-muted mb-10">Last updated: July 2026</p>

      <div className="space-y-8 text-stone leading-relaxed">
        <div>
          <h2 className="font-display text-xl text-ink mb-2">1. Overview</h2>
          <p>
            These Terms & Conditions govern your use of the Gentwears website and any purchases
            made through it. By using this site, you agree to these terms.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">2. Products & Pricing</h2>
          <p>
            All prices are listed in Nigerian Naira (₦) and are subject to change without notice.
            We make reasonable efforts to display accurate product information, but errors may
            occasionally occur, in which case we&apos;ll notify you before processing your order.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">3. Orders</h2>
          <p>
            Placing an order constitutes an offer to purchase. We reserve the right to refuse or
            cancel any order, including in cases of suspected fraud, pricing errors, or stock
            unavailability.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">4. Payment</h2>
          <p>
            Payment must be received in full before an order is processed and shipped, unless
            otherwise agreed.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">5. Shipping & Returns</h2>
          <p>
            Shipping and returns are governed by our{" "}
            <a href="/legal/shipping" className="underline text-ink hover:text-gold">Shipping Policy</a>{" "}
            and{" "}
            <a href="/legal/returns" className="underline text-ink hover:text-gold">Returns Policy</a>.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">6. Intellectual Property</h2>
          <p>
            All content on this site, including images, text, and the Gentwears name and
            branding, is the property of Gentwears and may not be reproduced without permission.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">7. Limitation of Liability</h2>
          <p>
            Gentwears is not liable for indirect or consequential damages arising from the use of
            this site or its products, to the fullest extent permitted by law.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">8. Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the site after changes
            constitutes acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">9. Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:gentwears22@gmail.com" className="underline text-ink hover:text-gold">
              gentwears22@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
