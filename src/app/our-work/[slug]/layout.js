import { projects } from '@/data/projects';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found - Systrocode",
    };
  }

  return {
    title: `${project.title} | Case Study - Systrocode`,
    description: project.description.substring(0, 160),
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function Layout({ children }) {
  return children;
}
