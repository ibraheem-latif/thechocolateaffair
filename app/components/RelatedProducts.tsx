import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';

interface RelatedProductsProps {
  products: Product[];
  categorySlug: string;
  currentProductSlug: string;
}

export default function RelatedProducts({
  products,
  categorySlug,
  currentProductSlug,
}: RelatedProductsProps) {
  const related = products
    .filter((p) => p.slug !== currentProductSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div>
      {/* Section heading */}
      <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-5">
            You Might Also Like
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-sand" />
            <div className="w-2 h-2 rounded-full bg-rose-gold" />
            <div className="w-10 h-px bg-sand" />
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((product) => (
            <Link
              key={product.slug}
              href={`/${categorySlug}/${product.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-sand/40 card-hover block"
            >
              <div className="relative h-48 overflow-hidden bg-champagne">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-espresso text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-5 flex items-center justify-between">
                <h3 className="font-serif text-sm font-semibold text-espresso leading-snug">
                  {product.name}
                </h3>
                <p className="text-rose-gold font-bold text-base flex-shrink-0 ml-3">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
}
