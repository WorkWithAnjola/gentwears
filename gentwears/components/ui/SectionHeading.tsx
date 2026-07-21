interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  dark?: boolean;
}

export default function SectionHeading({ eyebrow, title, dark }: SectionHeadingProps) {
  return (
    <div className="mb-10 animate-fadeUp">
      {eyebrow && (
        <p className="font-body text-xs tracking-[0.25em] uppercase mb-3 text-gold">{eyebrow}</p>
      )}
      <h2
        className={`relative inline-block font-display text-3xl md:text-5xl font-medium after:content-[''] after:absolute after:left-0 after:-bottom-2.5 after:h-0.5 after:w-full after:origin-left after:animate-sew after:[background-image:repeating-linear-gradient(90deg,#B98D3E_0_10px,transparent_10px_18px)] ${
          dark ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
