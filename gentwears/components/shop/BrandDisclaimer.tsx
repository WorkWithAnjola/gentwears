export default function BrandDisclaimer({ brand }: { brand: string }) {
  return (
    <p className="text-xs text-muted border-l-2 border-ink/15 pl-3 max-w-lg mb-10">
      Gentwears is an independent retailer and is not affiliated with, endorsed by, or an
      authorized retailer of {brand}. {brand} and related marks are trademarks of their
      respective owners.
    </p>
  );
}
