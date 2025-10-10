import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LectureTopicPageClient } from "@/components/LectureTopicPageClient";
import { getLectureTopic, lectureTopicSlugs } from "@/lib/translations";

type LectureTopicPageProps = {
  params: { topic: string };
};

export function generateStaticParams() {
  return lectureTopicSlugs.map((topic) => ({ topic }));
}

export function generateMetadata({ params }: LectureTopicPageProps): Metadata {
  const topic = getLectureTopic(params.topic, "ru");
  if (!topic) {
    return {
      title: "Лекция не найдена — ИТ для филологов",
      description: "Материал не найден"
    } satisfies Metadata;
  }

  return {
    title: `${topic.title} — ИТ для филологов`,
    description: topic.summary
  } satisfies Metadata;
}

export default function LectureTopicPage({ params }: LectureTopicPageProps) {
  if (!lectureTopicSlugs.includes(params.topic)) {
    notFound();
  }

  return <LectureTopicPageClient slug={params.topic} />;
}
