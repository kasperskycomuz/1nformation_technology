"use client";

import Link from "next/link";
import { useState } from "react";
import { homeContent } from "@/lib/translations";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";

export function HomePage() {
  const { language } = useLanguage();
  const content = homeContent[language];
  const [showVideosModal, setShowVideosModal] = useState(false);

  const openVideosModal = () => setShowVideosModal(true);
  const closeVideosModal = () => setShowVideosModal(false);

  const videoButtonLabel = language === "uz" ? "Video" : "Видео";
  const videoButtons = Array.from({ length: 12 }, (_, index) => `${videoButtonLabel} ${index + 1}`);

  return (
    <main className="page">
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">{content.hero.title}</h1>
          <p className="hero__description">{content.hero.description}</p>
          <div className="hero__actions">
            {content.sections.map((section) => {
              if (section.id === "videos") {
                return (
                  <button
                    key={section.id}
                    type="button"
                    className="hero__action hero__action--button"
                    onClick={openVideosModal}
                  >
                    {section.title}
                  </button>
                );
              }

              return (
                <Link key={section.id} href={`#${section.id}`} className="hero__action">
                  {section.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hero__image-wrapper" aria-hidden="true">
          <Image src="/images/fon.jpg" alt="" fill className="hero__image" priority />
        </div>
      </div>

      <div className="grid">
        {content.sections.map((section) => {
          const isSyllabus = section.id === "syllabus";
          const isVideos = section.id === "videos";
          return (
            <section key={section.id} id={section.id} className="section-card">
              <div className="section-card__header">
                <span className="section-card__badge">{section.subtitle}</span>
                <h2 className="section-card__title">{section.title}</h2>
              </div>
              <p className="section-card__description">{section.description}</p>
              <div className="section-card__cta">
                {isSyllabus ? (
                  <a
                    href="/api/syllabus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="section-card__link"
                  >
                    {section.linkLabel}
                  </a>
                ) : isVideos ? (
                  <button
                    type="button"
                    className="section-card__link section-card__link--button"
                    onClick={openVideosModal}
                  >
                    {section.linkLabel}
                  </button>
                ) : (
                  <Link href={`/${section.id}`} className="section-card__link">
                    {section.linkLabel}
                  </Link>
                )}
                <span className="section-card__hint">{section.hint}</span>
              </div>
            </section>
          );
        })}
      </div>

      <footer className="footer">
        <p>{content.footer.copyright}</p>
        <p className="footer__note">{content.footer.note}</p>
      </footer>

      {showVideosModal ? (
        <div className="videos-modal" role="dialog" aria-modal="true" aria-labelledby="videos-modal-title">
          <div className="videos-modal__dialog">
            <div className="videos-modal__header">
              <h2 id="videos-modal-title" className="videos-modal__title">
                {language === "uz" ? "Video darslar" : "Видео материалы"}
              </h2>
              <button type="button" className="videos-modal__close" onClick={closeVideosModal} aria-label="Close modal">
                ×
              </button>
            </div>
            <p className="videos-modal__description">
              {language === "uz"
                ? "O'quv videolari ro'yxatini tanlang"
                : "Выберите нужный видеоматериал из списка"}
            </p>
            <div className="videos-modal__grid">
              {videoButtons.map((label) => (
                <button key={label} type="button" className="videos-modal__button">
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
