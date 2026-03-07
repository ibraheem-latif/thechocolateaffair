'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { getOrderDmUrl } from '@/lib/constants';

interface Product {
  name: string;
  price: string;
  badge: string | null;
  badgeBg: string;
  gradientFrom: string;
  gradientTo: string;
  deco: string;
  image: string;
  alt: string;
}

const products: Product[] = [
  {
    name: 'Birthday Pink Heart Chocolate Box',
    price: '£50',
    badge: 'Best Seller',
    badgeBg: 'bg-espresso',
    gradientFrom: '#2C1F1A',
    gradientTo: '#5E4A3C',
    deco: '#8D6F57',
    image: '/images/chocolate-boxes/personalised-birthday-pink-heart-chocolate-box.jpeg',
    alt: 'Personalised birthday pink heart chocolate box with white and pink dipped strawberries and gold sprinkles',
  },
  {
    name: 'Luxury Mixed Treat Box',
    price: 'DM for price',
    badge: 'Premium',
    badgeBg: 'bg-rich-amber',
    gradientFrom: '#6B5148',
    gradientTo: '#9B8574',
    deco: '#F5E1D0',
    image: '/images/treat-boxes/luxury-mixed-treat-box-chocolate-strawberries-dates.jpeg',
    alt: 'Luxury mixed treat box with chocolate-dipped strawberries, assorted chocolate-covered dates, and white chocolate decorations',
  },
  {
    name: "Mother's Day Heart Chocolate Box",
    price: '£50',
    badge: 'Popular',
    badgeBg: 'bg-rose-gold',
    gradientFrom: '#5E4A3C',
    gradientTo: '#8D6F57',
    deco: '#C9918A',
    image: '/images/chocolate-boxes/personalised-mothers-day-heart-chocolate-box-strawberries.jpeg',
    alt: "Personalised Mother's Day heart-shaped chocolate box filled with pink-dipped strawberries and gold butterfly decorations",
  },
  {
    name: 'Decorated Strawberries Box of 12 with Mini Spoons',
    price: '£22',
    badge: null,
    badgeBg: '',
    gradientFrom: '#C9918A',
    gradientTo: '#D4A89E',
    deco: '#F5E1D0',
    image: '/images/sweet-treats/handcrafted-pink-purple-chocolate-dipped-strawberries-floral.jpeg',
    alt: 'Handcrafted pink and purple chocolate dipped strawberries with floral and butterfly decorations',
  },
  {
    name: 'Blue Chocolate Treat Box',
    price: 'DM for price',
    badge: 'New',
    badgeBg: 'bg-rose-gold',
    gradientFrom: '#8D6F57',
    gradientTo: '#5E4A3C',
    deco: '#BCA89F',
    image: '/images/treat-boxes/blue-chocolate-treat-box-strawberries-dates-roses.jpeg',
    alt: 'Blue-themed luxury chocolate treat box with drizzled strawberries, chocolate roses, and assorted chocolate-covered dates',
  },
  {
    name: "'I Love You' Heart Chocolate Box",
    price: '£45',
    badge: null,
    badgeBg: '',
    gradientFrom: '#2C1F1A',
    gradientTo: '#6B5148',
    deco: '#D4A89E',
    image: '/images/chocolate-boxes/i-love-you-heart-chocolate-box-truffles.jpeg',
    alt: "'I Love You' dark chocolate heart box filled with handcrafted truffles, white chocolate spoons, and butterfly decorations",
  },
];

export default function Products() {
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  // Use a ref so scroll/resize callbacks always read the latest value without stale closures
  const visibleCountRef = useRef(1);

  const measureVisible = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return;
    const trackWidth = track.getBoundingClientRect().width;
    const cardWidth = (track.children[0] as HTMLElement).getBoundingClientRect().width;
    if (cardWidth === 0) return;
    const count = Math.max(1, Math.round(trackWidth / cardWidth));
    visibleCountRef.current = count;
    setVisibleCount(count);
  }, []);

  const scrollToPage = useCallback((page: number) => {
    const track = trackRef.current;
    if (!track) return;
    const vc = visibleCountRef.current;
    const pageCount = Math.ceil(products.length / vc);
    const clamped = Math.max(0, Math.min(pageCount - 1, page));
    const card = track.children[clamped * vc] as HTMLElement | undefined;
    if (!card) return;
    const offset = card.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    track.scrollTo({ left: offset, behavior: 'smooth' });
    setCurrentPage(clamped);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const trackLeft = track.getBoundingClientRect().left;
      let closestCard = 0;
      let minDist = Infinity;
      Array.from(track.children).forEach((child, i) => {
        const dist = Math.abs((child as HTMLElement).getBoundingClientRect().left - trackLeft);
        if (dist < minDist) { minDist = dist; closestCard = i; }
      });
      setCurrentPage(Math.floor(closestCard / visibleCountRef.current));
    };

    const onResize = () => {
      measureVisible();
      setCurrentPage(0);
      track.scrollTo({ left: 0, behavior: 'instant' as ScrollBehavior });
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    measureVisible();

    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [measureVisible]);

  const pageCount = Math.ceil(products.length / visibleCount);

  return (
    <section id="products" className="min-h-screen bg-vanilla flex items-center py-16">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.35em] text-rose-gold font-semibold mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-5">
            Featured Products
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-sand" />
            <div className="w-2 h-2 rounded-full bg-rose-gold" />
            <div className="w-10 h-px bg-sand" />
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            {products.map((product, index) => (
              <div
                key={product.name}
                className="flex-shrink-0 snap-start w-[82%] sm:w-[46%] lg:w-[calc(33.333%-14px)] group bg-white rounded-2xl overflow-hidden border border-sand/40 card-hover"
              >
                <div
                  className="relative h-56 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${product.gradientFrom} 0%, ${product.gradientTo} 100%)` }}
                >
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 33vw"
                    priority={index < 3}
                  />
                  <div
                    className="absolute inset-0 z-[1]"
                    style={{ background: `linear-gradient(135deg, ${product.gradientFrom}40 0%, ${product.gradientTo}20 100%)` }}
                  />
                  {product.badge && (
                    <span className={`absolute top-4 left-4 ${product.badgeBg} text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wider`}>
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-espresso/85 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
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
                  <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-10 z-[2]" style={{ background: product.deco }} />
                  <div className="absolute top-4 right-6 w-16 h-16 rounded-full opacity-[0.07] z-[2]" style={{ background: product.deco }} />
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-sm font-semibold text-espresso leading-snug mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-dusty-mocha">Personalised gift</p>
                  </div>
                  <p className="text-rose-gold font-bold text-base flex-shrink-0 ml-3">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls: arrows + one dot per page */}
        <div className="flex items-center justify-center gap-5 mt-8">
          <button
            onClick={() => scrollToPage(currentPage - 1)}
            disabled={currentPage === 0}
            aria-label="Previous"
            className="w-10 h-10 rounded-full bg-white border border-sand/60 shadow-sm flex items-center justify-center transition-all duration-200 text-espresso hover:bg-espresso hover:text-white hover:border-espresso disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-espresso disabled:hover:border-sand/60"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentPage ? 'w-6 bg-rose-gold' : 'w-2 bg-sand hover:bg-dusty-mocha/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToPage(currentPage + 1)}
            disabled={currentPage === pageCount - 1}
            aria-label="Next"
            className="w-10 h-10 rounded-full bg-white border border-sand/60 shadow-sm flex items-center justify-center transition-all duration-200 text-espresso hover:bg-espresso hover:text-white hover:border-espresso disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-espresso disabled:hover:border-sand/60"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="text-center mt-8">
          <a
            href="#shop"
            className="inline-flex items-center gap-2.5 px-10 py-4 border-2 border-espresso text-espresso rounded-full text-sm font-semibold tracking-wider hover:bg-espresso hover:text-white transition-all duration-300"
          >
            Browse All Categories
            <span>&uarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
