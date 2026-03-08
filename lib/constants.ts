export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/personalize_it_glasgow_/';
export const INSTAGRAM_DM_URL = 'https://ig.me/m/personalize_it_glasgow_';

export function getOrderDmUrl(productName: string, variant?: string): string {
  const variantText = variant ? ` (${variant})` : '';
  const message = `Hi! I'm interested in the ${productName}${variantText}. Could I get more details please?`;
  return `${INSTAGRAM_DM_URL}?text=${encodeURIComponent(message)}`;
}
