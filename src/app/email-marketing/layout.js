import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('email-marketing');
}

export default function EmailMarketingLayout({ children }) {
  return children;
}
