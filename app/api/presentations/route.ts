export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { listPresentations, type PresentationLocale } from "@/lib/presentationLibrary";

const isPresentationLocale = (value: string | null): value is PresentationLocale =>
  value === "ru" || value === "uz";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const langParam = searchParams.get("lang");
  const locale = isPresentationLocale(langParam) ? langParam : "ru";

  const presentations = await listPresentations(locale);
  return NextResponse.json({ presentations });
}
