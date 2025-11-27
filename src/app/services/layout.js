import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('services');
}

export default function ServicesLayout({ children }) {
  return children;
}
