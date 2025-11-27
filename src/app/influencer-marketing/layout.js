import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('influencer-marketing');
}

export default function InfluencerMarketingLayout({ children }) {
  return children;
}
