import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { type Project, projectHref } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const cardImage = project.headerImage;

  return (
    <Link
      href={projectHref(project.slug)}
      className="block transition-opacity hover:opacity-90"
    >
      <Card
        size="sm"
        className="h-full gap-0 data-[size=sm]:gap-0 data-[size=sm]:py-0"
      >
        {cardImage ? (
          <div
            data-slot="card-media"
            className="relative aspect-4/3 w-full overflow-hidden [&_img]:size-full [&_img]:object-cover"
          >
            <Image
              src={cardImage.src}
              alt={cardImage.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        ) : null}
        <CardHeader className="p-4 data-[size=sm]:px-5">
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
