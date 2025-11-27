import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('blog');
}

export default function BlogLayout({ children }) {
  return children;
}
