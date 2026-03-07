import Image from 'next/image';
import { Award, ShieldCheck, Heart, Leaf } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Finest Belgian & Swiss chocolate',
  },
  {
    icon: ShieldCheck,
    title: 'Food Hygiene Certified',
    description: 'Fully certified food hygiene information pass',
  },
  {
    icon: Heart,
    title: 'Handcrafted',
    description: 'Every piece made with love & care',
  },
  {
    icon: Leaf,
    title: 'Ethically Sourced',
    description: 'Sustainable cocoa from certified farms',
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div
          className="relative flex flex-col items-center justify-center py-20 px-12 md:px-16 overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #2C1F1A 0%, #3d2b24 40%, #5E4A3C 100%)',
          }}
        >
          <Image
            src="/images/chocolate-boxes/ramadan-mubarak-heart-chocolate-box-strawberries-flowers.jpeg"
            alt="Handcrafted personalised chocolate heart box with chocolate-covered strawberries by The Chocolate Affair Glasgow"
            fill
            className="object-cover opacity-20"
          />

          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full border border-white/8" />
          <div className="absolute top-8 right-8 w-44 h-44 rounded-full border border-white/6" />
          <div className="absolute bottom-16 right-16 w-20 h-20 rounded-full border border-rose-gold/20" />

          <div className="relative z-10 text-center lg:text-left max-w-sm">
            <p className="text-[10px] uppercase tracking-[0.35em] text-rose-gold font-semibold mb-1">
              Established in
            </p>

            <div
              className="font-serif text-[6rem] md:text-[8rem] font-bold leading-none select-none mb-4 tracking-tight"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.75)',
              }}
              aria-hidden="true"
            >
              Glasgow
            </div>

            <div className="w-14 h-0.5 bg-rose-gold mb-5 mx-auto lg:mx-0" />

            <blockquote className="font-serif text-xl md:text-2xl text-white/80 font-medium italic leading-relaxed">
              &ldquo;Where every chocolate tells a story worth telling.&rdquo;
            </blockquote>
          </div>
        </div>

        <div className="flex flex-col justify-center py-20 px-12 md:px-16 bg-shell">
          <p className="text-[10px] uppercase tracking-[0.35em] text-rose-gold font-semibold mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-semibold mb-6 leading-snug">
            Born in a Glasgow Kitchen,{' '}
            <em className="not-italic text-rose-gold">Crafted with Heart</em>
          </h2>
          <p className="text-mocha leading-relaxed mb-4 text-sm md:text-base">
            What started as a small kitchen venture — experimenting with Belgian chocolate and
            personalised messages for friends — grew into Glasgow&apos;s most beloved chocolate
            gifting brand.
          </p>
          <p className="text-mocha leading-relaxed mb-10 text-sm md:text-base">
            We believe the perfect gift isn&apos;t just what&apos;s inside the box. It&apos;s the
            feeling of knowing someone truly thought of you — and we pour that feeling into every
            single piece we make.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-sand/50 hover:border-rose-gold/30 transition-colors duration-200"
              >
                <div className="p-2 rounded-lg bg-champagne flex-shrink-0">
                  <Icon size={17} className="text-rose-gold" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="font-semibold text-espresso text-sm mb-0.5">{title}</h4>
                  <p className="text-dusty-mocha text-xs leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
