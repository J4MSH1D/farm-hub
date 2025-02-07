const bigLinks = [
  {
    color: "#62c025",
    leafColor: "#75d241",
    cusClass: "",
    toRouter: "/products",
    label: "Товары",
    image: "home_link_1.png",
  },
  {
    color: "#f67020",
    leafColor: "#f47b33",
    cusClass: "",
    toRouter: "/services",
    label: "Услуги",
    image: "home_link_2.png",
  },
];

const smallLinks = [
  {
    color: "#448540",
    leafColor: "#538e50",
    cusClass: "",
    toRouter: "/government-supply",
    label: "Господдержка",
    image: "home_link_4.png",
    isSoon: false,
    children: [
      {
        name: "Льготные кредиты и субсидии",
        path: "/government-supply",
        isSoon: false,
        isActive: true,
        children: [
          {
            name: "Подобрать кредит по параметрам",
            path: "/government-supply",
            isSoon: false,
            isActive: true,
          },
          {
            name: "Льготное кредитование сельхозпроизводителей",
            path: "",
            isSoon: true,
            isActive: false,
          },
          {
            name: "Кредит на приобретение сельхозтехники",
            path: "",
            isSoon: true,
            isActive: false,
          },
          {
            name: "Льготное кредитование возобновляемых источников энергии",
            path: "",
            isSoon: true,
            isActive: false,
          },
          {
            name: "Субсидии",
            path: "",
            isSoon: true,
            isActive: false,
          },
        ],
      },
      // Кредиты для бизнеса
      {
        name: "Кредиты для бизнеса",
        path: "/credit-for-business",
        isSoon: true,
        isActive: false,
        children: [
          {
            name: "Оборотный кредит",
            path: "",
            isSoon: false,
            isActive: false,
          },
          {
            name: "Инвестиционный кредит",
            path: "",
            isSoon: true,
            isActive: false,
          },
          {
            name: "Кредиты для малого бизнеса",
            path: "",
            isSoon: true,
            isActive: false,
          },
          {
            name: "Поддержка развития молодёжного и женского предпринимательства",
            path: "",
            isSoon: true,
            isActive: false,
          },
        ],
      },

      // Финансирование поставщиков
      {
        name: "Финансирование поставщиков",
        path: "/supplier-financing",
        isSoon: true,
        isActive: false,
        children: [
          {
            name: "Факторинг",
            path: "",
            isSoon: true,
            isActive: false,
          },
        ],
      },
      // Лизинг
      {
        name: "Лизинг",
        path: "/leasing",
        isSoon: false,
        isActive: false,
        children: [
          {
            name: "Подобрать лизинг по параметрам",
            path: "/leasing",
            isSoon: false,
            isActive: false,
          },
          {
            name: "Лизинг сельхозтехники",
            path: "",
            isSoon: true,
            isActive: false,
          },
          {
            name: "Лизинг оборудования",
            path: "",
            isSoon: true,
            isActive: false,
          },
          {
            name: "Лизинг Спец/техники",
            path: "",
            isSoon: true,
            isActive: false,
          },
        ],
      },
      // Страхование
      {
        name: "Страхование",
        path: "/insurance",
        isSoon: true,
        isActive: false,
        children: [
          {
            name: "Услуги страхования",
            path: "",
            isSoon: true,
            isActive: false,
          },
        ],
      },
    ],
  },
  {
    color: "#F47C34",
    leafColor: "#F28645",
    cusClass: "",
    toRouter: "/job",
    label: "Работа",
    image: "home_link_6.png",
    isSoon: false,
    children: [
      {
        name: "Работодателям",
        path: "/job",
        isSoon: false,
        isActive: true,
      },
      {
        name: "Соискателям",
        path: "/job/applicants",
        isSoon: true,
        isActive: false,
      },
      {
        name: "Разместить вакансию",
        path: "/post-a-avacancy",
        isSoon: true,
        isActive: false,
      },
      {
        name: "Разместить резюме",
        path: "/post-a-resume",
        isSoon: true,
        isActive: false,
      },
    ],
  },
  {
    color: "#4BC7B1",
    leafColor: "#5AC9B6",
    cusClass: "",
    toRouter: "/announcements",
    label: "Объявления",
    image: "home_link_7.png",
    isSoon: false,
    children: [
      {
        name: "Объявления Местных производителей",
        path: "/announcements",
        isSoon: false,
        isActive: true,
      },
      {
        name: "Объявления Экспортёров",
        path: "",
        isSoon: true,
        isActive: false,
      },
      {
        name: "Объявления Импортёров",
        path: "",
        isSoon: true,
        isActive: false,
      },
    ],
  },
  {
    color: "#62C025",
    leafColor: "#6EC337",
    cusClass: "",
    toRouter: "/agrotechnology",
    label: "Агротехнологии",
    image: "home_link_8.png",
    isSoon: false,
    children: [
      {
        name: "Решение для теплиц на основе ИИ",
        path: "/agrotechnology",
        isSoon: false,
        isActive: true,
      },
      {
        name: "ТН ВЭД коды 2022",
        path: "/agrotechnology/business",
        isSoon: true,
        isActive: false,
      },
      {
        name: "Средства защиты растений",
        path: "",
        isSoon: true,
        isActive: false,
      },
      {
        name: "Стимуляторы роста",
        path: "",
        isSoon: true,
        isActive: false,
      },
      {
        name: "Биологические фунгициды",
        path: "",
        isSoon: true,
        isActive: false,
      },
      {
        name: "Деструкторы пожнивных остатков",
        path: "",
        isSoon: true,
        isActive: false,
      },
    ],
  },
  {
    color: "#63AAFD",
    leafColor: "#6FAFFA",
    cusClass: "",
    toRouter: "",
    label: "Медиа",
    image: "home_link_5.png",
    isSoon: false,
    children: [
      {
        name: "Статьи",
        path: "/media/articles",
        isSoon: true,
        isActive: true,
        children: [
          {
            name: "Дехканское хозяйство",
            path: "/media/articles/dehkan",
            isSoon: true,
            isActive: false,
          },
          {
            name: "Государственная регистрация дехканского хозяйства",
            path: "/media/articles/dehkan-registration",
            isSoon: true,
            isActive: false,
          },
          {
            name: "Наследование приусадебного земельного участка",
            path: "/media/articles/inheritance",
            isSoon: true,
            isActive: false,
          },
          {
            name: "Трудовой стаж в дехканском хозяйстве",
            path: "/media/articles/work-experience",
            isSoon: true,
            isActive: false,
          },
        ],
      },
      {
        name: "Новости",
        path: "/media/news",
        isSoon: true,
        isActive: false,
        children: [
          {
            name: "Для развития дехканских хозяйств и приусадебного земледелия создадут отдельный совет",
            link: "https://www.gazeta.uz/ru/2025/01/31/lands/",
            isSoon: true,
          },
          {
            name: "Выдвинуты новые инициативы по выращиванию продукции на приусадебных и дехканских землях",
            link: "https://president.uz/ru/lists/view/7845",
            isSoon: true,
          },
          {
            name: "Выращивать сельхозпродукцию в Узбекистане будут у многоэтажек и на внутренних улицах махаллей",
            link: "https://www.gazeta.uz/ru/2025/01/04/agricultural-products/",
            isSoon: true,
          },
        ],
      },
      {
        name: "Видео",
        path: "/media/videos",
        isSoon: true,
        isActive: false,
        children: [
          {
            name: "Проект по выращиванию лимонов",
            link: "https://youtu.be/HwNdO0gg9es",
            isSoon: false,
          },
          {
            name: "Проект по выращиванию малины",
            link: "https://youtu.be/RLt-WcZLrsE",
            isSoon: false,
          },
          {
            name: "Проект по выращиванию винограда",
            link: "https://youtu.be/HwNdO0gg9es",
            isSoon: true,
          },
          {
            name: "Проект по выращиванию мандаринов",
            link: "https://youtu.be/HwNdO0gg9es",
            isSoon: true,
          },
        ],
      },
    ],
  },
  {
    color: "#A2A4F8",
    leafColor: "#A8AAF6",
    cusClass: "",
    toRouter: "",
    label: "Услуги банка",
    image: "product-banner-3.png",
    isSoon: false,
    children: [
      {
        name: "Услуги банка",
        path: "/bank-services",
        isSoon: true,
        isActive: true,
        children: [
          {
            name: "Факторинг",
            link: "https://brb-faktoring.uz/",
            isSoon: false,
          },
          {
            name: "Открытие расчетного счёта",
            path: "/bank-services",
            isSoon: true,
          },
          {
            name: "Открытие банковской карты",
            path: "",
            isSoon: true,
          },
          {
            name: "Регистрация бизнеса",
            path: "",
            isSoon: true,
          },
        ],
      },
    ],
  },
];

export { bigLinks, smallLinks };
