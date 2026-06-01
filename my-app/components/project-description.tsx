import { cn } from "@/lib/utils";

type ProjectDescriptionProps = {
  paragraphs: string[];
  /** On listing cards, show only the first paragraph. */
  preview?: boolean;
  className?: string;
};

export function ProjectDescription({
  paragraphs,
  preview = false,
  className,
}: ProjectDescriptionProps) {
  const visible = preview ? paragraphs.slice(0, 1) : paragraphs;

  if (visible.length === 0) {
    return null;
  }

  return (
    <div className={cn("space-y-4", className)}>
      {visible.map((paragraph, index) => (
        <p
          key={index}
          className={cn(
            "text-sm leading-relaxed text-muted-foreground",
            preview && "line-clamp-3"
          )}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
