const links = [
  {
    name: "Товары",
    path: "/products",
    soon: false,
  },
  {
    name: "Услуги",
    path: "/services",
    soon: false,
  },
  {
    name: "Господдержка",
    path: "/government-supply",
    // Льготные кредиты и субсидии
    children: [
      {
        name: "Льготные кредиты и субсидии",
        path: "/government-supply",
        children: [
          {
            name: "Подобрать кредит по параметрам",
            path: "/government-supply",
            soon: false,
          },
          {
            name: "Льготное кредитование сельхозпроизводителей",
            path: "",
            soon: true,
          },
          {
            name: "Кредит на приобретение сельхозтехники",
            path: "",
            soon: true,
          },
          {
            name: "Льготное кредитование возобновляемых источников энергии",
            path: "",
            soon: true,
          },
          {
            name: "Субсидии",
            path: "",
            soon: true,
          },
        ],
      },
      // Кредиты для бизнеса
      {
        name: "Кредиты для бизнеса",
        path: "/credit-for-business",
        soon: true,
        children: [
          {
            name: "Оборотный кредит",
            path: "",
            soon: false,
          },
          {
            name: "Инвестиционный кредит",
            path: "",
            soon: true,
          },
          {
            name: "Кредиты для малого бизнеса",
            path: "",
            soon: true,
          },
          {
            name: "Поддержка развития молодёжного и женского предпринимательства",
            path: "",
            soon: true,
          },
        ],
      },
      // Услуги банка
      {
        name: "Услуги банка",
        path: "/bank-services",
        soon: true,
        children: [
          {
            name: "Открытие расчетного счёта",
            path: "",
            soon: false,
          },
          {
            name: "Открытие банковской карты",
            path: "",
            soon: true,
          },
          {
            name: "Регистрация бизнеса",
            path: "",
            soon: true,
          },
        ],
      },
      // Финансирование поставщиков
      {
        name: "Финансирование поставщиков",
        path: "/supplier-financing",
        soon: true,
        children: [
          {
            name: "Факторинг",
            path: "",
            soon: true,
          },
        ],
      },
      // Лизинг
      {
        name: "Лизинг",
        path: "/leasing",
        children: [
          {
            name: "Подобрать лизинг по параметрам",
            path: "/leasing",
            soon: false,
          },
          {
            name: "Лизинг сельхозтехники",
            path: "",
            soon: true,
          },
          {
            name: "Лизинг оборудования",
            path: "",
            soon: true,
          },
          {
            name: "Лизинг Спец/техники",
            path: "",
            soon: true,
          },
        ],
      },
      // Страхование
      {
        name: "Страхование",
        path: "/insurance",
        soon: true,
        children: [
          {
            name: "Услуги страхования",
            path: "",
            soon: true,
          },
        ],
      },
    ],
  },
  {
    name: "Работа",
    path: "/job",
    soon: false,
    children: [
      {
        name: "Работодателям",
        path: "/job",
        soon: false,
      },
      {
        name: "Соискателям",
        path: "/job/applicants",
        soon: true,
      },
      {
        name: "Разместить вакансию",
        path: "/post-a-avacancy",
        soon: true,
      },
      {
        name: "Разместить резюме",
        path: "/post-a-resume",
        soon: true,
      },
    ],
  },
  // {
  //   name: "Объявления",
  //   path: "/announcements",
  //   soon: false,
  //   children: [
  //     {
  //       name: "Объявления Местных производителей",
  //       path: "/place-an",
  // soon: true,
  //     },
  //     {
  //       name: "Объявления Экспортёров",
  //       path: "/about-service",
  // soon: true,
  //     },
  //     {
  //       name: "Объявления Импортёров",
  //       path: "/about-import",
  // soon: true,
  //     },
  //   ],
  // },
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
        soon: true,
      },
      {
        name: "Средства защиты растений",
        path: "",
        soon: true,
      },
      {
        name: "Стимуляторы роста",
        path: "",
        soon: true,
      },
      {
        name: "Биологические фунгициды",
        path: "",
        soon: true,
      },
      {
        name: "Деструкторы пожнивных остатков",
        path: "",
        soon: true,
      },
    ],
  },
  {
    name: "Медиа",
    path: "/media",
    soon: true,
    children: [
      {
        name: "Статьи",
        path: "/media/articles",
        soon: true,
        children: [
          {
            name: "Дехканское хозяйство",
            path: "/media/articles/dehkan",
            soon: true,
          },
          {
            name: "Государственная регистрация дехканского хозяйства",
            path: "/media/articles/dehkan-registration",
            soon: true,
          },
          {
            name: "Наследование приусадебного земельного участка",
            path: "/media/articles/inheritance",
            soon: true,
          },
          {
            name: "Трудовой стаж в дехканском хозяйстве",
            path: "/media/articles/work-experience",
            soon: true,
          },
        ],
      },
      {
        name: "Новости",
        path: "/media/news",
        soon: true,
        children: [
          {
            name: "Для развития дехканских хозяйств и приусадебного земледелия создадут отдельный совет",
            link: "https://www.gazeta.uz/ru/2025/01/31/lands/",
          },
          {
            name: "Выдвинуты новые инициативы по выращиванию продукции на приусадебных и дехканских землях",
            link: "https://president.uz/ru/lists/view/7845",
          },
          {
            name: "Выращивать сельхозпродукцию в Узбекистане будут у многоэтажек и на внутренних улицах махаллей",
            link: "https://www.gazeta.uz/ru/2025/01/04/agricultural-products/",
          },
        ],
      },
      {
        name: "Видео",
        path: "/media/videos",
        soon: true,
        children: [
          {
            name: "Проект по выращиванию лимонов",
            link: "https://youtu.be/HwNdO0gg9es",
          },
          {
            name: "Проект по выращиванию малины",
            link: "https://youtu.be/RLt-WcZLrsE",
          },
          {
            name: "Проект по выращиванию винограда",
            link: "https://youtu.be/HwNdO0gg9es",
            soon: true,
          },
          {
            name: "Проект по выращиванию мандаринов",
            link: "https://youtu.be/HwNdO0gg9es",
            soon: true,
          },
        ],
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
      icon: "tractor700",
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
    {
      id: Symbol(),
      name: "Услуги тракториста",
      img: "service-1.png",
    },
    {
      id: Symbol(),
      name: "Услуги механизатора",
      img: "service-2.png",
    },
    {
      id: Symbol(),
      name: "Услуги рабочих по уходу за животными",
      img: "service-3.png",
    },
    {
      id: Symbol(),
      name: "Услуги рабочих по сбору урожая",
      img: "service-4.png",
    },
    {
      id: Symbol(),
      name: "Услуги агронома",
      img: "service-5.png",
    },
    {
      id: Symbol(),
      name: "Услуги планирование посевов",
      img: "service-6.png",
    },
    {
      id: Symbol(),
      name: "Услуги внесения удобрений",
      img: "service-7.png",
    },
    {
      id: Symbol(),
      name: "Услуги по защите растений",
      img: "service-8.png",
    },
    {
      id: Symbol(),
      name: "Услуги специалистов по внедрению новых технологий в растениеводстве",
      img: "service-9.png",
    },
    {
      id: Symbol(),
      name: "Услуги Ветеринара",
      img: "service-10.png",
    },
    {
      id: Symbol(),
      name: "Услуги Технолога",
      img: "service-11.png",
    },
    {
      id: Symbol(),
      name: "Услуги по подготовке семян",
      img: "service-12.png",
    },
    {
      id: Symbol(),
      name: "Услуги по ремонту и сервисному обслуживанию",
      img: "service-13.png",
    },
    {
      id: Symbol(),
      name: "Услуги аренды с/х и спецтехники",
      img: "service-14.png",
    },
    {
      id: Symbol(),
      name: "Услуги по проектированию и постройке теплиц",
      img: "service-15.png",
    },
    {
      id: Symbol(),
      name: "Складские услуги",
      img: "service-16.png",
    },
    {
      id: Symbol(),
      name: "Услуги лабораторий",
      img: "service-17.png",
    },
    {
      id: Symbol(),
      name: "Бухгалтерские услуги",
      img: "service-18.png",
    },
    {
      id: Symbol(),
      name: "Юридические услуги",
      img: "service-19.png",
    },
    {
      id: Symbol(),
      name: "Образовательные услуги",
      img: "service-20.png",
    },
    {
      id: Symbol(),
      name: "Услуги логистики",
      img: "service-21.png",
    },
    {
      id: Symbol(),
      name: "Услуги по вывозу мусора и утилизации отходов",
      img: "service-22.png",
    },
    {
      id: Symbol(),
      name: "Услуги по санитарной обработке",
      img: "service-23.png",
    },
    {
      id: Symbol(),
      name: "Услуги фасовки, упаковки, разлива",
      img: "service-24.png",
    },
    {
      id: Symbol(),
      name: "Услуги страхования",
      img: "service-25.png",
    },
  ],
};
