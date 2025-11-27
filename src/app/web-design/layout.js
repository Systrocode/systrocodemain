import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('web-design');
}

export default function WebDesignLayout({ children }) {
  return children;
}
