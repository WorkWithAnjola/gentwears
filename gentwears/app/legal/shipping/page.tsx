export const metadata = { title: "Shipping Policy — Gentwears" };

export default function ShippingPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl mb-10">Shipping Policy</h1>

      <div className="space-y-8 text-stone leading-relaxed">
        <div>
          <h2 className="font-display text-xl text-ink mb-2">Delivery Areas</h2>
          <p>We currently deliver across Nigeria. International shipping is not yet available but is planned for a future release.</p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Delivery Times</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Lagos: 1 to 2 business days</li>
            <li>Other states in Nigeria: 3 to 5 business days</li>
            <li>Remote areas may take up to 7 business days</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Delivery Fees</h2>
          <p>
            Free delivery within Lagos on orders over ₦75,000. Orders below this threshold incur a
            flat ₦3,500 delivery fee. Delivery fees outside Lagos are calculated at checkout based
            on location.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Order Tracking</h2>
          <p>
            Once your order ships, you&apos;ll receive tracking details via WhatsApp or email. You
            can also message us directly for a status update at any time.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Delays</h2>
          <p>
            While we aim to meet the timelines above, factors like weather, courier volume, or
            incorrect delivery details may occasionally cause delays. We&apos;ll notify you if your
            order is significantly delayed.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Questions</h2>
          <p>
            Reach out via{" "}
            <a href="https://wa.me/2349053247629" className="underline text-ink hover:text-gold">
              WhatsApp
            </a>{" "}
            for any shipping-related questions.
          </p>
        </div>
      </div>
    </section>
  );
}
