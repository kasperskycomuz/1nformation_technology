import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const content = {
  lecture: {
    title: "Лекция",
    lead: "Методологические основы цифровой гуманитаристики",
    description: "Лекции о цифровых инструментах и методах анализа для филологов.",
    items: [
      "История компьютерной лингвистики и корпусных исследований",
      "Инструменты анализа текста: частотный анализ, конкордансы, тематическое моделирование",
      "Этические аспекты работы с цифровыми гуманитарными данными"
    ]
  },
  practice: {
    title: "Практика",
    lead: "Упражнения и лабораторные задания",
    description: "Практические задания по работе с текстами и данными.",
    items: [
      "Создание мини-корпуса и аннотирование текста",
      "Python для филологов: обработка текста с помощью spaCy и NLTK",
      "Визуализация результатов исследования в Tableau и Observable"
    ]
  },
  presentations: {
    title: "Презентации",
    lead: "Слайды и шаблоны для занятий",
    description: "Слайды и визуальные материалы для занятий и докладов.",
    items: [
      "Введение в цифровую филологию",
      "Работа с корпусами: пошаговый чек-лист",
      "Примеры проектов студентов и исследовательские кейсы"
    ]
  },
  syllabus: {
    title: "Силлабус",
    lead: "Структура и регламент курса",
    description: "Структура курса и критерии оценивания для слушателей.",
    items: [
      "Цели обучения и ожидаемые компетенции",
      "Модульная структура и междисциплинарные связи",
      "Система оценивания и критерии итогового проекта"
    ]
  },
  videos: {
    title: "Видео",
    lead: "Подборка видеолекций и интервью",
    description: "Видеолекции и интервью по цифровой гуманитаристике.",
    items: [
      "Лингвистика данных: интервью с практиком",
      "Разбор кейса: цифровая обработка рукописей",
      "Мастер-класс по визуализации филологических данных"
    ]
  },
  authors: {
    title: "Авторы",
    lead: "Команда курса и приглашённые эксперты",
    description: "Команда преподавателей и приглашённых специалистов курса.",
    items: [
      "Куратор программы — д-р филол. наук Анна Рубцова",
      "Эксперт по визуализации данных — канд. ист. наук Павел Лазарев",
      "Партнёрские организации и международные лаборатории"
    ]
  }
} satisfies Record<
  string,
  { title: string; lead: string; description: string; items: string[] }
>;

type SectionSlug = keyof typeof content;

type SectionPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return Object.keys(content).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: SectionPageProps): Metadata {
  const slug = params.slug;
  if (isSectionSlug(slug)) {
    const data = content[slug];
    return {
      title: `${data.title} — ИТ для филологов`,
      description: data.description
    } satisfies Metadata;
  }

  return {
    title: "ИТ для филологов",
    description: "Цифровые технологии для филологов"
  } satisfies Metadata;
}

export default function SectionPage({ params }: SectionPageProps) {
  const { slug } = params;
  if (!isSectionSlug(slug)) {
    notFound();
  }

  const data = content[slug as SectionSlug];

  return (
    <main className="section">
      <div className="section__wrap">
        <Link href="/" className="section__back">
          ← На главную
        </Link>
        <span className="section__badge">{data.title}</span>
        <h1>{data.lead}</h1>
        <ul>
          {data.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

function isSectionSlug(value: string): value is SectionSlug {
  return value in content;
}
