"use client";

import Link from "next/link";
import { sectionContent, type SectionSlug } from "@/lib/translations";
import { useLanguage } from "./LanguageContext";
import { PracticeInteractiveAssignment } from "./PracticeInteractiveAssignment";

type SectionPageClientProps = {
  slug: SectionSlug;
};

export function SectionPageClient({ slug }: SectionPageClientProps) {
  const { language } = useLanguage();
  const content = sectionContent[slug][language];

  return (
    <main className="section">
      <div className="section__wrap">
        <Link href="/" className="section__back">
          {content.backLabel}
        </Link>
        <span className="section__badge">{content.title}</span>
        <h1>{content.lead}</h1>
        <p className="section__description">{content.description}</p>
        <ul>
          {content.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {slug === "practice" && content.interactive ? (
          <PracticeInteractiveAssignment content={content.interactive} />
        ) : null}
      </div>
    </main>
  );
}
