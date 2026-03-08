'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMultiple = images.length > 1;

  // --- Mobile: sync dot indicator on scroll ---
  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setSelectedIndex(index);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // --- Mobile: tap dot to scroll ---
  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ left: index * container.offsetWidth, behavior: 'smooth' });
    setSelectedIndex(index);
  }, []);

  return (
    <div className="w-full">
      {/* ===== Desktop: hero image + thumbnail row ===== */}
      <div className="hidden md:block">
        {/* Hero image */}
        <div className="relative h-96 lg:h-[28rem] w-full rounded-2xl overflow-hidden bg-champagne">
          <Image
            src={images[selectedIndex]}
            alt={`${alt} — image ${selectedIndex + 1}`}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Thumbnails */}
        {isMultiple && (
          <div className="flex gap-3 mt-3">
            {images.map((src, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                aria-label={`View image ${index + 1}`}
                className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === selectedIndex
                    ? 'border-rose-gold ring-1 ring-rose-gold/30'
                    : 'border-sand hover:border-rose-gold/50'
                }`}
              >
                <Image
                  src={src}
                  alt={`${alt} — thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ===== Mobile: swipeable strip + dots ===== */}
      <div className="md:hidden">
        {/* Swipeable image strip */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-2xl"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-80 w-full flex-shrink-0 snap-center bg-champagne"
            >
              <Image
                src={src}
                alt={`${alt} — image ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        {isMultiple && (
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'w-6 h-2 bg-rose-gold'
                    : 'w-2 h-2 bg-sand hover:bg-rose-gold/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
