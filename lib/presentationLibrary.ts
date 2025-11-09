import path from "path";
import { promises as fs } from "fs";
import { slugify } from "@/lib/videoLibrary";

export type PresentationLocale = "ru" | "uz";

export type PresentationMetadata = {
  filename: string;
  title: string;
  slug: string;
  href: string;
  locale: PresentationLocale;
};

const presentationsRootDir = path.join(process.cwd(), "public", "presentations");

const PRESENTATION_LOCALE_DIRS: Record<PresentationLocale, string> = {
  ru: presentationsRootDir,
  uz: path.join(presentationsRootDir, "uzb")
};

const PRESENTATION_LOCALES: PresentationLocale[] = ["ru", "uz"];

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

const getPresentationsDir = (locale: PresentationLocale) => PRESENTATION_LOCALE_DIRS[locale];

export async function listPresentations(locale: PresentationLocale = "ru"): Promise<PresentationMetadata[]> {
  try {
    const directory = getPresentationsDir(locale);
    const entries = await fs.readdir(directory);

    return entries
      .filter((entry) => PRESENTATION_EXTENSIONS.has(path.extname(entry).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }))
      .map((filename) => {
        const base = path.parse(filename).name;
        const slug = slugify(base);
        const encoded = encodeURIComponent(filename);
        const href = locale === "uz" ? `/presentations/uzb/${encoded}` : `/presentations/${encoded}`;

        return {
          filename,
          title: buildTitle(filename),
          slug,
          href,
          locale
        } satisfies PresentationMetadata;
      });
  } catch (error) {
    return [];
  }
}

export async function findPresentationBySlug(
  slug: string,
  preferredLocale?: PresentationLocale
): Promise<PresentationMetadata | null> {
  const localesToSearch = preferredLocale
    ? [preferredLocale, ...PRESENTATION_LOCALES.filter((locale) => locale !== preferredLocale)]
    : PRESENTATION_LOCALES;

  for (const locale of localesToSearch) {
    const presentations = await listPresentations(locale);
    const match = presentations.find((presentation) => presentation.slug === slug);
    if (match) {
      return match;
    }
  }

  return null;
}

export function getPresentationPath(filename: string, locale: PresentationLocale = "ru") {
  return path.join(getPresentationsDir(locale), filename);
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
