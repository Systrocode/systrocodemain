import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('about');
}

export default function AboutLayout({ children }) {
  return children;
}
