'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Edinburgh',
    review:
      "Ordered a personalised chocolate box for my mum's 60th birthday. She was absolutely speechless — the quality and presentation were stunning. Will definitely order again!",
    occasion: 'Birthday Gift',
    initials: 'SM',
    accentBg: 'bg-champagne',
    accentText: 'text-rose-gold',
  },
  {
    name: 'James & Laura',
    location: 'Glasgow',
    review:
      'Our wedding favours were perfect. Every guest commented on them — beautifully wrapped, delicious, and so thoughtful. The Chocolate Affair made our special day even more memorable.',
    occasion: 'Wedding Favours',
    initials: 'JL',
    accentBg: 'bg-shell',
    accentText: 'text-rose-gold',
  },
  {
    name: 'Mark T.',
    location: 'Aberdeen',
    review:
      'Used The Chocolate Affair for our company Christmas gifts this year. The branded boxes were exceptional — professional, luxurious, and clients loved them. Already planning for next year.',
    occasion: 'Corporate Gifts',
    initials: 'MT',
    accentBg: 'bg-vanilla',
    accentText: 'text-rich-amber',
  },
  {
    name: 'Emma K.',
    location: 'Stirling',
    review:
      'The custom photo chocolate bar I ordered for my partner was beyond expectations. The photo quality on the chocolate was incredible and it tasted amazing. Truly special.',
    occasion: 'Photo Bar',
    initials: 'EK',
    accentBg: 'bg-champagne',
    accentText: 'text-rose-gold',
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className="text-rose-gold fill-rose-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
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
    const pageCount = Math.ceil(testimonials.length / vc);
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

  const pageCount = Math.ceil(testimonials.length / visibleCount);

  return (
    <section className="min-h-screen bg-vanilla flex items-center py-16">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.35em] text-rose-gold font-semibold mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-5">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-px bg-sand" />
            <div className="w-2 h-2 rounded-full bg-rose-gold" />
            <div className="w-10 h-px bg-sand" />
          </div>

          <div className="inline-flex items-center gap-4 bg-champagne rounded-full px-7 py-3.5 border border-sand/50">
            <StarRow />
            <span className="text-sm font-bold text-espresso">4.9 / 5</span>
            <span className="w-px h-4 bg-sand" />
            <span className="text-xs text-mocha">500+ verified reviews</span>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            {testimonials.map(({ name, location, review, occasion, initials, accentBg, accentText }) => (
              <div
                key={name}
                className="flex-shrink-0 snap-start w-[88%] md:w-[calc(50%-10px)] bg-white rounded-2xl p-8 border border-sand/40 card-hover"
              >
                <StarRow />

                <blockquote className="mt-5 mb-7 text-mocha leading-relaxed text-sm md:text-base font-light">
                  &ldquo;{review}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${accentBg} flex items-center justify-center text-xs font-bold ${accentText} border border-sand/50`}>
                      {initials}
                    </div>
                    <div>
                      <p className="font-semibold text-espresso text-sm">{name}</p>
                      <p className="text-xs text-dusty-mocha">{location}</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-shell text-mocha px-3 py-1.5 rounded-full font-semibold uppercase tracking-wide border border-sand/40">
                    {occasion}
                  </span>
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

      </div>
    </section>
  );
}
