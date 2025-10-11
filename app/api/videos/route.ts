export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { listVideos } from "@/lib/videoLibrary";

export async function GET() {
  const videos = await listVideos();

  return NextResponse.json({
    videos
  });
}
