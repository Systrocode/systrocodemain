import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('facebook-ads');
}

export default function FacebookInstagramAdsLayout({ children }) {
  return children;
}
