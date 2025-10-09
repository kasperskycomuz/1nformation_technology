"use client";

import Link from "next/link";
import { homeContent } from "@/lib/translations";
import { useLanguage } from "./LanguageContext";

export function HomePage() {
  const { language } = useLanguage();
  const content = homeContent[language];

  return (
    <main className="page">
      <div className="hero">
        <div className="hero__badge">{content.hero.badge}</div>
        <h1 className="hero__title">{content.hero.title}</h1>
        <p className="hero__description">{content.hero.description}</p>
        <div className="hero__actions">
          {content.sections.map((section) => (
            <Link key={section.id} href={`#${section.id}`} className="hero__action">
              {section.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid">
        {content.sections.map((section) => (
          <section key={section.id} id={section.id} className="section-card">
            <div className="section-card__header">
              <span className="section-card__badge">{section.subtitle}</span>
              <h2 className="section-card__title">{section.title}</h2>
            </div>
            <p className="section-card__description">{section.description}</p>
            <div className="section-card__cta">
              <Link href={`/${section.id}`} className="section-card__link">
                {section.linkLabel}
              </Link>
              <span className="section-card__hint">{section.hint}</span>
            </div>
          </section>
        ))}
      </div>

      <section className="highlight" aria-labelledby="highlight-title">
        <div className="highlight__content">
          <h2 id="highlight-title">{content.highlight.title}</h2>
          <p>{content.highlight.body}</p>
        </div>
        <div className="highlight__panel">
          <p className="highlight__label">{content.highlight.label}</p>
          <ul className="highlight__list">
            {content.highlight.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>{content.footer.copyright}</p>
        <p className="footer__note">{content.footer.note}</p>
      </footer>
    </main>
  );
}
