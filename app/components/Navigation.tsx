'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#shop', label: 'Shop' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconColors = scrolled
    ? 'text-mocha hover:text-rose-gold'
    : 'text-white/75 hover:text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-sand'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col leading-none">
          <span
            className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-500 ${
              scrolled ? 'text-espresso' : 'text-white'
            }`}
          >
            The Chocolate Affair
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.22em] transition-colors duration-500 ${
              scrolled ? 'text-rose-gold' : 'text-white/55'
            }`}
          >
            Glasgow&apos;s Finest Chocolatier
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${iconColors}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? 'text-espresso' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-sand px-6 py-4 space-y-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-3.5 text-sm font-medium text-mocha hover:text-rose-gold border-b border-sand/60 last:border-0 transition-colors"
            >
              {link.label}
              <span className="text-rose-gold/50">&rarr;</span>
            </a>
          ))}
          <div className="pt-4 pb-2">
            <a
              href="#shop"
              onClick={() => setMobileOpen(false)}
              className="block w-full bg-rose-gold text-white text-center py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-rose-gold-light transition-colors"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
