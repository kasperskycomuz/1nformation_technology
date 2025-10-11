"use client";

import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/lib/translations";
import { useLanguage } from "./LanguageContext";
import heroImage from "@/images/fon.jfif";

export function HomePage() {
  const { language } = useLanguage();
  const content = homeContent[language];

  return (
    <main className="page">
      <div className="hero">
        <div className="hero__content">
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
        <div className="hero__image-wrapper" aria-hidden="true">
          <Image src={heroImage} alt="" className="hero__image" priority />
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

      <footer className="footer">
        <p>{content.footer.copyright}</p>
        <p className="footer__note">{content.footer.note}</p>
      </footer>
    </main>
  );
}
