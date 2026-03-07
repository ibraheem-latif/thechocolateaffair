'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function CTABanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center py-16"
      style={{
        background:
          'linear-gradient(145deg, #2C1F1A 0%, #3d2b24 30%, #5E4A3C 65%, #8D6F57 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/5" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-white/5" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full border border-rose-gold/10 -translate-y-1/2" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-rose-gold/15 border border-rose-gold/25 text-rose-gold-light rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase mb-7">
          <Mail size={13} />
          Exclusive Offer
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-5 leading-tight">
          Get 10% Off Your{' '}
          <em className="shimmer-text not-italic">First Order</em>
        </h2>

        <p className="text-white/50 mb-10 text-sm leading-relaxed max-w-md mx-auto">
          Join thousands of happy customers. Sign up for exclusive offers, new arrivals, and
          personalised gift inspiration for every occasion.
        </p>

        {submitted ? (
          <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
            <CheckCircle size={40} className="text-rose-gold mx-auto mb-4" />
            <p className="font-serif text-2xl text-white mb-2">Thank you!</p>
            <p className="text-white/55 text-sm">
              We&apos;ll be in touch with your discount code shortly!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-4 rounded-full bg-white/10 text-white placeholder-white/35 border border-white/15 focus:outline-none focus:border-rose-gold/60 text-sm transition-colors"
            />
            <button
              type="submit"
              className="px-7 py-4 bg-rose-gold hover:bg-rose-gold-light text-white rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-rose-gold/25 whitespace-nowrap"
            >
              Claim 10% Off
            </button>
          </form>
        )}

        <p className="mt-5 text-white/25 text-xs">
          No spam, ever. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
