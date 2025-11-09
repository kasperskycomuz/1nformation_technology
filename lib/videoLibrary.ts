import path from "path";
import { promises as fs } from "fs";

export type VideoMetadata = {
  filename: string;
  title: string;
  slug: string;
};

const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".ogg"]);

const videosDir = path.join(process.cwd(), "video");

const normalizeWhitespace = (value: string) => value.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();

const transliterationMap: Record<string, string> = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  ғ: "g",
  д: "d",
  е: "e",
  ё: "yo",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  қ: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ҳ: "h",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ъ: "",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya",
  ў: "o",
  ğ: "g",
  ʼ: "",
  ʹ: "",
  ү: "u",
  ұ: "u",
  і: "i",
  ї: "i",
  є: "e",
  ң: "ng",
  һ: "h",
  ә: "a",
  ө: "o"
};

const transliterate = (value: string) => {
  const normalized = value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");

  let result = "";

  for (const char of normalized) {
    if (char === "_" || char === "-" || char === "·") {
      result += " ";
      continue;
    }

    const lower = char.toLowerCase();
    if (transliterationMap[lower] !== undefined) {
      result += transliterationMap[lower];
      continue;
    }

    if ((lower >= "a" && lower <= "z") || (lower >= "0" && lower <= "9") || lower === " ") {
      result += lower;
      continue;
    }

    if (/\s/.test(char)) {
      result += " ";
    }
  }

  return result;
};

const capitalizeWords = (value: string) =>
  value.replace(/\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));

export const slugify = (value: string) =>
  normalizeWhitespace(transliterate(value))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const buildTitle = (filename: string) => {
  const base = path.parse(filename).name;
  return capitalizeWords(normalizeWhitespace(base));
};

export async function listVideos(): Promise<VideoMetadata[]> {
  let entries: string[] = [];

  try {
    entries = await fs.readdir(videosDir);
  } catch (error) {
    return [];
  }

  return entries
    .filter((file) => VIDEO_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
    .map((filename) => {
      const base = path.parse(filename).name;
      return {
        filename,
        title: buildTitle(filename),
        slug: slugify(base)
      } satisfies VideoMetadata;
    });
}

export async function findVideoBySlug(slug: string): Promise<VideoMetadata | null> {
  const videos = await listVideos();
  const match = videos.find((video) => video.slug === slug);
  return match ?? null;
}

export const getVideoPath = (filename: string) => path.join(videosDir, filename);
