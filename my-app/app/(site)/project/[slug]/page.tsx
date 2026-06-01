import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectDescription } from "@/components/project-description";
import { getProject, projects } from "@/lib/projects";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/project"
        className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
      >
        ← All projects
      </Link>
      <header className="mt-8">
        <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
      </header>
      <ProjectDescription
        paragraphs={project.description}
        className="mt-8 max-w-prose"
      />
    </div>
  );
}
