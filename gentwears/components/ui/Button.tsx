import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "gold" | "ghost";
  children: ReactNode;
}

const styles = {
  solid: "bg-ink text-ivory hover:bg-gold hover:text-ink",
  outline: "border border-ink text-ink hover:bg-ink hover:text-ivory",
  gold: "bg-gold text-ink hover:bg-ink hover:text-ivory",
  ghost: "border border-ivory/40 text-ivory hover:bg-ivory hover:text-ink",
};

export default function Button({ variant = "solid", children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`font-body text-xs tracking-[0.15em] uppercase px-7 py-3.5 transition-all duration-300 inline-flex items-center justify-center gap-2 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
