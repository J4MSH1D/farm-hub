const links = [
  {
    name: "Товары",
    path: "/products",
    // soon: true,
  },
  {
    name: "Услуги",
    path: "/services",
    // soon: true,
  },
  {
    name: "Господдержка",
    path: "/government-supply",
    // soon: true,
    children: [
      {
        name: "Льготные кредиты и субсидии",
        path: "/government-supply",
        children: [
          {
            name: "Подобрать кредит по параметрам",
            path: "/loans-from-parametres",
            // soon: true,
          },
          {
            name: "Льготное кредитование сельхозпроизводителей",
            path: "/loans-for-farm-servicers",
            // soon: true,
          },
          {
            name: "Кредиты для АПК",
            path: "/apk-loans",
            // soon: true,
          },
        ],
      },
      {
        name: "Услуги банка",
        children: [
          {
            name: "Оборотный кредит",
            path: "/turnover-loan",
            soon: true,
          },
          {
            name: "Инвестиционный кредит",
            path: "/investment-loan",
            soon: true,
          },
          {
            name: "Кредиты для малого бизнеса",
            path: "/credit-for-small-business",
            soon: true,
          },
          {
            name: "Поддержка развития молодёжного и женского предпринимательства ",
            path: "/support-for-young-and-women-enterpreneurs",
            soon: true,
          },
        ],
      },
      {
        name: "Услуги банка",
        children: [
          {
            name: "-Открытие расчетного счёта",
            path: "/overdrafts",
            soon: true,
          },
          {
            name: "-Открытие банковской карты",
            path: "/opening-a-bank-card",
            soon: true,
          },
          {
            name: "-Регистрация бизнеса",
            path: "/registration-of-businesses",
            soon: true,
          },
        ],
      },
      {
        name: "Финансирование поставщиков",
        name: "Финансирование поставщиков",
        children: [
          {
            name: "-Факторинг",
            path: "/factoring",
            soon: true,
          },
        ],
      },
      {
        name: "Лизинг",
        path: "/leasing",
        children: [
          {
            name: "-Лизинг сельхозтехники",
            path: "/leasing",
            soon: false,
          },
          {
            name: "-Лизинг оборудования",
            path: "/leasing",
            soon: false,
          },
          {
            name: "-Лизинг Спец/техники",
            path: "/leasing",
            soon: false,
          },
        ],
      },
    ],
  },
  {
    name: "Работа",
    path: "/job",
    soon: true,
    children: [
      {
        name: "Работодателям",
        path: "/job",
        // soon: true,
      },
      {
        name: "Соискателям",
        path: "/job/applicants",
        // soon: true,
      },
      {
        name: "Разместить вакансию",
        path: "/post-a-avacancy",
        // soon: true,
      },
      {
        name: "Разместить резюме",
        path: "/post-a-resume",
        // soon: true,
      },
    ],
  },
  {
    name: "Объявления",
    path: "/announcements",
    soon: false,
    children: [
      {
        name: "Объявления Местных производителей",
        path: "/place-an",
        // soon: true,
      },
      {
        name: "Объявления Экспортёров",
        path: "/about-service",
        // soon: true,
      },
      {
        name: "Объявления Импортёров",
        path: "/about-import",
        // soon: true,
      },
    ],
  },
  {
    name: "Агротехнологии",
    path: "/agrotechnology",
    soon: false,
    children: [
      {
        name: "Решение для теплиц на основе ИИ",
        path: "/agrotechnology",
        soon: false,
      },
      {
        name: "ТН ВЭД коды 2022",
        path: "/agrotechnology/business",
        soon: false,
      },
      {
        name: "Средства защиты растений",
        path: "",
        // soon: true,
      },
      {
        name: "Стимуляторы роста",
        path: "",
        // soon: true,
      },
      {
        name: "Биологические фунгициды",
        path: "",
        // soon: true,
      },
      {
        name: "Деструкторы пожнивных остатков",
        path: "",
        // soon: true,
      },
    ],
  },
  {
    name: "Медиа",
    path: "/media",
    soon: false,
    children: [
      {
        name: "Новости",
        path: "/media/news",
        soon: false,
      },
      {
        name: "Статьи",
        path: "/media/articles",
        soon: false,
      },
      {
        name: "Видео",
        path: "/media/videos",
        soon: false,
      },
    ],
  },
];

export default links;

/* ============ TEZKOR LINKLAR ============ */
export const quickLinks = [
  {
    icon: "edit-list300",
    label: "Закупки",
    method: "toggleRequest",
  },
  // {
  // 	icon: "chart-column300",
  // 	label: "Comparison",
  // 	path: "/",
  // },
  {
    icon: "heart300",
    label: "Избранное",
    path: "/",
  },
  // {
  // 	icon: "chat300",
  // 	label: "Chats",
  // 	path: "/",
  // },
  {
    icon: "basket300",
    label: "Корзина",
    path: "/",
  },
  // {
  // 	icon: "bio-leaves300",
  // 	label: "Ecosystem",
  // 	path: "/",
  // },
  // {
  // 	icon: "user300",
  // 	label: "Sign in",
  // 	path: "/auth/login",
  // },
  // {
  // 	icon: "user300",
  // 	label: "Profile",
  // 	path: "/profile/root",
  // },
];

/* ============ KATALOGLAR ============ */
export const catalogue = {
  products: [
    {
      id: Symbol(),
      categoryName: "Сельхозтехника",
      link: null,
      total: 20036,
      categories: [
        {
          title: "Тракторы",
          link: null,
          image: "mini-tractor.png",
        },
        {
          title: "Комбайны",
          link: null,
          image: "combine.png",
        },
        {
          title: "Минитракторы",
          link: null,
          image: "tractor.png",
        },
        {
          title: "Опрыскиватели",
          link: null,
          image: "sprayers.png",
        },
        {
          title: "Разбрасыватели удобрений",
          link: null,
          image: "spreaders.png",
        },
        {
          title: "Погрузчики",
          link: null,
          image: "loaders.png",
        },
        {
          title: "Прицепы/полуприцепы",
          link: null,
          image: "trailers.png",
        },
        {
          title: "Грузовые автомобили",
          link: null,
          image: "big-truck.png",
        },
        {
          title: "Техника для овощей",
          link: null,
          image: "v-truck.png",
        },
      ],
    },
    {
      id: Symbol(),
      categoryName: "Запчасти",
      link: null,
      icon: "tractor700",
      categories: [
        {
          title: "Запчасти для грузовых автомобилей",
          link: null,
          image: "spares-3.png",
        },
        {
          title: "Запчасти для трактора",
          link: null,
          image: "spares-2.png",
        },
        {
          title: "Запчасти для техники",
          link: null,
          image: "spares.png",
        },
        {
          title: "Запчасти для комбайна",
          link: null,
        },
        {
          title: "Запчасти для погрузчиков",
          link: null,
        },
      ],
    },
    {
      id: Symbol(),
      categoryName: "Мини-заводы",
      link: null,
      icon: "tractor700",
      categories: [
        {
          title: "Для птицефабрик",
          link: null,
        },
        {
          title: "Для овощеводства",
          link: null,
        },
        {
          title: "Для скотоводоства",
          link: null,
        },
        {
          title: "Для пчеловодства",
          link: null,
        },
        {
          title: "Для рыбоводства",
          link: null,
        },
      ],
    },
    {
      id: Symbol(),
      categoryName: "Оборудования",
      link: null,
      icon: "tractor700",
      categories: [
        {
          title: "Холодильное оборудование",
          link: null,
        },
        {
          title: "Оборудование для полива",
          link: null,
        },
        {
          title: "Линии для переработки фруктов / овощей",
          link: null,
        },
        {
          title: "Для животноводства",
          link: null,
        },
        {
          title: "Холодильное оборудование",
          link: null,
        },
        {
          title: "Конвейеры",
          link: null,
        },
        {
          title: "Сепараторы",
          link: null,
        },
        {
          title: "Генераторы",
          link: null,
        },
        {
          title: "Оборудование для удобрений",
          link: null,
        },
      ],
    },
    {
      id: Symbol(),
      categoryName: "Семена",
      link: null,
      icon: "tractor700",
      categories: [
        {
          title: "Семена овощей",
          link: null,
        },
        {
          title: "Семена масличных",
          link: null,
        },
        {
          title: "Семена бобовых",
          link: null,
        },
        {
          title: "Семена ягод",
          link: null,
        },
        {
          title: "Семена пряных трав",
          link: null,
        },
      ],
    },
    {
      id: Symbol(),
      categoryName: "Посадочные материалы",
      link: null,
      icon: "tractor700",
      categories: [
        {
          title: "Саженцы ягодных",
          link: null,
        },
        {
          title: "Саженцы цитрусовых",
          link: null,
        },
        {
          title: "Саженцы овощей",
          link: null,
        },
        {
          title: "Саженцы грибов",
          link: null,
        },
        {
          title: "Саженцы бахчевых",
          link: null,
        },
        {
          title: "Саженцы винограда",
          link: null,
        },
        {
          title: "Саженцы Фруктовых деревьев",
          link: null,
        },
      ],
    },
    {
      id: Symbol(),
      categoryName: "Средства защиты растений",
      link: null,
      icon: "tractor700",
      categories: [
        {
          title: "ПАВ",
          link: null,
        },
        {
          title: "Гербициды",
          link: null,
        },
        {
          title: "Инсектициды",
          link: null,
        },
        {
          title: "Родентициды",
          link: null,
        },
        {
          title: "Фунгициды",
          link: null,
        },
        {
          title: "Протравители семян",
          link: null,
        },
        {
          title: "Десиканты",
          link: null,
        },
        {
          title: "Инокулянты",
          link: null,
        },
        {
          title: "Регуляторы роста",
          link: null,
        },
        {
          title: "Препараты от вредителей",
          link: null,
        },
        {
          title: "Биопрепараты",
          link: null,
        },
        {
          title: "Биозащита",
          link: null,
        },
        {
          title: "Адъюванты",
          link: null,
        },
      ],
    },
    {
      id: Symbol(),
      categoryName: "Удобрения",
      link: null,
      icon: "tractor700",
      categories: [
        {
          title: "Минеральные удобрения",
          link: null,
        },
        {
          title: "Органические удобрения",
          link: null,
        },
        {
          title: "Бактериальные удобрения",
          link: null,
        },
        {
          title: "Биоудобрения",
          link: null,
        },
        {
          title: "Стимуляторы роста для растений",
          link: null,
        },
        {
          title: "Удобрения универсальные",
          link: null,
        },
        {
          title: "Регуляторы роста растений",
          link: null,
        },
        {
          title: "Торфа",
          link: null,
        },
        {
          title: "Грунт",
          link: null,
        },
      ],
    },
    {
      id: Symbol(),
      categoryName: "Агрохимия",
      link: null,
      icon: "tractor700",
      categories: [
        {
          title: "Средства дезинфекции",
          link: null,
        },
        {
          title: "Средства от насекомых",
          link: null,
        },
        {
          title: "Средства от грызунов",
          link: null,
        },
      ],
    },
    {
      id: Symbol(),
      categoryName: "Ветеренария",
      link: null,
      icon: "tractor700",
      categories: [
        {
          title: "Вакцины",
          link: null,
        },
        {
          title: "Витамины",
          link: null,
        },
        {
          title: "Иммуностимуляторы",
          link: null,
        },
        {
          title: "Репелленты",
          link: null,
        },
        {
          title: "Гормональные",
          link: null,
        },
        {
          title: "Противовоспалительные",
          link: null,
        },
        {
          title: "Пребиотики",
          link: null,
        },
      ],
    },
    {
      id: Symbol(),
      categoryName: "Сельскохозяйственная продукция",
      link: null,
      icon: "tractor700",
      categories: [
        {
          title: "Зерновые",
          link: null,
        },
        {
          title: "Бобовые",
          link: null,
        },
        {
          title: "Овощи",
          link: null,
        },
        {
          title: "Фрукты",
          link: null,
        },
        {
          title: "Травы и пряности",
          link: null,
        },
        {
          title: "Орехи и семена",
          link: null,
        },
        {
          title: "Бахчевые",
          link: null,
        },
        {
          title: "Ягоды",
          link: null,
        },
        {
          title: "Цитрусовые",
          link: null,
        },
        {
          title: "Экзотические",
          link: null,
        },
        {
          title: "Замороженные фрукты",
          link: null,
        },
        {
          title: "Замороженные овощи",
          link: null,
        },
        {
          title: "Сушеные овощи",
          link: null,
        },
        {
          title: "Сушеные фрукты",
          link: null,
        },
        {
          title: "Крупы",
          link: null,
        },
        {
          title: "Мёд",
          link: null,
        },
        {
          title: "Сублимированная продукция",
          link: null,
        },
        {
          title: "Рыба",
          link: null,
        },
      ],
    },
    {
      id: Symbol(),
      categoryName: "Упаковочные материалы",
      link: null,
      icon: "tractor700",
      categories: [
        {
          title: "Тара",
          link: null,
        },
        {
          title: "Ящики",
          link: null,
        },
        {
          title: "Контейнеры",
          link: null,
        },
        {
          title: "Цистерны",
          link: null,
        },
        {
          title: "Поддоны",
          link: null,
        },
        {
          title: "Корзины",
          link: null,
        },
        {
          title: "Упаковочный материал",
          link: null,
        },
        {
          title: "Упаковочное оборудование",
          link: null,
        },
      ],
    },
    {
      id: Symbol(),
      categoryName: "Теплицы и парники",
      link: null,
      icon: "tractor700",
      categories: [
        {
          title: "Парники",
          link: null,
        },
        {
          title: "Теплицы",
          link: null,
        },
        {
          title: "Оборудование для теплиц",
          link: null,
        },
        {
          title: "Сетки для теплиц",
          link: null,
        },
        {
          title: "Освещение для теплиц",
          link: null,
        },
        {
          title: "Система микроклимата теплиц",
          link: null,
        },
        {
          title: "Отопление теплиц",
          link: null,
        },
        {
          title: "Комплектующие для теплиц",
          link: null,
        },
        {
          title: "Промышленные теплицы",
          link: null,
        },
        {
          title: "Малогабаритные теплицы",
          link: null,
        },
      ],
    },
  ],
  services: [
    { id: Symbol(), categoryName: "Полевые работы", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Уборка урожая", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Услуги по подготовке семян", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Услуги по переработке", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Ремонт и сервисное обслуживание", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Аренда с/х и спецтехники", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Проектирование и строительство с/х объектов", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Складские услуги", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Услуги лабораторий", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Информационные услуги", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Бухгалтерские услуги", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Юридические услуги", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Образовательные услуги", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Услуги для животноводства", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Услуги логистики", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Вывоз мусора и утилизация отходов", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Санитарная обработка", link: null, icon: "tractor700" },
    { id: Symbol(), categoryName: "Услуги фасовки, упаковки, разлива", link: null, icon: "tractor700" },
  ],
};
