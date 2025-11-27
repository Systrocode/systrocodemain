import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('search-engine-optimization');
}

export default function SearchEngineOptimizationLayout({ children }) {
  return children;
}
