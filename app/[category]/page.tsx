import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowLeft, ChevronRight } from 'lucide-react';
import { getCategoryBySlug, getAllCategorySlugs } from '@/lib/products';
import { INSTAGRAM_DM_URL, getOrderDmUrl } from '@/lib/constants';

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ category: slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const cat = getCategoryBySlug(params.category);
  if (!cat) return {};
  return {
    title: `${cat.title} — The Chocolate Affair`,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = getCategoryBySlug(params.category);
  if (!cat) notFound();

  return (
    <>
      {/* Header */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/#shop" className="hover:text-white/70 transition-colors">
              Shop
            </Link>
            <ChevronRight size={12} />
            <span className="text-rose-gold-light">{cat.title}</span>
          </nav>

          <p className="text-[10px] uppercase tracking-[0.35em] text-rose-gold font-semibold mb-3">
            {cat.subtitle}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-5">
            {cat.title}
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl leading-relaxed">
            {cat.description}
          </p>
          <p className="mt-4 text-white/30 text-xs">
            {cat.products.length} {cat.products.length === 1 ? 'product' : 'products'}
          </p>
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

      {/* Product Grid */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.products.map((product, index) => (
              <div
                key={product.name}
                className="group bg-white rounded-2xl overflow-hidden border border-sand/40 card-hover"
              >
                <div className="relative h-64 overflow-hidden bg-champagne">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-espresso text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wider">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-espresso/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                    <a
                      href={getOrderDmUrl(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-espresso px-6 py-3 rounded-full text-xs font-bold tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-champagne uppercase"
                    >
                      <ShoppingBag size={15} />
                      DM Us to Order
                    </a>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-sm font-semibold text-espresso leading-snug mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-dusty-mocha">Personalised gift</p>
                  </div>
                  <p className="text-rose-gold font-bold text-base flex-shrink-0 ml-3">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Back + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link
              href="/#shop"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-espresso text-espresso rounded-full text-sm font-semibold tracking-wider hover:bg-espresso hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={16} />
              All Categories
            </Link>
            <a
              href={INSTAGRAM_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-rose-gold hover:bg-rose-gold-light text-white rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-rose-gold/25"
            >
              <ShoppingBag size={16} />
              Order via Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
