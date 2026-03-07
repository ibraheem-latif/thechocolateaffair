import Image from 'next/image';
import { Instagram, Play, Images, type LucideIcon } from 'lucide-react';

const FEED_ID = '5dvoGGIApAZPS5r7rKBr';
const INSTAGRAM_URL = 'https://www.instagram.com/personalize_it_glasgow_/';
const INSTAGRAM_GRADIENT = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';

interface BeholdSize {
  mediaUrl: string;
  width: number;
  height: number;
}

interface BeholdPost {
  id: string;
  permalink: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  isReel?: boolean;
  prunedCaption: string;
  sizes: {
    small: BeholdSize;
    medium: BeholdSize;
    large: BeholdSize;
  };
  thumbnailUrl?: string;
}

interface BeholdFeed {
  username: string;
  biography: string;
  profilePictureUrl: string;
  followersCount: number;
  followsCount: number;
  posts: BeholdPost[];
}

const MEDIA_BADGE_ICONS: Partial<Record<BeholdPost['mediaType'], LucideIcon>> = {
  VIDEO: Play,
  CAROUSEL_ALBUM: Images,
};

async function getFeed(): Promise<BeholdFeed | null> {
  try {
    const res = await fetch(`https://feeds.behold.so/${FEED_ID}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function truncateCaption(caption: string | undefined, maxLength: number): string {
  if (!caption) return '';
  if (caption.length <= maxLength) return caption;
  return caption.slice(0, maxLength) + '\u2026';
}

function getPostImageUrl(post: BeholdPost): string | undefined {
  if (post.mediaType === 'VIDEO') return post.thumbnailUrl;
  return post.sizes.medium?.mediaUrl;
}

export default async function InstagramFeed() {
  const feed = await getFeed();
  const posts = feed?.posts?.slice(0, 9) ?? [];

  return (
    <section className="min-h-screen bg-vanilla flex items-center py-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            {feed?.profilePictureUrl && (
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-rose-gold ring-offset-2">
                <div
                  className="absolute inset-0 rounded-full p-[2px]"
                  style={{ background: INSTAGRAM_GRADIENT }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-cream">
                    <Image
                      src={feed.profilePictureUrl}
                      alt="The Chocolate Affair Glasgow"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ background: INSTAGRAM_GRADIENT }}
                >
                  <Instagram size={12} className="text-white" strokeWidth={2.5} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-rose-gold font-semibold">
                  Follow along
                </p>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-espresso">
                As Seen on Instagram
              </h2>
              {feed && (
                <p className="text-dusty-mocha text-xs mt-1.5">
                  <span className="font-semibold text-mocha">
                    {feed.followersCount.toLocaleString()}
                  </span>{' '}
                  followers &middot; Fresh creations & behind-the-scenes
                </p>
              )}
            </div>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg self-start sm:self-auto flex-shrink-0"
            style={{ background: INSTAGRAM_GRADIENT }}
          >
            <Instagram size={16} />
            @personalize_it_glasgow_
          </a>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {posts.map((post) => {
              const imageUrl = getPostImageUrl(post);
              const caption = truncateCaption(post.prunedCaption, 90);
              const BadgeIcon = MEDIA_BADGE_ICONS[post.mediaType];

              return (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-xl bg-champagne"
                >
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={post.prunedCaption || 'Instagram post'}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  )}

                  {BadgeIcon && (
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-1.5">
                        <BadgeIcon
                          size={11}
                          className={`text-white ${post.mediaType === 'VIDEO' ? 'fill-white' : ''}`}
                        />
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-espresso/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-20">
                    {caption && (
                      <p className="text-white/90 text-xs leading-relaxed mb-2 line-clamp-3">
                        {caption}
                      </p>
                    )}
                    <span className="text-rose-gold-light text-[11px] font-semibold tracking-wide">
                      View on Instagram &rarr;
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 text-dusty-mocha text-sm">
            Unable to load feed — check back soon.
          </div>
        )}
      </div>
    </section>
  );
}
