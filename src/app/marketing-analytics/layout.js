import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('marketing-analytics');
}

export default function MarketingAnalyticsLayout({ children }) {
  return children;
}
