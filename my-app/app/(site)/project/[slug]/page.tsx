import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectContentBlockImage } from "@/components/project-content-block-image";
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

  const contentBlocks =
    project.content ??
    project.description.map((text) => ({ type: "text" as const, text }));
  const renderedBlocks = [];

  for (let index = 0; index < contentBlocks.length; index += 1) {
    const block = contentBlocks[index];

    if (block.type === "text") {
      renderedBlocks.push(
        <ProjectDescription
          key={`${project.slug}-text-${index}`}
          paragraphs={[block.text]}
          className="max-w-prose"
        />
      );
      continue;
    }

    if (block.row) {
      const rowImages = [block];
      let nextIndex = index + 1;

      while (nextIndex < contentBlocks.length) {
        const nextBlock = contentBlocks[nextIndex];
        if (nextBlock.type !== "image" || nextBlock.row !== block.row) {
          break;
        }

        rowImages.push(nextBlock);
        nextIndex += 1;
      }

      renderedBlocks.push(
        <div
          key={`${project.slug}-row-${block.row}-${index}`}
          className={`grid items-start gap-4 ${rowImages.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}
        >
          {rowImages.map((rowBlock, rowBlockIndex) => (
            <ProjectContentBlockImage
              key={`${project.slug}-row-block-${index + rowBlockIndex}`}
              block={rowBlock}
              className="mx-0 w-full"
            />
          ))}
        </div>
      );

      index = nextIndex - 1;
      continue;
    }

    renderedBlocks.push(
      <ProjectContentBlockImage
        key={`${project.slug}-image-${index}`}
        block={block}
      />
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      {project.headerImage ? (
        <figure className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border">
          <Image
            src={project.headerImage.src}
            alt={project.headerImage.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow sm:text-5xl">
              {project.title}
            </h1>
          </figcaption>
        </figure>
      ) : null}
      <Link
        href="/project"
        className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
      >
        ← All projects
      </Link>
      {!project.headerImage ? (
        <header className="mt-8">
          <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
        </header>
      ) : null}
      <section className="mt-8 space-y-6">{renderedBlocks}</section>
    </div>
  );
}
