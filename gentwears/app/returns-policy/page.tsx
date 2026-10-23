export const metadata = {
  title: "Returns & Exchanges — Gentwears",
  description: "Learn about Gentwears' return and exchange policy for footwear and menswear.",
};

export default function ReturnsPage() {
  return (
    <section className="max-w-4xl mx-auto px-5 md:px-8 py-20 text-ink">
      <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">Customer Care</p>
      <h1 className="font-display text-4xl md:text-5xl mb-8">Returns & Exchanges Policy</h1>
      
      <div className="space-y-8 text-stone leading-relaxed">
        <div>
          <h2 className="text-ink font-medium text-lg mb-2">1. Overview & Exchange Window</h2>
          <p>
            Items can be exchanged within <strong>7 days of delivery</strong>, provided they are unworn, unwashed, and in their original packaging with all tags attached. Because we handle high-value menswear and footwear, items showing signs of wear or missing packaging will not be accepted for exchange.
          </p>
        </div>

        <div>
          <h2 className="text-ink font-medium text-lg mb-2">2. How to Start a Return or Exchange</h2>
          <p>
            To initiate an exchange or report an issue with your order, please do not ship items back without notice. Instead, reach out directly via WhatsApp at <a href="https://wa.me/2349053247629" target="_blank" rel="noopener noreferrer" className="text-ink underline hover:text-gold">+234 905 324 7629</a> with your order number and photos of the item. Our team will guide you through the process swiftly.
          </p>
        </div>

        <div>
          <h2 className="text-ink font-medium text-lg mb-2">3. Shipping Costs for Returns</h2>
          <p>
            Customers are responsible for shipping fees associated with returning or exchanging items, unless the item delivered was incorrect or defective upon arrival. 
          </p>
        </div>

        <div>
          <h2 className="text-ink font-medium text-lg mb-2">4. Refunds</h2>
          <p>
            We operate an exchange-first policy for sizes and alternative pieces. Direct monetary refunds are evaluated on a case-by-case basis for exceptional circumstances.
          </p>
        </div>

        <div className="pt-6 border-t border-stone/20">
          <p className="text-sm">
            Have questions? Contact us at <a href="mailto:mygentwears@gmail.com" className="text-ink underline hover:text-gold">mygentwears@gmail.com</a> or message us on WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
