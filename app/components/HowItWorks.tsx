import { Package, Sparkles, Truck } from 'lucide-react';
import { INSTAGRAM_DM_URL } from '@/lib/constants';

const steps = [
  {
    step: 1,
    icon: Package,
    title: 'Choose Your Treat',
    description:
      'Browse our collection and select a base chocolate that suits the occasion perfectly.',
  },
  {
    step: 2,
    icon: Sparkles,
    title: 'Make It Personal',
    description:
      "Send us a DM on Instagram with your custom message, photo, or design idea \u2014 we'll bring your vision to life.",
  },
  {
    step: 3,
    icon: Truck,
    title: 'We Deliver the Joy',
    description:
      'Handcrafted with care and delivered beautifully wrapped, ready to delight and surprise.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="min-h-screen bg-cream flex items-center py-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-20">
          <p className="text-[10px] uppercase tracking-[0.35em] text-rose-gold font-semibold mb-3">
            Simple as 1, 2, 3
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-5">
            How It Works
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-sand" />
            <div className="w-2 h-2 rounded-full bg-rose-gold" />
            <div className="w-10 h-px bg-sand" />
          </div>
          <p className="text-mocha max-w-md mx-auto text-sm leading-relaxed">
            From first click to your door — creating a personalised chocolate gift has never been
            easier or more delightful.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div
            className="hidden md:block absolute top-[3.75rem] left-0 right-0 mx-auto"
            style={{ width: 'calc(66.666% - 4rem)', left: '17%' }}
            aria-hidden="true"
          >
            <div className="w-full h-px border-t-2 border-dashed border-sand" />
          </div>

          {steps.map(({ step, icon: Icon, title, description }) => (
            <div key={step} className="flex flex-col items-center text-center relative">
              <div className="relative mb-8 z-10">
                <div className="w-28 h-28 rounded-full bg-champagne border-4 border-white shadow-xl flex items-center justify-center">
                  <Icon size={34} className="text-rose-gold" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-rose-gold text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {step}
                </div>
              </div>

              <h3 className="font-serif text-xl font-semibold text-espresso mb-3">{title}</h3>
              <p className="text-mocha text-sm leading-relaxed max-w-xs">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href={INSTAGRAM_DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-rose-gold hover:bg-rose-gold-light text-white rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-rose-gold/25 hover:-translate-y-0.5"
          >
            Start Creating
            <span className="text-base">✦</span>
          </a>
        </div>
      </div>
    </section>
  );
}
