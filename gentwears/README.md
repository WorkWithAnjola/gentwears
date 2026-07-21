# Gentwears — Premium Menswear & Unisex Footwear

A production-ready e-commerce storefront built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Next.js 14** — App Router, file-based routing, image optimization
- **TypeScript** — strict typing across components, context, and data
- **Tailwind CSS** — utility-first styling with a custom Gentwears design token set
- **lucide-react** — icon set
- **React Context** — Cart and Wishlist state (no external state library needed)

## Folder Structure

```
gentwears/
├── app/                        # Routes (App Router)
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── providers.tsx           # Wraps app in Cart/Wishlist context + Navbar/Footer
│   ├── globals.css             # Tailwind entrypoint + base styles
│   ├── page.tsx                # Homepage
│   ├── shop/page.tsx           # Shop page (filters, search, sort)
│   ├── product/[slug]/page.tsx # Dynamic product detail page
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page
│   └── wishlist/page.tsx       # Wishlist page
├── components/
│   ├── layout/                 # Navbar, MobileMenu, Footer, CartDrawer, CheckoutFlow
│   ├── ui/                     # Button, SectionHeading, ProductCard, QuickViewModal, StarRating
│   ├── home/                   # Hero, BrandStatement, CategoryGrid, ProductRow, CTABand, Reviews, Newsletter
│   ├── shop/                   # ShopFilters, ShopGrid, SearchBar
│   ├── product/                # ProductGallery, ProductInfo, RelatedProducts
│   └── contact/                # ContactForm
├── context/
│   ├── CartContext.tsx         # Cart state: add/remove/update qty/total
│   └── WishlistContext.tsx     # Wishlist state
├── data/
│   └── products.ts             # Product + review sample data
├── types/
│   └── index.ts                # Shared TypeScript interfaces
├── lib/
│   └── utils.ts                # formatNaira(), img() helpers
├── public/                     # Static assets (add real product photos here)
├── tailwind.config.ts          # Design tokens: colors, fonts, animations
├── next.config.js              # Image remote patterns config
└── package.json
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm run start
```

## Deployment

The easiest deploy path is **Vercel** (made by the Next.js team):

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com), sign in, click **"Add New Project"**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — leave all settings default
5. Click **Deploy**

Alternatively, deploy to **Netlify**, **Railway**, or any Node-compatible host using `npm run build && npm run start`.

## Replacing Placeholder Images

Product photography currently uses Unsplash stock images as placeholders (configured in `next.config.js` under `images.remotePatterns`). To use real Gentwears product photos:

1. Add your images to the `public/` folder (e.g. `public/products/blazer-1.jpg`)
2. In `data/products.ts`, change the `images` array values from Unsplash URLs to local paths, e.g. `"/products/blazer-1.jpg"`
3. If you host images elsewhere (e.g. a CDN or Shopify CDN), add that domain to `remotePatterns` in `next.config.js`

## Customizing Brand Details

- **Colors / fonts:** `tailwind.config.ts` — all brand tokens (`ink`, `ivory`, `sand`, `gold`, `stone`, `muted`) live here
- **Products:** `data/products.ts`
- **WhatsApp number:** `app/contact/page.tsx` — update the `wa.me` link
- **Site metadata (SEO):** `app/layout.tsx` and each page's `export const metadata`

## Notes on Checkout

The checkout flow (`components/layout/CheckoutFlow.tsx`) is a **UI-complete simulation** — it collects shipping/payment info and confirms an order, but is not wired to a real payment processor. To go live, integrate a provider such as **Paystack** or **Flutterwave** (popular for Nigerian e-commerce) at the "Place Order" step.
