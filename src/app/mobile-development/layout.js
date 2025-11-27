import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('mobile-development');
}

export default function MobileDevelopmentLayout({ children }) {
  return children;
}
