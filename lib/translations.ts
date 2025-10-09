export type Language = "ru" | "uz";

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

type SectionPageContent = {
  title: string;
  lead: string;
  description: string;
  items: string[];
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
    }
  ]
};

const sectionBaseContent: Record<SectionSlug, Record<Language, Omit<SectionPageContent, "interactive">>> = {
  lecture: {
    ru: {
      title: "Лекция",
      lead: "Методологические основы цифровой гуманитаристики",
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
      lead: "Raqamli gumanitar fanlarning metodologik asoslari",
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
        "Разработка языковых упражнений в iSpring QuizMaker и Wordwall.net"
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
        "iSpring QuizMaker va Wordwall.net yordamida til mashqlarini yaratish"
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
