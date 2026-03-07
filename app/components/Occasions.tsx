import Image from 'next/image';
import Link from 'next/link';
import { INSTAGRAM_DM_URL } from '@/lib/constants';

interface Deco {
  w: number;
  h: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity: number;
}

interface Category {
  title: string;
  subtitle: string;
  href: string;
  gradient: string;
  image?: string;
  alt?: string;
  deco: Deco[];
  featured: boolean;
}

const categories: Category[] = [
  {
    title: 'Chocolate Boxes',
    subtitle: 'Heart boxes \u00b7 Square box \u00b7 Football box',
    href: '/chocolate-boxes',
    gradient: 'linear-gradient(145deg, rgba(15,7,5,0.6) 0%, rgba(44,21,9,0.55) 40%, rgba(92,48,24,0.45) 70%, rgba(141,90,48,0.4) 100%)',
    image: '/images/chocolate-boxes/i-love-you-heart-chocolate-box-truffles.jpeg',
    alt: 'Handcrafted I Love You heart chocolate box with dark and white chocolate dipped strawberries and truffles by The Chocolate Affair Glasgow',
    deco: [
      { w: 180, h: 180, top: '-20%', left: '-8%', opacity: 0.12 },
      { w: 120, h: 120, bottom: '10%', right: '-5%', opacity: 0.08 },
      { w: 60,  h: 60,  top: '30%',  right: '20%', opacity: 0.1 },
    ],
    featured: true,
  },
  {
    title: 'Cakes & Cupcakes',
    subtitle: 'Cakes \u00b7 Cakesicles \u00b7 Teacup cupcakes',
    href: '/cakes-cupcakes',
    gradient: 'linear-gradient(145deg, rgba(122,58,53,0.6) 0%, rgba(201,145,138,0.5) 45%, rgba(232,196,187,0.4) 80%, rgba(245,225,208,0.35) 100%)',
    image: '/images/cakes-cupcakes/bespoke-21st-birthday-white-chocolate-heart-cake-gold.jpeg',
    alt: 'Bespoke 21st birthday white chocolate heart cake with gold pearl cascade and glitter lettering',
    deco: [
      { w: 140, h: 140, top: '-10%', right: '-5%', opacity: 0.15 },
      { w: 80,  h: 80,  bottom: '20%', left: '10%', opacity: 0.1 },
    ],
    featured: false,
  },
  {
    title: 'Treat Boxes & Baskets',
    subtitle: 'Mix treat box \u00b7 Candy box \u00b7 Gift baskets',
    href: '/treat-boxes',
    gradient: 'linear-gradient(145deg, rgba(44,31,26,0.6) 0%, rgba(94,74,60,0.5) 50%, rgba(188,168,159,0.4) 100%)',
    image: '/images/treat-boxes/luxury-mixed-treat-box-chocolate-strawberries-dates.jpeg',
    alt: 'Luxury mixed treat box with chocolate-dipped strawberries and assorted chocolate-covered dates',
    deco: [
      { w: 100, h: 100, top: '10%', left: '-5%', opacity: 0.1 },
      { w: 160, h: 160, bottom: '-15%', right: '-8%', opacity: 0.08 },
    ],
    featured: false,
  },
  {
    title: 'Sweet Treats',
    subtitle: 'Truffles \u00b7 Fudge \u00b7 Strawberries \u00b7 Fruit platters',
    href: '/sweet-treats',
    gradient: 'linear-gradient(145deg, rgba(92,26,42,0.6) 0%, rgba(160,69,90,0.5) 40%, rgba(201,145,138,0.4) 75%, rgba(240,208,192,0.35) 100%)',
    image: '/images/sweet-treats/handcrafted-pink-purple-chocolate-dipped-strawberries-floral.jpeg',
    alt: 'Handcrafted pink and purple chocolate-dipped strawberries with floral and butterfly decorations',
    deco: [
      { w: 120, h: 120, top: '-8%', right: '15%', opacity: 0.12 },
      { w: 70,  h: 70,  bottom: '15%', left: '-5%', opacity: 0.1 },
    ],
    featured: false,
  },
  {
    title: 'Novelty & Themed',
    subtitle: 'Smash pi\u00f1ata \u00b7 Themed creations \u00b7 Baby items',
    href: '/novelty-themed',
    gradient: 'linear-gradient(145deg, rgba(26,15,26,0.6) 0%, rgba(61,31,53,0.5) 45%, rgba(122,58,96,0.45) 75%, rgba(201,97,138,0.4) 100%)',
    image: '/images/novelty-themed/ramadan-mubarak-crescent-moon-chocolate-gift-box.jpeg',
    alt: 'Ramadan Mubarak crescent moon chocolate gift box with gold-dusted truffles and butterfly decorations',
    deco: [
      { w: 160, h: 160, top: '-12%', left: '-6%', opacity: 0.1 },
      { w: 90,  h: 90,  bottom: '8%', right: '8%', opacity: 0.12 },
    ],
    featured: false,
  },
  {
    title: 'Gifts & UK Postal',
    subtitle: 'Water bottles \u00b7 Gift sets \u00b7 Nationwide delivery',
    href: INSTAGRAM_DM_URL,
    gradient: 'linear-gradient(145deg, #3d2b24 0%, #8d6f57 45%, #bca89f 75%, #e4d5c7 100%)',
    deco: [
      { w: 130, h: 130, top: '-10%', right: '-5%', opacity: 0.1 },
      { w: 80,  h: 80,  bottom: '20%', left: '5%', opacity: 0.08 },
    ],
    featured: false,
  },
];

interface CategoryCardProps {
  cat: Category;
  className: string;
  sizes: string;
  priority?: boolean;
  subtitleClass: string;
  overlayGradient: string;
}

function CategoryCard({ cat, className, sizes, priority, subtitleClass, overlayGradient }: CategoryCardProps) {
  const isExternal = cat.href.startsWith('http');
  const Wrapper = isExternal ? 'a' : Link;
  const linkProps = isExternal
    ? { href: cat.href, target: '_blank' as const, rel: 'noopener noreferrer' }
    : { href: cat.href };

  return (
    <Wrapper
      {...linkProps}
      className={`group relative overflow-hidden rounded-2xl ${className}`}
      style={cat.image ? undefined : { background: cat.gradient }}
    >
      {cat.image && (
        <Image
          src={cat.image}
          alt={cat.alt ?? ''}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={sizes}
          priority={priority}
        />
      )}

      {cat.deco.map((d, j) => (
        <div
          key={j}
          className="absolute rounded-full bg-white pointer-events-none z-[5]"
          style={{
            width: d.w,
            height: d.h,
            top: d.top,
            left: d.left,
            right: d.right,
            bottom: d.bottom,
            opacity: d.opacity,
          }}
        />
      ))}

      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ background: cat.gradient }}
      />

      <div className="absolute inset-0 bg-espresso opacity-0 group-hover:opacity-30 transition-opacity duration-400 z-10" />

      <div
        className="absolute bottom-0 left-0 right-0 z-20 p-5"
        style={{ background: overlayGradient }}
      >
        <h3 className="font-serif text-white text-lg md:text-xl font-semibold leading-snug mb-1">
          {cat.title}
        </h3>
        <p className={`text-white/55 leading-relaxed mb-3 ${subtitleClass}`}>
          {cat.subtitle}
        </p>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-gold-light opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {isExternal ? 'Enquire' : 'Browse'}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default function Occasions() {
  return (
    <section id="shop" className="min-h-screen bg-cream flex items-center py-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-rose-gold font-semibold mb-1">
              Something for everyone
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso">
              What We Make
            </h2>
          </div>
          <Link
            href="#products"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-mocha hover:text-rose-gold transition-colors"
          >
            Featured
            <span className="inline-block transition-transform hover:translate-x-1">&darr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-3">
          {categories.slice(0, 3).map((cat, i) => {
            const isWide = i === 0;
            return (
              <CategoryCard
                key={cat.title}
                cat={cat}
                className={isWide ? 'col-span-12 md:col-span-6 h-[420px]' : 'col-span-6 md:col-span-3 h-[420px]'}
                sizes={isWide ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                priority={i === 0}
                subtitleClass="text-xs hidden md:block"
                overlayGradient="linear-gradient(to top, rgba(20,12,8,0.85) 0%, rgba(20,12,8,0.4) 60%, transparent 100%)"
              />
            );
          })}

          {categories.slice(3).map((cat) => (
            <CategoryCard
              key={cat.title}
              cat={cat}
              className="col-span-12 md:col-span-4 h-[280px]"
              sizes="(max-width: 768px) 100vw, 33vw"
              subtitleClass="text-[11px] mb-2"
              overlayGradient="linear-gradient(to top, rgba(20,12,8,0.85) 0%, rgba(20,12,8,0.35) 60%, transparent 100%)"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
