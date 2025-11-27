import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('google-ads-management');
}

export default function GoogleAdsManagementLayout({ children }) {
  return children;
}
