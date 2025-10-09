import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionPageClient } from "@/components/SectionPageClient";
import { sectionContent, type SectionSlug } from "@/lib/translations";

const SECTION_SLUGS = Object.keys(sectionContent) as SectionSlug[];

type SectionPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return SECTION_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: SectionPageProps): Metadata {
  const { slug } = params;
  if (isSectionSlug(slug)) {
    const data = sectionContent[slug].ru;
    return {
      title: `${data.title} — ИТ для филологов`,
      description: data.description
    } satisfies Metadata;
  }

  return {
    title: "ИТ для филологов",
    description: "Цифровые технологии для филологов"
  } satisfies Metadata;
}

export default function SectionPage({ params }: SectionPageProps) {
  const { slug } = params;
  if (!isSectionSlug(slug)) {
    notFound();
  }

  return <SectionPageClient slug={slug as SectionSlug} />;
}

function isSectionSlug(value: string): value is SectionSlug {
  return SECTION_SLUGS.includes(value as SectionSlug);
}
