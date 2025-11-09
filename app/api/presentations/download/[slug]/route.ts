import { NextResponse } from "next/server";
import { Readable } from "stream";
import fs from "fs";
import { findPresentationBySlug, getPresentationContentType, getPresentationPath } from "@/lib/presentationLibrary";

export const dynamic = "force-dynamic";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const metadata = await findPresentationBySlug(slug);

  if (!metadata) {
    return NextResponse.json({ message: "Presentation not found" }, { status: 404 });
  }

  const filePath = getPresentationPath(metadata.filename);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ message: "File not found" }, { status: 404 });
  }

  const fileStream = fs.createReadStream(filePath);
  const contentType = getPresentationContentType(metadata.filename);
  const safeFilename = metadata.filename.replace(/"/g, '\\"');
  const encodedFilename = encodeURIComponent(metadata.filename);
  const contentDisposition = `inline; filename="${safeFilename}"; filename*=UTF-8''${encodedFilename}`;

  return new NextResponse(Readable.toWeb(fileStream) as unknown as ReadableStream, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": contentDisposition,
      "Cache-Control": "no-store",
      "Accept-Ranges": "none"
    }
  });
}
