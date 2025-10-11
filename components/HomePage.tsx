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
  const [showPracticeModal, setShowPracticeModal] = useState(false);

  const openVideosModal = () => setShowVideosModal(true);
  const closeVideosModal = () => setShowVideosModal(false);
  const openPracticeModal = () => setShowPracticeModal(true);
  const closePracticeModal = () => setShowPracticeModal(false);

  const videoButtonLabel = language === "uz" ? "Video" : "Видео";
  const videoButtons = Array.from({ length: 12 }, (_, index) => `${videoButtonLabel} ${index + 1}`);
  const practiceButtons = Array.from(
    { length: 12 },
    (_, index) => `${content.practiceSessions.buttonLabel} ${index + 1}`
  );

  return (
    <main className="page">
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">{content.hero.title}</h1>
          <p className="hero__description">{content.hero.description}</p>
          <div className="hero__actions">
            {content.sections.flatMap((section) => {
              if (section.id === "videos") {
                return [
                  <button
                    key={section.id}
                    type="button"
                    className="hero__action hero__action--button"
                    onClick={openVideosModal}
                  >
                    {section.title}
                  </button>,
                  <Link key="practice-sessions" href="#practice-sessions" className="hero__action">
                    {content.practiceSessions.actionLabel}
                  </Link>
                ];
              }

              return [
                <Link key={section.id} href={`#${section.id}`} className="hero__action">
                  {section.title}
                </Link>
              ];
            })}
          </div>
        </div>
        <div className="hero__image-wrapper" aria-hidden="true">
          <Image src="/images/fon.jpg" alt="" fill className="hero__image" priority />
        </div>
      </div>

      <div className="grid">
        {content.sections.flatMap((section) => {
          const isSyllabus = section.id === "syllabus";
          const isVideos = section.id === "videos";
          const card = (
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

          if (!isVideos) {
            return [card];
          }

          return [
            card,
            <section key="practice-sessions" id="practice-sessions" className="section-card">
              <div className="section-card__header">
                <span className="section-card__badge">{content.practiceSessions.buttonLabel}</span>
                <h2 className="section-card__title">{content.practiceSessions.actionLabel}</h2>
              </div>
              <p className="section-card__description">{content.practiceSessions.summary}</p>
              <div className="section-card__cta">
                <button
                  type="button"
                  className="section-card__link section-card__link--button"
                  onClick={openPracticeModal}
                >
                  {content.practiceSessions.modalTitle}
                </button>
                <span className="section-card__hint">{content.practiceSessions.hint}</span>
              </div>
            </section>
          ];
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

      {showPracticeModal ? (
        <div
          className="practice-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="practice-modal-title"
        >
          <div className="practice-modal__dialog">
            <div className="practice-modal__header">
              <h2 id="practice-modal-title" className="practice-modal__title">
                {content.practiceSessions.modalTitle}
              </h2>
              <button
                type="button"
                className="practice-modal__close"
                onClick={closePracticeModal}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <p className="practice-modal__description">{content.practiceSessions.modalDescription}</p>
            <div className="practice-modal__grid">
              {practiceButtons.map((label) => (
                <button key={label} type="button" className="practice-modal__button">
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
