"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { sectionContent, type SectionSlug } from "@/lib/translations";
import { useLanguage } from "./LanguageContext";
import { PracticeInteractiveAssignment } from "./PracticeInteractiveAssignment";

type SectionPageClientProps = {
  slug: SectionSlug;
};

export function SectionPageClient({ slug }: SectionPageClientProps) {
  const { language } = useLanguage();
  const content = sectionContent[slug][language];
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const sectionClassName = slug === "lecture" ? "section section--lecture" : "section";
  const linkLabels: Record<typeof language, string> = {
    ru: slug === "lecture" ? "Открыть лекцию" : "Подробнее",
    uz: slug === "lecture" ? "Ma'ruza sahifasini ochish" : "Batafsil"
  };

  useEffect(() => {
    setOpenItems({});
  }, [content]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <main className={sectionClassName}>
      <div className="section__wrap">
        <Link href="/" className="section__back">
          {content.backLabel}
        </Link>
        <span className="section__badge">{content.title}</span>
        <h1>{content.lead}</h1>
        <p className="section__description">{content.description}</p>
        <ul className="section__list">
          {content.items.map((item, index) => {
            const hasDetails = Array.isArray(item.details) ? item.details.length > 0 : Boolean(item.details);
            const isOpen = Boolean(openItems[index]);
            const panelId = `section-${slug}-panel-${index}`;
            const buttonId = `section-${slug}-button-${index}`;

            if (!hasDetails) {
              return (
                <li key={item.title} className="section__list-item">
                  <span className="section__list-title">{item.title}</span>
                  {item.linkSlug ? (
                    <Link
                      href={`/lecture/${item.linkSlug}`}
                      className="section__list-inline-link"
                      aria-label={`${linkLabels[language]}: ${item.title}`}
                    >
                      {linkLabels[language]}
                    </Link>
                  ) : null}
                </li>
              );
            }

            return (
              <li
                key={item.title}
                className={`section__list-item section__list-item--interactive${isOpen ? " section__list-item--open" : ""}`}
              >
                <div className="section__list-header">
                  <button
                    type="button"
                    id={buttonId}
                    className="section__list-button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="section__list-icon" aria-hidden="true">
                      ▼
                    </span>
                    <span className="section__list-title">{item.title}</span>
                  </button>
                  {item.linkSlug ? (
                    <Link
                      href={`/lecture/${item.linkSlug}`}
                      className="section__list-cta"
                      aria-label={`${linkLabels[language]}: ${item.title}`}
                    >
                      {linkLabels[language]}
                    </Link>
                  ) : null}
                </div>
                {isOpen ? (
                  <div className="section__list-panel" id={panelId} role="region" aria-labelledby={buttonId}>
                    {Array.isArray(item.details) ? (
                      <ul className="section__list-panel-items">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{item.details}</p>
                    )}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
        {slug === "practice" && content.interactiveModules?.length ? (
          <div className="section__interactives">
            {content.interactiveModules.map((module) => (
              <PracticeInteractiveAssignment key={module.id} content={module} anchorId={module.id} />
            ))}
          </div>
        ) : null}
      </div>
    </main>
  );
}
