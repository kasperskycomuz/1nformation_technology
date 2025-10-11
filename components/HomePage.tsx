"use client";

import Link from "next/link";
import { useState } from "react";
import { homeContent } from "@/lib/translations";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";
import authorsPhoto from "@/images/authors.jpg";

export function HomePage() {
  const { language } = useLanguage();
  const content = homeContent[language];
  const [showVideosModal, setShowVideosModal] = useState(false);
  const [showPracticeModal, setShowPracticeModal] = useState(false);
  const [showAuthorsModal, setShowAuthorsModal] = useState(false);

  const openVideosModal = () => setShowVideosModal(true);
  const closeVideosModal = () => setShowVideosModal(false);
  const openPracticeModal = () => setShowPracticeModal(true);
  const closePracticeModal = () => setShowPracticeModal(false);
  const openAuthorsModal = () => setShowAuthorsModal(true);
  const closeAuthorsModal = () => setShowAuthorsModal(false);

  const videoButtonLabel = language === "uz" ? "Video" : "Видео";
  const videoButtons = Array.from({ length: 12 }, (_, index) => `${videoButtonLabel} ${index + 1}`);
  const practiceButtons = Array.from({ length: 12 }, (_, index) => {
    const practiceNumber = index + 1;
    return {
      label: `${content.practiceSessions.buttonLabel} № ${practiceNumber}`,
      href: `/api/practice/${practiceNumber}`
    };
  });

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

              if (section.id === "authors") {
                return [
                  <button
                    key={section.id}
                    type="button"
                    className="hero__action hero__action--button"
                    onClick={openAuthorsModal}
                  >
                    {section.title}
                  </button>
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
        <div className="hero__image-wrapper">
          <Image src="/images/fon.jpg" alt="" fill className="hero__image" priority />
          <div className="hero__image-overlay">
            <span className="hero__image-title">{content.hero.imageTitle}</span>
          </div>
        </div>
      </div>

      <div className="grid">
        {content.sections.flatMap((section) => {
          const isSyllabus = section.id === "syllabus";
          const isVideos = section.id === "videos";
          const isAuthors = section.id === "authors";
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
                ) : isAuthors ? (
                  <button
                    type="button"
                    className="section-card__link section-card__link--button"
                    onClick={openAuthorsModal}
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
              {practiceButtons.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="practice-modal__button"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {showAuthorsModal ? (
        <div className="authors-modal" role="dialog" aria-modal="true" aria-labelledby="authors-modal-title">
          <div className="authors-modal__dialog">
            <button
              type="button"
              className="authors-modal__close"
              onClick={closeAuthorsModal}
              aria-label={language === "uz" ? "Yopish" : "Закрыть"}
            >
              ×
            </button>
            <div className="authors-modal__content">
              <div className="authors-modal__photo-frame">
                <Image
                  src={authorsPhoto}
                  alt={content.authorModal.name}
                  className="authors-modal__photo"
                  width={360}
                  height={420}
                  sizes="(max-width: 600px) 100vw, 360px"
                />
              </div>
              <div className="authors-modal__info">
                <span className="authors-modal__badge">{content.authorModal.title}</span>
                <h2 id="authors-modal-title" className="authors-modal__name">
                  {content.authorModal.name}
                </h2>
                <p className="authors-modal__role">{content.authorModal.role}</p>
                <p className="authors-modal__description">{content.authorModal.description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
