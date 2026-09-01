import { MessageCircle, Instagram, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact — Gentwears",
  description: "Reach Gentwears via WhatsApp, email, Instagram, or TikTok. Store location and business hours.",
};

function TikTokIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const CONTACT_CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+234 905 324 7629",
    href: "https://wa.me/2349053247629",
    accent: "bg-[#25D366] text-white",
  },
  {
    icon: Mail,
    label: "Email",
    value: "gentwears22@gmail.com",
    href: "mailto:gentwears22@gmail.com",
    accent: "border border-ink/20 hover:bg-ink hover:text-ivory",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@_gentwears",
    href: "https://instagram.com/_gentwears",
    accent: "border border-ink/20 hover:bg-ink hover:text-ivory",
  },
  {
    icon: TikTokIcon,
    label: "TikTok",
    value: "@_gentwears",
    href: "https://www.tiktok.com/@_gentwears",
    accent: "border border-ink/20 hover:bg-ink hover:text-ivory",
  },
];

const BUSINESS_HOURS = [
  { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-5 md:px-8 py-20">
      <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">Get in Touch</p>
      <h1 className="font-display text-4xl md:text-5xl mb-6">Contact Gentwears</h1>
      <p className="text-stone max-w-lg mb-14">
        Questions about sizing, an order, or a custom request? Reach us on any channel below,
        WhatsApp gets the fastest response.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        {CONTACT_CHANNELS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 px-6 py-5 transition-colors ${c.accent}`}
          >
            <c.icon size={22} />
            <div>
              <p className="text-xs tracking-[0.15em] uppercase opacity-70">{c.label}</p>
              <p className="text-sm font-medium">{c.value}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-14">
        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-3 text-gold">
              <MapPin size={18} />
              <p className="text-xs tracking-[0.2em] uppercase">Studio Location</p>
            </div>
            <p className="text-stone leading-relaxed">
              Gentwears Studio<br />
              Lagos, Nigeria<br />
              (Showroom visits by appointment, message us on WhatsApp to book)
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3 text-gold">
              <Clock size={18} />
              <p className="text-xs tracking-[0.2em] uppercase">Business Hours</p>
            </div>
            <div className="space-y-1">
              {BUSINESS_HOURS.map((h) => (
                <div key={h.day} className="flex justify-between text-sm text-stone max-w-xs">
                  <span>{h.day}</span>
                  <span className="text-ink">{h.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-3">
              WhatsApp messages sent outside business hours are answered the next business day.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
