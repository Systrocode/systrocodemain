import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('data-analysis');
}

export default function DataAnalysisLayout({ children }) {
  return children;
}
