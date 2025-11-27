import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('contact');
}

export default function ContactLayout({ children }) {
  return children;
}
