import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('seo');
}

export default function SEOLayout({ children }) {
  return children;
}
