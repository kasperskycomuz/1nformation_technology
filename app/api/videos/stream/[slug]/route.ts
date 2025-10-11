import { NextRequest, NextResponse } from "next/server";
import { findVideoBySlug, getVideoPath } from "@/lib/videoLibrary";
import { promises as fsPromises } from "fs";
import fs from "fs";
import path from "path";
import { Readable } from "stream";

const DEFAULT_CHUNK_SIZE = 1_000_000; // 1MB

const getContentType = (filename: string) => {
  const extension = path.extname(filename).toLowerCase();

  switch (extension) {
    case ".webm":
      return "video/webm";
    case ".ogg":
      return "video/ogg";
    case ".mp4":
    default:
      return "video/mp4";
  }
};

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug;
  const metadata = await findVideoBySlug(slug);

  if (!metadata) {
    return NextResponse.json({ message: "Video not found" }, { status: 404 });
  }

  const filePath = getVideoPath(metadata.filename);
  const stat = await fsPromises.stat(filePath);
  const fileSize = stat.size;
  const contentType = getContentType(metadata.filename);
  const range = request.headers.get("range");

  if (range) {
    const match = /bytes=(\d+)-(\d*)/.exec(range);

    if (!match) {
      return NextResponse.json({ message: "Invalid Range" }, { status: 416 });
    }

    const start = Number.parseInt(match[1], 10);
    const end = match[2] ? Number.parseInt(match[2], 10) : Math.min(start + DEFAULT_CHUNK_SIZE, fileSize - 1);

    if (start >= fileSize || end >= fileSize) {
      return NextResponse.json({ message: "Range Not Satisfiable" }, { status: 416 });
    }

    const chunkSize = end - start + 1;
    const videoStream = fs.createReadStream(filePath, { start, end });

    return new NextResponse(Readable.toWeb(videoStream) as unknown as ReadableStream, {
      status: 206,
      headers: {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize.toString(),
        "Content-Type": contentType,
        "Content-Disposition": "inline"
      }
    });
  }

  const videoStream = fs.createReadStream(filePath);

  return new NextResponse(Readable.toWeb(videoStream) as unknown as ReadableStream, {
    status: 200,
    headers: {
      "Content-Length": fileSize.toString(),
      "Content-Type": contentType,
      "Accept-Ranges": "bytes",
      "Content-Disposition": "inline"
    }
  });
}
