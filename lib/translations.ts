export type Language = "ru" | "uz";

const ALL_LANGUAGES: Language[] = ["ru", "uz"];

export type SectionSlug =
  | "lecture"
  | "practice"
  | "presentations"
  | "syllabus"
  | "videos"
  | "authors";

type HomeSection = {
  id: SectionSlug;
  title: string;
  subtitle: string;
  description: string;
  linkLabel: string;
  hint: string;
};

type HomeContent = {
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  sections: HomeSection[];
  highlight: {
    title: string;
    body: string;
    label: string;
    items: string[];
  };
  footer: {
    copyright: string;
    note: string;
  };
};

export type PracticeInteractiveTask = {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type PracticeInteractiveContent = {
  id: string;
  title: string;
  description: string;
  tasks: PracticeInteractiveTask[];
  submitLabel: string;
  resetLabel: string;
  scoreLabel: (score: number, total: number) => string;
  successMessage: string;
  encouragement: string;
  resultsTitle: string;
};

export type SectionContentItem = {
  title: string;
  details?: string | string[];
  linkSlug?: string;
};

type LectureContentSection = {
  heading: string;
  paragraphs: string[];
};

type LectureResource = {
  label: string;
  url: string;
};

type LectureTopicTranslation = {
  title: string;
  summary: string;
  plan: string[];
  sections: LectureContentSection[];
  resources?: LectureResource[];
};

type LectureTopicEntry = {
  slug: string;
  translations: Record<Language, LectureTopicTranslation>;
};

export type LectureTopic = LectureTopicTranslation & {
  slug: string;
};

type SectionPageContent = {
  title: string;
  lead: string;
  description: string;
  items: SectionContentItem[];
  interactiveModules?: PracticeInteractiveContent[];
  backLabel: string;
};

export const homeContent: Record<Language, HomeContent> = {
  ru: {
    hero: {
      badge: "ИТ для филологов",
      title: "Цифровые технологии, которые помогают филологам исследовать и вдохновлять",
      description:
        "Добро пожаловать на образовательный портал: здесь собраны материалы, создающие мост между гуманитарными науками и современными ИТ-практиками. Погружайтесь в лекции, тренируйтесь на практике, используйте визуальные материалы и делитесь знаниями."
    },
    sections: [
      {
        id: "lecture",
        title: "Лекция",
        subtitle: "Теория и методология",
        description:
          "Глубокие материалы о цифровых инструментах, которые помогают филологам анализировать тексты и данные.",
        linkLabel: "Перейти к лекциям",
        hint: "Обновляется по мере выхода новых тем"
      },
      {
        id: "practice",
        title: "Практика",
        subtitle: "Интерактивные задания",
        description:
          "Пошаговые упражнения и лабораторные работы, чтобы закрепить навыки работы с ИТ-инструментами.",
        linkLabel: "Перейти к практике",
        hint: "Содержит интерактивные кейсы и самопроверку"
      },
      {
        id: "presentations",
        title: "Презентации",
        subtitle: "Визуальные конспекты",
        description:
          "Красочно оформленные презентации, которые удобно использовать на занятиях и для самоподготовки.",
        linkLabel: "Открыть презентации",
        hint: "Подходит для демонстраций и обсуждений"
      },
      {
        id: "syllabus",
        title: "Силлабус",
        subtitle: "Структура курса",
        description:
          "Полное описание курса с целями обучения, расписанием и оценочными критериями.",
        linkLabel: "Читать силлабус",
        hint: "Содержит чек-лист по контрольным точкам"
      },
      {
        id: "videos",
        title: "Видео",
        subtitle: "Разборы и мастер-классы",
        description:
          "Подборка видеолекций и интервью с экспертами об ИТ в гуманитарных науках.",
        linkLabel: "Смотреть видео",
        hint: "Добавляем разборы по запросу студентов"
      },
      {
        id: "authors",
        title: "Авторы",
        subtitle: "Команда курса",
        description:
          "Преподаватели и приглашённые специалисты, которые делятся своим опытом и поддерживают курс.",
        linkLabel: "Познакомиться с авторами",
        hint: "Есть контакты для совместных проектов"
      }
    ],
    highlight: {
      title: "Методический центр",
      body:
        "Мы собрали лучшие практики цифровой гуманитаристики: от обработки текста и корпусной лингвистики до визуализации данных. Каждый раздел курса может быть использован как для самостоятельного обучения, так и для подготовки занятий.",
      label: "Чем мы полезны",
      items: [
        "Интерактивный контент с живыми примерами",
        "Материалы, адаптированные под гуманитарные задачи",
        "Расширяемая база знаний и коллективные подборки"
      ]
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} ИТ для филологов. Сделано для Vercel и Next.js.`,
      note:
        "По вопросам сотрудничества и обновления материалов пишите на itphilology@example.com."
    }
  },
  uz: {
    hero: {
      badge: "Filologlar uchun IT",
      title: "Filologlarga tadqiqot va izlanish uchun yordam beradigan raqamli texnologiyalar",
      description:
        "Ta'lim portaliga xush kelibsiz: bu yerda gumanitar fanlar va zamonaviy IT amaliyotlari o'rtasida ko'prik bo'ladigan materiallar to'plangan. Ma'ruzalarga sho'ng'ing, amaliyotni bajarib ko'ring, vizual materiallardan foydalaning va bilimlaringizni ulashing."
    },
    sections: [
      {
        id: "lecture",
        title: "Ma'ruza",
        subtitle: "Nazariya va metodologiya",
        description:
          "Filologlarga matnlar va ma'lumotlarni tahlil qilishda yordam beradigan raqamli vositalar haqidagi chuqur materiallar.",
        linkLabel: "Ma'ruzalarga o'tish",
        hint: "Yangi mavzular chiqqanda yangilanadi"
      },
      {
        id: "practice",
        title: "Amaliyot",
        subtitle: "Interaktiv topshiriqlar",
        description:
          "IT vositalari bilan ishlash ko'nikmalarini mustahkamlash uchun bosqichma-bosqich mashqlar va laboratoriyalar.",
        linkLabel: "Amaliyotga o'tish",
        hint: "Interaktiv vaziyatlar va o'z-o'zini tekshirishni o'z ichiga oladi"
      },
      {
        id: "presentations",
        title: "Taqdimotlar",
        subtitle: "Vizual konspektlar",
        description:
          "Darslarda va mustaqil tayyorgarlikda foydalanish qulay bo'lgan chiroyli taqdimotlar.",
        linkLabel: "Taqdimotlarni ochish",
        hint: "Namoyish va muhokama uchun qulay"
      },
      {
        id: "syllabus",
        title: "Sillabus",
        subtitle: "Kurs tuzilmasi",
        description:
          "O'qish maqsadlari, jadval va baholash mezonlari bilan to'liq kurs tavsifi.",
        linkLabel: "Sillabusni o'qish",
        hint: "Nazorat nuqtalari bo'yicha chek-list mavjud"
      },
      {
        id: "videos",
        title: "Video",
        subtitle: "Tahlillar va ustozlar darslari",
        description:
          "Raqamli gumanitar fanlar bo'yicha mutaxassislarning video ma'ruzalari va intervyulari to'plami.",
        linkLabel: "Videolarni ko'rish",
        hint: "Talabalar so'rovi bo'yicha tahlillar qo'shiladi"
      },
      {
        id: "authors",
        title: "Mualliflar",
        subtitle: "Kurs jamoasi",
        description:
          "Tajriba va yordam bilan o'rtoqlashadigan o'qituvchilar va taklif etilgan mutaxassislar.",
        linkLabel: "Mualliflar bilan tanishish",
        hint: "Hamkorlik loyihalari uchun aloqa mavjud"
      }
    ],
    highlight: {
      title: "Metodik markaz",
      body:
        "Biz raqamli gumanitar fanlar bo'yicha eng yaxshi amaliyotlarni to'pladik: matnlarni qayta ishlash va korpus lingvistikasidan tortib ma'lumotlarni vizuallashtirishgacha. Har bir bo'lim mustaqil o'rganish yoki dars tayyorlash uchun qulay.",
      label: "Bizning afzalliklarimiz",
      items: [
        "Jonli misollar bilan interaktiv kontent",
        "Gumanitar vazifalar uchun moslashtirilgan materiallar",
        "Kengaytiriladigan bilimlar bazasi va jamoaviy to'plamlar"
      ]
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Filologlar uchun IT. Vercel va Next.js uchun yaratildi.`,
      note:
        "Hamkorlik va yangilanish bo'yicha savollar uchun itphilology@example.com manziliga yozing."
    }
  }
};

const practiceInteractiveModules: Record<Language, PracticeInteractiveContent[]> = {
  ru: [
    {
      id: "hardware-setup",
      title: "Интерактивное задание: компьютеры и настройка системы",
      description:
        "Ответьте на вопросы и проверьте, насколько уверенно вы ориентируетесь в оборудовании и базовой конфигурации рабочего места.",
      tasks: [
        {
          id: "peripheral",
          question: "Какое из перечисленных устройств относится к периферийным устройствам ввода?",
          options: ["Монитор", "Сканер", "Акустическая система"],
          correct: 1,
          explanation: "Сканер передает информацию в компьютер, поэтому относится к устройствам ввода."
        },
        {
          id: "backup",
          question: "Какое действие следует выполнить ПЕРЕД установкой новой операционной системы?",
          options: ["Создать резервную копию данных", "Удалить все драйверы", "Отключить клавиатуру"],
          correct: 0,
          explanation: "Резервная копия защитит важные файлы, если в процессе установки что-то пойдет не так."
        },
        {
          id: "diagnostics",
          question: "Какой инструмент Windows помогает быстро проверить состояние системы и ключевые показатели?",
          options: ["Проводник", "Диспетчер задач", "Записная книжка"],
          correct: 1,
          explanation: "Диспетчер задач отображает загрузку ресурсов и процессы, что важно для диагностики."
        },
        {
          id: "safe-boot",
          question: "Какой режим загрузки Windows запускает систему с минимальным набором драйверов для диагностики?",
          options: ["Стандартная загрузка", "Безопасный режим", "Гостевой режим"],
          correct: 1,
          explanation: "Безопасный режим позволяет выявлять проблемы, исключив влияние сторонних драйверов и служб."
        },
        {
          id: "bios-access",
          question: "Какая клавиша чаще всего используется для входа в BIOS/UEFI на стационарных ПК?",
          options: ["Delete", "F11", "Tab"],
          correct: 0,
          explanation: "На большинстве материнских плат клавиша Delete открывает настройки BIOS или UEFI."
        },
        {
          id: "ssd-benefit",
          question: "Какое преимущество даёт переход с HDD на SSD для системного диска?",
          options: ["Уменьшение объема памяти", "Более высокая скорость чтения и записи", "Повышение уровня шума"],
          correct: 1,
          explanation: "SSD обеспечивает заметно более высокую скорость доступа к данным и ускоряет загрузку системы."
        },
        {
          id: "ram-install",
          question: "Что нужно сделать перед установкой новой планки оперативной памяти?",
          options: ["Отключить питание и заземлиться", "Установить дополнительный жёсткий диск", "Удалить антивирус"],
          correct: 0,
          explanation: "Отключение питания и снятие статического заряда защищает компоненты от повреждения."
        },
        {
          id: "cable-management",
          question: "Зачем использовать кабельные стяжки внутри системного блока?",
          options: ["Чтобы увеличить шум вентиляторов", "Для улучшения циркуляции воздуха и безопасности", "Чтобы уменьшить длину кабелей"],
          correct: 1,
          explanation: "Аккуратная укладка кабелей улучшает airflow и снижает риск их повреждения."
        },
        {
          id: "power-supply",
          question: "Какой основной параметр блока питания важно учитывать при выборе?",
          options: ["Цвет корпуса", "Мощность в ваттах и сертификат эффективности", "Наличие подсветки клавиатуры"],
          correct: 1,
          explanation: "Мощность и сертификат (например, 80 Plus) показывают, справится ли блок питания с нагрузкой."
        },
        {
          id: "monitor-calibration",
          question: "Как снизить нагрузку на глаза при работе за монитором?",
          options: ["Поставить монитор на максимальную яркость", "Настроить яркость и цветовую температуру под освещение", "Отключить энергосбережение"],
          correct: 1,
          explanation: "Калибровка яркости и цветовой температуры под условия освещения делает изображение комфортнее для зрения."
        }
      ],
      submitLabel: "Проверить ответы",
      resetLabel: "Сбросить и пройти заново",
      scoreLabel: (score, total) => `Верно: ${score} из ${total}`,
      successMessage: "Отлично! Вы уверенно разбираетесь в устройстве компьютера и настройке системы.",
      encouragement: "Хороший старт! Ознакомьтесь с пояснениями и попробуйте ещё раз.",
      resultsTitle: "Ваш результат"
    },
      {
      id: "os-office",
      title: "Интерактивное задание: операционные системы и офисные приложения",
      description:
        "Разберите практические ситуации и выберите действия, которые помогут поддерживать операционную систему и офисный пакет в актуальном состоянии.",
      tasks: [
        {
          id: "os-example",
          question: "Что из перечисленного является примером операционной системы?",
          options: ["Microsoft Word", "macOS", "Adobe Photoshop"],
          correct: 1,
          explanation: "macOS управляет аппаратными ресурсами компьютера; Word и Photoshop — прикладные программы."
        },
        {
          id: "office-activation",
          question: "Какое действие необходимо выполнить при первом запуске Microsoft Office 365 на новом компьютере?",
          options: ["Удалить предустановленные обновления Windows", "Войти в учетную запись Microsoft и активировать лицензию", "Отключить доступ к сети"],
          correct: 1,
          explanation: "Активация через учетную запись включает лицензию и синхронизацию облачных документов."
        },
        {
          id: "doc-format",
          question: "В каком формате лучше сохранить документ Word для совместного редактирования?",
          options: ["DOCX", "PDF", "PNG"],
          correct: 0,
          explanation: "DOCX сохраняет структуру и позволяет редактировать документ совместно онлайн." 
        },
        {
          id: "os-updates",
          question: "Как обеспечить актуальность Windows без дополнительных ручных действий?",
          options: ["Отключить центр обновления", "Настроить автоматическую установку обновлений через Центр обновления", "Установить только драйверы принтера"],
          correct: 1,
          explanation: "Автоматические обновления закрывают уязвимости и поддерживают систему в рабочем состоянии."
        },
        {
          id: "office-collaboration",
          question: "Как организовать совместную работу над документом Word в реальном времени?",
          options: ["Хранить файл на локальном диске", "Поделиться документом через OneDrive или SharePoint", "Печатать и раздавать копии"],
          correct: 1,
          explanation: "Публикация в OneDrive или SharePoint позволяет нескольким пользователям редактировать файл одновременно."
        },
        {
          id: "office-shortcut",
          question: "Какое сочетание клавиш быстро сохраняет документ в Microsoft Word?",
          options: ["Ctrl + S", "Ctrl + X", "Alt + F4"],
          correct: 0,
          explanation: "Ctrl + S моментально сохраняет изменения в текущем документе."
        },
        {
          id: "security-antivirus",
          question: "Что следует сделать перед установкой нового антивирусного решения?",
          options: ["Удалить предыдущий антивирус", "Отключить обновления Windows", "Отключить многофакторную аутентификацию"],
          correct: 0,
          explanation: "Удаление старого антивируса предотвращает конфликты и повышает стабильность системы."
        },
        {
          id: "permissions",
          question: "Какой параметр Windows позволяет выдать пользователю право изменять файл?",
          options: ["Разрешения безопасности (Security permissions)", "Настройки обоев рабочего стола", "Режим отображения панели задач"],
          correct: 0,
          explanation: "Права безопасности определяют доступ к файлам и папкам для конкретных пользователей и групп."
        },
        {
          id: "templates",
          question: "Как ускорить подготовку однотипных документов Word?",
          options: ["Использовать готовый шаблон", "Каждый раз создавать документ с нуля", "Сначала экспортировать документ в PNG"],
          correct: 0,
          explanation: "Шаблон содержит преднастроенные стили и структуру, что экономит время при повторном использовании."
        },
        {
          id: "excel-shared",
          question: "Как лучше организовать Excel-таблицу для совместного использования?",
          options: ["Хранить файл только локально", "Разместить книгу в облаке и настроить уровни доступа", "Использовать разные форматы данных в каждой строке"],
          correct: 1,
          explanation: "Облачное хранение с контролем доступа обеспечивает актуальность данных и удобство совместной работы."
        }
      ],
      submitLabel: "Проверить ответы",
      resetLabel: "Сбросить и пройти заново",
      scoreLabel: (score, total) => `Верно: ${score} из ${total}`,
      successMessage: "Отлично! Вы готовы поддерживать ОС и офисные приложения в рабочем состоянии.",
      encouragement: "Продолжайте тренироваться и обращайте внимание на рекомендации в пояснениях.",
      resultsTitle: "Ваш результат"
      },
      {
        id: "hot-potatoes",
        title: "Интерактивное задание: создание мультимедийного курса в Hot Potatoes",
        description:
          "Закрепите ключевые шаги подготовки электронного курса: выбор модулей Hot Potatoes, добавление мультимедиа, организация файлов и публикация материала.",
        tasks: [
          {
            id: "hp-module-choice",
            question: "Какой модуль Hot Potatoes лучше всего подходит для викторин с одиночным или множественным выбором?",
            options: ["JQuiz", "JMatch", "JCross"],
            correct: 0,
            explanation: "Модуль JQuiz поддерживает вопросы с выбором ответа, краткие ответы и оценивание."
          },
          {
            id: "hp-output",
            question: "В каком формате Hot Potatoes по умолчанию публикует упражнения?",
            options: ["HTML-файл", "PDF-документ", "Исполняемый EXE"],
            correct: 0,
            explanation: "Hot Potatoes генерирует интерактивные HTML-страницы, готовые к загрузке в браузер."
          },
          {
            id: "hp-shuffle",
            question: "Как обеспечить случайный порядок вопросов в упражнении JQuiz?",
            options: ["Включить параметр Shuffle questions в настройках", "Сохранить файл под новым именем", "Использовать модуль JCloze вместо JQuiz"],
            correct: 0,
            explanation: "Опция Shuffle questions автоматически перемешивает порядок вопросов при каждом запуске."
          },
          {
            id: "hp-cloze",
            question: "Какой модуль предназначен для заданий на заполнение пропусков в тексте?",
            options: ["JCloze", "JMatch", "The Masher"],
            correct: 0,
            explanation: "JCloze создаёт упражнения, в которых обучающийся вводит пропущенные слова."
          },
          {
            id: "hp-media",
            question: "Как корректно добавить изображение в упражнение Hot Potatoes?",
            options: ["Использовать Insert > Picture и хранить файл изображения рядом с HTML", "Вставить ссылку на исполняемый файл", "Переименовать картинку с расширением .jmt"],
            correct: 0,
            explanation: "Изображения подключаются через меню Insert, а файл должен лежать в той же папке, что и HTML."
          },
          {
            id: "hp-masher",
            question: "Как объединить несколько упражнений Hot Potatoes в единый курс с навигацией?",
            options: ["Воспользоваться инструментом The Masher", "Открыть каждое упражнение в новой вкладке браузера", "Конвертировать задания в формат PDF"],
            correct: 0,
            explanation: "The Masher формирует структуру курса, связывая упражнения и добавляя общую навигацию."
          },
          {
            id: "hp-feedback",
            question: "Где настраиваются индивидуальные пояснения к ответам в JQuiz?",
            options: ["Во вкладке Feedback для каждого вопроса", "В свойствах файла Windows", "В модуле JCross"],
            correct: 0,
            explanation: "Раздел Feedback внутри редактора JQuiz позволяет добавить реагирование на правильные и неправильные ответы."
          },
          {
            id: "hp-audio",
            question: "Как встроить аудио-комментарий в упражнение Hot Potatoes?",
            options: ["Использовать кнопку Insert Media и добавить HTML-тег <audio>", "Вставить звуковой файл в текст вопроса", "Записать аудио в формате EXE"],
            correct: 0,
            explanation: "Hot Potatoes поддерживает теги HTML5, поэтому аудио подключается через Insert Media и тег <audio>."
          },
          {
            id: "hp-folder",
            question: "Как лучше организовать структуру проекта перед публикацией курса?",
            options: ["Хранить HTML-файлы и мультимедиа в одной папке проекта", "Разнести изображения по системным каталогам Windows", "Переименовать файлы в случайные номера"],
            correct: 0,
            explanation: "Совместное хранение HTML и медиа гарантирует корректные пути к ресурсам после загрузки на сервер."
          },
          {
            id: "hp-export",
            question: "Какой способ позволит выгружать результаты прохождения для анализа успеваемости?",
            options: ["Экспортировать в SCORM или использовать JavaScript-отправку результатов на сервер", "Распечатать страницу с упражнениями", "Удалить упражнения сразу после прохождения"],
            correct: 0,
            explanation: "SCORM-пакет или скрипт отправки результатов даёт возможность собирать статистику по обучающимся."
          }
        ],
        submitLabel: "Проверить ответы",
        resetLabel: "Сбросить и пройти заново",
        scoreLabel: (score, total) => `Верно: ${score} из ${total}`,
        successMessage: "Вы отлично ориентируетесь в инструментах Hot Potatoes и готовы создавать мультимедийные курсы.",
        encouragement: "Потренируйтесь на своих материалах и расширьте курс дополнительными модулями.",
        resultsTitle: "Ваш результат"
      },
      {
        id: "authoring-tools",
        title: "Интерактивное задание: iSpring QuizMaker и Wordwall.net",
        description:
          "Освойте ключевые функции инструментов для создания электронных учебников: проектирование викторин в iSpring QuizMaker и интерактивных упражнений в Wordwall.",
        tasks: [
          {
            id: "ispring-format",
            question: "Какой вариант публикации в iSpring QuizMaker следует выбрать для интеграции с LMS?",
            options: ["Publish → LMS (SCORM)", "Publish → Video", "Publish → YouTube"],
            correct: 0,
            explanation: "Режим Publish → LMS генерирует SCORM-пакет, который корректно отслеживается в системах управления обучением."
          },
          {
            id: "ispring-question-types",
            question: "Какой тип вопроса в iSpring лучше использовать для задания на соответствие терминов и определений?",
            options: ["Matching", "Multiple Choice", "Essay"],
            correct: 0,
            explanation: "Вопрос Matching позволяет связать элемент из левого списка с правильным ответом из правого."
          },
          {
            id: "ispring-branching",
            question: "Где в iSpring QuizMaker настраивается ветвление в зависимости от ответа студента?",
            options: ["Во вкладке Feedback & Branching", "В разделе Design Themes", "На панели Player"],
            correct: 0,
            explanation: "Вкладка Feedback & Branching позволяет задать переходы на другие слайды или показать пояснение."
          },
          {
            id: "ispring-question-bank",
            question: "Для чего используется Question Group в iSpring QuizMaker?",
            options: ["Для создания банка вопросов и случайного выбора", "Для настройки цветовой схемы", "Для экспорта в PDF"],
            correct: 0,
            explanation: "Question Group позволяет хранить несколько вопросов и случайно подставлять их в тест."
          },
          {
            id: "ispring-media",
            question: "Как добавить аудиокомментарий к вопросу iSpring?",
            options: ["Использовать кнопку Insert Audio на панели редактора", "Вставить ссылку на внешний MP3 в тексте", "Переименовать файл вопроса в .mp3"],
            correct: 0,
            explanation: "Через Insert Audio можно записать голос или подключить готовый аудиофайл, который воспроизводится вместе с вопросом."
          },
          {
            id: "ispring-reporting",
            question: "Какой отчёт выбрать при публикации, чтобы LMS фиксировала максимальный балл и завершение попытки?",
            options: ["Tracking → Complete/Incomplete + Score", "Tracking → Slides viewed", "Tracking → Video progress"],
            correct: 0,
            explanation: "Настройка Complete/Incomplete + Score передаёт в LMS сведения о прохождении и набранных баллах."
          },
          {
            id: "wordwall-template",
            question: "Какой шаблон Wordwall подходит для тренировки перевода слов при сопоставлении?",
            options: ["Match Up", "Open the Box", "Random Wheel"],
            correct: 0,
            explanation: "Шаблон Match Up позволяет связывать карточки из двух списков, что удобно для лексических упражнений."
          },
          {
            id: "wordwall-assign",
            question: "Как поделиться упражнением Wordwall с учётом индивидуального отслеживания результатов?",
            options: ["Выбрать режим Assign и отправить ссылку обучающимся", "Скачать PDF-версию упражнения", "Сохранить игру как шаблон"],
            correct: 0,
            explanation: "Режим Assign генерирует персонализированную ссылку, фиксируя имя и результаты каждого участника."
          },
          {
            id: "wordwall-export",
            question: "Как сохранить Wordwall упражнение в статичном формате для офлайн-печати?",
            options: ["Использовать опцию Download → PDF", "Нажать Export → SCORM", "Сделать скриншоты"],
            correct: 0,
            explanation: "Опция Download → PDF формирует раздаточный материал для занятий без доступа к интернету."
          },
          {
            id: "wordwall-custom",
            question: "Где в Wordwall настраиваются индивидуальные инструкции и время попытки?",
            options: ["Во вкладке Edit → Settings", "В меню My Results", "В разделе Collections"],
            correct: 0,
            explanation: "Settings позволяет задать пользовательские инструкции, лимит времени и количество попыток."
          }
        ],
        submitLabel: "Проверить ответы",
        resetLabel: "Сбросить и пройти заново",
        scoreLabel: (score, total) => `Верно: ${score} из ${total}`,
        successMessage: "Отлично! Вы готовы создавать электронные задания в iSpring и Wordwall.",
        encouragement: "Экспериментируйте с шаблонами и расширяйте банк упражнений.",
        resultsTitle: "Ваш результат"
      },
      {
        id: "apps-authoring",
        title: "Интерактивное задание: iSpring, MyTest и LearningApps",
        description:
          "Проверьте навыки настройки интерактивных приложений: симуляции в iSpring, тесты в MyTest и онлайн-упражнения в LearningApps.",
        tasks: [
          {
            id: "ispring-talkmaster",
            question: "Какой компонент iSpring Suite предназначен для создания диалоговых тренажёров с ветвлением сценариев?",
            options: ["TalkMaster", "Screen Recorder", "Audio Editor"],
            correct: 0,
            explanation: "TalkMaster позволяет проектировать диалоги с выбором реплик и смотреть статистику прохождения."
          },
          {
            id: "ispring-insert",
            question: "В какой вкладке PowerPoint находится команда вставки интерактивного объекта iSpring Interaction?",
            options: ["iSpring Suite → Interaction", "Рецензирование → Сравнить", "Анимация → Добавить анимацию"],
            correct: 0,
            explanation: "После установки iSpring появляется вкладка iSpring Suite с кнопкой Interaction для добавления объекта."
          },
          {
            id: "ispring-publish-lms",
            question: "Какой режим публикации iSpring выбрать, чтобы интегрировать модуль в LMS?",
            options: ["Publish → LMS (SCORM)", "Publish → YouTube", "Publish → Word"],
            correct: 0,
            explanation: "Публикация в формате SCORM обеспечивает корректный обмен данными с системой управления обучением."
          },
          {
            id: "ispring-drag",
            question: "Какой тип вопроса iSpring QuizMaker использовать для перетаскивания объектов на изображение?",
            options: ["Drag-and-Drop", "Likert Scale", "Numeric"],
            correct: 0,
            explanation: "Тип Drag-and-Drop позволяет разместить маркеры на нужных областях изображения или схемы."
          },
          {
            id: "mytest-extension",
            question: "Какое расширение получает исходный файл теста, созданного в MyTestX редакторе?",
            options: [".mtf", ".docx", ".pptx"],
            correct: 0,
            explanation: "MyTestX сохраняет проекты в собственном формате .mtf, который открывается в редакторе."
          },
          {
            id: "mytest-time",
            question: "Где задаётся ограничение по времени прохождения теста в MyTest?",
            options: ["Меню \"Тест\" → \"Свойства теста\"", "Меню \"Правка\" → \"Отменить\"", "Контекстное меню вопроса → \"Удалить\""],
            correct: 0,
            explanation: "В окне свойств теста доступны параметры времени, количества попыток и шкалы оценивания."
          },
          {
            id: "mytest-exe",
            question: "Как создать автономный файл теста, который запускается без установки MyTest?",
            options: ["Файл → Создать исполняемый файл (.exe)", "Файл → Печать", "Вид → Панель инструментов"],
            correct: 0,
            explanation: "Команда создания exe-компиляции формирует самостоятельный тестовый модуль для обучающихся."
          },
          {
            id: "learningapps-template",
            question: "Какой шаблон LearningApps лучше подойдёт для сопоставления слов и переводов?",
            options: ["Matching Pairs", "Group Puzzle", "Single Choice"],
            correct: 0,
            explanation: "Matching Pairs создаёт карточки для связывания пар, что идеально для словарных тренировок."
          },
          {
            id: "learningapps-class",
            question: "Как организовать сбор результатов обучающихся в LearningApps?",
            options: ["Создать класс и выдать код доступа участникам", "Попросить студентов прислать скриншот", "Экспортировать задание в PDF"],
            correct: 0,
            explanation: "Через раздел \"Классы\" можно отслеживать, кто и как выполнил упражнение."
          },
          {
            id: "learningapps-embed",
            question: "Как встроить упражнение LearningApps в страницу курса?",
            options: ["Скопировать HTML-код из раздела \"Встроить\" и вставить на сайт", "Сделать скриншот упражнения", "Отправить файл через FTP-клиент"],
            correct: 0,
            explanation: "Платформа генерирует embed-код, который можно добавить в LMS, блог или сайт курса."
          }
        ],
        submitLabel: "Проверить ответы",
        resetLabel: "Сбросить и пройти заново",
        scoreLabel: (score, total) => `Верно: ${score} из ${total}`,
        successMessage: "Отличный результат! Вы уверенно комбинируете iSpring, MyTest и LearningApps для языковых заданий.",
        encouragement: "Попробуйте адаптировать сценарии под собственные уроки и расширить библиотеку упражнений.",
        resultsTitle: "Ваш результат"
      },
      {
        id: "animation-3d",
        title: "Интерактивное задание: анимация в Photoshop и 3D в Blender",
        description:
          "Оцените знания по созданию покадровой анимации в Photoshop и построению 3D-сцен в Blender: ключевые кадры, UV-развёртка, материалы и экспорт моделей.",
        tasks: [
          {
            id: "ps-timeline",
            question: "Как открыть временную шкалу анимации в Adobe Photoshop?",
            options: ["Окно → Таймлайн", "Редактирование → Преобразовать в смарт-объект", "Фильтр → Галерея размытия"],
            correct: 0,
            explanation: "Панель «Таймлайн» доступна через меню «Окно» и позволяет создать покадровую или видеотаймлайн анимацию."
          },
          {
            id: "animation-fps",
            question: "Какой параметр определяет количество кадров в секунду при экспорте анимации?",
            options: ["FPS", "DPI", "ISO"],
            correct: 0,
            explanation: "FPS (Frames Per Second) задаёт частоту кадров и влияет на плавность движения."
          },
          {
            id: "ps-gif-export",
            question: "Как правильно экспортировать GIF-анимацию из Photoshop?",
            options: ["Файл → Экспорт → Сохранить для Web (Legacy)", "Изображение → Режим → CMYK", "Слой → Растрировать слой"],
            correct: 0,
            explanation: "Команда «Сохранить для Web (Legacy)» позволяет выбрать формат GIF, палитру и параметры цикла."
          },
          {
            id: "blender-keyframe",
            question: "Какая горячая клавиша добавляет ключевой кадр для выбранного параметра в Blender?",
            options: ["I", "X", "Shift+S"],
            correct: 0,
            explanation: "Клавиша I (Insert Keyframe) записывает значение параметра в текущем кадре."
          },
          {
            id: "blender-engine",
            question: "Какой движок рендера Blender обеспечивает физически корректное трассирование лучей?",
            options: ["Eevee", "Workbench", "Cycles"],
            correct: 2,
            explanation: "Cycles использует трассировку лучей и подходит для реалистичных кадров с глобальным освещением."
          },
          {
            id: "blender-view",
            question: "Как быстро переключиться в режим Solid в окне 3D View Blender?",
            options: ["Нажать Shift+E", "Нажать Z и выбрать Solid", "Нажать Ctrl+Alt+C"],
            correct: 1,
            explanation: "Меню по клавише Z позволяет выбрать режим отображения, включая Solid, Wireframe и Rendered."
          },
          {
            id: "ps-loop",
            question: "Как сделать GIF-анимацию зацикленной при экспорте из Photoshop?",
            options: ["В окне предпросмотра задать цикл ‘Навсегда’", "Продублировать каждый слой", "Уменьшить размер холста"],
            correct: 0,
            explanation: "Параметр цикла находится внизу окна экспорта и позволяет выбрать бесконечное воспроизведение."
          },
          {
            id: "blender-uv",
            question: "Как подготовить модель к нанесению текстур в Blender?",
            options: ["Выполнить UV-развёртку через Smart UV Project", "Добавить модификатор Boolean", "Перенести объект в коллекцию"],
            correct: 0,
            explanation: "UV-развёртка создаёт плоскую карту координат, по которой накладывается текстура."
          },
          {
            id: "graph-editor",
            question: "Для чего используется Graph Editor в Blender?",
            options: ["Для точной настройки кривых анимации", "Для управления библиотекой ассетов", "Для создания материалов"],
            correct: 0,
            explanation: "В Graph Editor редактируют интерполяцию и плавность движения ключевых кадров."
          },
          {
            id: "blender-export",
            question: "Какой формат файла подходит для обмена 3D-моделями между разными приложениями?",
            options: ["FBX", "PSD", "MP3"],
            correct: 0,
            explanation: "Формат FBX сохраняет материалы, анимацию и иерархию, что удобно для импорта в другие программы."
          }
        ],
        submitLabel: "Проверить ответы",
        resetLabel: "Сбросить и пройти заново",
        scoreLabel: (score, total) => `Верно: ${score} из ${total}`,
        successMessage: "Отлично! Вы уверенно создаёте анимацию и работаете с 3D-моделями.",
        encouragement: "Экспериментируйте с материалами, светом и экспресс-рендерами, чтобы прокачать визуальные навыки.",
        resultsTitle: "Ваш результат"
      },
      {
        id: "media-editing",
        title: "Интерактивное задание: обработка аудио- и видеоматериалов",
        description:
          "Проверьте навыки монтажа, цветокоррекции и улучшения аудио: рабочие процессы Premiere/Audacity, кодеки, нормализация и резервное копирование медиатеки.",
        tasks: [
          {
            id: "audio-noise",
            question: "Как уменьшить постоянный фоновой шум в голосовой записи?",
            options: ["Применить эффект Noise Reduction", "Увеличить общую громкость", "Переключить дорожку в моно"],
            correct: 0,
            explanation: "Процесс Noise Reduction анализирует образец шума и убирает нежелательные частоты."
          },
          {
            id: "video-container",
            question: "Какой контейнер чаще всего используют для экспорта видео с кодеком H.264?",
            options: ["MP4", "DOCX", "TIFF"],
            correct: 0,
            explanation: "MP4 совместим с большинством платформ и поддерживает потоковую трансляцию."
          },
          {
            id: "sync-audio",
            question: "Как синхронизировать видео и аудио по хлопку в монтажной программе?",
            options: ["Совместить клипы по меткам и форме волны", "Применить эффект размытия", "Изменить разрешение проекта"],
            correct: 0,
            explanation: "Совмещение по маркерам или форме волны обеспечивает точное совпадение видео и аудио дорожек."
          },
          {
            id: "color-correction",
            question: "Какой инструмент Adobe Premiere Pro используют для базовой цветокоррекции?",
            options: ["Панель Lumetri Color", "Панель Essential Graphics", "Инструмент Crop"],
            correct: 0,
            explanation: "Lumetri Color содержит основные панели для экспозиции, баланса белого и творческих LUT."
          },
          {
            id: "audio-level",
            question: "До какого уровня обычно нормализуют голосовую дорожку для комфортного восприятия?",
            options: ["−1 dB", "−6 dB", "+3 dB"],
            correct: 1,
            explanation: "Уровень около −6 dB даёт запас по пику и предотвращает клиппинг на разных устройствах."
          },
          {
            id: "video-transcode",
            question: "Как уменьшить размер ролика без потери совместимости с большинством плееров?",
            options: ["Закодировать видео в HandBrake с кодеком H.264 и переменным битрейтом", "Удалить аудиодорожку", "Заархивировать ролик в ZIP"],
            correct: 0,
            explanation: "H.264 с адаптивным битрейтом сохраняет качество и поддерживается почти всеми устройствами."
          },
          {
            id: "audio-fade",
            question: "Как сделать плавное затухание аудиодорожки в финале ролика?",
            options: ["Поставить ключевые кадры и постепенно снизить громкость", "Применить эффект линзы", "Отразить дорожку по горизонтали"],
            correct: 0,
            explanation: "Аудиоавтоматизация по ключевым кадрам обеспечивает контролируемое затухание."
          },
          {
            id: "slow-motion",
            question: "Как добиться плавного замедления при изменении скорости клипа?",
            options: ["Повысить яркость кадра", "Использовать Optical Flow или Frame Blending", "Изменить формат звука"],
            correct: 1,
            explanation: "Оптический поток или покадровое смешивание рассчитывают промежуточные кадры для плавного slow motion."
          },
          {
            id: "audio-format",
            question: "Какой формат подходит для хранения аудио без потерь качества?",
            options: ["WAV", "MP3 128 kbps", "OGG 96 kbps"],
            correct: 0,
            explanation: "WAV сохраняет исходное качество и подходит для дальнейшей обработки."
          },
          {
            id: "media-backup",
            question: "Как надёжно организовать резервное копирование медиатеки проекта?",
            options: ["Хранить материалы на двух независимых носителях и в облаке", "Перемещать исходники в корзину после импорта", "Использовать один USB-накопитель"],
            correct: 0,
            explanation: "Стратегия 3-2-1 (несколько копий и типы носителей) защищает проект от потери данных."
          }
        ],
        submitLabel: "Проверить ответы",
        resetLabel: "Сбросить и пройти заново",
        scoreLabel: (score, total) => `Верно: ${score} из ${total}`,
        successMessage: "Отлично! Вы уверенно обрабатываете аудио и видео материал.",
        encouragement: "Экспериментируйте с эффектами, LUT и миксом, чтобы добиться профессионального звучания и картинки.",
        resultsTitle: "Ваш результат"
      },
      {
        id: "safe-internet",
        title: "Интерактивное задание: цифровая гигиена и безопасность в интернете",
        description:
          "Закрепите практики кибербезопасности и цифрового благополучия: сложные пароли, 2FA, резервное копирование и комфортные сценарии онлайн-работы.",
        tasks: [
          {
            id: "password-length",
            question: "Какой пароль считается устойчивым к перебору?",
            options: ["Не менее 12 символов с буквами, цифрами и спецсимволами", "Четырёхзначный PIN", "Имя домашнего питомца"],
            correct: 0,
            explanation: "Длинный пароль с разными типами символов значительно усложняет взлом."
          },
          {
            id: "two-factor",
            question: "Какой шаг дополнительно защищает учётную запись?",
            options: ["Открывать все вложения", "Включить двухфакторную аутентификацию", "Использовать один пароль для всех сервисов"],
            correct: 1,
            explanation: "2FA требует второй фактор подтверждения и существенно снижает риск компрометации."
          },
          {
            id: "phishing",
            question: "Что чаще всего выдаёт фишинговое письмо?",
            options: ["Грамматические ошибки и срочные просьбы по подозрительной ссылке", "Отсутствие эмодзи в тексте", "Формат PDF"],
            correct: 0,
            explanation: "Фишинговые письма подталкивают действовать немедленно и ведут на поддельные сайты."
          },
          {
            id: "updates",
            question: "Зачем устанавливать обновления операционной системы и приложений?",
            options: ["Они закрывают уязвимости и повышают стабильность", "Они удаляют файлы пользователя", "Они замедляют интернет"],
            correct: 0,
            explanation: "Обновления содержат патчи безопасности и улучшают совместимость программ."
          },
          {
            id: "public-wifi",
            question: "Как снизить риски при работе в общественной Wi-Fi сети?",
            options: ["Использовать VPN и избегать передачи конфиденциальных данных", "Отключить антивирус", "Открывать банковские сайты без проверки"],
            correct: 0,
            explanation: "VPN шифрует трафик и препятствует перехвату личных данных."
          },
          {
            id: "privacy-settings",
            question: "Где регулируются настройки видимости профиля в соцсетях?",
            options: ["В разделе конфиденциальности и безопасности аккаунта", "В папке загрузок", "В корзине"],
            correct: 0,
            explanation: "Меню конфиденциальности позволяет ограничить круг лиц, видящих ваши публикации и данные."
          },
          {
            id: "digital-wellbeing",
            question: "Что помогает поддерживать цифровое благополучие?",
            options: ["Регулярные перерывы и лимиты экранного времени", "Игнорирование признаков усталости", "Работа без сна по ночам"],
            correct: 0,
            explanation: "Перерывы, упражнения и лимиты экранного времени предотвращают эмоциональное выгорание."
          },
          {
            id: "data-backup",
            question: "Как защитить важные документы от потери?",
            options: ["Создавать резервные копии на внешнем диске и в облаке", "Хранить только на рабочем столе", "Отправлять себе пароли по почте"],
            correct: 0,
            explanation: "Резервное копирование обеспечивает восстановление данных после сбоев или атак."
          },
          {
            id: "downloads",
            question: "Как избежать заражения вредоносным ПО при скачивании программ?",
            options: ["Загружать только с официальных сайтов и проверять цифровую подпись", "Отключить брандмауэр", "Запускать случайные файлы .exe"],
            correct: 0,
            explanation: "Официальные источники и проверки подписи минимизируют риск установки модифицированных программ."
          },
          {
            id: "online-harassment",
            question: "Как правильно реагировать на токсичное поведение или травлю в сети?",
            options: ["Заблокировать нарушителя и сообщить модерации", "Ответить агрессией", "Опубликовать личные данные обидчика"],
            correct: 0,
            explanation: "Блокировка и обращение к модераторам обеспечивают поддержку и фиксируют нарушение."
          }
        ],
        submitLabel: "Проверить ответы",
        resetLabel: "Сбросить и пройти заново",
        scoreLabel: (score, total) => `Верно: ${score} из ${total}`,
        successMessage: "Вы формируете устойчивые навыки безопасной онлайн-работы.",
        encouragement: "Регулярно обновляйте знания о киберугрозах и делитесь правилами цифровой гигиены с коллегами.",
        resultsTitle: "Ваш результат"
      },
      {
        id: "google-suite",
        title: "Интерактивное задание: Google Workspace и classroomscreen",
        description:
          "Закрепите навык совместной работы в Google Docs, Sheets, Slides, Forms и Classroom, а также управления уроком с помощью classroomscreen.com.",
        tasks: [
          {
            id: "docs-comment",
            question: "Как добавить комментарий к выделенному фрагменту в Google Docs?",
            options: ["Выделить текст и нажать Ctrl+Alt+M", "Нажать F5", "Экспортировать документ в PDF"],
            correct: 0,
            explanation: "Сочетание Ctrl+Alt+M или иконка комментария добавляют обсуждение к выделенному тексту."
          },
          {
            id: "drive-sharing",
            question: "Как настроить совместный доступ к файлу Google Документов?",
            options: ["Скопировать ссылку из адресной строки", "Через кнопку ‘Настроить доступ’ и выбор ролей читателя/комментатора/редактора", "Отправить файл по почте в формате DOCX"],
            correct: 1,
            explanation: "Кнопка ‘Настроить доступ’ позволяет задать права доступа и ограничить круг участников."
          },
          {
            id: "sheets-sumif",
            question: "Какая функция Google Sheets суммирует значения по условию?",
            options: ["SUMIF", "VLOOKUP", "COUNT"],
            correct: 0,
            explanation: "SUMIF (или SUMIFS) складывает только те ячейки, которые соответствуют заданному критерию."
          },
          {
            id: "forms-quiz",
            question: "Как превратить Google Форму в тест с автоматической проверкой?",
            options: ["В настройках включить режим ‘Тест’", "Создать таблицу результатов вручную", "Импортировать документ Word"],
            correct: 0,
            explanation: "Режим ‘Тест’ позволяет назначить баллы и правильные ответы для автоматического оценивания."
          },
          {
            id: "classroom-assignment",
            question: "Как создать задание в Google Classroom?",
            options: ["Перейти во вкладку Classwork → Create → Assignment", "Написать сообщение в Stream", "Добавить комментарий к файлу"],
            correct: 0,
            explanation: "Вкладка Classwork содержит все типы активности: задание, викторину, материал и т.д."
          },
          {
            id: "slides-link",
            question: "Как создать интерактивную навигацию внутри презентации Google Slides?",
            options: ["Выделить элемент → Вставить ссылку → Выбрать нужный слайд", "Экспортировать презентацию в JPG", "Настроить шрифт"],
            correct: 0,
            explanation: "Встроенные ссылки позволяют переходить на конкретные слайды и создавать нелинейные сценарии."
          },
          {
            id: "sheets-protect",
            question: "Как ограничить редактирование определённого диапазона в Google Sheets?",
            options: ["Данные → Защитить диапазоны", "Правка → Отменить", "Файл → Скачать"],
            correct: 0,
            explanation: "Защищённый диапазон позволяет указать, кто может вносить изменения в выбранные ячейки."
          },
          {
            id: "classroomscreen",
            question: "Какая функция classroomscreen помогает управлять временем выполнения задания?",
            options: ["Изменение фонового изображения", "Виджет таймера или обратного отсчёта", "Галерея пиктограмм"],
            correct: 1,
            explanation: "Таймер classroomscreen визуализирует оставшееся время и помогает держать темп урока."
          },
          {
            id: "classroom-guardians",
            question: "Как пригласить родителей/опекунов к курсу в Google Classroom?",
            options: ["Во вкладке People пригласить опекуна по электронной почте", "Создать новую тему в Stream", "Вставить ссылку в Google Sites"],
            correct: 0,
            explanation: "Во вкладке People у каждого ученика можно указать email опекуна для получения отчётов."
          },
          {
            id: "forms-responses",
            question: "Как автоматически собирать ответы формы в Google Sheets?",
            options: ["В разделе ‘Ответы’ выбрать ‘Создать таблицу’", "Скопировать ответы вручную", "Экспортировать форму в PowerPoint"],
            correct: 0,
            explanation: "Созданная связаная таблица обновляется автоматически при каждом новом ответе."
          }
        ],
        submitLabel: "Проверить ответы",
        resetLabel: "Сбросить и пройти заново",
        scoreLabel: (score, total) => `Верно: ${score} из ${total}`,
        successMessage: "Отлично! Вы уверенно работаете с экосистемой Google и интерактивными сервисами.",
        encouragement: "Комбинируйте формы, таблицы и интерактивные экраны, чтобы выстроить полный дистанционный курс.",
        resultsTitle: "Ваш результат"
      },
      {
        id: "hemis-system",
        title: "Интерактивное задание: HEMIS — управление учебными данными",
        description:
          "Освойте основные процессы информационной системы HEMIS: роли пользователей, учебные планы, идентификаторы и аналитические отчёты.",
        tasks: [
          {
            id: "hemis-roles",
            question: "Какие ключевые роли обычно выделяются в системе HEMIS?",
            options: ["Администратор, преподаватель, студент", "Дизайнер, маркетолог, копирайтер", "Фотограф, видеограф, редактор"],
            correct: 0,
            explanation: "Система разграничивает права доступа для административного персонала, преподавателей и обучающихся."
          },
          {
            id: "hemis-id",
            question: "Что представляет собой персональный идентификатор преподавателя или студента в HEMIS?",
            options: ["Уникальный код записи в базе данных", "Пароль от Wi-Fi", "Номер аудитории"],
            correct: 0,
            explanation: "Идентификатор связывает пользователя с академическими данными и используется в отчётности."
          },
          {
            id: "hemis-timetable",
            question: "Какие данные используют для формирования расписания в HEMIS?",
            options: ["Учебный план, нагрузка преподавателей и доступность аудиторий", "Только фотографии аудиторий", "Случайные числа"],
            correct: 0,
            explanation: "Система сопоставляет учебные планы с ресурсами вуза, чтобы сформировать расписание."
          },
          {
            id: "hemis-gradebook",
            question: "Как преподаватель фиксирует результаты контроля знаний в HEMIS?",
            options: ["Через электронный журнал (gradebook)", "Отправлять бумажные ведомости", "Сообщать по телефону"],
            correct: 0,
            explanation: "Электронный журнал позволяет вводить оценки, посещаемость и комментарии по студентам."
          },
          {
            id: "hemis-security",
            question: "Как обеспечивается конфиденциальность данных в HEMIS?",
            options: ["Через распределение ролей и журналирование действий", "Путём публикации данных в открытом доступе", "Использованием общих паролей"],
            correct: 0,
            explanation: "Разграничение прав доступа и аудит действий помогают защитить персональные данные."
          },
          {
            id: "hemis-report",
            question: "Какие отчёты можно сформировать в HEMIS для руководства факультета?",
            options: ["Успеваемость, посещаемость, нагрузка преподавателей", "Список меню студенческой столовой", "Расходы на командировки"],
            correct: 0,
            explanation: "Система предоставляет аналитические отчёты по учебным показателям и ресурсам."
          },
          {
            id: "hemis-enrollment",
            question: "Как в HEMIS фиксируется зачисление студентов на дисциплины?",
            options: ["Через регистрацию учебного плана и привязку студентов к группам", "Путём устного уведомления", "Через публикацию в социальных сетях"],
            correct: 0,
            explanation: "Учебные группы и планы автоматически добавляют студентов на нужные курсы."
          },
          {
            id: "hemis-integration",
            question: "Зачем HEMIS интегрируют с LMS и бухгалтерскими системами?",
            options: ["Для обмена данными об успеваемости, расписании и оплате", "Чтобы увеличивать размер файлов", "Для автоматической рассылки спама"],
            correct: 0,
            explanation: "Интеграция обеспечивает единое информационное пространство вуза."
          },
          {
            id: "hemis-updates",
            question: "Что необходимо делать при обновлении модулей HEMIS?",
            options: ["Тестировать изменения и информировать пользователей", "Удалять все данные", "Менять логотип вуза"],
            correct: 0,
            explanation: "Тестирование и коммуникация позволяют избежать ошибок и подготовить пользователей к новому функционалу."
          },
          {
            id: "hemis-support",
            question: "Куда сотруднику обратиться при возникновении ошибок в HEMIS?",
            options: ["В службу технической поддержки или ответственному администратору", "В случайный телеграм-чат", "В социальные сети студентов"],
            correct: 0,
            explanation: "Служба поддержки регистрирует обращения и помогает оперативно устранить проблемы."
          }
        ],
        submitLabel: "Проверить ответы",
        resetLabel: "Сбросить и пройти заново",
        scoreLabel: (score, total) => `Верно: ${score} из ${total}`,
        successMessage: "Отлично! Вы ориентируетесь в ключевых процессах HEMIS.",
        encouragement: "Продолжайте изучать интеграции HEMIS с другими сервисами вуза и обновления модулей.",
        resultsTitle: "Ваш результат"
      },
      {
        id: "smart-learning",
        title: "Интерактивное задание: смарт-учебники, Zoom и вебинары",
        description:
          "Проверьте навыки организации онлайн-обучения: смарт-учебники, Zoom, вебинарные платформы и интерактивные сценарии взаимодействия со студентами.",
        tasks: [
          {
            id: "smartbook-features",
            question: "Какая особенность смарт-учебников повышает вовлечённость студентов?",
            options: ["Интерактивные элементы: тесты, видео, гиперссылки", "Только статичный текст", "Отсутствие навигации"],
            correct: 0,
            explanation: "Интерактивные модули дают моментальную обратную связь и делают обучение адаптивным."
          },
          {
            id: "zoom-waiting-room",
            question: "Какой инструмент Zoom помогает контролировать доступ участников?",
            options: ["Зал ожидания (Waiting Room)", "Фоновые фильтры", "Реакции"],
            correct: 0,
            explanation: "Зал ожидания позволяет впускать только авторизованных слушателей."
          },
          {
            id: "zoom-recording",
            question: "На что важно обратить внимание при записи занятия в Zoom?",
            options: ["Получить согласие участников и выбрать место сохранения", "Выключить микрофон преподавателя", "Переключить качество видео на 144p"],
            correct: 0,
            explanation: "Согласие и настройка локации файла обеспечивают соблюдение политики конфиденциальности."
          },
          {
            id: "webinar-engagement",
            question: "Как повысить вовлечённость на вебинаре?",
            options: ["Использовать опросы, чат и вопросы к аудитории", "Читать монотонный текст", "Запретить любые вопросы"],
            correct: 0,
            explanation: "Интерактивные элементы удерживают внимание и дают обратную связь."
          },
          {
            id: "zoom-breakout",
            question: "Для чего используют комнаты для групп (Breakout rooms)?",
            options: ["Для разделения участников на мини-группы", "Для изменения виртуального фона", "Для записи экрана"],
            correct: 0,
            explanation: "Breakout rooms создают пространство для командной работы и дискуссий."
          },
          {
            id: "smartbook-analytics",
            question: "Как преподаватель отслеживает прогресс в смарт-учебнике?",
            options: ["Через встроенную аналитику: время, попытки, результаты", "По отзывам в социальных сетях", "Через бумажные журналы"],
            correct: 0,
            explanation: "Системы смарт-учебников предоставляют статистику прохождения и затраченного времени."
          },
          {
            id: "zoom-security",
            question: "Как повысить безопасность Zoom-конференции?",
            options: ["Использовать пароль и ограничить демонстрацию экрана", "Публиковать ссылку в открытых соцсетях", "Отключить зал ожидания"],
            correct: 0,
            explanation: "Пароль и управление правами предотвращают нежелательные подключения и злоупотребления." 
          },
          {
            id: "webinar-plan",
            question: "Что включить в сценарий вебинара для структурированного проведения?",
            options: ["План вступления, основной части, практики и обратной связи", "Только список ссылок", "Полное импровизационное выступление"],
            correct: 0,
            explanation: "Структурированный план удерживает внимание и фиксирует ключевые блоки занятия."
          },
          {
            id: "zoom-polls",
            question: "Как Zoom помогает быстро собрать обратную связь во время занятия?",
            options: ["Через инструмент Polls/Опросы", "Через смену виртуального фона", "Через чат реакций"],
            correct: 0,
            explanation: "Опросы позволяют мгновенно получить ответы и отобразить результаты группе."
          },
          {
            id: "smart-learning-hybrid",
            question: "Что важно при организации гибридного занятия (очная + онлайн аудитория)?",
            options: ["Обеспечить качественный звук, совместные материалы и каналы обратной связи", "Игнорировать онлайн-участников", "Использовать только печатные раздатки"],
            correct: 0,
            explanation: "Сбалансированные каналы коммуникации и материалы делают обучение доступным всем участникам."
          }
        ],
        submitLabel: "Проверить ответы",
        resetLabel: "Сбросить и пройти заново",
        scoreLabel: (score, total) => `Верно: ${score} из ${total}`,
        successMessage: "Вы готовы проводить интерактивные онлайн-уроки и вебинары.",
        encouragement: "Комбинируйте смарт-учебники, Zoom и инструменты вовлечения, чтобы поддерживать активность студентов.",
        resultsTitle: "Ваш результат"
      }
  ],
  uz: [
    {
      id: "hardware-setup",
      title: "Interaktiv topshiriq: kompyuter qurilmalari va tizimni sozlash",
      description:
        "Savollarga javob bering va ishchi joyni jihozlash hamda sozlash bo'yicha qanchalik ishonchli ekaningizni tekshiring.",
      tasks: [
        {
          id: "peripheral",
          question: "Quyidagi qurilmalardan qaysi biri kirish periferik qurilmasiga kiradi?",
          options: ["Monitor", "Skaner", "Akustik tizim"],
          correct: 1,
          explanation: "Skaner ma'lumotni kompyuterga uzatadi, shuning uchun u kirish qurilmasidir."
        },
        {
          id: "backup",
          question: "Yangi operatsion tizimni o'rnatishdan OLDIN qaysi amalni bajarish kerak?",
          options: ["Ma'lumotlarning zaxira nusxasini yaratish", "Barcha drayverlarni o'chirish", "Klaviaturani uzish"],
          correct: 0,
          explanation: "Zaxira nusxa o'rnatish jarayonida muammo yuz bersa, muhim fayllarni saqlab qoladi."
        },
        {
          id: "diagnostics",
          question: "Windows tizimida qaysi vosita tizim holatini va asosiy ko'rsatkichlarni tezda tekshirishga yordam beradi?",
          options: ["Explorer (Ochiluvchi oynalar)", "Vazifalar dispetcheri", "Daftar"],
          correct: 1,
          explanation: "Vazifalar dispetcheri resurslar yuklanishi va jarayonlarni ko'rsatadi, bu diagnostika uchun muhim."
        },
        {
          id: "safe-boot",
          question: "Windows tizimini minimal drayverlar bilan diagnostika qilish uchun qaysi yuklash rejimi tanlanadi?",
          options: ["Standart yuklash", "Xavfsiz rejim", "Mehmon rejimi"],
          correct: 1,
          explanation: "Xavfsiz rejim ortiqcha drayver va servislarni o'chirib, muammolarni aniqlashni osonlashtiradi."
        },
        {
          id: "bios-access",
          question: "Stol kompyuterlarida BIOS/UEFI sozlamalariga kirish uchun eng ko'p qaysi tugma bosiladi?",
          options: ["Delete", "F11", "Tab"],
          correct: 0,
          explanation: "Ko'pgina anakartlarda Delete tugmasi BIOS yoki UEFI menyusini ochadi."
        },
        {
          id: "ssd-benefit",
          question: "Tizim diskini HDD dan SSD ga almashtirish qanday afzallik beradi?",
          options: ["Xotira hajmini kamaytiradi", "O'qish va yozish tezligini oshiradi", "Shovqinni kuchaytiradi"],
          correct: 1,
          explanation: "SSD ma'lumotlarga tezroq murojaat qiladi va tizim yuklanishini tezlashtiradi."
        },
        {
          id: "ram-install",
          question: "Yangi operativ xotira platasini o'rnatishdan oldin nima qilish kerak?",
          options: ["Quvvatni o'chirib, statik zaryadni tushirish", "Qo'shimcha qattiq disk o'rnatish", "Antivirusni o'chirish"],
          correct: 0,
          explanation: "Quvvatni uzish va statik zaryadni yo'qotish komponentlarni shikastlanishdan himoya qiladi."
        },
        {
          id: "cable-management",
          question: "Sistemali blok ichida kabel stajkalaridan foydalanishning asosiy sababi nima?",
          options: ["Ventilyatorlarni shovqinli qilish uchun", "Havo aylanishini yaxshilash va xavfsizlikni ta'minlash uchun", "Kabel uzunligini kamaytirish uchun"],
          correct: 1,
          explanation: "Kabelni tartibli joylashtirish airflow ni yaxshilaydi va ularni zararlanishdan asraydi."
        },
        {
          id: "power-supply",
          question: "Quvvat bloki tanlashda qaysi asosiy ko'rsatkichga e'tibor berish kerak?",
          options: ["Korpus rangi", "Vattdagi quvvat va samaradorlik sertifikati", "Klaviatura yoritilishi"],
          correct: 1,
          explanation: "Quvvat va 80 Plus kabi sertifikatlar blokning yuklamaga chidashini ko'rsatadi."
        },
        {
          id: "monitor-calibration",
          question: "Monitor bilan ishlaganda ko'zlarga tushadigan yukni kamaytirishning eng yaxshi usuli qaysi?",
          options: ["Yorqinlikni maksimal darajaga qo'yish", "Yorqinlik va rang haroratini yoritishga moslab sozlash", "Energiya tejashni o'chirish"],
          correct: 1,
          explanation: "Yorqinlik va rang balansini to'g'ri sozlash ko'rishni qulay qiladi va charchoqni kamaytiradi."
        }
      ],
      submitLabel: "Javoblarni tekshirish",
      resetLabel: "Qayta boshlash",
      scoreLabel: (score, total) => `To'g'ri javoblar: ${score}/${total}`,
      successMessage: "Ajoyib! Siz kompyuter qurilmalari va tizim sozlamalarini yaxshi bilasiz.",
      encouragement: "Yaxshi boshlash! Izohlarni ko'rib chiqing va yana urinib ko'ring.",
      resultsTitle: "Natijangiz"
    },
    {
      id: "os-office",
      title: "Interaktiv topshiriq: operatsion tizimlar va ofis dasturlari",
      description:
        "Amaliy vaziyatlarni ko'rib chiqing va operatsion tizim hamda ofis paketini dolzarb holda saqlash uchun to'g'ri choralarni tanlang.",
      tasks: [
        {
          id: "os-example",
          question: "Quyidagi variantlardan qaysi biri operatsion tizimga misol bo'ladi?",
          options: ["Microsoft Word", "macOS", "Adobe Photoshop"],
          correct: 1,
          explanation: "macOS kompyuter resurslarini boshqaradi; Word va Photoshop — amaliy dasturlar."
        },
        {
          id: "office-activation",
          question: "Microsoft Office 365 ni yangi kompyuterda birinchi marta ishga tushirganda nima qilish kerak?",
          options: ["Windows yangilanishlarini o'chirish", "Microsoft hisobiga kirib, litsenziyani faollashtirish", "Internetni uzish"],
          correct: 1,
          explanation: "Hisobga kirish litsenziyani faollashtiradi va bulutli hujjatlarni sinxronlaydi."
        },
        {
          id: "doc-format",
          question: "Hujjatni birgalikda tahrirlash uchun Wordda qaysi formatni saqlash ma'qul?",
          options: ["DOCX", "PDF", "PNG"],
          correct: 0,
          explanation: "DOCX hujjat tuzilmasini saqlaydi va onlayn tahrirlashga imkon beradi."
        },
        {
          id: "os-updates",
          question: "Windows operatsion tizimini avtomatik yangilashni qanday ta'minlash mumkin?",
          options: ["Yangilanish markazini o'chirish", "Yangilanishlarni avtomatik o'rnatishni yoqish", "Faqat printer drayverlarini o'rnatish"],
          correct: 1,
          explanation: "Avtomatik yangilanishlar zaifliklarni yopadi va tizimni barqaror yuritadi."
        },
        {
          id: "office-collaboration",
          question: "Word hujjatini real vaqt rejimida birgalikda tahrirlash uchun nima qilish kerak?",
          options: ["Faylni faqat mahalliy diskda saqlash", "OneDrive yoki SharePoint orqali bo'lishish", "Hujjatni chop etib, nusxalar tarqatish"],
          correct: 1,
          explanation: "OneDrive yoki SharePoint hujjatni bir nechta foydalanuvchi bilan bir vaqtda tahrirlash imkonini beradi."
        },
        {
          id: "office-shortcut",
          question: "Microsoft Word da hujjatni tez saqlash uchun qaysi tugmalar birikmasi ishlatiladi?",
          options: ["Ctrl + S", "Ctrl + X", "Alt + F4"],
          correct: 0,
          explanation: "Ctrl + S amaldagi hujjatni darhol saqlaydi."
        },
        {
          id: "security-antivirus",
          question: "Yangi antivirusni o'rnatishdan oldin qaysi amalni bajarish muhim?",
          options: ["Avvalgi antivirusni olib tashlash", "Windows yangilanishlarini o'chirish", "Ikki faktorli himoyani o'chirish"],
          correct: 0,
          explanation: "Eski antivirusni olib tashlash dasturlar o'rtasidagi ziddiyatlarni oldini oladi."
        },
        {
          id: "permissions",
          question: "Windowsda foydalanuvchiga faylni o'zgartirish huquqini berish uchun nimani sozlash kerak?",
          options: ["Xavfsizlik ruxsatlari", "Ish stoli fonini almashtirish", "Vazifalar paneli ko'rinishini sozlash"],
          correct: 0,
          explanation: "Xavfsizlik ruxsatlari fayl va papkalarga kirish darajasini belgilaydi."
        },
        {
          id: "templates",
          question: "Wordda bir xil turdagi hujjatlarni tez tayyorlashning eng qulay usuli qanday?",
          options: ["Tayyor shablondan foydalanish", "Har safar qaytadan yozish", "Dastlab hujjatni PNG formatiga eksport qilish"],
          correct: 0,
          explanation: "Shablon tayyor stil va tuzilmani saqlaydi, shuning uchun vaqt tejaydi."
        },
        {
          id: "excel-shared",
          question: "Excel jadvalini jamoaviy foydalanish uchun qanday tashkil etish ma'qul?",
          options: ["Faylni faqat mahalliy kompyuterda saqlash", "Bulutda umumiy fayl yaratib, kirish darajalarini sozlash", "Har bir qator uchun turli formatlardan foydalanish"],
          correct: 1,
          explanation: "Bulutdagi umumiy fayl ma'lumotlarni dolzarb saqlaydi va hamkorlikni osonlashtiradi."
        }
      ],
      submitLabel: "Javoblarni tekshirish",
      resetLabel: "Qayta boshlash",
      scoreLabel: (score, total) => `To'g'ri javoblar: ${score}/${total}`,
      successMessage: "Barakalla! Siz operatsion tizim va ofis dasturlarini boshqarishni bilasiz.",
      encouragement: "Mashqni davom ettiring va izohlarni diqqat bilan o'qing.",
      resultsTitle: "Natijangiz"
    },
    {
      id: "hot-potatoes",
      title: "Interaktiv topshiriq: Hot Potatoes da multimediali kurs yaratish",
      description:
        "Hot Potatoes modullarini tanlash, media qo'shish, fayllarni tartiblash va tayyor kursni chop etish bo'yicha asosiy amallarni mustahkamlang.",
      tasks: [
        {
          id: "hp-module-choice",
          question: "Hot Potatoes modullaridan qaysi biri bir yoki bir nechta javobli viktorinalar uchun eng mos?",
          options: ["JQuiz", "JMatch", "JCross"],
          correct: 0,
          explanation: "JQuiz moduli test savollarini, baholashni va javob variantlarini qo'llab-quvvatlaydi."
        },
        {
          id: "hp-output",
          question: "Hot Potatoes odatda mashqlarni qaysi formatda chop etadi?",
          options: ["HTML fayl", "PDF hujjat", "EXE dastur"],
          correct: 0,
          explanation: "Hot Potatoes brauzerda ochiladigan interaktiv HTML sahifalarini yaratadi."
        },
        {
          id: "hp-shuffle",
          question: "JQuizda savollar tartibini tasodifiy qilish uchun nima qilish kerak?",
          options: ["Settings bo'limidagi Shuffle questions parametrini yoqish", "Faylni boshqa nom bilan saqlash", "JCloze moduliga o'tish"],
          correct: 0,
          explanation: "Shuffle questions parametri har ishga tushirishda savollar tartibini aralashtirib beradi."
        },
        {
          id: "hp-cloze",
          question: "Matndagi bo'sh joylarni to'ldirish mashqlari uchun qaysi modul mo'ljallangan?",
          options: ["JCloze", "JMatch", "The Masher"],
          correct: 0,
          explanation: "JCloze matn ichidagi bo'shliqlarni to'ldirishga mo'ljallangan mashqlarni yaratadi."
        },
        {
          id: "hp-media",
          question: "Hot Potatoes mashqiga rasmni qanday to'g'ri qo'shish kerak?",
          options: ["Insert > Picture menyusidan foydalanib, rasm faylini HTML bilan bir papkada saqlash", "Rasmga .exe kengaytmasini berish", "Faylni .jmt kengaytmasiga o'zgartirish"],
          correct: 0,
          explanation: "Rasm Insert menyusi orqali ulanadi va to'g'ri ko'rinish uchun HTML fayli bilan bir papkada turishi zarur."
        },
        {
          id: "hp-masher",
          question: "Bir nechta Hot Potatoes mashqlarini bitta kursga birlashtirish uchun nima qilish kerak?",
          options: ["The Masher vositasidan foydalanish", "Har bir mashqni alohida brauzer oynasida ochish", "Mashqlarni PDF formatiga aylantirish"],
          correct: 0,
          explanation: "The Masher mashqlarga umumiy navigatsiya qo'shib, ularni yagona kurs sifatida birlashtiradi."
        },
        {
          id: "hp-feedback",
          question: "JQuizda har bir javob uchun alohida izohlarni qayerda sozlash mumkin?",
          options: ["Savol oynasidagi Feedback bo'limida", "Windows fayl xususiyatlarida", "JCross modulida"],
          correct: 0,
          explanation: "Feedback bo'limi to'g'ri va noto'g'ri javoblar uchun individual izohlar kiritish imkonini beradi."
        },
        {
          id: "hp-audio",
          question: "Mashqqa audio sharh qo'shishning to'g'ri usuli qaysi?",
          options: ["Insert Media tugmasidan foydalanib, HTML5 <audio> tegi orqali qo'shish", "Audio fayl nomini savol matniga yozish", "Ovoz yozuvini .exe formatida saqlash"],
          correct: 0,
          explanation: "Hot Potatoes HTML5 teglari bilan mos, shuning uchun audio Insert Media va <audio> teglari orqali ulanadi."
        },
        {
          id: "hp-folder",
          question: "Kursni chop etishdan oldin fayllarni qanday tartiblash ma'qul?",
          options: ["HTML va media fayllarni bir loyiha papkasida saqlash", "Rasmlarni Windows tizim papkalariga joylash", "Fayllarni tasodifiy raqamlar bilan qayta nomlash"],
          correct: 0,
          explanation: "Bir papkada saqlash serverga yuklanganda media yo'llari buzilmasligini ta'minlaydi."
        },
        {
          id: "hp-export",
          question: "O'quvchilarning natijalarini tahlil qilish uchun qaysi usul yordam beradi?",
          options: ["SCORM shabloniga eksport qilish yoki JavaScript orqali serverga natija yuborish", "Sahifani printerdan chiqarish", "Mashqlarni bajarilgach o'chirib yuborish"],
          correct: 0,
          explanation: "SCORM yoki maxsus skriptlar natijalarni to'plash va LMSga integratsiya qilish imkonini beradi."
        }
      ],
      submitLabel: "Javoblarni tekshirish",
      resetLabel: "Qayta boshlash",
      scoreLabel: (score, total) => `To'g'ri javoblar: ${score}/${total}`,
      successMessage: "Ajoyib! Siz Hot Potatoes yordamida interaktiv kurs yaratish jarayonini yaxshi o'zlashtirdingiz.",
      encouragement: "O'z materiallaringiz asosida mashqlar tuzib, kursni yanada boyiting.",
      resultsTitle: "Natijangiz"
    },
    {
      id: "authoring-tools",
      title: "Interaktiv topshiriq: iSpring QuizMaker va Wordwall.net",
      description:
        "Elektron darsliklar uchun asosiy vositalarni o'rganing: iSpring QuizMaker'da viktorinalar va Wordwall'da interaktiv mashqlar yaratish bosqichlarini mustahkamlang.",
      tasks: [
        {
          id: "ispring-format",
          question: "iSpring QuizMaker natijalarini LMS tizimiga yuklash uchun qaysi chop etish rejimini tanlash kerak?",
          options: ["Publish → LMS (SCORM)", "Publish → Video", "Publish → YouTube"],
          correct: 0,
          explanation: "Publish → LMS rejimi SCORM paketini yaratadi va LMSda natijalarni kuzatishga imkon beradi."
        },
        {
          id: "ispring-question-types",
          question: "iSpring'da termin va ta'riflarni moslashtirish uchun qaysi savol turidan foydalanish qulay?",
          options: ["Matching", "Multiple Choice", "Essay"],
          correct: 0,
          explanation: "Matching turi ikki ro'yxat elementlarini bog'lash orqali lug'atni mustahkamlaydi."
        },
        {
          id: "ispring-branching",
          question: "Talaba javobiga qarab o'tishlarni qayerda sozlash mumkin?",
          options: ["Feedback & Branching oynasida", "Design Themes bo'limida", "Player panelida"],
          correct: 0,
          explanation: "Feedback & Branching bo'limi savoldan keyingi slayd yoki izohni tanlashga imkon beradi."
        },
        {
          id: "ispring-question-bank",
          question: "Question Group iSpring QuizMaker'da qanday vazifani bajaradi?",
          options: ["Savollar bankini yaratib, ularni tasodifiy tanlash", "Rang sxemasini o'zgartirish", "PDFga eksport qilish"],
          correct: 0,
          explanation: "Question Group testga tasodifiy savollar qo'shish uchun foydalaniladi."
        },
        {
          id: "ispring-media",
          question: "Savolga audio sharh qo'shishning eng to'g'ri usuli qaysi?",
          options: ["Insert Audio tugmasidan foydalanish", "Matn ichiga tashqi MP3 havolasini yozish", "Savol faylini .mp3 kengaytmaga o'zgartirish"],
          correct: 0,
          explanation: "Insert Audio yordamida tayyor faylni qo'shish yoki ovoz yozib olish mumkin."
        },
        {
          id: "ispring-reporting",
          question: "LMS ball va yakuniy holatni qayd etishi uchun qaysi kuzatuv (Tracking) sozlamasi tanlanadi?",
          options: ["Complete/Incomplete + Score", "Slides viewed", "Video progress"],
          correct: 0,
          explanation: "Complete/Incomplete + Score parametri o'tish holati va ballarni yuboradi."
        },
        {
          id: "wordwall-template",
          question: "So'zlarni tarjima bilan moslashtirish uchun qaysi Wordwall shabloni eng mos?",
          options: ["Match Up", "Open the Box", "Random Wheel"],
          correct: 0,
          explanation: "Match Up moslashtirish mashqlari uchun yaratilingan va til mashqlari uchun qulay."
        },
        {
          id: "wordwall-assign",
          question: "Talabalarning natijalarini individual tarzda kuzatish uchun mashqni qanday ulash kerak?",
          options: ["Assign rejimini tanlab, havolani yuborish", "Mashqni PDFga yuklab, tarqatish", "Shablonni o'chirib, yangisini yaratish"],
          correct: 0,
          explanation: "Assign rejimi ishtirokchi ismi va ballarini qayd etadigan maxsus havolani yaratadi."
        },
        {
          id: "wordwall-export",
          question: "Wordwall mashqidan oflayn foydalanish uchun qanday formatda yuklab olish mumkin?",
          options: ["Download → PDF", "Export → SCORM", "Save as Template"],
          correct: 0,
          explanation: "PDF formatidagi yuklab olish bosma material sifatida ishlatiladi."
        },
        {
          id: "wordwall-custom",
          question: "Wordwall'da vaqt limiti va ko'rsatmalar qayerda sozlanadi?",
          options: ["Edit → Settings bo'limida", "My Results sahifasida", "Collections menyusida"],
          correct: 0,
          explanation: "Settings oynasi yordamida instruktsiya, vaqt va urinishlar sonini belgilash mumkin."
        }
      ],
      submitLabel: "Javoblarni tekshirish",
      resetLabel: "Qayta boshlash",
      scoreLabel: (score, total) => `To'g'ri javoblar: ${score}/${total}`,
      successMessage: "Barakalla! Siz iSpring va Wordwall yordamida o'quv mashqlarini yaratishni o'rgandingiz.",
      encouragement: "Yangi shablonlar bilan tajriba qilib, mashg'ulotlar bankini kengaytiring.",
      resultsTitle: "Natijangiz"
    },
    {
      id: "apps-authoring",
      title: "Interaktiv topshiriq: iSpring, MyTest va LearningApps",
      description:
        "iSpring simulyatsiyalari, MyTest testlari va LearningApps onlayn mashqlari bilan ishlash ko'nikmalarini sinab ko'ring.",
      tasks: [
        {
          id: "ispring-talkmaster",
          question: "iSpring Suite tarkibidagi qaysi komponent ssenariyli dialog trenajyorlarini yaratish uchun mo'ljallangan?",
          options: ["TalkMaster", "Screen Recorder", "Audio Editor"],
          correct: 0,
          explanation: "TalkMaster yordamida suhbat tarmoqlanishini sozlash va o'tish statistikasi ko'rish mumkin."
        },
        {
          id: "ispring-insert",
          question: "PowerPoint dasturida iSpring Interaction obyektini qo'shish buyrug'i qaysi yorliqda joylashgan?",
          options: ["iSpring Suite → Interaction", "Review → Compare", "Animations → Add Animation"],
          correct: 0,
          explanation: "iSpring o'rnatilgach, iSpring Suite yorlig'i paydo bo'ladi va unda Interaction tugmasi mavjud."
        },
        {
          id: "ispring-publish-lms",
          question: "iSpring modulini LMS tizimiga ulash uchun qaysi chop etish rejimi tanlanadi?",
          options: ["Publish → LMS (SCORM)", "Publish → YouTube", "Publish → Word"],
          correct: 0,
          explanation: "SCORM formatidagi eksport LMS bilan ma'lumot almashinuvini to'g'ri tashkil etadi."
        },
        {
          id: "ispring-drag",
          question: "Rasm ustiga ob'ektlarni sudrab joylashtirish uchun iSpring QuizMaker'da qaysi savol turidan foydalaniladi?",
          options: ["Drag-and-Drop", "Likert Scale", "Numeric"],
          correct: 0,
          explanation: "Drag-and-Drop savollari markerlarni kerakli joyga sudrash orqali javob berishga imkon beradi."
        },
        {
          id: "mytest-extension",
          question: "MyTestX muharririda yaratilgan test fayli qanday kengaytgichga ega bo'ladi?",
          options: [".mtf", ".docx", ".pptx"],
          correct: 0,
          explanation: "Tahrirlash uchun test loyihasi .mtf formatida saqlanadi va unga MyTestX orqali ishlov beriladi."
        },
        {
          id: "mytest-time",
          question: "MyTest dasturida testni topshirish uchun vaqt cheklovini qayerda belgilash mumkin?",
          options: ["\"Test\" menyusidagi \"Test xususiyatlari\" oynasida", "\"Tahrirlash\" menyusidagi \"Bekor qilish\" buyrug'ida", "Savolning kontekst menyusida \"O'chirish\" buyrug'i orqali"],
          correct: 0,
          explanation: "Test xususiyatlari oynasida vaqt, urinishlar soni va ball shkalasi sozlanadi."
        },
        {
          id: "mytest-exe",
          question: "MyTest dasturisiz ishlaydigan mustaqil test faylini qanday yaratish mumkin?",
          options: ["Fayl → Ijrochi fayl (.exe) yaratish", "Fayl → Chop etish", "Ko'rinish → Asboblar paneli"],
          correct: 0,
          explanation: ".exe shaklidagi kompilyatsiya testni alohida ilova sifatida ishga tushirishga imkon beradi."
        },
        {
          id: "learningapps-template",
          question: "LearningApps platformasida so'z va tarjimalarni moslashtirish uchun qaysi shablon mos?",
          options: ["Matching Pairs", "Group Puzzle", "Single Choice"],
          correct: 0,
          explanation: "Matching Pairs shabloni ikkita ro'yxat elementlarini juftlash orqali lug'atni mustahkamlaydi."
        },
        {
          id: "learningapps-class",
          question: "LearningApps'da o'quvchilarning natijalarini qanday yig'ish mumkin?",
          options: ["Sinflar bo'limida sinf yaratib, kirish kodini berish", "Talabalardan skrinshot yuborishni so'rash", "Topshiriqni PDF formatida yuklab olish"],
          correct: 0,
          explanation: "Sinf rejimi orqali har bir ishtirokchi natijalari avtomatik tarzda qayd etiladi."
        },
        {
          id: "learningapps-embed",
          question: "LearningApps mashqini kurs sahifasiga qanday joylashtirish mumkin?",
          options: ["\"Embed\" bo'limidagi HTML kodni nusxalab saytga joylash", "Mashqning skrinshotini yuklash", "FTP orqali fayl yuborish"],
          correct: 0,
          explanation: "Platforma taqdim etgan embed-kodni LMS yoki blog sahifasiga qo'shish yetarli."
        }
      ],
      submitLabel: "Javoblarni tekshirish",
      resetLabel: "Qayta boshlash",
      scoreLabel: (score, total) => `To'g'ri javoblar: ${score}/${total}`,
      successMessage: "Zo'r! Siz iSpring, MyTest va LearningApps bilan interaktiv topshiriqlar yaratishni yaxshi bilasiz.",
      encouragement: "O'z darslaringiz uchun ssenariylarni moslab, mashqlar kutubxonasini kengaytiring.",
      resultsTitle: "Natijangiz"
    },
    {
      id: "animation-3d",
      title: "Interaktiv topshiriq: Photoshop animatsiyasi va Blender 3D",
      description:
        "Photoshopda kadrma-kadr animatsiya va Blenderda 3D sahnalar yaratish ko'nikmalarini tekshiring: kalit kadrlar, UV-razvyortka, materiallar va eksport.",
      tasks: [
        {
          id: "ps-timeline",
          question: "Adobe Photoshop dasturida animatsiya vaqt chizig'ini qanday ochish mumkin?",
          options: ["Window → Timeline menyusi orqali", "Edit → Convert to Smart Object", "Filter → Blur Gallery"],
          correct: 0,
          explanation: "Timeline paneli Window menyusidan faollashtiriladi va kadrlarni boshqarishga imkon beradi."
        },
        {
          id: "animation-fps",
          question: "Animatsiyani eksport qilishda sekundiga kadrlar sonini qaysi parametr belgilaydi?",
          options: ["FPS", "DPI", "ISO"],
          correct: 0,
          explanation: "FPS (Frames Per Second) animatsiyaning silliqligini belgilaydi."
        },
        {
          id: "ps-gif-export",
          question: "Photoshopdan GIF animatsiyani qanday qilib to'g'ri eksport qilish mumkin?",
          options: ["File → Export → Save for Web (Legacy)", "Image → Mode → CMYK", "Layer → Rasterize"],
          correct: 0,
          explanation: "Save for Web (Legacy) oynasi rang palitrasi va takrorlanish parametrlarini sozlashga imkon beradi."
        },
        {
          id: "blender-keyframe",
          question: "Blenderda tanlangan parametr uchun kalit kadrni qanday qo'shasiz?",
          options: ["I tugmasini bosish", "X tugmasini bosish", "Shift+S tugmalari"],
          correct: 0,
          explanation: "I tugmasi (Insert Keyframe) joriy kadrda parametr qiymatini saqlab qoladi."
        },
        {
          id: "blender-engine",
          question: "Qaysi Blender render dvigateli fizik asoslangan nurlanishni ta'minlaydi?",
          options: ["Eevee", "Workbench", "Cycles"],
          correct: 2,
          explanation: "Cycles ray tracing asosida ishlaydi va realizmga yaqin natija beradi."
        },
        {
          id: "blender-view",
          question: "Blenderning 3D View oynasida Solid rejimiga tezkor o'tishning usuli qaysi?",
          options: ["Shift+E tugmasini bosish", "Z tugmasini bosib Solid ni tanlash", "Ctrl+Alt+C tugmalari"],
          correct: 1,
          explanation: "Z menyusi orqali Solid, Wireframe yoki Rendered rejimlarini tanlash mumkin."
        },
        {
          id: "ps-loop",
          question: "GIF animatsiyasini doimiy takrorlanadigan qilish uchun nima qilish kerak?",
          options: ["Eksport oynasida Loop parametrini 'Forever' ga o'rnatish", "Har bir kadrni ko'paytirish", "Kanvas o'lchamini kichraytirish"],
          correct: 0,
          explanation: "Loop parametrini Forever ga sozlash animatsiyani to'xtamasdan takrorlaydi."
        },
        {
          id: "blender-uv",
          question: "Blenderda modelga tekstura berishdan oldin qaysi harakatni bajarish zarur?",
          options: ["Smart UV Project yordamida UV-razvyortka qilish", "Boolean modifikatorini qo'shish", "Ob'ektni boshqa kolleksiyaga ko'chirish"],
          correct: 0,
          explanation: "UV-razvyortka teksturani to'g'ri joylashtirish uchun koordinatalarni aniqlaydi."
        },
        {
          id: "graph-editor",
          question: "Blenderdagi Graph Editor nimaga xizmat qiladi?",
          options: ["Animatsiya egri chiziqlarini nozik sozlash uchun", "Sahnalarni boshqarish uchun", "Materiallar yaratish uchun"],
          correct: 0,
          explanation: "Graph Editor kalit kadrlar orasidagi interpolatsiyani nazorat qilishga yordam beradi."
        },
        {
          id: "blender-export",
          question: "3D modellardan boshqa dasturlarda foydalanish uchun qaysi fayl formati mos keladi?",
          options: ["FBX", "PSD", "MP3"],
          correct: 0,
          explanation: "FBX formati materiallar va animatsiyani saqlagan holda modelni almashish imkonini beradi."
        }
      ],
      submitLabel: "Javoblarni tekshirish",
      resetLabel: "Qayta boshlash",
      scoreLabel: (score, total) => `To'g'ri javoblar: ${score}/${total}`,
      successMessage: "Zo'r! Siz animatsiya va 3D modellashtirishni amalda qo'llay olasiz.",
      encouragement: "Materiallar, yorug'lik va tezkor renderlar bilan tajriba qilib ko'ring, ko'nikmalaringizni mustahkamlang.",
      resultsTitle: "Natijangiz"
    },
    {
      id: "media-editing",
      title: "Interaktiv topshiriq: audio va video materiallarini qayta ishlash",
      description:
        "Montaj, rangni tuzatish va audio sifatini yaxshilash ko'nikmalarini tekshiring: Premiere/Audacity jarayonlari, kodeklar, normalizatsiya va media-arxivni zaxiralash.",
      tasks: [
        {
          id: "audio-noise",
          question: "Ovoz yozuvidagi fon shovqinini qanday kamaytirish mumkin?",
          options: ["Noise Reduction effektini qo'llash", "Umumiy ovoz balandligini oshirish", "Yo'lni monoga o'zgartirish"],
          correct: 0,
          explanation: "Noise Reduction shovqin namunasini tahlil qilib, keraksiz chastotalarni pasaytiradi."
        },
        {
          id: "video-container",
          question: "H.264 kodekida eksport qilingan videolar uchun qaysi konteyner ko'proq qo'llaniladi?",
          options: ["MP4", "DOCX", "TIFF"],
          correct: 0,
          explanation: "MP4 deyarli barcha platformalar tomonidan qo'llab-quvvatlanadi va striming uchun mos."
        },
        {
          id: "sync-audio",
          question: "Montaj dasturida clap bo'yicha video va audiolarni qanday sinxronlash mumkin?",
          options: ["Kliplarni markerlar va to'lqin shakli bo'yicha moslashtirish", "Blur effektini qo'llash", "Loyihaning ruxsatini o'zgartirish"],
          correct: 0,
          explanation: "Marker yoki audio to'lqini bo'yicha hizlash tracklarni aniq moslashtirishga yordam beradi."
        },
        {
          id: "color-correction",
          question: "Adobe Premiere Pro dasturida bazaviy rang tuzatish uchun qaysi panel ishlatiladi?",
          options: ["Lumetri Color paneli", "Essential Graphics paneli", "Crop asbobi"],
          correct: 0,
          explanation: "Lumetri Color ekspozitsiya, oq balans va kreativ LUTlarni boshqarish imkonini beradi."
        },
        {
          id: "audio-level",
          question: "Ovoz yo'lini qulay eshitilish uchun odatda qaysi darajagacha normalizatsiya qilish tavsiya etiladi?",
          options: ["−1 dB", "−6 dB", "+3 dB"],
          correct: 1,
          explanation: "−6 dB atrofidagi daraja piklar uchun zaxira qoldiradi va clipingning oldini oladi."
        },
        {
          id: "video-transcode",
          question: "Videoning hajmini mos pleerlar bilan moslashuvchan holda qanday kichraytirish mumkin?",
          options: ["HandBrake dasturida H.264 kodekini o'zgaruvchan bitrat bilan qo'llash", "Audio yo'lini o'chirish", "Videoni ZIP arxivga joylash"],
          correct: 0,
          explanation: "H.264 kodeki va VBR sifatni saqlagan holda fayl hajmini kamaytiradi."
        },
        {
          id: "audio-fade",
          question: "Rolik oxirida audio asta-sekin pasayishi uchun nima qilinadi?",
          options: ["Kalit kadrlar qo'yib, ovoz balandligini pasaytirish", "Linza effektini qo'llash", "Yo'lni teskari aylantirish"],
          correct: 0,
          explanation: "Audio avtomatlashtirish orqali kadrlar bo'yicha tovushni bosqichma-bosqich kamaytirish mumkin."
        },
        {
          id: "slow-motion",
          question: "Tezlikni kamaytirganda kadrlarning silliq harakatini qanday ta'minlash mumkin?",
          options: ["Kadr yorug'ligini oshirish", "Optical Flow yoki Frame Blending rejimlarini qo'llash", "Audio formatini o'zgartirish"],
          correct: 1,
          explanation: "Optical Flow va Frame Blending qo'shimcha kadrlarni hisoblab, harakatni silliqlashtiradi."
        },
        {
          id: "audio-format",
          question: "Sifatni saqlagan holda audio saqlash uchun qaysi format tanlanadi?",
          options: ["WAV", "MP3 128 kbps", "OGG 96 kbps"],
          correct: 0,
          explanation: "WAV siqilmagan format bo'lib, keyingi qayta ishlash uchun maqbul."
        },
        {
          id: "media-backup",
          question: "Loyiha media fayllarini ishonchli zaxiralashning eng yaxshi usuli qaysi?",
          options: ["Ikki mustaqil qurilmada va bulutda nusxa saqlash", "Importdan keyin manbalarni o'chirish", "Bitta USB fleshkada saqlash"],
          correct: 0,
          explanation: "3-2-1 strategiyasi turli tashuvchilarda bir nechta nusxalarni saqlashni tavsiya etadi."
        }
      ],
      submitLabel: "Javoblarni tekshirish",
      resetLabel: "Qayta boshlash",
      scoreLabel: (score, total) => `To'g'ri javoblar: ${score}/${total}`,
      successMessage: "Barakalla! Siz audio va video materiallarini professional tarzda qayta ishlay olasiz.",
      encouragement: "Effektlar, LUT va mikslash bilan tajriba qilib, ovoz va tasvir sifatini yanada yaxshilang.",
      resultsTitle: "Natijangiz"
    },
    {
      id: "safe-internet",
      title: "Interaktiv topshiriq: raqamli gigiyena va internet xavfsizligi",
      description:
        "Murakkab parollar, 2FA, zaxira nusxalar va sog'lom onlayn muhit bo'yicha amaliy bilimlaringizni tekshiring.",
      tasks: [
        {
          id: "password-length",
          question: "Qaysi turdagi parol bexavotir hisoblanadi?",
          options: ["Kamida 12 belgidan iborat, raqam va maxsus belgilar bilan", "To'rt xonali PIN", "Uy hayvoningiz nomi"],
          correct: 0,
          explanation: "Uzun va murakkab parollarni bruteforce orqali topish juda qiyin."
        },
        {
          id: "two-factor",
          question: "Hisobni qo'shimcha himoyalash uchun qaysi chorani ko'rish kerak?",
          options: ["Barcha biriktirilgan fayllarni ochish", "Ikki bosqichli autentifikatsiyani yoqish", "Barcha servislar uchun bitta paroldan foydalanish"],
          correct: 1,
          explanation: "2FA ikkinchi omilni talab qiladi va hisob buzilish xavfini kamaytiradi."
        },
        {
          id: "phishing",
          question: "Fishing xatlarining asosiy belgilaridan biri nima?",
          options: ["Imlo xatolari va shoshilinch talablarga ega shubhali havola", "Matnda emoji yo'qligi", "PDF formati"],
          correct: 0,
          explanation: "Fisherlar tezkor javobni talab qilib, foydalanuvchini qalbaki sahifalarga yo'naltiradi."
        },
        {
          id: "updates",
          question: "Nega operatsion tizim va ilovalarni muntazam yangilash zarur?",
          options: ["Ular zaifliklarni yopadi va barqarorlikni oshiradi", "Ular foydalanuvchi fayllarini o'chiradi", "Ular internetni sekinlashtiradi"],
          correct: 0,
          explanation: "Yangilanishlar xavfsizlik yamoqlari va moslikni yaxshilash uchun chiqariladi."
        },
        {
          id: "public-wifi",
          question: "Ommaviy Wi-Fi tarmoqlaridan xavfsiz foydalanish uchun nima tavsiya etiladi?",
          options: ["VPN dan foydalanish va maxfiy ma'lumotlarni kiritmaslik", "Antivirusni o'chirish", "Bank saytlariga tekshirmasdan kirish"],
          correct: 0,
          explanation: "VPN trafikni shifrlaydi va ma'lumotlarning qo'lga tushishini qiyinlashtiradi."
        },
        {
          id: "privacy-settings",
          question: "Ijtimoiy tarmoqlarda profil ko'rinishini qayerdan boshqarish mumkin?",
          options: ["Hisobning maxfiylik va xavfsizlik bo'limida", "Yuklab olingan fayllar papkasida", "Savatchada"],
          correct: 0,
          explanation: "Maxfiylik sozlamalari kim ma'lumotlarni ko'rishi mumkinligini aniqlaydi."
        },
        {
          id: "digital-wellbeing",
          question: "Raqamli salomatlikni saqlash uchun nimalar yordam beradi?",
          options: ["Muntazam tanaffuslar va ekran vaqti limitlarini sozlash", "Charchash belgilari e'tiborga olinmasligi", "Kecha-kunduz ishlash"],
          correct: 0,
          explanation: "Tanaffuslar, jismoniy mashqlar va limitlar ruhiy holatni barqarorlashtiradi."
        },
        {
          id: "data-backup",
          question: "Muhim hujjatlarni yo'qotishdan qanday himoya qilish mumkin?",
          options: ["Tashqi disk va bulutga zaxira nusxa yaratish", "Faqat ish stolida saqlash", "O'zingizga parollarni yuborish"],
          correct: 0,
          explanation: "Bir nechta nusxa yaratish favqulodda vaziyatlarda ma'lumotlarni tiklashga imkon beradi."
        },
        {
          id: "downloads",
          question: "Dasturlarni yuklab olayotganda zararli fayllardan qanday himoyalanish mumkin?",
          options: ["Faqat rasmiy saytlardan yuklab olish va raqamli imzoni tekshirish", "Brandmauerlarni o'chirish", "Tasodifiy .exe fayllarni ishga tushirish"],
          correct: 0,
          explanation: "Rasmiy manbalar va imzo tekshiruvlari modifikatsiyalangan fayllarni oldini oladi."
        },
        {
          id: "online-harassment",
          question: "Onlayn muhitdagi tajovuzkor xulqga qanday javob berish kerak?",
          options: ["Buzg'unchini bloklash va moderatorlarga xabar berish", "Agressiya bilan javob berish", "Shaxsiy ma'lumotlarni e'lon qilish"],
          correct: 0,
          explanation: "Bloklash va moderatorlarga murojaat qilish xavfsizlikni ta'minlaydi va vaziyatni hujjatlashtiradi."
        }
      ],
      submitLabel: "Javoblarni tekshirish",
      resetLabel: "Qayta boshlash",
      scoreLabel: (score, total) => `To'g'ri javoblar: ${score}/${total}`,
      successMessage: "Ajoyib! Siz raqamli xavfsizlik bo'yicha barqaror odatlarga egasiz.",
      encouragement: "Kiberxavfsizlik yangiliklarini kuzatib boring va qoidalar bilan hamkasblaringizni ham tanishtiring.",
      resultsTitle: "Natijangiz"
    },
    {
      id: "google-suite",
      title: "Interaktiv topshiriq: Google Workspace va classroomscreen",
      description:
        "Google Docs, Sheets, Slides, Forms va Classroom bilan hamkorlikni, shuningdek classroomscreen.com yordamida darsni boshqarishni sinab ko'ring.",
      tasks: [
        {
          id: "docs-comment",
          question: "Google Docs hujjatida ajratilgan matnga qanday izoh qo'shasiz?",
          options: ["Ctrl+Alt+M tugmalarini bosish yoki izoh ikonchasini tanlash", "F5 tugmasini bosish", "Hujjatni PDFga eksport qilish"],
          correct: 0,
          explanation: "Ctrl+Alt+M kombinatsiyasi izoh panelini ochib, mulohaza qoldirishga imkon beradi."
        },
        {
          id: "drive-sharing",
          question: "Google Docs fayliga hamkorlik huquqlarini qanday sozlash mumkin?",
          options: ["Manzil satridan havolani nusxalash", "Share/‘Ulashish’ tugmasidagi ro'llarni tanlash", "Faylni DOCX shaklida email orqali yuborish"],
          correct: 1,
          explanation: "Share oynasi orqali o'quvchi, izohchi yoki muharrir huquqlari belgilanadi."
        },
        {
          id: "sheets-sumif",
          question: "Google Sheetsda shart bo'yicha qiymatlarni yig'ish uchun qaysi funksiya qo'llaniladi?",
          options: ["SUMIF", "VLOOKUP", "COUNT"],
          correct: 0,
          explanation: "SUMIF kriteriyga mos keladigan kataklardagi qiymatlarni yig'adi."
        },
        {
          id: "forms-quiz",
          question: "Google Formani avtomatik baholanuvchi testga qanday aylantirasiz?",
          options: ["Settings bo'limida ‘Quiz’ rejimini yoqish", "Natijalarni qo'lda jadvalga kiritish", "Word hujjatini import qilish"],
          correct: 0,
          explanation: "Quiz rejimi ballarni va to'g'ri javoblarni belgilashga imkon beradi."
        },
        {
          id: "classroom-assignment",
          question: "Google Classroomda yangi topshiriqni qayerdan yaratasiz?",
          options: ["Classwork → Create → Assignment menyusi orqali", "Stream bo'limida post yozish", "Faylga izoh qo'shish"],
          correct: 0,
          explanation: "Classwork bo'limi topshiriq, test, material va boshqa faoliyatlarni yaratishga mo'ljallangan."
        },
        {
          id: "slides-link",
          question: "Google Slidesda ichki navigatsiyani qanday qurish mumkin?",
          options: ["Elementni tanlab, Insert → Link orqali kerakli slaydni ko'rsatish", "Prezentatsiyani JPG ga eksport qilish", "Shriftni o'zgartirish"],
          correct: 0,
          explanation: "Linklar yordamida slayd ichida shartli marshrutlar va interaktiv menyular yaratiladi."
        },
        {
          id: "sheets-protect",
          question: "Google Sheetsda ma'lum diapazonni tahrir qilishni qanday cheklaysiz?",
          options: ["Data → Protect ranges menyusi orqali", "Edit → Undo buyrug'i bilan", "File → Download orqali"],
          correct: 0,
          explanation: "Protect ranges funksiyasi faqat tanlangan foydalanuvchilarga tahrirlash huquqini beradi."
        },
        {
          id: "classroomscreen",
          question: "Classroomscreen xizmatida vaqtni boshqarishga qaysi vidjet yordam beradi?",
          options: ["Fon rasmini almashtirish", "Timer yoki Countdown vidjeti", "Piktogrammalar galereyasi"],
          correct: 1,
          explanation: "Timer/Countdown darsni vaqt bo'yicha boshqarishga va talabalar e'tiborini jamlashga yordam beradi."
        },
        {
          id: "classroom-guardians",
          question: "Google Classroomda ota-onalarni kursga qanday taklif qilsa bo'ladi?",
          options: ["People bo'limida Guardian email manzilini qo'shish", "Stream bo'limida yangi mavzu yaratish", "Google Sitesga havola joylash"],
          correct: 0,
          explanation: "People bo'limi har bir o'quvchi uchun ota-ona kontaktini ko'rsatishga imkon beradi."
        },
        {
          id: "forms-responses",
          question: "Google Formadan kelgan javoblarni avtomatik ravishda jadvalda qanday saqlash mumkin?",
          options: ["Responses bo'limida ‘Create spreadsheet’ ni tanlash", "Natijalarni qo'lda nusxalash", "Formani PowerPointga eksport qilish"],
          correct: 0,
          explanation: "Yaratilgan jadval yangi javoblar kelganda avtomatik yangilanadi."
        }
      ],
      submitLabel: "Javoblarni tekshirish",
      resetLabel: "Qayta boshlash",
      scoreLabel: (score, total) => `To'g'ri javoblar: ${score}/${total}`,
      successMessage: "Zo'r! Siz Google ekotizimida jamoaviy ishlashni yaxshi o'zlashtirgansiz.",
      encouragement: "Formalar, jadval va interaktiv ekranlarni uyg'unlashtirib, to'liq masofaviy kurs yarating.",
      resultsTitle: "Natijangiz"
    },
    {
      id: "hemis-system",
      title: "Interaktiv topshiriq: HEMIS — o'quv ma'lumotlarini boshqarish",
      description:
        "HEMIS axborot tizimining asosiy jarayonlarini sinab ko'ring: foydalanuvchi rollari, o'quv rejalari, identifikatorlar va tahliliy hisobotlar.",
      tasks: [
        {
          id: "hemis-roles",
          question: "HEMIS tizimida odatda qaysi asosiy rollar ajratiladi?",
          options: ["Administrator, o'qituvchi, talaba", "Dizayner, marketolog, kopirayter", "Fotograf, videograf, muharrir"],
          correct: 0,
          explanation: "Rollarga qarab tizimdagi huquqlar va ko'rinish cheklanadi."
        },
        {
          id: "hemis-id",
          question: "HEMISdagi shaxsiy identifikator nimani anglatadi?",
          options: ["Bazadagi noyob foydalanuvchi kodi", "Wi-Fi paroli", "Auditoriya raqami"],
          correct: 0,
          explanation: "Identifikator foydalanuvchini o'quv ma'lumotlari va hisobotlar bilan bog'laydi."
        },
        {
          id: "hemis-timetable",
          question: "HEMISda dars jadvali qaysi ma'lumotlarga asoslanadi?",
          options: ["O'quv reja, o'qituvchi yuklamasi va auditoriya bandligi", "Faqat auditoriya suratlari", "Tasodifiy sonlar"],
          correct: 0,
          explanation: "Tizim resurslar va o'quv rejalarni moslashtirib, jadval tuzadi."
        },
        {
          id: "hemis-gradebook",
          question: "O'qituvchi HEMISda baholarni qayerda kiritadi?",
          options: ["Elektron jurnal (gradebook) orqali", "Qog'oz vedomostlarni topshirish orqali", "Telefon orqali xabar berish"],
          correct: 0,
          explanation: "Elektron jurnal baholar, davomat va izohlarni bir joyda saqlaydi."
        },
        {
          id: "hemis-security",
          question: "HEMISda ma'lumotlarning maxfiyligi qanday ta'minlanadi?",
          options: ["Rollarni ajratish va harakatlarni jurnal qilish orqali", "Ma'lumotlarni ochiq joylashtirish orqali", "Umumiy parollardan foydalanish"],
          correct: 0,
          explanation: "Ruxsatlar va audit yozuvlari shaxsiy ma'lumotlarni himoya qiladi."
        },
        {
          id: "hemis-report",
          question: "Fakultet rahbariyati uchun HEMISdan qaysi hisobotlarni olish mumkin?",
          options: ["O'zlashtirish, davomat, o'qituvchi yuklamasi", "Talabalar oshxonasi menyusi", "Safar xarajatlari"],
          correct: 0,
          explanation: "HEMIS o'quv jarayonining asosiy ko'rsatkichlari bo'yicha analitik hisobotlar beradi."
        },
        {
          id: "hemis-enrollment",
          question: "Talabalar HEMISda fanlarga qanday biriktiriladi?",
          options: ["O'quv reja va guruhlarga biriktirish orqali", "Og'zaki xabar berish orqali", "Ijtimoiy tarmoqlarda post joylash orqali"],
          correct: 0,
          explanation: "Guruhlar va rejalarning avtomatik mosligi talabalarni kerakli kurslarga qo'shadi."
        },
        {
          id: "hemis-integration",
          question: "HEMISni LMS va buxgalteriya tizimlari bilan integratsiya qilishdan maqsad nima?",
          options: ["O'zlashtirish, jadval va to'lov ma'lumotlari almashinuvi", "Fayl hajmini oshirish", "Spam tarqatish"],
          correct: 0,
          explanation: "Integratsiya universitetning yagona axborot makonini yaratadi."
        },
        {
          id: "hemis-updates",
          question: "HEMIS modullari yangilanganda nimalar bajarilishi kerak?",
          options: ["O'zgarishlarni sinovdan o'tkazish va foydalanuvchilarni xabardor qilish", "Barcha ma'lumotlarni o'chirish", "Universitet logotipini almashtirish"],
          correct: 0,
          explanation: "Sinov va kommunikatsiya xatolarning oldini olib, foydalanuvchilarni yangi funksionallikka tayyorlaydi."
        },
        {
          id: "hemis-support",
          question: "HEMISda xatolik yuz bersa, xodim qayerga murojaat qiladi?",
          options: ["Texnik qo'llab-quvvatlash xizmati yoki mas'ul administratorga", "Tasodifiy Telegram chatiga", "Talabalar ijtimoiy tarmoqlariga"],
          correct: 0,
          explanation: "Qo'llab-quvvatlash xizmati murojaatlarni ro'yxatga olib, muammolarni tezda bartaraf etadi."
        }
      ],
      submitLabel: "Javoblarni tekshirish",
      resetLabel: "Qayta boshlash",
      scoreLabel: (score, total) => `To'g'ri javoblar: ${score}/${total}`,
      successMessage: "Ajoyib! Siz HEMIS tizimidagi asosiy jarayonlarni yaxshi bilasiz.",
      encouragement: "HEMISning boshqa xizmatlar bilan integratsiyasi va yangi modullarini o'rganishda davom eting.",
      resultsTitle: "Natijangiz"
    },
    {
      id: "smart-learning",
      title: "Interaktiv topshiriq: smart darsliklar, Zoom va vebinarlar",
      description:
        "Smart darsliklar, Zoom va vebinar platformalaridan foydalanib, onlayn ta'limni tashkil etish ko'nikmalarini mustahkamlash.",
      tasks: [
        {
          id: "smartbook-features",
          question: "Smart darsliklarning qaysi xususiyati talabalar faolligini oshiradi?",
          options: ["Interaktiv elementlar: testlar, video va havolalar", "Faqat statik matn", "Navigatsiyasiz sahifalar"],
          correct: 0,
          explanation: "Interaktiv bloklar darhol fikr bildiradi va moslashuvchan o'qishni qo'llab-quvvatlaydi."
        },
        {
          id: "zoom-waiting-room",
          question: "Zoom'da ishtirokchilar kirishini nazorat qilish uchun qaysi funksiya ishlatiladi?",
          options: ["Waiting Room (Zal kutish) funksiyasi", "Virtual fonlar", "Reaksiyalar"],
          correct: 0,
          explanation: "Waiting Room orqali faqat tasdiqlangan ishtirokchilarni darsga qo'yish mumkin."
        },
        {
          id: "zoom-recording",
          question: "Zoom darsini yozib olayotganda nimalarga e'tibor berish zarur?",
          options: ["Ishtirokchilardan rozilik olib, fayl saqlanadigan joyni tanlash", "O'qituvchi mikrofonini o'chirish", "Video sifatini 144p ga tushirish"],
          correct: 0,
          explanation: "Rozilik va saqlash manzilini tanlash maxfiylik siyosatiga mos keladi."
        },
        {
          id: "webinar-engagement",
          question: "Vebinarda ishtirokchilarni faol jalb qilish uchun nima qilish kerak?",
          options: ["So'rovlar, chat va savol-javoblardan foydalanish", "Faqat matnni monoton o'qish", "Savollarni butunlay taqiqlash"],
          correct: 0,
          explanation: "Interaktiv elementlar diqqatni ushlab turadi va qayta aloqa beradi."
        },
        {
          id: "zoom-breakout",
          question: "Breakout Rooms funksiyasi qanday vazifani bajaradi?",
          options: ["Ishtirokchilarni kichik guruhlarga bo'lish", "Virtual fonni o'zgartirish", "Ekranni yozib olish"],
          correct: 0,
          explanation: "Breakout Rooms jamoaviy muhokama va amaliy ishlarga qulay sharoit yaratadi."
        },
        {
          id: "smartbook-analytics",
          question: "Smart darsliklarda talabalarning natijalarini qanday kuzatish mumkin?",
          options: ["Sarflangan vaqt, urinishlar va natijalarni ko'rsatadigan analitika orqali", "Ijtimoiy tarmoqlardagi fikrlar orqali", "Qog'oz jurnal orqali"],
          correct: 0,
          explanation: "Analitika o'qituvchiga har bir talabaning rivojlanishini ko'rishga yordam beradi."
        },
        {
          id: "zoom-security",
          question: "Zoom konferensiyasini xavfsiz qilish uchun qaysi choralar ko'riladi?",
          options: ["Parol o'rnatish va ekran almashishni cheklash", "Havolani ochiq tarmoqlarda joylash", "Waiting Room funksiyasini o'chirish"],
          correct: 0,
          explanation: "Parol va ekran almashish huquqlarini boshqarish nojo'ya ulanishlarning oldini oladi."
        },
        {
          id: "webinar-plan",
          question: "Vebinar ssenariysiga nimalarni kiritish tavsiya etiladi?",
          options: ["Kirish, asosiy qism, amaliy blok va fikr-mulohaza rejasini", "Faqat havolalar ro'yxatini", "To'liq improvizatsiyani"],
          correct: 0,
          explanation: "Strukturali ssenariy vaqtni boshqarish va asosiy g'oyalarni taqdim etishga yordam beradi."
        },
        {
          id: "zoom-polls",
          question: "Zoom darsida tezkor fikr-mulohaza yig'ish uchun qaysi vosita qo'llaniladi?",
          options: ["Polls/Oproslar funksiyasi", "Virtual fonni o'zgartirish", "Reaksiyalar chatini ishlatish"],
          correct: 0,
          explanation: "Polls vositasi natijalarni darhol ko'rsatib, talabalar fikrini yig'adi."
        },
        {
          id: "smart-learning-hybrid",
          question: "Gibrid (offline + online) darsni o'tkazishda nimaga e'tibor qaratish kerak?",
          options: ["Sifatli ovoz, birgalikdagi materiallar va qayta aloqa kanallarini ta'minlash", "Onlayn ishtirokchilarni e'tiborsiz qoldirish", "Faqat bosma materiallardan foydalanish"],
          correct: 0,
          explanation: "Ham onlayn, ham auditoriyadagi talabalar uchun bir xil imkoniyat yaratish muhim."
        }
      ],
      submitLabel: "Javoblarni tekshirish",
      resetLabel: "Qayta boshlash",
      scoreLabel: (score, total) => `To'g'ri javoblar: ${score}/${total}`,
      successMessage: "Barakalla! Siz onlayn darslar va vebinarlarni samarali tashkil eta olasiz.",
      encouragement: "Smart darsliklar, Zoom va interaktiv vositalarni uyg'unlashtirib, talabalar faolligini qo'llab-quvvatlang.",
      resultsTitle: "Natijangiz"
    }
  ]
};

const sectionBaseContent: Record<SectionSlug, Record<Language, Omit<SectionPageContent, "interactive">>> = {
  lecture: {
    ru: {
      title: "Лекция",
      lead: "Методологические основы",
      description:
        "Лекции помогают понять историю цифровой филологии, познакомиться с ключевыми терминами и увидеть, как цифровые методы применяются на практике.",
      items: [
        "История компьютерной лингвистики и корпусных исследований",
        "Инструменты анализа текста: частотный анализ, конкордансы, тематическое моделирование",
        "Этические аспекты работы с цифровыми гуманитарными данными"
      ],
      backLabel: "← На главную"
    },
    uz: {
      title: "Ma'ruza",
      lead: "Metodologik asoslar",
      description:
        "Ma'ruzalar raqamli filologiya tarixini tushunishga, asosiy atamalar bilan tanishishga va amaliyotda qanday qo'llanilishini ko'rishga yordam beradi.",
      items: [
        "Kompyuter lingvistikasining tarixi va korpus tadqiqotlari",
        "Matn tahlili vositalari: chastota tahlili, konkordanslar, mavzuli modellashtirish",
        "Raqamli gumanitar ma'lumotlar bilan ishlashning axloqiy jihatlari"
      ],
      backLabel: "← Bosh sahifaga"
    }
  },
  practice: {
    ru: {
      title: "Практика",
      lead: "Упражнения и лабораторные задания",
      description:
        "Практические занятия формируют навыки работы с текстовыми корпусами, визуализацией данных и настройкой цифрового рабочего места.",
      items: [
        "Создание мини-корпуса и аннотирование текста",
        "Python для филологов: обработка текста с помощью spaCy и NLTK",
        "Визуализация результатов исследования в Tableau и Observable",
        "Настройка операционных систем и офисных приложений для учебных проектов",
        "Проектирование интерактивных учебных курсов в Hot Potatoes",
        "Разработка языковых упражнений в iSpring QuizMaker и Wordwall.net",
        "Интерактивные задания в iSpring, MyTest и LearningApps",
        "Создание анимаций и 3D-моделей в Adobe Photoshop и Blender",
        "Монтаж и улучшение аудио- и видеоматериалов",
        "Цифровая гигиена и безопасное поведение в интернете",
        "Google Docs, Sheets, Slides, Forms и Classroom: совместная работа и интерактивные доски classroomscreen.com",
        "Информационная система HEMIS: роли пользователей и управление учебными данными",
        "Смарт-учебники, Zoom и вебинары в образовательном процессе"
      ],
      backLabel: "← На главную"
    },
    uz: {
      title: "Amaliyot",
      lead: "Mashqlar va laboratoriya topshiriqlari",
      description:
        "Amaliy mashg'ulotlar matn korpuslari bilan ishlash, ma'lumotlarni vizuallashtirish va raqamli ish joyini sozlash ko'nikmalarini shakllantiradi.",
      items: [
        "Mini-korpus yaratish va matnni annotatsiya qilish",
        "Filologlar uchun Python: spaCy va NLTK yordamida matnni qayta ishlash",
        "Tablue va Observable'da tadqiqot natijalarini vizuallashtirish",
        "O'quv loyihalari uchun operatsion tizim va ofis dasturlarini sozlash",
        "Hot Potatoes dasturida interaktiv o'quv kurslarini yaratish",
        "iSpring QuizMaker va Wordwall.net yordamida til mashqlarini yaratish",
        "iSpring, MyTest va LearningApps bilan interaktiv topshiriqlar",
        "Adobe Photoshop va Blenderda animatsiya hamda 3D modellar yaratish",
        "Audio va video materiallarini montaj qilish va sifatini yaxshilash",
        "Internetdan xavfsiz foydalanish va raqamli gigiyena",
        "Google Docs, Sheets, Slides, Forms, Classroom va classroomscreen.com bilan ishlash",
        "HEMIS axborot tizimi: foydalanuvchi rollari va o'quv ma'lumotlarini boshqarish",
        "Smart darsliklar, Zoom va vebinarlar yordamida ta'limni tashkil etish"
      ],
      backLabel: "← Bosh sahifaga"
    }
  },
  presentations: {
    ru: {
      title: "Презентации",
      lead: "Слайды и шаблоны для занятий",
      description:
        "Презентации помогают быстро структурировать материал и дополняют устное выступление на семинарах и лекциях.",
      items: [
        "Введение в цифровую филологию",
        "Работа с корпусами: пошаговый чек-лист",
        "Примеры проектов студентов и исследовательские кейсы"
      ],
      backLabel: "← На главную"
    },
    uz: {
      title: "Taqdimotlar",
      lead: "Darslar uchun slaydlar va shablonlar",
      description:
        "Taqdimotlar materialni tezda tuzishga yordam beradi va seminar hamda ma'ruzalarda og'zaki chiqishni to'ldiradi.",
      items: [
        "Raqamli filologiyaga kirish",
        "Korpuslar bilan ishlash: bosqichma-bosqich chek-list",
        "Talabalar loyihalari va tadqiqot misollari"
      ],
      backLabel: "← Bosh sahifaga"
    }
  },
  syllabus: {
    ru: {
      title: "Силлабус",
      lead: "Структура и регламент курса",
      description:
        "Силлабус содержит цели, промежуточные контрольные точки и критерии итогового проекта, помогая студентам планировать обучение.",
      items: [
        "Цели обучения и ожидаемые компетенции",
        "Модульная структура и междисциплинарные связи",
        "Система оценивания и критерии итогового проекта"
      ],
      backLabel: "← На главную"
    },
    uz: {
      title: "Sillabus",
      lead: "Kurs tuzilmasi va reglamenti",
      description:
        "Sillabus maqsadlar, oraliq nazorat nuqtalari va yakuniy loyiha mezonlarini o'z ichiga oladi, talabalar o'qishini rejalashtirishga yordam beradi.",
      items: [
        "O'qish maqsadlari va kutilayotgan kompetensiyalar",
        "Modulli tuzilma va fanlararo bog'lanishlar",
        "Baholash tizimi va yakuniy loyiha mezonlari"
      ],
      backLabel: "← Bosh sahifaga"
    }
  },
  videos: {
    ru: {
      title: "Видео",
      lead: "Подборка видеолекций и интервью",
      description:
        "Видео помогают увидеть подходы и техники в действии, а также услышать комментарии практиков цифровой гуманитаристики.",
      items: [
        "Лингвистика данных: интервью с практиком",
        "Разбор кейса: цифровая обработка рукописей",
        "Мастер-класс по визуализации филологических данных"
      ],
      backLabel: "← На главную"
    },
    uz: {
      title: "Video",
      lead: "Video ma'ruzalar va intervyular to'plami",
      description:
        "Videolar yondashuv va texnikalarni amalda ko'rishga, shuningdek raqamli gumanitar fanlar mutaxassislarining fikrlarini tinglashga yordam beradi.",
      items: [
        "Ma'lumotlar lingvistikasining amaliyoti: mutaxassis bilan intervyu",
        "Keys tahlili: qo'lyozmalarni raqamli qayta ishlash",
        "Filologik ma'lumotlarni vizuallashtirish bo'yicha ustozlik darsi"
      ],
      backLabel: "← Bosh sahifaga"
    }
  },
  authors: {
    ru: {
      title: "Авторы",
      lead: "Команда курса и приглашённые эксперты",
      description:
        "Команда объединяет исследователей, преподавателей и специалистов по цифровым гуманитарным практикам, чтобы поддерживать курс актуальным.",
      items: [
        "Куратор программы — д-р филол. наук Анна Рубцова",
        "Эксперт по визуализации данных — канд. ист. наук Павел Лазарев",
        "Партнёрские организации и международные лаборатории"
      ],
      backLabel: "← На главную"
    },
    uz: {
      title: "Mualliflar",
      lead: "Kurs jamoasi va taklif etilgan mutaxassislar",
      description:
        "Jamoa kursni dolzarb saqlash uchun tadqiqotchilar, o'qituvchilar va raqamli gumanitar amaliyotchilarni birlashtiradi.",
      items: [
        "Dastur kuratori — filol. fanlari doktori Anna Rubtsova",
        "Ma'lumotlarni vizuallashtirish bo'yicha ekspert — tarix fanlari nomzodi Pavel Lazaryev",
        "Hamkor tashkilotlar va xalqaro laboratoriyalar"
      ],
      backLabel: "← Bosh sahifaga"
    }
  }
};

export const sectionContent: Record<SectionSlug, Record<Language, SectionPageContent>> = Object.fromEntries(
  Object.entries(sectionBaseContent).map(([slug, value]) => {
    const typedSlug = slug as SectionSlug;
    return [
      typedSlug,
      {
        ru: {
          ...value.ru,
          interactiveModules: typedSlug === "practice" ? practiceInteractiveModules.ru : undefined
        },
        uz: {
          ...value.uz,
          interactiveModules: typedSlug === "practice" ? practiceInteractiveModules.uz : undefined
        }
      }
    ];
  })
) as Record<SectionSlug, Record<Language, SectionPageContent>>;

export const languages: { code: Language; label: string }[] = [
  { code: "ru", label: "Русский" },
  { code: "uz", label: "O'zbekcha" }
];
