import Link from "next/link";

import { ProjectDescription } from "@/components/project-description";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { type Project, projectHref } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={projectHref(project.slug)}
      className="block transition-opacity hover:opacity-90"
    >
      <Card size="sm" className="h-full">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
