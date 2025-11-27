import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('web-development');
}

export default function WebDevelopmentLayout({ children }) {
  return children;
}
