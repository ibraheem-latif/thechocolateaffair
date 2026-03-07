export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/personalize_it_glasgow_/';
export const INSTAGRAM_DM_URL = 'https://ig.me/m/personalize_it_glasgow_';

export function getOrderDmUrl(productName: string): string {
  const message = `Hi! I'm interested in the ${productName}. Could I get more details please?`;
  return `${INSTAGRAM_DM_URL}?text=${encodeURIComponent(message)}`;
}
