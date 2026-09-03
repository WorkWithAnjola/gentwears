export const metadata = { title: "Privacy Policy — Gentwears" };

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl mb-3">Privacy Policy</h1>
      <p className="text-xs text-muted mb-10">Last updated: July 2026</p>

      <div className="space-y-8 text-stone leading-relaxed">
        <div>
          <h2 className="font-display text-xl text-ink mb-2">Information We Collect</h2>
          <p>
            When you place an order or contact us, we may collect your name, phone number, email
            address, delivery address, and order details. We do not collect payment card details
            directly, these are processed securely by our payment partner.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To process and deliver your orders</li>
            <li>To communicate order updates via WhatsApp, email, or phone</li>
            <li>To respond to customer service inquiries</li>
            <li>To send occasional marketing updates, only if you&apos;ve subscribed to our newsletter</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We share order details only with the delivery
            couriers and payment processors necessary to fulfill your order.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Data Security</h2>
          <p>
            We take reasonable measures to protect your information. However, no method of
            transmission over the internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at
            any time by contacting us directly.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink mb-2">Contact</h2>
          <p>
            For privacy-related questions, email us at{" "}
            <a href="mailto:gentwears22@gmail.com" className="underline text-ink hover:text-gold">
              gentwears22@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
