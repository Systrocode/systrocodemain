import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata() {
  return generateMeta('content-marketing');
}

export default function ContentMarketingLayout({ children }) {
  return children;
}
