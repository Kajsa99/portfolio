import { cn } from "@/lib/utils";

const URL_PATTERN = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;

function linkifyText(text: string) {
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(URL_PATTERN)) {
    const url = match[0];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      elements.push(text.slice(lastIndex, index));
    }

    const href = url.startsWith("http") ? url : `https://${url}`;
    elements.push(
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 transition-colors hover:text-foreground"
      >
        {url}
      </a>
    );

    lastIndex = index + url.length;
  }

  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements.length > 0 ? elements : text;
}

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
          {linkifyText(paragraph)}
        </p>
      ))}
    </div>
  );
}
