import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('ai-automation');
}

export default function AIAutomationLayout({ children }) {
  return children;
}
