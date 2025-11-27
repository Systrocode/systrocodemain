import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('cyber-security');
}

export default function CyberSecurityLayout({ children }) {
  return children;
}
