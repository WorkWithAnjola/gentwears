import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gentwears — Premium Menswear & Unisex Footwear",
  description:
    "Gentwears is a premium fashion brand offering stylish, modern menswear and unisex shoes. Confidence, elegance, and luxury lifestyle — dressed with intent.",
  keywords: ["Gentwears", "menswear", "premium fashion", "unisex shoes", "luxury clothing Nigeria"],
  openGraph: {
    title: "Gentwears — Premium Menswear & Unisex Footwear",
    description: "Dressed with intent. Premium menswear and unisex footwear from Gentwears.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
