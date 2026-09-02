import { MessageCircle, Instagram } from "lucide-react";

export default function ProductReviews() {
  return (
    <div className="mt-16 pt-16 border-t border-ink/10">
      <h3 className="font-display text-2xl mb-3">Customer Reviews</h3>
      <div className="border border-ink/10 p-8 text-center max-w-md">
        <p className="font-display text-lg mb-2">Be the first to review this piece</p>
        <p className="text-sm text-stone mb-6">
          This is a new arrival. Reviews from real customers will appear here as orders come in.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/2349053247629"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs tracking-[0.15em] uppercase px-5 py-3 hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={14} /> Share Your Feedback
          </a>
          <a
            href="https://instagram.com/_gentwears"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-ink/20 text-xs tracking-[0.15em] uppercase px-5 py-3 hover:bg-ink hover:text-ivory transition-colors"
          >
            <Instagram size={14} /> Tag Us After Your Order
          </a>
        </div>
      </div>
    </div>
  );
}
