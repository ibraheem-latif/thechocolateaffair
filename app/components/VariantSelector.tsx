'use client';

import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { getOrderDmUrl } from '@/lib/constants';

interface ProductVariant {
  label: string;
  price: string;
}

interface VariantSelectorProps {
  variants: ProductVariant[];
  defaultPrice: string;
  productName: string;
}

export default function VariantSelector({
  variants,
  defaultPrice,
  productName,
}: VariantSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const hasVariants = variants.length > 0;
  const displayPrice = hasVariants ? variants[selectedIndex].price : defaultPrice;
  const selectedLabel = hasVariants ? variants[selectedIndex].label : undefined;
  const isDmPrice = displayPrice.toLowerCase() === 'dm for price';

  const orderUrl = getOrderDmUrl(productName, selectedLabel);

  return (
    <div className="space-y-5">
      {/* Variant pills */}
      {hasVariants && (
        <div className="flex flex-wrap gap-2">
          {variants.map((variant, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={variant.label}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`
                  min-h-[48px] min-w-[48px] rounded-full border-2 px-5 py-2.5
                  text-sm font-medium transition-all duration-200
                  ${
                    isSelected
                      ? 'border-rose-gold bg-champagne text-espresso font-bold shadow-sm'
                      : 'border-sand bg-white text-mocha hover:border-rose-gold/50 hover:bg-champagne/30'
                  }
                `}
                aria-pressed={isSelected}
              >
                {variant.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Price display */}
      <div className="pt-1">
        {isDmPrice ? (
          <p className="text-lg italic text-dusty-mocha">DM for price</p>
        ) : (
          <p className="text-3xl font-bold text-espresso">{displayPrice}</p>
        )}
      </div>

      {/* Order CTA */}
      <a
        href={orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex min-h-[48px] items-center justify-center gap-2.5
          rounded-full bg-rose-gold px-8 py-4 text-base font-semibold
          text-white shadow-md transition-all duration-200
          hover:bg-rose-gold-light hover:shadow-lg
          active:scale-[0.98]
        "
      >
        <ShoppingBag className="h-5 w-5" />
        Order on Instagram
      </a>
    </div>
  );
}
