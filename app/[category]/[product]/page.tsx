import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Sparkles, Info } from 'lucide-react';
import { getProductBySlug, getAllProductPaths } from '@/lib/products';
import ProductGallery from '@/app/components/ProductGallery';
import VariantSelector from '@/app/components/VariantSelector';
import RelatedProducts from '@/app/components/RelatedProducts';

export function generateStaticParams() {
  return getAllProductPaths();
}

export function generateMetadata({
  params,
}: {
  params: { category: string; product: string };
}): Metadata {
  const result = getProductBySlug(params.category, params.product);
  if (!result) return {};
  const { category, product } = result;
  return {
    title: `${product.name} — ${category.title} — The Chocolate Affair`,
    description:
      product.description ||
      `${product.name} — handcrafted personalised chocolate gift from The Chocolate Affair, Glasgow.`,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default function ProductPage({
  params,
}: {
  params: { category: string; product: string };
}) {
  const result = getProductBySlug(params.category, params.product);
  if (!result) notFound();

  const { category, product } = result;

  return (
    <>
      {/* Header */}
      <section
        className="relative pt-32 pb-12 overflow-hidden"
        style={{
          background:
            'linear-gradient(155deg, #0f0a08 0%, #1a1109 20%, #2C1F1A 50%, #3d2b24 75%, #5E4A3C 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link
              href={`/${category.slug}`}
              className="hover:text-white/70 transition-colors"
            >
              {category.title}
            </Link>
            <ChevronRight size={12} />
            <span className="text-rose-gold-light">{product.name}</span>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C360,55 720,5 1080,30 C1260,42 1380,20 1440,30 L1440,60 L0,60 Z"
              fill="#FFFBF5"
            />
          </svg>
        </div>
      </section>

      {/* Product Content */}
      <section className="bg-cream py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            {/* Gallery */}
            <div>
              <ProductGallery images={product.images} alt={product.alt} />
            </div>

            {/* Details */}
            <div className="flex flex-col">
              {product.badge && (
                <span className="inline-flex self-start bg-espresso text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  {product.badge}
                </span>
              )}

              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-espresso font-semibold mb-4 leading-tight">
                {product.name}
              </h1>

              <p className="text-dusty-mocha text-sm md:text-base leading-relaxed mb-6">
                {product.description}
              </p>

              {product.personalisation && (
                <div className="flex items-start gap-3 bg-champagne/50 border border-champagne rounded-xl p-4 mb-6">
                  <Sparkles
                    size={18}
                    className="text-rose-gold flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-espresso mb-1">
                      Personalisation
                    </p>
                    <p className="text-sm text-mocha leading-relaxed">
                      {product.personalisation}
                    </p>
                  </div>
                </div>
              )}

              <VariantSelector
                variants={product.variants}
                defaultPrice={product.price}
                productName={product.name}
              />
            </div>
          </div>

          {/* Notes */}
          {product.notes.length > 0 && (
            <div className="mt-12 max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Info size={16} className="text-dusty-mocha" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-dusty-mocha">
                  Good to Know
                </h3>
              </div>
              <ul className="space-y-2">
                {product.notes.map((note, i) => (
                  <li
                    key={i}
                    className="text-sm text-mocha leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sand flex-shrink-0 mt-2" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-cream pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <RelatedProducts
            products={category.products}
            categorySlug={category.slug}
            currentProductSlug={product.slug}
          />

          {/* Back link */}
          <div className="text-center mt-12">
            <Link
              href={`/${category.slug}`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-espresso text-espresso rounded-full text-sm font-semibold tracking-wider hover:bg-espresso hover:text-white transition-all duration-300"
            >
              ← Back to {category.title}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
