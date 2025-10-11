export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { findVideoBySlug } from "@/lib/videoLibrary";

export default async function VideoPlayerPage({ params }: { params: { slug: string } }) {
  const video = await findVideoBySlug(params.slug);

  if (!video) {
    notFound();
  }

  return (
    <section className="section">
      <div className="section__wrap">
        <Link href="/" className="section__back">
          ← На главную / Bosh sahifa
        </Link>
        <div className="video-player">
          <h1 className="video-player__title">{video.title}</h1>
          <video
            className="video-player__media"
            controls
            autoPlay
            preload="auto"
            src={`/api/videos/stream/${video.slug}`}
          >
            Ваш браузер не поддерживает воспроизведение видео. / Brauzeringiz video fayllarni qo&apos;llab-quvvatlamaydi.
          </video>
        </div>
      </div>
    </section>
  );
}
