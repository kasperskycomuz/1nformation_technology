"use client";

import Link from "next/link";
import { useMemo } from "react";
import { lectureTopics, sectionContent, LectureSectionMedia } from "@/lib/translations";
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

  const MIN_PARAGRAPH_COUNT = 5;

  const buildFillerParagraphs = (heading: string): string[] => {
    const templatesRu = [
      "Практический пример показывает, как тема «{heading}» реализуется в учебной группе и какие цифровые инструменты стоит подготовить заранее.",
      "Методические рекомендации помогают связать раздел «{heading}» с междисциплинарными проектами и продемонстрировать межпредметные связи.",
      "Дополнительная литература и онлайн-курсы углубляют понимание раздела «{heading}» и помогают выстроить индивидуальную образовательную траекторию.",
      "Контрольные вопросы позволяют оценить, насколько обучающиеся усвоили аспекты темы «{heading}» и готовы применять знания на практике.",
      "Опишите возможные риски при внедрении раздела «{heading}» и предложите способы их минимизации вместе со студентами."
    ];

    const templatesUz = [
      "«{heading}» bo‘limini amaliyotda qo‘llash uchun talabalar qanday vositalarni tayyorlab qo‘yishi va qaysi bosqichlarga e'tibor qaratishi kerakligini misollar orqali ko‘rsatib bering.",
      "Metodik tavsiyalar «{heading}» bo‘limini boshqa fanlar bilan bog‘lash va ko‘p fanli loyihalarda qo‘llash imkoniyatlarini ochib beradi.",
      "Qo‘shimcha adabiyotlar va onlayn kurslar «{heading}» mavzusini chuqurlashtirish hamda individual o‘quv yo‘lini shakllantirishga yordam beradi.",
      "Nazorat savollari talabalar «{heading}» mavzusining asosiy jihatlarini qay darajada o‘zlashtirganini tekshirish imkonini beradi.",
      "«{heading}» bo‘limini joriy etish jarayonida yuzaga kelishi mumkin bo‘lgan xatarlarni oldindan muhokama qiling va ularni kamaytirish usullarini belgilang."
    ];

    const source = language === "ru" ? templatesRu : templatesUz;
    return source.map((template) => template.replace("{heading}", heading));
  };

  const ensureParagraphs = (paragraphs: string[], heading: string): string[] => {
    const normalized = [...paragraphs];
    const filler = buildFillerParagraphs(heading);
    let fillIndex = 0;
    while (normalized.length < MIN_PARAGRAPH_COUNT) {
      normalized.push(filler[fillIndex % filler.length]);
      fillIndex += 1;
    }
    return normalized;
  };

  const createDefaultMedia = (heading: string, index: number): LectureSectionMedia[] => {
    if (language === "ru") {
      const createImage = (): LectureSectionMedia => ({
        kind: "image",
        title: `Изображение: ${heading}`,
        description:
          "Замените этот плейсхолдер на визуализацию ключевых элементов темы: диаграмму, фотоколлаж или скриншот интерфейса."
      });

      const createDiagram = (): LectureSectionMedia => ({
        kind: "diagram",
        title: `Диаграмма: ${heading}`,
        description: "Представьте взаимосвязи шагов и ролей внутри темы в виде блок-схемы или дорожной карты."
      });

      const createTable = (): LectureSectionMedia => ({
        kind: "table",
        title: "Таблица: контроль внедрения",
        description: "Используйте таблицу, чтобы сопоставить задачи раздела с инструментами и показателями успеха.",
        headers: ["Элемент", "Описание", "Практическое действие"],
        rows: [
          ["Сценарий", `Типовая ситуация для темы «${heading}».`, "Опишите последовательность действий и ожидаемый результат."],
          ["Инструмент", "Подходящий цифровой сервис или программа.", "Подготовьте ссылку и мини-инструкцию для группы."],
          ["Метрика", "Показатель, по которому оценивается успех внедрения.", "Согласуйте критерии проверки и сроки оценки."]
        ]
      });

      const variants: LectureSectionMedia[][] = [
        [createImage(), createDiagram()],
        [createDiagram(), createTable()],
        [createImage(), createTable()]
      ];

      return variants[index % variants.length];
    }

    const createImage = (): LectureSectionMedia => ({
      kind: "image",
      title: `Rasm: ${heading}`,
      description:
        "Ushbu plaseholderni mavzuning asosiy elementlarini ifodalovchi grafika, kollaj yoki interfeys skrinshoti bilan almashtiring."
    });

    const createDiagram = (): LectureSectionMedia => ({
      kind: "diagram",
      title: `Diagramma: ${heading}`,
      description: "Mavzudagi bosqichlar va rollar o‘rtasidagi bog‘lanishlarni blok-sxema yoki yo‘l xaritasi ko‘rinishida tasvirlang."
    });

    const createTable = (): LectureSectionMedia => ({
      kind: "table",
      title: "Jadval: joriy etishni boshqarish",
      description: "Bo‘lim vazifalarini mos vositalar va muvaffaqiyat ko‘rsatkichlari bilan solishtirish uchun jadvaldan foydalaning.",
      headers: ["Element", "Tavsif", "Amaliy harakat"],
      rows: [
        ["Ssenariy", `«${heading}» bo‘limi uchun odatiy vaziyat.`, "Harakatlar ketma-ketligi va natijani batafsil yozib chiqing."],
        ["Vosita", "Mos keluvchi raqamli servis yoki dastur.", "Havolani va qisqa yo‘riqnoma tayyorlab qo‘ying."],
        ["Ko‘rsatkich", "Joriy etish muvaffaqiyatini baholovchi mezon.", "Nazorat nuqtalari va baholash muddatini kelishib oling."]
      ]
    });

    const variants: LectureSectionMedia[][] = [
      [createImage(), createDiagram()],
      [createDiagram(), createTable()],
      [createImage(), createTable()]
    ];

    return variants[index % variants.length];
  };

  const normalizedSections = topic.sections.map((section, index) => ({
    ...section,
    paragraphs: ensureParagraphs(section.paragraphs, section.heading),
    media: section.media?.length ? section.media : createDefaultMedia(section.heading, index)
  }));

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
          {normalizedSections.map((section) => (
            <section key={section.heading} className="lecture-topic__section">
              <h3>{section.heading}</h3>
              {section.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              {section.media?.length ? (
                <div className="lecture-topic__media-group">
                  {section.media.map((mediaItem, mediaIdx) => {
                    if (mediaItem.kind === "table") {
                      return (
                        <figure key={`${mediaItem.title}-${mediaIdx}`} className="lecture-topic__table">
                          <div className="lecture-topic__table-title">{mediaItem.title}</div>
                          <div className="lecture-topic__table-wrapper">
                            <table>
                              <thead>
                                <tr>
                                  {mediaItem.headers.map((header) => (
                                    <th key={header}>{header}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {mediaItem.rows.map((row, rowIdx) => (
                                  <tr key={rowIdx}>
                                    {row.map((cell, cellIdx) => (
                                      <td key={cellIdx}>{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <figcaption className="lecture-topic__media-caption">{mediaItem.description}</figcaption>
                        </figure>
                      );
                    }

                    return (
                      <figure
                        key={`${mediaItem.title}-${mediaIdx}`}
                        className={`lecture-topic__media lecture-topic__media--${mediaItem.kind}`}
                      >
                        <div
                          className="lecture-topic__media-visual"
                          role="img"
                          aria-label={mediaItem.description}
                        >
                          <span>{mediaItem.title}</span>
                        </div>
                        <figcaption className="lecture-topic__media-caption">{mediaItem.description}</figcaption>
                      </figure>
                    );
                  })}
                </div>
              ) : null}
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
