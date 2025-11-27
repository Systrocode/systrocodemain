import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('marketing-automation');
}

export default function MarketingAutomationLayout({ children }) {
  return children;
}
