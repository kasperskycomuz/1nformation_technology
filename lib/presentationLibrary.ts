import path from "path";
import { promises as fs } from "fs";
import { slugify } from "@/lib/videoLibrary";

export type PresentationMetadata = {
  filename: string;
  title: string;
  slug: string;
  href: string;
};

const presentationsDir = path.join(process.cwd(), "public", "presentations");

const PRESENTATION_EXTENSIONS = new Set([
  ".pdf",
  ".ppt",
  ".pptx",
  ".odp"
]);

const normalizeWhitespace = (value: string) => value.replace(/[\s_-]+/g, " ").trim();

const capitalizeWords = (value: string) =>
  value.replace(/([\p{L}\p{N}]+)/gu, (word) => word.charAt(0).toUpperCase() + word.slice(1));

const buildTitle = (filename: string) => {
  const base = path.parse(filename).name;
  return capitalizeWords(normalizeWhitespace(base));
};

export async function listPresentations(): Promise<PresentationMetadata[]> {
  try {
    const entries = await fs.readdir(presentationsDir);

    return entries
      .filter((entry) => PRESENTATION_EXTENSIONS.has(path.extname(entry).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }))
      .map((filename) => {
        const base = path.parse(filename).name;
        const slug = slugify(base);
        const encoded = encodeURIComponent(filename);

        return {
          filename,
          title: buildTitle(filename),
          slug,
          href: `/presentations/${encoded}`
        } satisfies PresentationMetadata;
      });
  } catch (error) {
    return [];
  }
}

export async function findPresentationBySlug(slug: string): Promise<PresentationMetadata | null> {
  const presentations = await listPresentations();
  const match = presentations.find((presentation) => presentation.slug === slug);
  return match ?? null;
}

export function getPresentationPath(filename: string) {
  return path.join(presentationsDir, filename);
}

export function getPresentationContentType(filename: string) {
  const extension = path.extname(filename).toLowerCase();

  switch (extension) {
    case ".pdf":
      return "application/pdf";
    case ".ppt":
      return "application/vnd.ms-powerpoint";
    case ".odp":
      return "application/vnd.oasis.opendocument.presentation";
    case ".pptx":
    default:
      return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
  }
}
