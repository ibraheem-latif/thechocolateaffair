import Image from 'next/image';
import { Star, Package, MapPin, ShieldCheck } from 'lucide-react';
import ParticleField from './ParticleField';

const trustBadges = [
  { icon: Star, label: '5-Star Rated' },
  { icon: Package, label: 'Free Gift Wrapping' },
  { icon: MapPin, label: 'Made in Glasgow' },
  { icon: ShieldCheck, label: 'Food Hygiene Certified' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        background:
          'linear-gradient(155deg, #0f0a08 0%, #1a1109 20%, #2C1F1A 50%, #3d2b24 75%, #5E4A3C 100%)',
      }}
    >
      <Image
        src="/images/chocolate-boxes/ramadan-mubarak-milk-chocolate-heart-box-gold.jpeg"
        alt="Bespoke personalised chocolate gifts handcrafted in Glasgow Scotland"
        fill
        className="object-cover opacity-[0.15]"
        priority
      />

      <ParticleField />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(201,145,138,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
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

        <p className="fade-in-up-delay-2 text-white/60 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
          Bespoke personalised chocolate gifts crafted with care for every
          occasion — from intimate birthdays to grand celebrations.
        </p>

        <div className="fade-in-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#shop"
            className="px-9 py-4 bg-rose-gold hover:bg-rose-gold-light text-white rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-rose-gold/25 hover:-translate-y-0.5 min-w-[180px] text-center"
          >
            Shop Collection
          </a>
          <a
            href="#how-it-works"
            className="px-9 py-4 border border-white/25 text-white rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:border-white/50 hover:bg-white/8 hover:-translate-y-0.5 min-w-[180px] text-center"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            How It Works
          </a>
        </div>

        <div className="fade-in-up-delay-3 flex flex-wrap items-center justify-center gap-6 md:gap-10 pb-20">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-white/50">
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
