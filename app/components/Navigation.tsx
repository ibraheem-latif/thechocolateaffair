'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { INSTAGRAM_PROFILE_URL } from '@/lib/constants';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#shop', label: 'Shop' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#about', label: 'About' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isLight = scrolled && !mobileOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Full-screen mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 transition-all duration-500 ease-out ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(170deg, #1a1109 0%, #2C1F1A 40%, #3d2b24 70%, #5E4A3C 100%)',
          }}
        />

        {/* Decorative background accents */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '300px',
            height: '300px',
            top: '10%',
            right: '-10%',
            background:
              'radial-gradient(circle, rgba(201,145,138,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: '200px',
            height: '200px',
            bottom: '20%',
            left: '-5%',
            background:
              'radial-gradient(circle, rgba(212,168,158,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Menu content */}
        <div className="relative z-10 flex flex-col h-full pt-24 px-8 pb-10">
          {/* Decorative divider */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-500 ${
              mobileOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-2'
            }`}
            style={{ transitionDelay: mobileOpen ? '100ms' : '0ms' }}
          >
            <div className="w-8 h-px bg-rose-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-rose-gold/50" />
            <div className="w-8 h-px bg-rose-gold/30" />
          </div>

          {/* Nav links */}
          <div className="space-y-1">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`group flex items-center justify-between py-4 border-b border-white/[0.06] last:border-0 transition-all duration-400 ${
                  mobileOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${180 + i * 70}ms` : '0ms',
                }}
              >
                <span className="font-serif text-[1.7rem] text-white/80 group-hover:text-rose-gold-light transition-colors duration-300">
                  {link.label}
                </span>
                <span className="text-rose-gold/30 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  &rarr;
                </span>
              </a>
            ))}
          </div>

          {/* Bottom section */}
          <div
            className={`mt-auto transition-all duration-500 ${
              mobileOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: mobileOpen ? '500ms' : '0ms' }}
          >
            <a
              href="/#shop"
              onClick={() => setMobileOpen(false)}
              className="block w-full bg-rose-gold hover:bg-rose-gold-light text-white text-center py-4 rounded-full text-sm font-semibold tracking-wider transition-colors duration-300"
            >
              Shop Collection
            </a>

            <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/[0.06]">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                Glasgow&apos;s Finest Chocolatier
              </p>
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-rose-gold hover:border-rose-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={15} className="text-white/60" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Nav bar — always on top */}
      <nav
        className={`relative z-10 transition-all duration-500 ${
          mobileOpen
            ? 'bg-transparent'
            : isLight
              ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-sand'
              : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex flex-col leading-none">
            <span
              className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-500 ${
                isLight ? 'text-espresso' : 'text-white'
              }`}
            >
              The Chocolate Affair
            </span>
            <span
              className={`text-[9px] uppercase tracking-[0.22em] transition-colors duration-500 ${
                isLight ? 'text-rose-gold' : 'text-white/55'
              }`}
            >
              Glasgow&apos;s Finest Chocolatier
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                    isLight
                      ? 'text-mocha hover:text-rose-gold'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
              isLight
                ? 'text-espresso hover:bg-espresso/5'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute transition-all duration-300 ${
                mobileOpen
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 rotate-90 scale-75'
              }`}
            >
              <X size={20} />
            </span>
            <span
              className={`absolute transition-all duration-300 ${
                mobileOpen
                  ? 'opacity-0 -rotate-90 scale-75'
                  : 'opacity-100 rotate-0 scale-100'
              }`}
            >
              <Menu size={20} />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
