import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('software-development');
}

export default function SoftwareDevelopmentLayout({ children }) {
  return children;
}
