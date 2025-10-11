import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(
  _request: Request,
  { params }: { params: { number: string } }
) {
  const rawNumber = params.number;
  const practiceNumber = Number.parseInt(rawNumber, 10);

  if (!Number.isFinite(practiceNumber) || practiceNumber < 1) {
    return new NextResponse("Invalid practice number", { status: 400 });
  }

  const fileName = `${practiceNumber} практика.pdf`;
  const filePath = path.join(process.cwd(), "resusrs", fileName);

  try {
    const fileBuffer = await fs.readFile(filePath);
    const fileArray = new Uint8Array(fileBuffer);

    return new NextResponse(fileArray, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="practice-${practiceNumber}.pdf"; filename*=UTF-8''${encodeURIComponent(
          fileName
        )}`
      }
    });
  } catch (error) {
    console.error(`Failed to load practice file ${fileName}:`, error);
    return new NextResponse("File not found", { status: 404 });
  }
}
