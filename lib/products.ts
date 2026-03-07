export interface Product {
  name: string;
  price: string;
  badge: string | null;
  image: string;
  alt: string;
}

export interface Category {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    slug: 'chocolate-boxes',
    title: 'Chocolate Boxes',
    subtitle: 'Heart boxes · Square box · Football box',
    description:
      'Our signature personalised chocolate boxes — handcrafted with Belgian chocolate, fresh strawberries, and your custom message. Perfect for birthdays, anniversaries, and every celebration.',
    products: [
      {
        name: 'Birthday Pink Heart Chocolate Box',
        price: '£50',
        badge: 'Best Seller',
        image: '/images/chocolate-boxes/personalised-birthday-pink-heart-chocolate-box.jpeg',
        alt: 'Personalised birthday pink heart chocolate box with white and pink dipped strawberries and gold sprinkles',
      },
      {
        name: "Mother's Day Heart Chocolate Box",
        price: '£50',
        badge: 'Popular',
        image: '/images/chocolate-boxes/personalised-mothers-day-heart-chocolate-box-strawberries.jpeg',
        alt: "Personalised Mother's Day heart-shaped chocolate box filled with pink-dipped strawberries and gold butterfly decorations",
      },
      {
        name: "'I Love You' Heart Chocolate Box",
        price: '£45',
        badge: null,
        image: '/images/chocolate-boxes/i-love-you-heart-chocolate-box-truffles.jpeg',
        alt: "'I Love You' dark chocolate heart box filled with handcrafted truffles, white chocolate spoons, and butterfly decorations",
      },
      {
        name: 'Happy Birthday Mum Heart Box',
        price: '£35',
        badge: null,
        image: '/images/chocolate-boxes/happy-birthday-mum-white-chocolate-heart-box-pink-strawberries.jpeg',
        alt: 'Happy Birthday Mum white chocolate heart box with pink chocolate-dipped strawberries',
      },
      {
        name: '30th Birthday Heart Chocolate Box',
        price: '£50',
        badge: null,
        image: '/images/chocolate-boxes/personalised-30th-birthday-heart-chocolate-box-fashion.jpeg',
        alt: 'Personalised 30th birthday heart chocolate box with fashion-themed decorations',
      },
      {
        name: 'Ramadan Mubarak Heart Box',
        price: '£35',
        badge: null,
        image: '/images/chocolate-boxes/ramadan-mubarak-heart-chocolate-box-strawberries-flowers.jpeg',
        alt: 'Ramadan Mubarak heart chocolate box with chocolate-dipped strawberries and flower decorations',
      },
      {
        name: 'Ramadan Mubarak Milk Chocolate Heart Box',
        price: '£35',
        badge: null,
        image: '/images/chocolate-boxes/ramadan-mubarak-milk-chocolate-heart-box-gold.jpeg',
        alt: 'Ramadan Mubarak milk chocolate heart box with gold-dusted truffles and decorations',
      },
    ],
  },
  {
    slug: 'cakes-cupcakes',
    title: 'Cakes & Cupcakes',
    subtitle: 'Cakes · Cakesicles · Teacup cupcakes',
    description:
      'Bespoke celebration cakes and sweet treats — from show-stopping birthday cakes to elegant cakesicles, each one designed and decorated to your vision.',
    products: [
      {
        name: '21st Birthday White Chocolate Heart Cake',
        price: 'DM for price',
        badge: 'Bespoke',
        image: '/images/cakes-cupcakes/bespoke-21st-birthday-white-chocolate-heart-cake-gold.jpeg',
        alt: 'Bespoke 21st birthday white chocolate heart cake with gold pearl cascade and glitter lettering',
      },
      {
        name: 'Bride To Be Chocolate Cakesicle',
        price: 'DM for price',
        badge: null,
        image: '/images/cakes-cupcakes/personalised-bride-to-be-chocolate-cakesicle.jpeg',
        alt: 'Personalised bride-to-be chocolate cakesicle with white drizzle and pearl decorations',
      },
    ],
  },
  {
    slug: 'treat-boxes',
    title: 'Treat Boxes & Baskets',
    subtitle: 'Mix treat box · Candy box · Gift baskets',
    description:
      'Luxury mixed treat boxes and gift baskets packed with chocolate-dipped strawberries, dates, and handcrafted confections — the ultimate gifting experience.',
    products: [
      {
        name: 'Luxury Mixed Treat Box',
        price: 'DM for price',
        badge: 'Premium',
        image: '/images/treat-boxes/luxury-mixed-treat-box-chocolate-strawberries-dates.jpeg',
        alt: 'Luxury mixed treat box with chocolate-dipped strawberries, assorted chocolate-covered dates, and white chocolate decorations',
      },
      {
        name: 'Blue Chocolate Treat Box',
        price: 'DM for price',
        badge: 'New',
        image: '/images/treat-boxes/blue-chocolate-treat-box-strawberries-dates-roses.jpeg',
        alt: 'Blue-themed luxury chocolate treat box with drizzled strawberries, chocolate roses, and assorted chocolate-covered dates',
      },
      {
        name: 'Assorted Chocolate Covered Dates Gift Box',
        price: 'DM for price',
        badge: null,
        image: '/images/treat-boxes/assorted-chocolate-covered-dates-gift-box-ramadan.jpeg',
        alt: 'Assorted chocolate-covered dates gift box with variety of toppings and flavours',
      },
      {
        name: 'Baby Shark Themed Strawberry Box',
        price: 'DM for price',
        badge: 'Kids',
        image: '/images/treat-boxes/baby-shark-themed-chocolate-dipped-strawberries-kids-birthday.jpeg',
        alt: 'Baby Shark themed chocolate-dipped strawberries box for kids birthday party',
      },
      {
        name: 'Personalised Blue Chocolate Strawberry Basket',
        price: 'DM for price',
        badge: null,
        image: '/images/treat-boxes/personalised-blue-chocolate-strawberry-basket-name.jpeg',
        alt: 'Personalised blue chocolate strawberry basket with custom name decoration',
      },
      {
        name: "'Love You Baby' White Chocolate Strawberry Basket",
        price: 'DM for price',
        badge: null,
        image: '/images/treat-boxes/personalised-love-you-baby-white-chocolate-strawberry-basket.jpeg',
        alt: "Personalised 'Love You Baby' white chocolate strawberry basket with pink and white decorations",
      },
    ],
  },
  {
    slug: 'sweet-treats',
    title: 'Sweet Treats',
    subtitle: 'Truffles · Fudge · Strawberries · Fruit platters',
    description:
      'Individual sweet treats and platters — from hand-dipped chocolate strawberries to luxury fresh fruit platters, perfect for any gathering or as a standalone gift.',
    products: [
      {
        name: 'Decorated Strawberries Box of 12 with Mini Spoons',
        price: '£22',
        badge: 'Popular',
        image: '/images/sweet-treats/handcrafted-pink-purple-chocolate-dipped-strawberries-floral.jpeg',
        alt: 'Handcrafted pink and purple chocolate dipped strawberries with floral and butterfly decorations',
      },
      {
        name: 'Luxury Fresh Fruit Platter',
        price: 'DM for price',
        badge: null,
        image: '/images/sweet-treats/luxury-fresh-fruit-platter-chocolate-dipped-strawberries.jpeg',
        alt: 'Luxury fresh fruit platter with chocolate-dipped strawberries and assorted seasonal fruits',
      },
    ],
  },
  {
    slug: 'novelty-themed',
    title: 'Novelty & Themed',
    subtitle: 'Smash pinata · Themed creations · Baby items',
    description:
      'Creative themed chocolate gifts for special occasions — from Ramadan and Eid to baby showers and themed parties. Unique designs that make every celebration memorable.',
    products: [
      {
        name: 'Fillable Crescent Moon Gift Box with Flowers',
        price: '£35',
        badge: 'Seasonal',
        image: '/images/novelty-themed/ramadan-mubarak-crescent-moon-chocolate-gift-box.jpeg',
        alt: 'Ramadan Mubarak crescent moon chocolate gift box with gold-dusted truffles and butterfly decorations',
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
