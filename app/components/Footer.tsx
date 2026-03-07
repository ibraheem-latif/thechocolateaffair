import { Facebook, Instagram } from 'lucide-react';
import { INSTAGRAM_PROFILE_URL } from '@/lib/constants';
import { categories } from '@/lib/products';

const shopLinks = categories.map((c) => ({ label: c.title, href: `/${c.slug}` }));

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'How It Works', href: '/#how-it-works' },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100063608019230' },
  { icon: Instagram, label: 'Instagram', href: INSTAGRAM_PROFILE_URL },
];

export default function Footer() {
  return (
    <footer
      className="text-white/65"
      style={{ background: 'linear-gradient(160deg, #1e1511 0%, #2C1F1A 100%)' }}
    >
      <div className="h-px bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
          <div>
            <div className="mb-5">
              <h3 className="font-serif text-xl font-semibold text-white mb-0.5">
                The Chocolate Affair
              </h3>
              <p className="text-[9px] uppercase tracking-[0.25em] text-rose-gold">
                Glasgow&apos;s Finest Chocolatier
              </p>
            </div>
            <p className="text-xs leading-relaxed mb-6 text-white/40 max-w-[220px]">
              Handcrafted personalised chocolate gifts made with love in the heart of Glasgow,
              Scotland.
            </p>

            <div className="flex gap-2.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center hover:bg-rose-gold hover:border-rose-gold transition-all duration-300"
                >
                  <Icon size={15} className="text-white/70" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold mb-5 uppercase tracking-[0.18em]">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-white/40 hover:text-rose-gold transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold mb-5 uppercase tracking-[0.18em]">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-white/40 hover:text-rose-gold transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-white/25 text-center md:text-left">
            © {new Date().getFullYear()} The Chocolate Affair. All rights reserved. Registered in
            Scotland.
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="text-[10px] text-white/30 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              🏅 Food Hygiene Certified
            </span>
            <div className="flex items-center gap-1.5">
              {['VISA', 'MC', 'AMEX', 'PayPal'].map((p) => (
                <span
                  key={p}
                  className="text-[9px] font-bold text-white/25 bg-white/5 border border-white/10 px-2 py-1 rounded"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
