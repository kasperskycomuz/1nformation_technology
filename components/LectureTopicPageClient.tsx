"use client";

import Link from "next/link";
import { useMemo } from "react";
import { lectureTopics, sectionContent } from "@/lib/translations";
import { useLanguage } from "./LanguageContext";

type LectureTopicPageClientProps = {
  slug: string;
};

export function LectureTopicPageClient({ slug }: LectureTopicPageClientProps) {
  const { language } = useLanguage();
  const topic = useMemo(() => lectureTopics[language].find((entry) => entry.slug === slug), [language, slug]);

  if (!topic) {
    const message = language === "ru" ? "Лекция не найдена." : "Ma'ruza topilmadi.";
    return (
      <main className="section">
        <div className="section__wrap">
          <p>{message}</p>
        </div>
      </main>
    );
  }

  const backLabel = sectionContent.lecture[language].backLabel;
  const planLabel = language === "ru" ? "План лекции" : "Ma'ruza rejasi";
  const contentLabel = language === "ru" ? "Содержательная часть" : "Asosiy bo'limlar";
  const resourcesLabel = language === "ru" ? "Рекомендуемые источники" : "Tavsiya etilgan manbalar";

  return (
    <main className="section">
      <div className="section__wrap lecture-topic">
        <Link href="/lecture" className="section__back">
          {backLabel}
        </Link>
        <span className="section__badge">{sectionContent.lecture[language].title}</span>
        <h1>{topic.title}</h1>
        <p className="section__description">{topic.summary}</p>

        <div className="lecture-topic__plan">
          <h2>{planLabel}</h2>
          <ol>
            {topic.plan.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="lecture-topic__content">
          <h2>{contentLabel}</h2>
          {topic.sections.map((section) => (
            <section key={section.heading} className="lecture-topic__section">
              <h3>{section.heading}</h3>
              {section.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        {topic.resources?.length ? (
          <div className="lecture-topic__resources">
            <h2>{resourcesLabel}</h2>
            <ul>
              {topic.resources.map((resource) => (
                <li key={resource.url}>
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </main>
  );
}
