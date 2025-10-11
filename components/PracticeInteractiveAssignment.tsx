"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import type { PracticeInteractiveContent } from "@/lib/translations";

type PracticeInteractiveAssignmentProps = {
  content: PracticeInteractiveContent;
  anchorId?: string;
};

type AnswersState = Record<string, number | null>;

export function PracticeInteractiveAssignment({ content, anchorId }: PracticeInteractiveAssignmentProps) {
  const [answers, setAnswers] = useState<AnswersState>(() =>
    Object.fromEntries(content.tasks.map((task) => [task.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [certificateError, setCertificateError] = useState<string | null>(null);
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  useEffect(() => {
    setAnswers(Object.fromEntries(content.tasks.map((task) => [task.id, null])));
    setSubmitted(false);
    setShowCertificateModal(false);
    setFirstName("");
    setLastName("");
    setCertificateError(null);
    setCertificateGenerated(false);
  }, [content]);

  const score = useMemo(() => {
    if (!submitted) {
      return 0;
    }
    return content.tasks.reduce((acc, task) => {
      const value = answers[task.id];
      return value === task.correct ? acc + 1 : acc;
    }, 0);
  }, [answers, content.tasks, submitted]);

  const total = content.tasks.length;
  const passed = submitted && score === total && total > 0;

  const handleSelect = (taskId: string, optionIndex: number) => {
    setAnswers((prev: AnswersState) => ({
      ...prev,
      [taskId]: optionIndex
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Object.fromEntries(content.tasks.map((task) => [task.id, null])));
    setSubmitted(false);
    setCertificateGenerated(false);
  };

  const allAnswered = useMemo(
    () => content.tasks.every((task) => answers[task.id] !== null),
    [answers, content.tasks]
  );

  const sectionId = anchorId ?? content.id;

  const locale = useMemo(() => {
    const label = content.submitLabel.toLowerCase();
    if (label.includes("javob")) {
      return "uz";
    }
    return "ru";
  }, [content.submitLabel]);

  const certificateTexts = useMemo(
    () => ({
      ru: {
        actionLabel: "Получить сертификат",
        modalTitle: "Сформировать сертификат",
        modalDescription:
          "Введите ваши фамилию и имя так, как они должны отображаться в документе.",
        firstNameLabel: "Имя",
        lastNameLabel: "Фамилия",
        confirmLabel: "Создать сертификат",
        cancelLabel: "Отмена",
        requiredFields: "Пожалуйста, заполните оба поля.",
        popupBlocked:
          "Не удалось открыть окно. Разрешите всплывающие окна для этого сайта и повторите попытку.",
        generatedNotice: "Сертификат открыт в новой вкладке. Вы можете сохранить или распечатать его.",
        certificateTitle: "Сертификат об успешном прохождении",
        certificateSubtitle: content.title,
        certificateBody: "Подтверждаем, что",
        certificateFooter:
          "успешно завершил(а) все практические задания курса. Сертификат сформирован автоматически." 
      },
      uz: {
        actionLabel: "Sertifikatni olish",
        modalTitle: "Sertifikat yaratish",
        modalDescription:
          "Hujjatda ko'rsatilishini xohlagan familiya va ismingizni kiriting.",
        firstNameLabel: "Ism",
        lastNameLabel: "Familiya",
        confirmLabel: "Sertifikat yaratish",
        cancelLabel: "Bekor qilish",
        requiredFields: "Iltimos, ikkala maydonni ham to'ldiring.",
        popupBlocked:
          "Oyna ochilmadi. Ushbu sayt uchun paydo bo'ladigan oynalarga ruxsat bering va qayta urinib ko'ring.",
        generatedNotice: "Sertifikat yangi oynada ochildi. Uni saqlashingiz yoki chop etishingiz mumkin.",
        certificateTitle: "Muvaffaqiyat sertifikati",
        certificateSubtitle: content.title,
        certificateBody: "Tasdiqlaymizki",
        certificateFooter:
          "kursdagi barcha amaliy topshiriqlarni muvaffaqiyatli bajarib bo'ldi. Sertifikat avtomatik tarzda yaratildi." 
      }
    }),
    [content.title]
  );

  const certificateCopy = certificateTexts[locale];

  const handleCertificateClick = () => {
    setShowCertificateModal(true);
    setCertificateError(null);
    setFirstName("");
    setLastName("");
  };

  const closeCertificateModal = () => {
    setShowCertificateModal(false);
    setCertificateError(null);
  };

  const createCertificateDocument = (fullName: string) => {
    const certificateWindow = window.open("", "_blank", "width=900,height=650");
    if (!certificateWindow) {
      setCertificateError(certificateCopy.popupBlocked);
      return;
    }

    const issuedDate = new Date().toLocaleDateString(locale === "ru" ? "ru-RU" : "uz-UZ", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    certificateWindow.document.write(`<!DOCTYPE html>
      <html lang="${locale}">
        <head>
          <meta charSet="utf-8" />
          <title>${certificateCopy.certificateTitle}</title>
          <style>
            body {
              font-family: 'Segoe UI', 'Inter', sans-serif;
              margin: 0;
              background: radial-gradient(circle at 30% 20%, #f7f2ff, #edf4ff 60%, #ffffff 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              color: #1c1f3a;
            }
            .certificate {
              width: 820px;
              max-width: 95vw;
              background: rgba(255, 255, 255, 0.92);
              border-radius: 32px;
              padding: 3rem;
              box-shadow: 0 40px 80px rgba(44, 59, 123, 0.18);
              border: 1px solid rgba(101, 115, 198, 0.28);
              position: relative;
              overflow: hidden;
            }
            .certificate::before {
              content: "";
              position: absolute;
              inset: 0;
              background: radial-gradient(circle at top right, rgba(95, 61, 196, 0.18), transparent 55%),
                          radial-gradient(circle at bottom left, rgba(53, 138, 221, 0.18), transparent 50%);
              pointer-events: none;
            }
            .certificate__header {
              text-align: center;
              margin-bottom: 2.5rem;
              position: relative;
              z-index: 1;
            }
            .certificate__badge {
              display: inline-flex;
              padding: 0.4rem 1.2rem;
              border-radius: 999px;
              background: rgba(95, 61, 196, 0.12);
              color: #3d2b8a;
              font-weight: 600;
              letter-spacing: 0.06em;
              text-transform: uppercase;
              font-size: 0.85rem;
            }
            .certificate__title {
              font-size: 2.4rem;
              margin: 1.5rem 0 0.75rem;
              letter-spacing: 0.03em;
            }
            .certificate__subtitle {
              font-size: 1.1rem;
              color: #4f5472;
              margin: 0;
            }
            .certificate__body {
              font-size: 1.15rem;
              line-height: 1.8;
              text-align: center;
              color: #2b3050;
              position: relative;
              z-index: 1;
              margin-bottom: 2.5rem;
            }
            .certificate__name {
              font-size: 2rem;
              font-weight: 700;
              margin: 1rem 0 1.75rem;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            }
            .certificate__footer {
              display: flex;
              justify-content: space-between;
              align-items: center;
              color: #4f5472;
              font-size: 0.95rem;
              position: relative;
              z-index: 1;
            }
            .certificate__signature {
              display: flex;
              flex-direction: column;
              gap: 0.35rem;
              text-align: right;
            }
            .certificate__signature span:first-child {
              font-weight: 600;
              color: #3d2b8a;
            }
            @media print {
              body {
                background: white;
              }
              .certificate {
                box-shadow: none;
              }
            }
          </style>
        </head>
        <body>
          <div class="certificate">
            <div class="certificate__header">
              <span class="certificate__badge">IT for Philologists</span>
              <h1 class="certificate__title">${certificateCopy.certificateTitle}</h1>
              <p class="certificate__subtitle">${certificateCopy.certificateSubtitle}</p>
            </div>
            <div class="certificate__body">
              <p>${certificateCopy.certificateBody}</p>
              <p class="certificate__name">${fullName}</p>
              <p>${certificateCopy.certificateFooter}</p>
            </div>
            <div class="certificate__footer">
              <span>${issuedDate}</span>
              <div class="certificate__signature">
                <span>Координатор курса</span>
                <span>IT для филологов</span>
              </div>
            </div>
          </div>
        </body>
      </html>`);
    certificateWindow.document.close();
  };

  const handleCertificateSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      setCertificateError(certificateCopy.requiredFields);
      return;
    }

    const fullName = `${lastName.trim()} ${firstName.trim()}`;
    createCertificateDocument(fullName);
    setCertificateGenerated(true);
    setShowCertificateModal(false);
  };

  return (
    <section id={sectionId} className="assignment" aria-live="polite">
      <div className="assignment__header">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>
      <ol className="assignment__tasks">
        {content.tasks.map((task) => (
          <li key={task.id} className="assignment__task">
            <p className="assignment__question">{task.question}</p>
            <div className="assignment__options">
              {task.options.map((option, index) => (
                <label key={option} className="assignment__option">
                  <input
                    type="radio"
                    name={task.id}
                    value={index}
                    checked={answers[task.id] === index}
                    onChange={() => handleSelect(task.id, index)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {submitted ? (
              <div
                className={`assignment__feedback ${
                  answers[task.id] === task.correct
                    ? "assignment__feedback--success"
                    : "assignment__feedback--info"
                }`}
              >
                {answers[task.id] === task.correct ? "✓" : "•"} {task.explanation}
              </div>
            ) : null}
          </li>
        ))}
      </ol>
      <div className="assignment__actions">
        <button
          type="button"
          className="assignment__button assignment__button--primary"
          onClick={handleSubmit}
          disabled={!allAnswered}
        >
          {content.submitLabel}
        </button>
        <button type="button" className="assignment__button" onClick={handleReset}>
          {content.resetLabel}
        </button>
        <button
          type="button"
          className="assignment__button assignment__button--certificate"
          onClick={handleCertificateClick}
          disabled={!passed}
        >
          {certificateCopy.actionLabel}
        </button>
      </div>
      {submitted ? (
        <div className="assignment__results">
          <strong>{content.resultsTitle}</strong>
          <span>{content.scoreLabel(score, total)}</span>
          <p className="assignment__message">
            {score === total ? content.successMessage : content.encouragement}
          </p>
          {certificateGenerated ? (
            <p className="assignment__message assignment__message--certificate">
              {certificateCopy.generatedNotice}
            </p>
          ) : null}
        </div>
      ) : null}
      {showCertificateModal ? (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby={`${sectionId}-certificate-title`}>
          <div className="certificate-modal__dialog">
            <h3 id={`${sectionId}-certificate-title`} className="certificate-modal__title">
              {certificateCopy.modalTitle}
            </h3>
            <p className="certificate-modal__description">{certificateCopy.modalDescription}</p>
            <form className="certificate-modal__form" onSubmit={handleCertificateSubmit}>
              <div className="certificate-modal__field">
                <label htmlFor={`${sectionId}-certificate-last`} className="certificate-modal__label">
                  {certificateCopy.lastNameLabel}
                </label>
                <input
                  id={`${sectionId}-certificate-last`}
                  className="certificate-modal__input"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  autoFocus
                />
              </div>
              <div className="certificate-modal__field">
                <label htmlFor={`${sectionId}-certificate-first`} className="certificate-modal__label">
                  {certificateCopy.firstNameLabel}
                </label>
                <input
                  id={`${sectionId}-certificate-first`}
                  className="certificate-modal__input"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              {certificateError ? (
                <p className="certificate-modal__error" role="alert">
                  {certificateError}
                </p>
              ) : null}
              <div className="certificate-modal__actions">
                <button
                  type="button"
                  className="assignment__button"
                  onClick={closeCertificateModal}
                >
                  {certificateCopy.cancelLabel}
                </button>
                <button
                  type="submit"
                  className="assignment__button assignment__button--primary"
                >
                  {certificateCopy.confirmLabel}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
}
