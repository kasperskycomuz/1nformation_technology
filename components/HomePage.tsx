"use client";

import Link from "next/link";
import { homeContent, sectionContent } from "@/lib/translations";
import { useLanguage } from "./LanguageContext";

export function HomePage() {
  const { language } = useLanguage();
  const content = homeContent[language];
  const lectureCount = sectionContent.lecture[language].items.length;
  const practiceCount = sectionContent.practice[language].items.length;
  const interactiveCount = sectionContent.practice[language].interactiveModules?.length ?? 0;
  const numberFormatter = new Intl.NumberFormat(language === "ru" ? "ru-RU" : "uz-UZ");
  const heroPerks = content.highlight.items.slice(0, 3);

  const stats = language === "ru"
    ? [
        {
          value: `${numberFormatter.format(lectureCount)}+`,
          label: "Лекций и тематических блоков",
          description: "Структурированы для плавного погружения"
        },
        {
          value: `${numberFormatter.format(practiceCount)}`,
          label: "Практических заданий",
          description: "Поддержаны пошаговыми инструкциями и чек-листами"
        },
        {
          value: `${numberFormatter.format(interactiveCount)}`,
          label: "Интерактивных модулей",
          description: "Самопроверка и мгновенная обратная связь"
        }
      ]
    : [
        {
          value: `${numberFormatter.format(lectureCount)}+`,
          label: "Ma'ruzalar va mavzular",
          description: "Bosqichma-bosqich chuqur o'rganish uchun"
        },
        {
          value: `${numberFormatter.format(practiceCount)}`,
          label: "Amaliy topshiriqlar",
          description: "Har biri aniq ko'rsatmalar va nazorat bilan"
        },
        {
          value: `${numberFormatter.format(interactiveCount)}`,
          label: "Interaktiv modullar",
          description: "Darhol fikr-mulohaza va o'zini sinash"
        }
      ];

  const asideNote = language === "ru"
    ? {
        title: "Быстрый старт",
        body: "Выберите раздел ниже — материалы связаны между собой и помогут выстроить собственный маршрут обучения."
      }
    : {
        title: "Tez start",
        body: "Quyidagi bo'limni tanlang — materiallar o'zaro bog'langan va shaxsiy o'quv yo'lingizni yaratishga yordam beradi."
      };

  return (
    <main className="page">
      <div className="hero">
        <span className="hero__glow" aria-hidden="true" />
        <div className="hero__layout">
          <div className="hero__content">
            <div className="hero__badge">{content.hero.badge}</div>
            <h1 className="hero__title">{content.hero.title}</h1>
            <p className="hero__description">{content.hero.description}</p>
            <ul className="hero__benefits">
              {heroPerks.map((perk) => (
                <li key={perk}>
                  <span className="hero__benefit-dot" aria-hidden="true" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
            <div className="hero__actions">
              {content.sections.map((section) => (
                <Link key={section.id} href={`#${section.id}`} className="hero__action">
                  {section.title}
                </Link>
              ))}
            </div>
            <div className="hero__scroll-hint">
              <span aria-hidden="true">↓</span>
              <span>{language === "ru" ? "Листайте, чтобы изучить разделы" : "Bo'limlarni ko'rish uchun pastga aylantiring"}</span>
            </div>
          </div>
          <aside className="hero__aside">
            <div className="hero__stats">
              {stats.map((stat) => (
                <article key={stat.label} className="hero__stat">
                  <span className="hero__stat-value">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                  <p>{stat.description}</p>
                </article>
              ))}
            </div>
            <div className="hero__note">
              <span className="hero__note-title">{asideNote.title}</span>
              <p>{asideNote.body}</p>
            </div>
          </aside>
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
