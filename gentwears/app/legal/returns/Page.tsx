export const metadata = { title: "Returns Policy — Gentwears" };

export default function ReturnsPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl mb-10">Returns & Exchanges Policy</h1>

      <div className="space-y-8 text-stone leading-relaxed">
        <div>
          <h2 className="font-display text-xl text-ink mb-2">Eligibility</h2>
          <p>
            Items may be exchanged within 7 days of delivery, provided they are unworn, unwashed,
            and returned with original tags and packaging intact.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Non-Returnable Items</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Items marked as final sale</li>
            <li>Worn or damaged items not caused by a manufacturing defect</li>
            <li>Items returned after the 7-day window</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">How to Start a Return</h2>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Message us on WhatsApp with your order number and reason for return</li>
            <li>We&apos;ll confirm eligibility and provide return instructions</li>
            <li>Ship the item back or arrange a pickup, depending on your location</li>
            <li>Once received and inspected, we&apos;ll process your exchange or refund</li>
          </ol>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Refunds</h2>
          <p>
            Refunds are issued to the original payment method within 5 to 7 business days of the
            returned item being received and approved. Delivery fees are non-refundable unless the
            return is due to our error (wrong item, defective product).
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Exchanges</h2>
          <p>
            Need a different size? Let us know when you start your return, we&apos;ll hold the
            replacement item for you where stock allows.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Questions</h2>
          <p>
            Reach out via{" "}
            <a href="https://wa.me/2349053247629" className="underline text-ink hover:text-gold">
              WhatsApp
            </a>{" "}
            and we&apos;ll walk you through it.
          </p>
        </div>
      </div>
    </section>
  );
}
