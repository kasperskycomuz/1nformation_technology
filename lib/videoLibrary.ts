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

const capitalizeWords = (value: string) =>
  value.replace(/\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));

export const slugify = (value: string) =>
  normalizeWhitespace(value)
    .toLowerCase()
    .replace(/[\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

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
