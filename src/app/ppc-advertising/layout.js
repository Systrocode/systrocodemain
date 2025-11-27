import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('ppc-advertising');
}

export default function PPCAdvertisingLayout({ children }) {
  return children;
}
