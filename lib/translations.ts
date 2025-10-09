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
        "Настройка операционных систем и офисных приложений для учебных проектов"
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
        "O'quv loyihalari uchun operatsion tizim va ofis dasturlarini sozlash"
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
