import { MessageCircle, Instagram, Twitter, Facebook } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact — Gentwears",
  description: "Get in touch with Gentwears via WhatsApp, email, or our contact form.",
};

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-5 md:px-8 py-20">
      <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">Get in Touch</p>
      <h1 className="font-display text-4xl md:text-5xl mb-14">Contact Gentwears</h1>

      <div className="grid md:grid-cols-2 gap-14">
        <div>
          <p className="text-sm text-stone leading-relaxed mb-8">
            Questions about sizing, an order, or a custom request? Reach us directly on WhatsApp for the
            fastest response, or send a message below.
          </p>

          <a
            href="https://wa.me/2349053247629"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 mb-10 hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>

          <div className="space-y-3 mb-10 text-sm text-stone">
            <p><span className="text-ink">Email:</span> hello@gentwears.com</p>
            <p><span className="text-ink">Phone:</span> +234 905 324 7629</p>
            <p><span className="text-ink">Studio:</span> Lagos, Nigeria</p>
          </div>

          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">Follow Us</p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-ivory transition-colors">
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
