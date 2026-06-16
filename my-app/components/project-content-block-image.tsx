import Image from "next/image";

import type { ProjectContentBlock, ProjectImage } from "@/lib/projects";
import { cn } from "@/lib/utils";

function getImageSizeClass(size: ProjectImage["size"] = "md") {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-xl",
    lg: "max-w-2xl",
    full: "max-w-none",
  } as const;

  return sizeClasses[size ?? "md"];
}

function getImageOrientationClass(orientation: ProjectImage["orientation"] = "wide") {
  const orientationClasses = {
    wide: "aspect-video",
    long: "aspect-3/4",
    square: "aspect-square",
  } as const;

  return orientationClasses[orientation ?? "wide"];
}

function getImageObjectFit(orientation: ProjectImage["orientation"] = "wide") {
  return orientation === "wide" ? "object-contain" : "object-cover";
}

type ProjectContentBlockImageProps = {
  block: Extract<ProjectContentBlock, { type: "image" }>;
  className?: string;
  priority?: boolean;
};

export function ProjectContentBlockImage({
  block,
  className,
  priority = false,
}: ProjectContentBlockImageProps) {
  const orientation = block.orientation ?? "wide";
  const isWide = orientation === "wide";

  return (
    <figure
      className={cn(
        "relative mx-auto w-full overflow-hidden rounded-xl border",
        isWide && "bg-muted",
        getImageSizeClass(block.size),
        getImageOrientationClass(orientation),
        className
      )}
    >
      <Image
        src={block.src}
        alt={block.alt}
        fill
        className={getImageObjectFit(orientation)}
        priority={priority}
      />
    </figure>
  );
}
