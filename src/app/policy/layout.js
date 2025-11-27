import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('policy');
}

export default function PolicyLayout({ children }) {
  return children;
}
