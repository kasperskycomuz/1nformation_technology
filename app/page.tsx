import Link from "next/link";

const sections = [
  {
    id: "lecture",
    title: "Лекция",
    subtitle: "Теория и методология",
    description:
      "Глубокие материалы о цифровых инструментах, которые помогают филологам анализировать тексты и данные."
  },
  {
    id: "practice",
    title: "Практика",
    subtitle: "Интерактивные задания",
    description:
      "Пошаговые упражнения и лабораторные, чтобы закрепить навыки работы с ИТ-инструментами."
  },
  {
    id: "presentations",
    title: "Презентации",
    subtitle: "Визуальные конспекты",
    description:
      "Красочно оформленные презентации, которые удобно использовать на занятиях и для самоподготовки."
  },
  {
    id: "syllabus",
    title: "Силлабус",
    subtitle: "Структура курса",
    description:
      "Полное описание курса с целями обучения, расписанием и оценочными критериями."
  },
  {
    id: "videos",
    title: "Видео",
    subtitle: "Разборы и мастер-классы",
    description:
      "Подборка видеолекций и интервью с экспертами об ИТ в гуманитарных науках."
  },
  {
    id: "authors",
    title: "Авторы",
    subtitle: "Команда курса",
    description:
      "Преподаватели и приглашённые специалисты, которые делятся своим опытом и поддерживают курс."
  }
];

export default function Home() {
  return (
    <main className="page">
      <div className="hero">
        <div className="hero__badge">ИТ для филологов</div>
        <h1 className="hero__title">
          Цифровые технологии, которые помогают филологам исследовать и вдохновлять
        </h1>
        <p className="hero__description">
          Добро пожаловать на образовательный портал: здесь собраны материалы, создающие
          мост между гуманитарными науками и современными ИТ-практиками. Погружайтесь в лекции,
          тренируйтесь на практике, используйте визуальные материалы и делитесь знаниями.
        </p>
        <div className="hero__actions">
          {sections.map((section) => (
            <Link key={section.id} href={`#${section.id}`} className="hero__action">
              {section.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="section-card">
            <div className="section-card__header">
              <span className="section-card__badge">{section.subtitle}</span>
              <h2 className="section-card__title">{section.title}</h2>
            </div>
            <p className="section-card__description">{section.description}</p>
            <div className="section-card__cta">
              <Link href={`/${section.id}`} className="section-card__link">
                Перейти к материалам
              </Link>
              <span className="section-card__hint">Скоро обновления и новые кейсы</span>
            </div>
          </section>
        ))}
      </div>

      <section className="highlight" aria-labelledby="highlight-title">
        <div className="highlight__content">
          <h2 id="highlight-title">Методический центр</h2>
          <p>
            Мы собрали лучшие практики цифровой гуманитаристики: от обработки текста и корпусной
            лингвистики до визуализации данных. Каждый раздел курса может быть использован как для
            самостоятельного обучения, так и для подготовки занятий.
          </p>
        </div>
        <div className="highlight__panel">
          <p className="highlight__label">Чем мы полезны</p>
          <ul className="highlight__list">
            <li>Интерактивный контент с живыми примерами</li>
            <li>Материалы, адаптированные под гуманитарные задачи</li>
            <li>Расширяемая база знаний и коллективные подборки</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} ИТ для филологов. Сделано для Vercel и Next.js.</p>
        <p className="footer__note">
          По вопросам сотрудничества и обновления материалов пишите на <a href="mailto:itphilology@example.com">itphilology@example.com</a>.
        </p>
      </footer>
    </main>
  );
}
