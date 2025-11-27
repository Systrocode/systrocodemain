import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('social-media-marketing');
}

export default function SocialMediaMarketingLayout({ children }) {
  return children;
}
