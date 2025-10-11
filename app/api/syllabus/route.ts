import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "resusrs", "syllabus.pdf");
  const fileBuffer = await fs.readFile(filePath);
  const fileArray = new Uint8Array(fileBuffer);

  return new NextResponse(fileArray, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=\"syllabus.pdf\""
      }
    });
  } catch (error) {
    console.error("Failed to load syllabus file:", error);
    return new NextResponse("File not found", { status: 404 });
  }
}
