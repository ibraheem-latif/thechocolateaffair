export interface ProductVariant {
  label: string;
  price: string;
}

export interface Product {
  name: string;
  slug: string;
  price: string;
  badge: string | null;
  image: string;
  images: string[];
  alt: string;
  description: string;
  variants: ProductVariant[];
  notes: string[];
  personalisation: string;
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
        slug: 'birthday-pink-heart-chocolate-box',
        price: '£50',
        badge: 'Best Seller',
        image: '/images/chocolate-boxes/personalised-birthday-pink-heart-chocolate-box.jpeg',
        images: ['/images/chocolate-boxes/personalised-birthday-pink-heart-chocolate-box.jpeg'],
        alt: 'Personalised birthday pink heart chocolate box with white and pink dipped strawberries and gold sprinkles',
        description: 'Our best-selling heart-shaped chocolate box filled with hand-dipped strawberries in pink and white chocolate, finished with gold sprinkles and a personalised birthday message.',
        variants: [],
        notes: ['Best consumed on the day of collection, latest the day after.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom name, age, and message on the box lid.',
      },
      {
        name: "Mother's Day Heart Chocolate Box",
        slug: 'mothers-day-heart-chocolate-box',
        price: '£50',
        badge: 'Popular',
        image: '/images/chocolate-boxes/personalised-mothers-day-heart-chocolate-box-strawberries.jpeg',
        images: ['/images/chocolate-boxes/personalised-mothers-day-heart-chocolate-box-strawberries.jpeg'],
        alt: "Personalised Mother's Day heart-shaped chocolate box filled with pink-dipped strawberries and gold butterfly decorations",
        description: "A stunning heart-shaped chocolate box designed for Mother's Day, filled with pink-dipped strawberries and adorned with delicate gold butterfly decorations.",
        variants: [],
        notes: ['Best consumed on the day of collection, latest the day after.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom message for Mum on the box lid.',
      },
      {
        name: "'I Love You' Heart Chocolate Box",
        slug: 'i-love-you-heart-chocolate-box',
        price: '£45',
        badge: null,
        image: '/images/chocolate-boxes/i-love-you-heart-chocolate-box-truffles.jpeg',
        images: ['/images/chocolate-boxes/i-love-you-heart-chocolate-box-truffles.jpeg'],
        alt: "'I Love You' dark chocolate heart box filled with handcrafted truffles, white chocolate spoons, and butterfly decorations",
        description: "A romantic dark chocolate heart box filled with handcrafted truffles, white chocolate spoons, and butterfly decorations — the perfect gift to say 'I Love You'.",
        variants: [],
        notes: ['Best consumed on the day of collection, latest the day after.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom message on the box lid.',
      },
      {
        name: 'Happy Birthday Mum Heart Box',
        slug: 'happy-birthday-mum-heart-box',
        price: '£35',
        badge: null,
        image: '/images/chocolate-boxes/happy-birthday-mum-white-chocolate-heart-box-pink-strawberries.jpeg',
        images: ['/images/chocolate-boxes/happy-birthday-mum-white-chocolate-heart-box-pink-strawberries.jpeg'],
        alt: 'Happy Birthday Mum white chocolate heart box with pink chocolate-dipped strawberries',
        description: 'A beautiful white chocolate heart box with pink chocolate-dipped strawberries, perfect for celebrating Mum on her birthday.',
        variants: [],
        notes: ['Best consumed on the day of collection, latest the day after.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom birthday message.',
      },
      {
        name: '30th Birthday Heart Chocolate Box',
        slug: '30th-birthday-heart-chocolate-box',
        price: '£50',
        badge: null,
        image: '/images/chocolate-boxes/personalised-30th-birthday-heart-chocolate-box-fashion.jpeg',
        images: ['/images/chocolate-boxes/personalised-30th-birthday-heart-chocolate-box-fashion.jpeg'],
        alt: 'Personalised 30th birthday heart chocolate box with fashion-themed decorations',
        description: 'A milestone birthday celebration box with fashion-themed decorations, filled with chocolate-dipped strawberries and handcrafted truffles.',
        variants: [],
        notes: ['Best consumed on the day of collection, latest the day after.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom name, age, and theme.',
      },
      {
        name: 'Ramadan Mubarak Heart Box',
        slug: 'ramadan-mubarak-heart-box',
        price: '£35',
        badge: null,
        image: '/images/chocolate-boxes/ramadan-mubarak-heart-chocolate-box-strawberries-flowers.jpeg',
        images: ['/images/chocolate-boxes/ramadan-mubarak-heart-chocolate-box-strawberries-flowers.jpeg'],
        alt: 'Ramadan Mubarak heart chocolate box with chocolate-dipped strawberries and flower decorations',
        description: 'A beautifully crafted Ramadan Mubarak heart box with chocolate-dipped strawberries and flower decorations — perfect for gifting during the holy month.',
        variants: [],
        notes: ['Best consumed on the day of collection, latest the day after.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom Ramadan greeting.',
      },
      {
        name: 'Ramadan Mubarak Milk Chocolate Heart Box',
        slug: 'ramadan-mubarak-milk-chocolate-heart-box',
        price: '£35',
        badge: null,
        image: '/images/chocolate-boxes/ramadan-mubarak-milk-chocolate-heart-box-gold.jpeg',
        images: ['/images/chocolate-boxes/ramadan-mubarak-milk-chocolate-heart-box-gold.jpeg'],
        alt: 'Ramadan Mubarak milk chocolate heart box with gold-dusted truffles and decorations',
        description: 'A rich milk chocolate heart box with gold-dusted truffles and elegant decorations, a luxurious Ramadan gift.',
        variants: [],
        notes: ['Best consumed on the day of collection, latest the day after.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom Ramadan greeting.',
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
        slug: '21st-birthday-white-chocolate-heart-cake',
        price: 'DM for price',
        badge: 'Bespoke',
        image: '/images/cakes-cupcakes/bespoke-21st-birthday-white-chocolate-heart-cake-gold.jpeg',
        images: ['/images/cakes-cupcakes/bespoke-21st-birthday-white-chocolate-heart-cake-gold.jpeg'],
        alt: 'Bespoke 21st birthday white chocolate heart cake with gold pearl cascade and glitter lettering',
        description: 'A show-stopping white chocolate heart cake with cascading gold pearls and glitter lettering — designed to make any 21st birthday unforgettable.',
        variants: [],
        notes: ['Bespoke item — DM us on Instagram to discuss your design.'],
        personalisation: 'Fully bespoke — name, age, colour scheme, and design.',
      },
      {
        name: 'Bride To Be Chocolate Cakesicle',
        slug: 'bride-to-be-chocolate-cakesicle',
        price: 'DM for price',
        badge: null,
        image: '/images/cakes-cupcakes/personalised-bride-to-be-chocolate-cakesicle.jpeg',
        images: ['/images/cakes-cupcakes/personalised-bride-to-be-chocolate-cakesicle.jpeg'],
        alt: 'Personalised bride-to-be chocolate cakesicle with white drizzle and pearl decorations',
        description: 'An elegant chocolate cakesicle with white drizzle and pearl decorations — a beautiful gift for any bride-to-be or bridal shower.',
        variants: [],
        notes: ['Bespoke item — DM us on Instagram to discuss your design.'],
        personalisation: 'Custom name and colour scheme.',
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
        slug: 'luxury-mixed-treat-box',
        price: 'DM for price',
        badge: 'Premium',
        image: '/images/treat-boxes/luxury-mixed-treat-box-chocolate-strawberries-dates.jpeg',
        images: ['/images/treat-boxes/luxury-mixed-treat-box-chocolate-strawberries-dates.jpeg'],
        alt: 'Luxury mixed treat box with chocolate-dipped strawberries, assorted chocolate-covered dates, and white chocolate decorations',
        description: 'Our premium mixed treat box featuring chocolate-dipped strawberries, assorted chocolate-covered dates, and white chocolate decorations — perfect for any special occasion.',
        variants: [],
        notes: ['Best consumed on the day of collection, latest the day after.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom colour scheme and message.',
      },
      {
        name: 'Blue Chocolate Treat Box',
        slug: 'blue-chocolate-treat-box',
        price: 'DM for price',
        badge: 'New',
        image: '/images/treat-boxes/blue-chocolate-treat-box-strawberries-dates-roses.jpeg',
        images: ['/images/treat-boxes/blue-chocolate-treat-box-strawberries-dates-roses.jpeg'],
        alt: 'Blue-themed luxury chocolate treat box with drizzled strawberries, chocolate roses, and assorted chocolate-covered dates',
        description: 'A stunning blue-themed treat box with drizzled strawberries, handcrafted chocolate roses, and assorted chocolate-covered dates.',
        variants: [],
        notes: ['Best consumed on the day of collection, latest the day after.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom colour scheme and message.',
      },
      {
        name: 'Assorted Chocolate Covered Dates Gift Box',
        slug: 'assorted-chocolate-covered-dates-gift-box',
        price: 'DM for price',
        badge: null,
        image: '/images/treat-boxes/assorted-chocolate-covered-dates-gift-box-ramadan.jpeg',
        images: ['/images/treat-boxes/assorted-chocolate-covered-dates-gift-box-ramadan.jpeg'],
        alt: 'Assorted chocolate-covered dates gift box with variety of toppings and flavours',
        description: 'A luxurious selection of chocolate-covered dates with a variety of toppings and flavours — a thoughtful gift for Ramadan or any occasion.',
        variants: [],
        notes: ['Keep refrigerated until ready to serve.'],
        personalisation: 'Custom selection of toppings and flavours.',
      },
      {
        name: 'Baby Shark Themed Strawberry Box',
        slug: 'baby-shark-themed-strawberry-box',
        price: 'DM for price',
        badge: 'Kids',
        image: '/images/treat-boxes/baby-shark-themed-chocolate-dipped-strawberries-kids-birthday.jpeg',
        images: ['/images/treat-boxes/baby-shark-themed-chocolate-dipped-strawberries-kids-birthday.jpeg'],
        alt: 'Baby Shark themed chocolate-dipped strawberries box for kids birthday party',
        description: 'Fun Baby Shark themed chocolate-dipped strawberries, perfect for kids birthday parties — colourful, exciting, and delicious!',
        variants: [],
        notes: ['Best consumed on the day of collection, latest the day after.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom name and theme colours.',
      },
      {
        name: 'Personalised Blue Chocolate Strawberry Basket',
        slug: 'personalised-blue-chocolate-strawberry-basket',
        price: 'DM for price',
        badge: null,
        image: '/images/treat-boxes/personalised-blue-chocolate-strawberry-basket-name.jpeg',
        images: ['/images/treat-boxes/personalised-blue-chocolate-strawberry-basket-name.jpeg'],
        alt: 'Personalised blue chocolate strawberry basket with custom name decoration',
        description: 'A personalised blue chocolate strawberry basket with custom name decoration — an elegant gift for celebrations.',
        variants: [],
        notes: ['Best consumed on the day of collection, latest the day after.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom name on the basket.',
      },
      {
        name: "'Love You Baby' White Chocolate Strawberry Basket",
        slug: 'love-you-baby-white-chocolate-strawberry-basket',
        price: 'DM for price',
        badge: null,
        image: '/images/treat-boxes/personalised-love-you-baby-white-chocolate-strawberry-basket.jpeg',
        images: ['/images/treat-boxes/personalised-love-you-baby-white-chocolate-strawberry-basket.jpeg'],
        alt: "Personalised 'Love You Baby' white chocolate strawberry basket with pink and white decorations",
        description: "A romantic white chocolate strawberry basket with pink and white decorations and a sweet 'Love You Baby' message.",
        variants: [],
        notes: ['Best consumed on the day of collection, latest the day after.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom message and colour scheme.',
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
        slug: 'decorated-strawberries-box-of-12',
        price: '£22',
        badge: 'Popular',
        image: '/images/sweet-treats/handcrafted-pink-purple-chocolate-dipped-strawberries-floral.jpeg',
        images: ['/images/sweet-treats/handcrafted-pink-purple-chocolate-dipped-strawberries-floral.jpeg'],
        alt: 'Handcrafted pink and purple chocolate dipped strawberries with floral and butterfly decorations',
        description: 'Beautifully decorated chocolate-dipped strawberries available in a range of colours and toppings. Each box comes with mini spoons for easy eating. Perfect for any occasion.',
        variants: [
          { label: 'Box of 12', price: '£22' },
        ],
        notes: [
          'Strawberries are best consumed on the day of collection, latest the day after.',
          'Keep refrigerated until ready to serve.',
          'Personalised edible wafer toppers available at an additional charge.',
        ],
        personalisation: 'Choose your colours, toppings, and optional edible wafer toppers with a custom message.',
      },
      {
        name: 'Luxury Fresh Fruit Platter',
        slug: 'luxury-fresh-fruit-platter',
        price: 'DM for price',
        badge: null,
        image: '/images/sweet-treats/luxury-fresh-fruit-platter-chocolate-dipped-strawberries.jpeg',
        images: ['/images/sweet-treats/luxury-fresh-fruit-platter-chocolate-dipped-strawberries.jpeg'],
        alt: 'Luxury fresh fruit platter with chocolate-dipped strawberries and assorted seasonal fruits',
        description: 'A stunning luxury fruit platter featuring chocolate-dipped strawberries alongside assorted seasonal fruits — ideal for gatherings, parties, and special occasions.',
        variants: [],
        notes: ['Best consumed on the day of collection.', 'Keep refrigerated until ready to serve.'],
        personalisation: 'Custom size and fruit selection.',
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
        slug: 'fillable-crescent-moon-gift-box',
        price: '£35',
        badge: 'Seasonal',
        image: '/images/novelty-themed/ramadan-mubarak-crescent-moon-chocolate-gift-box.jpeg',
        images: ['/images/novelty-themed/ramadan-mubarak-crescent-moon-chocolate-gift-box.jpeg'],
        alt: 'Ramadan Mubarak crescent moon chocolate gift box with gold-dusted truffles and butterfly decorations',
        description: 'A beautiful fillable crescent moon gift box with flowers, gold-dusted truffles, and butterfly decorations — a unique and thoughtful Ramadan gift.',
        variants: [],
        notes: ['Keep refrigerated until ready to serve.'],
        personalisation: 'Custom colour scheme and message.',
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

export function getProductBySlug(
  categorySlug: string,
  productSlug: string,
): { category: Category; product: Product } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const product = category.products.find((p) => p.slug === productSlug);
  if (!product) return undefined;
  return { category, product };
}

export function getAllProductPaths(): { category: string; product: string }[] {
  return categories.flatMap((cat) =>
    cat.products.map((p) => ({ category: cat.slug, product: p.slug })),
  );
}
