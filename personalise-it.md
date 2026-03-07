# The Chocolate Affair — Website Specification

**Business**: The Chocolate Affair
**Location**: Glasgow, Scotland
**Industry**: Personalised chocolate gifts & confectionery
**Food Hygiene**: Certified (Food Hygiene Information Pass)

---

## Target Customer

- **Primary**: Women aged 28-42, urban Scotland / UK-wide online
- **Income**: £35-60k+ household, willing to pay premium for thoughtfulness
- **Behaviour**: Occasion-driven, browses Instagram/Pinterest for gift inspiration, expects approachable luxury
- **Emotional drivers**: Thoughtfulness, uniqueness, connection, pride in gifting

---

## Brand Positioning

**Approachable luxury** — premium but not pretentious, artisan but not amateur. Every gift tells the buyer's story through personalised chocolate.

---

## Color Palette: Champagne & Cocoa

Warm, indulgent, sophisticated, timeless. Muted pastels with chocolate-brown anchors. Rose gold as the signature accent.

| Role | Color | Hex |
|---|---|---|
| Text Primary | Dark Espresso | `#2C1F1A` |
| Text Secondary | Mocha | `#6B5148` |
| Text Muted | Dusty Mocha | `#9B8574` |
| Accent (signature) | Rose Gold | `#C9918A` |
| Accent Light | Soft Rose Gold | `#D4A89E` |
| Borders / Dividers | Sand | `#E4D5C7` |
| Dark Gradient | Warm Taupe | `#BCA89F` |
| Mid Brown | Warm Cocoa | `#5E4A3C` |
| Light Brown | Rich Amber | `#8D6F57` |
| Surface | Vanilla | `#F8F0E6` |
| Cards | Champagne Pink | `#F5E1D0` |
| Background | Soft Cream | `#FFFBF5` |
| Shell Accent | Warm Shell | `#F0DDD0` |

**Why it works**: Rose gold resonates with the target demographic. Warm cocoa/espresso text references chocolate directly (13:1 contrast ratio = WCAG AAA). Champagne pink evokes gift wrapping. No cold tones — every color has warm undertones. Muted pastels feel premium, not childish. Neutral enough to flex across all occasions.

---

## Typography

- **Headings**: Playfair Display (serif) — warmth, permanence, luxury
- **Body**: Inter (sans-serif) — clean, modern, highly readable
- **Accents**: Gold shimmer animation on hero text using rose gold gradient

---

## Website Sections

### 1. Navigation
- Sticky header with transparency-to-white on scroll
- Logo: "The Chocolate Affair" in Playfair Display with "Glasgow's Finest Chocolatier" subtitle
- Links: Home, Shop, How It Works, About, Contact
- Search icon, shopping bag with item count
- Mobile hamburger menu with slide-down panel

### 2. Hero
- Full-screen dark gradient (espresso → cocoa → warm taupe)
- Animated rose gold shimmer on the word "Chocolate"
- Headline: "Your Story, Wrapped in Chocolate"
- Subtitle about bespoke personalised gifts
- Two CTAs: "Shop Collection" (filled rose gold) and "How It Works" (outline)
- Trust badges: 5-Star Rated, Free Gift Wrapping, Made in Glasgow, Food Hygiene Certified
- Wave SVG transition to next section

### 3. Shop by Occasion (Categories)
- 6 cards in a 3-column grid:
  - Weddings — Elegant favours & gifts for your special day
  - Birthdays — Make their birthday truly unforgettable
  - Corporate — Impress clients with branded luxury gifts
  - Seasonal — Christmas, Easter, Valentine's & more
  - New Baby — Celebrate new arrivals with sweetness
  - Milestones — Graduations, retirements & achievements
- Each card has icon, title, description, hover animation with "Browse Collection" arrow

### 4. Featured Products
- 6 product cards in a 3-column grid:
  - Personalised Chocolate Letter Box — £24.99 (Best Seller)
  - Custom Photo Chocolate Bar — £12.99 (Popular)
  - Luxury Gift Hamper — £49.99 (Premium)
  - Wedding Favour Collection — from £2.50
  - Corporate Branded Box — £34.99
  - Celebration Chocolate Cake — £39.99 (New)
- Each card: gradient placeholder image, tag badge, hover-reveal "Add to Basket" overlay
- "View All Products" button at bottom

### 5. How It Works
- 3-step visual flow:
  1. **Choose Your Treat** — Browse the collection and select a base
  2. **Make It Personal** — Add custom message, photo, or design
  3. **We Deliver the Joy** — Handcrafted with care, delivered beautifully wrapped
- Large circular icons with step numbers
- Connector lines between steps on desktop
- "Start Creating" CTA

### 6. About Us
- Split layout: left dark panel, right content panel
- Left: "Glasgow" in large serif type with decorative elements
- Right: Brand story about starting as a small kitchen venture in Glasgow
- 4 value badges:
  - Premium Quality — Finest Belgian & Swiss chocolate
  - Food Hygiene Certified — Fully certified food hygiene information pass
  - Handcrafted — Every piece made with love & care
  - Ethically Sourced — Sustainable cocoa from certified farms

### 7. Testimonials
- 4 customer reviews in a 2-column grid:
  - Sarah M. (Edinburgh) — Birthday gift for mum's 60th
  - James & Laura (Glasgow) — Wedding favours
  - Mark T. (Aberdeen) — Corporate Christmas gifts
  - Emma K. (Stirling) — Photo chocolate bar for partner
- All 5-star rated
- Aggregate: "Rated 4.9/5 from over 500+ reviews"

### 8. CTA Banner
- Dark gradient section with decorative pattern overlay
- "Get 10% Off Your First Order"
- Email signup form (input + button)
- Privacy reassurance text

### 9. Footer
- 4-column layout:
  - Brand column: Logo, tagline, description, social icons (Facebook, Instagram, X)
  - Shop links: All Products, Birthdays, Weddings, Corporate Gifts, Seasonal, Gift Vouchers
  - Company links: About Us, How It Works, FAQs, Delivery Info, T&Cs, Privacy Policy
  - Contact: 123 Buchanan Street, Glasgow G1 2JA / 0141 234 5678 / hello@personaliseit.co.uk / Mon-Sat 9am-6pm
- Bottom bar: Copyright, Food Hygiene Certified badge, payment icons (Visa, MC, Amex, PayPal)

---

## Tech Stack

- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display + Inter)
- **Responsive**: Mobile-first, fully responsive at all breakpoints

---

## Design Principles

- Warm pastels only — no cold/clinical tones
- Muted saturation with grey/brown undertones (premium, not childish)
- Dark espresso text anchors every pastel surface
- Rose gold as the single signature accent throughout
- Generous whitespace — luxury is restraint
- Serif headings for warmth and permanence
- Smooth hover transitions and subtle animations
- WCAG AA+ accessibility (13:1 contrast on primary text)

---

## Occasion Accent System (for future seasonal campaigns)

| Occasion | Accent Color | Hex |
|---|---|---|
| Wedding | Soft Rose Gold | `#E8C9CF` |
| Baby Girl | Muted Pink | `#F0D4D8` |
| Baby Boy | Warm Sage | `#B5C7A3` |
| Birthday | Warm Gold | `#D9B061` |
| Valentine's | Deep Rose | `#A65E46` |
| Christmas | Rich Berry | `#72383D` |
| Thank You | Soft Amber | `#D9C4A9` |
