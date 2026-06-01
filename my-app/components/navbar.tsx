"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { projects, projectHref } from "@/lib/projects";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "About me" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

const navLinkClass =
  "inline-flex rounded-none px-2.5 py-2 text-xs font-medium uppercase tracking-widest transition-colors sm:px-3";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const projectsActive = isActive(pathname, "/project");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <nav
        className="mx-auto flex h-14 max-w-5xl items-center justify-end px-4 sm:px-6"
        aria-label="Main"
      >
        <ul className="flex flex-wrap items-center gap-0.5 sm:gap-1">
          {navItems.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    navLinkClass,
                    active
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  navLinkClass,
                  "items-center gap-1 outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
                  projectsActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                Projects
                <ChevronDownIcon className="size-3.5" aria-hidden />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-52">
                <DropdownMenuItem asChild>
                  <Link href="/project">All projects</Link>
                </DropdownMenuItem>
                {projects.map((project) => (
                  <DropdownMenuItem key={project.slug} asChild>
                    <Link href={projectHref(project.slug)}>{project.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </nav>
    </header>
  );
}
