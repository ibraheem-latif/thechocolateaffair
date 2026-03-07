import Image from 'next/image';
import { Star, Package, MapPin, ShieldCheck } from 'lucide-react';
import ParticleField from './ParticleField';

const trustBadges = [
  { icon: Star, label: '5-Star Rated' },
  { icon: Package, label: 'Free Gift Wrapping' },
  { icon: MapPin, label: 'Made in Glasgow' },
  { icon: ShieldCheck, label: 'Food Hygiene Certified' },
];

const showcase = [
  {
    src: '/images/chocolate-boxes/personalised-birthday-pink-heart-chocolate-box.jpeg',
    alt: 'Personalised birthday pink heart chocolate box with dipped strawberries',
    rotate: '-rotate-[7deg]',
    offset: 'translate-y-3',
    size: 'w-28 sm:w-36 md:w-44',
  },
  {
    src: '/images/chocolate-boxes/personalised-mothers-day-heart-chocolate-box-strawberries.jpeg',
    alt: "Mother's Day heart chocolate box with pink strawberries",
    rotate: '',
    offset: '',
    size: 'w-36 sm:w-44 md:w-52',
    priority: true,
  },
  {
    src: '/images/sweet-treats/handcrafted-pink-purple-chocolate-dipped-strawberries-floral.jpeg',
    alt: 'Handcrafted chocolate dipped strawberries with floral decorations',
    rotate: 'rotate-[7deg]',
    offset: 'translate-y-3',
    size: 'w-28 sm:w-36 md:w-44',
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        background: [
          'radial-gradient(ellipse 80% 50% at 70% 15%, rgba(94,74,60,0.5) 0%, transparent 70%)',
          'radial-gradient(ellipse 60% 50% at 25% 75%, rgba(61,43,36,0.4) 0%, transparent 60%)',
          'linear-gradient(160deg, #0a0705 0%, #14100c 15%, #2C1F1A 45%, #3d2b24 70%, #2C1F1A 100%)',
        ].join(', '),
      }}
    >
      {/* Atmospheric rose-gold glow — top center */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '800px',
          height: '600px',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(ellipse, rgba(201,145,138,0.1) 0%, rgba(201,145,138,0.03) 40%, transparent 70%)',
        }}
      />

      {/* Secondary warm glow — behind product showcase */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '400px',
          bottom: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(ellipse, rgba(212,168,158,0.09) 0%, transparent 70%)',
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* Decorative accents — thin lines & dots */}
      <div className="absolute top-[16%] left-[9%] w-px h-32 bg-gradient-to-b from-transparent via-rose-gold/20 to-transparent hidden lg:block" />
      <div className="absolute top-[28%] right-[10%] w-px h-20 bg-gradient-to-b from-transparent via-rose-gold/10 to-transparent hidden lg:block" />
      <div className="absolute top-[10%] right-[22%] w-1.5 h-1.5 rounded-full bg-rose-gold/25 hidden lg:block" />
      <div className="absolute bottom-[38%] left-[6%] w-1 h-1 rounded-full bg-rose-gold/15 hidden lg:block" />
      <div className="absolute top-[55%] right-[5%] w-16 h-px bg-gradient-to-r from-transparent via-rose-gold/10 to-transparent hidden lg:block" />

      <ParticleField />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-8">
        <p className="fade-in-up text-[10px] uppercase tracking-[0.4em] text-white/45 mb-7 font-medium">
          Handcrafted in Glasgow, Scotland
        </p>

        <h1 className="fade-in-up-delay-1 font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.08] mb-8 tracking-tight">
          Your Story,
          <br />
          Wrapped in{' '}
          <em className="shimmer-text not-italic">Chocolate</em>
        </h1>

        <div className="fade-in-up-delay-1 flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-rose-gold" />
          <div className="w-12 h-px bg-white/20" />
        </div>

        <p className="fade-in-up-delay-2 text-white/55 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
          Bespoke personalised chocolate gifts crafted with care for every
          occasion — from intimate birthdays to grand celebrations.
        </p>

        <div className="fade-in-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="/#shop"
            className="px-9 py-4 bg-rose-gold hover:bg-rose-gold-light text-white rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-rose-gold/25 hover:-translate-y-0.5 min-w-[180px] text-center"
          >
            Shop Collection
          </a>
          <a
            href="/#how-it-works"
            className="px-9 py-4 border border-white/20 text-white rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06] hover:-translate-y-0.5 min-w-[180px] text-center backdrop-blur-sm"
          >
            How It Works
          </a>
        </div>

        {/* Product showcase — fan layout */}
        <div className="fade-in-up-delay-3 flex justify-center items-end gap-3 md:gap-5 mb-14">
          {showcase.map((item) => (
            <div
              key={item.src}
              className={`relative ${item.size} aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.07] ${item.rotate} ${item.offset} hover:rotate-0 hover:translate-y-0 hover:scale-[1.03] transition-transform duration-500 ease-out ${item.priority ? 'z-10' : ''}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes={item.priority ? '(max-width:640px) 144px, (max-width:768px) 176px, 208px' : '(max-width:640px) 112px, (max-width:768px) 144px, 176px'}
                priority={item.priority}
              />
              {/* Subtle warm vignette on each card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        <div className="fade-in-up-delay-3 flex flex-wrap items-center justify-center gap-6 md:gap-10 pb-16">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-white/45">
              <Icon size={15} className="text-rose-gold flex-shrink-0" />
              <span className="text-xs font-medium tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C200,85 400,10 640,45 C800,68 1000,15 1200,45 C1320,60 1390,30 1440,45 L1440,90 L0,90 Z"
            fill="#FFFBF5"
          />
        </svg>
      </div>
    </section>
  );
}
