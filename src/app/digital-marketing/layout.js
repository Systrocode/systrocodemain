import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('digital-marketing');
}

export default function DigitalMarketingLayout({ children }) {
  return children;
}
