import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('conversion-rate-optimization');
}

export default function ConversionRateOptimizationLayout({ children }) {
  return children;
}
