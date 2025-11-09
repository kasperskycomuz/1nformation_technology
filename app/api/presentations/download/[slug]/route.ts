import { NextResponse } from "next/server";
import { findPresentationBySlug } from "@/lib/presentationLibrary";

export const dynamic = "force-dynamic";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const metadata = await findPresentationBySlug(slug);

  if (!metadata) {
    return NextResponse.json({ message: "Presentation not found" }, { status: 404 });
  }

  const url = new URL(metadata.href, request.url);
  return NextResponse.redirect(url.toString(), { status: 307 });
}
