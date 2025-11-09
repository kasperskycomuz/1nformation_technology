export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { listPresentations } from "@/lib/presentationLibrary";

export async function GET() {
  const presentations = await listPresentations();
  return NextResponse.json({ presentations });
}
