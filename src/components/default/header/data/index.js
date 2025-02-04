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
        name: "Счета и платежи",
        children: [
          {
            name: "Расчетные счета",
            path: "/current-accounts",
            // soon: true,
          },
          {
            name: "Рецепты для бизнеса",
            path: "/receipe-for-business",
            // soon: true,
          },
          {
            name: "Интернет-эквайринг",
            path: "/internet-acquiring",
            // soon: true,
          },
        ],
      },
      {
        name: "Кредиты для бизнеса",
        children: [
          {
            name: "Инвестиционные кредиты",
            path: "/investment-loans",
            // soon: true,
          },
          {
            name: "Овердрафты",
            path: "/overdrafts",
            // soon: true,
          },
          {
            name: "Кредиты для фермеров",
            path: "/loans-for-farmers",
            // soon: true,
          },
        ],
      },
      {
        name: "Лизинг",
        children: [
          {
            name: "Лизинг сельхозтехники",
            path: "/leasing-agricultural-machinery",
            // soon: true,
          },
          {
            name: "Лизинг оборудования",
            path: "/equipment-leasing",
            // soon: true,
          },
          {
            name: "Лизинг Спец/техники",
            path: "/spec-equipment-leasing",
            // soon: true,
          },
          {
            name: "Экспресс-лизинг",
            path: "/express-leasing",
            // soon: true,
          },
          {
            name: "Лизинг для сельского хозяйства",
            path: "/leasing-for-agriculture",
            // soon: true,
          },
        ],
      },
      {
        name: "Финансирование поставщиков",
        children: [
          {
            name: "Стабильный депозит на 1 день",
            path: "/stable-deposit-for-1-day",
            // soon: true,
          },
          {
            name: "Операционный депозит",
            path: "/operational-deposit",
            // soon: true,
          },
        ],
      },
      {
        name: "Бизнес-карты",
        children: [
          {
            name: "Карта фермера",
            path: "/farmers-map",
            // soon: true,
          },
          {
            name: "Бизнес-карта с кредитным лимитом",
            path: "/business-card-with-credit-limit",
            // soon: true,
          },
        ],
      },
      {
        name: "Страхование",
        children: [
          {
            name: "Страхование КАСКО",
            path: "/casco-insurance",
            // soon: true,
          },
          {
            name: "Страхование животных «Смарт Фермер»",
            path: "/pet-insurance-smart-farmer",
            // soon: true,
          },
        ],
      },
      {
        name: "Меры поддержки",
        children: [
          {
            name: "Гранты и субсидии от государства",
            path: "/grant-and-subsidies-from-the-state",
            // soon: true,
          },
        ],
      },
    ],
  },
  {
    name: "Работа",
    path: "/job",
    // soon: true,
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
        name: "ТН ВЭД коды 2023",
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
      icon: "tractor700",
      total: 20036,
      categories: [
        {
          title: "Тракторы",
          link: "/traktory",
          items: [
            { label: "Тракторы МТЗ", link: "/catalog/mtz" },
            { label: "Тракторы Кировец", link: "/catalog/kirovec" },
            { label: "Тракторы RSM", link: "/catalog/rsm" },
            { label: "Тракторы БТЗ", link: "/catalog/btz" },
            { label: "Тракторы АгроМаш", link: "/catalog/agromash" },
            { label: "Тракторы YTO", link: "/catalog/yto" },
            { label: "Тракторы Lovol", link: "/catalog/lovol" },
            { label: "Тракторы John Deere", link: "/catalog/john-deere" },
            { label: "Тракторы Claas", link: "/catalog/claas" },
            { label: "Тракторы Deutz Fahr", link: "/catalog/deutz-fahr" },
            { label: "Тракторы Massey Fergusson", link: "/catalog/massey-fergusson" },
            { label: "Тракторы Valtra", link: "/catalog/valtra" },
            { label: "Тракторы Fendt", link: "/catalog/fendt" },
            { label: "Тракторы New Holland", link: "/catalog/new-holland" },
            { label: "Тракторы Case IH", link: "/catalog/case-ih" },
            { label: "Тракторы Zoomlion", link: "/catalog/zoomlion" },
            { label: "Тракторы HUZHOU KAT", link: "/catalog/huzhou-kat" },
            { label: "Тракторы Basak", link: "/catalog/basak" },
            { label: "Тракторы Ensign", link: "/catalog/ensign" },
            { label: "Тракторы McCormick", link: "/catalog/traktory-mccormick" },
            { label: "Тракторы Waltcher", link: "/catalog/waltcher" },
            { label: "Тракторы ULAN-RT", link: "/catalog/ulan-rt" },
            { label: "Тракторы Taihong", link: "/catalog/taihong" },
            { label: "Тракторы Рустрак", link: "/catalog/rustrak" },
            { label: "Тракторы OPTITECH", link: "/catalog/optitech" },
            { label: "Тракторы Hanwo", link: "/catalog/hanwo" },
            { label: "Тракторы Weituo", link: "/catalog/weituo" },
            { label: "Тракторы Shagirt (HAUBO)", link: "/catalog/shagirt" },
          ],
        },
        {
          title: "Мотоблоки",
          link: "/motoblocks",
          items: [],
        },
        {
          title: "Виноградоуборочные комбайны",
          link: "/motoblocks",
          items: [],
        },
        {
          title: "Транспортные средства и грузовики",
          link: "/transports",
          items: [
            { label: "Бункеры-перегрузчики", link: "/catalog/mtz" },
            { label: "Полуприцепы и прицепы", link: "/catalog/mtz" },
          ],
        },
        {
          title: "Кормозаготовительная техника",
          link: "/kormozagotovitelnye-texnika",
          items: [
            { label: "Ворошилки", link: "/catalog/voroshilki" },
            { label: "Валкообразователи (грабли)", link: "/catalog/valkoobrazovateli-grabli" },
            { label: "Обмотчики рулонов", link: "/catalog/obmotchiki-rulonov" },
            { label: "Перевозчики рулонов", link: "/catalog/perevozchiki-rulonov" },
            { label: "Косилки", link: "/catalog/kosilki" },
          ],
        },
        {
          title: "Овощная техника",
          link: "/ovoshnaya-texnika",
          items: [
            { label: "Овощеуборочные комбайны", link: "/catalog/ovoschnye-kombajny" },
            { label: "Приемные бункеры", link: "/catalog/priemnye-bunkery" },
            { label: "Техника для свеклы", link: "/catalog/tekhnika-dlya-svekly" },
            { label: "Техника для возделывания моркови", link: "/catalog/tekhnika-dlya-vozdelyvaniya-morkovi" },
            { label: "Техника для возделывания лука", link: "/catalog/tekhnika-dlya-vozdelyvaniya-luka" },
          ],
        },
        {
          title: "Автомобили",
          link: "/avtomobili",
          items: [],
        },
        {
          title: "Минитракторы",
          link: "/minitraktory",
          items: [
            { label: "Минитракторы МТЗ", link: "/catalog/minitraktory-mtz" },
            { label: "Минитракторы Lovol", link: "/catalog/minitraktory-lovol" },
            { label: "Минитракторы СКАУТ", link: "/catalog/minitraktory-skaut" },
            { label: "Минитракторы JINMA", link: "/catalog/minitraktory-jinma" },
            { label: "Минитракторы TAVOL", link: "/catalog/minitraktory-tavol" },
          ],
        },
        {
          title: "Зерноуборочные комбайны",
          link: "/zernouborochnye-kombajny",
          items: [
            { label: "Зерноуборочные комбайны Ростсельмаш", link: "/catalog/zernouborochnye-kombajny-rostselmash" },
            { label: "Зерноуборочные комбайны Гомсельмаш", link: "/catalog/zernouborochnye-kombajny-gomselmash" },
            { label: "Зерноуборочные комбайны AGROAPOLLO", link: "/catalog/zernouborochnye-kombajny-agroapollo" },
            { label: "Зерноуборочные комбайны Case IH", link: "/catalog/zernouborochnye-kombajny-case-ih" },
            { label: "Зерноуборочные комбайны Claas", link: "/catalog/zernouborochnye-kombajny-claas" },
            { label: "Зерноуборочные комбайны DEUTZ FAHR", link: "/catalog/zernouborochnye-kombajny-deutz-fahr" },
            { label: "Зерноуборочные комбайны Hoffmann", link: "/catalog/zernouborochnye-kombajny-hoffmann" },
            { label: "Зерноуборочные комбайны ISEKI", link: "/catalog/zernouborochnye-kombajny-iseki" },
            { label: "Зерноуборочные комбайны John Deere", link: "/catalog/zernouborochnye-kombajny-john-deere" },
            { label: "Зерноуборочные комбайны Lovol", link: "/catalog/zernouborochnye-kombajny-lovol" },
            { label: "Зерноуборочные комбайны New Holland", link: "/catalog/zernouborochnye-kombajny-new-holland" },
            { label: "Зерноуборочные комбайны Shandong Jianghua Machinery", link: "/catalog/zernouborochnye-kombajny-shandong-jianghua-machinery" },
            { label: "Зерноуборочные комбайны Агромаш", link: "/catalog/zernouborochnye-kombajny-agromash" },
            { label: "Зерноуборочные комбайны Брянсксельмаш", link: "/catalog/zernouborochnye-kombajny-bryanskselmash" },
          ],
        },
        {
          title: "Жатки и приставки",
          link: "/zhatki-i-pristavki",
          items: [],
        },
        {
          title: "Погрузчики",
          link: "/pogruzchiki",
          items: [
            { label: "Телескопические погрузчики", link: "/catalog/teleskopicheskie-pogruzchiki" },
            { label: "Навесные фронтальные погрузчики", link: "/catalog/navesnye-frontal-nye-pogruzchiki" },
            { label: "Навесное оборудование для погрузчиков", link: "/catalog/navesnoe-oborudovanie-dlja-pogruzchikov" },
            { label: "Фронтальные погрузчики", link: "/catalog/frontal-nye-pogruzchiki" },
            { label: "Погрузчики с бортовым поворотом", link: "/catalog/pogruzchiki-s-bortovym-povorotom" },
          ],
        },
        {
          title: "Техника для внесения удобрений",
          link: "/tekhnika-dlya-vneseniya-udobren",
          items: [
            { label: "Разбрасыватели минеральных удобрений", link: "/catalog/razbrasyvateli-mineral-nyh-udobrenij" },
            { label: "Разбрасыватели органических удобрений", link: "/catalog/razbrasyvateli-organicheskih-udobrenij" },
            { label: "Внесение жидких органических удобрений", link: "/catalog/vnesenie-zhidkih-organicheskih-udobrenij" },
            { label: "Почвенные инъекторы", link: "/catalog/pochvennye-in-ektory" },
          ],
        },
        {
          title: "Техника для животноводства",
          link: "/tekhnika-dlya-zhivotnovodstva",
          items: [
            { label: "Миксеры-кормораздатчики", link: "/catalog/miksery-kormorazdatchiki" },
            { label: "Измельчители-выдуватели соломы", link: "/catalog/izmelchiteli-solomy" },
            { label: "Кормоуборочные комбайны", link: "/catalog/kormouborochnye-kombajny" },
            { label: "Оборудование для производства комбикормов", link: "/catalog/oborudovanie-dlja-proizvodstva-kombikormov" },
          ],
        },
        {
          title: "Электронные системы",
          link: "/elektronnye-sistemy",
          items: [],
        },
        {
          title: "Дополнительное оборудование",
          link: "/dopolnitelnoe-oborudovanie",
          items: [],
        },
      ],
    },
    // {
    //   id: Symbol(),
    //   categoryName: "Спецтехника",
    //   link: null,
    //   icon: "tractor700",
    //   total: 20036,
    //   categories: [
    //     {
    //       title: "Мини тракторы",
    //       link: "/minitraktory",
    //       items: [
    //         { label: "Мини тракторы Балкан", link: "/catalog/balkan" },
    //         { label: "Мини тракторы Роса", link: "/catalog/rosa" },
    //         { label: "Мини тракторы Форвард", link: "/catalog/forward" },
    //       ],
    //     },
    //     {
    //       title: "Комбайны",
    //       link: "/kombajny",
    //       items: [
    //         { label: "Комбайны Спутник", link: "/catalog/sputnik" },
    //         { label: "Комбайны ТехСервис", link: "/catalog/techservice" },
    //         { label: "Комбайны ТракторСтар", link: "/catalog/tractorstark" },
    //       ],
    //     },
    //     {
    //       title: "Транспортные средства",
    //       link: "/transports",
    //       items: [
    //         { label: "Грузовики Лидер", link: "/catalog/lider" },
    //         { label: "Микроавтобусы Юг", link: "/catalog/yug" },
    //         { label: "Автобусы Динамо", link: "/catalog/dynamo" },
    //       ],
    //     },
    //     {
    //       title: "Сельскохозяйственное оборудование",
    //       link: "/oborudovanie",
    //       items: [
    //         { label: "Транспортные машины", link: "/catalog/transportnye" },
    //         { label: "Сеялки", link: "/catalog/sealki" },
    //         { label: "Опрыскиватели", link: "/catalog/opriskivateli" },
    //       ],
    //     },
    //     {
    //       title: "Тракторы",
    //       link: "/traktory",
    //       items: [
    //         { label: "Тракторы Альфа", link: "/catalog/alpha" },
    //         { label: "Тракторы Протон", link: "/catalog/proton" },
    //         { label: "Тракторы МегаТрак", link: "/catalog/megatrak" },
    //         { label: "Тракторы Урожай", link: "/catalog/urozhay" },
    //         { label: "Тракторы БелТех", link: "/catalog/beltech" },
    //       ],
    //     },
    //     {
    //       title: "Косилки и обрабатывающая техника",
    //       link: "/kosilki",
    //       items: [
    //         { label: "Косилки на траву", link: "/catalog/kosilki-na-travu" },
    //         { label: "Косилки для сена", link: "/catalog/kosilki-dlya-sena" },
    //       ],
    //     },
    //     {
    //       title: "Мотоблоки",
    //       link: "/motoblocks",
    //       items: [
    //         { label: "Мотоблоки Бурлак", link: "/catalog/burlak" },
    //         { label: "Мотоблоки Стрела", link: "/catalog/strela" },
    //         { label: "Мотоблоки Торнадо", link: "/catalog/tornado" },
    //       ],
    //     },
    //     {
    //       title: "Овощная техника",
    //       link: "/ovoshnaya-texnika",
    //       items: [
    //         { label: "Овощеуборочные машины", link: "/catalog/ovoscheuborochniye" },
    //         { label: "Техника для картофеля", link: "/catalog/tekhnika-dlya-kartofelya" },
    //         { label: "Культиваторы для овощей", link: "/catalog/kultivatory-ovoshey" },
    //       ],
    //     },
    //     {
    //       title: "Погрузчики",
    //       link: "/pogruzchiki",
    //       items: [
    //         { label: "Телескопические погрузчики", link: "/catalog/teleskopicheskie" },
    //         { label: "Фронтальные погрузчики", link: "/catalog/frontallnye" },
    //       ],
    //     },
    //     {
    //       title: "Жатки и приставки",
    //       link: "/zhatki-i-pristavki",
    //       items: [],
    //     },
    //   ],
    // },
    { id: Symbol(), categoryName: "Запчасти", link: null, icon: "tractor700", total: 20036 },
    // { id: Symbol(), categoryName: "Колеса для сельхозтехники", link: null, icon: "tractor700", total: 20036 },
    // { id: Symbol(), categoryName: "ГСМ", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Мини-заводы", link: "/mini-zavodi", icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Оборудования", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Семена", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Посадочные материалы", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Средства защиты растений", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Удобрения", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Агрохимия", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Сад и огород", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Спецодежда", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Сельскохозяйственные животные", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Корма", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Ветеринария", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Зерно", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Упаковочные материалы", link: null, icon: "tractor700", total: 20036 },
    { id: Symbol(), categoryName: "Готовая продукция", link: null, icon: "tractor700", total: 20036 },
    // { id: Symbol(), categoryName: "Фермерское оборудование", link: null, icon: "tractor700", total: 20036 },
    // { id: Symbol(), categoryName: "Залоговое имущество", link: null, icon: "tractor700", total: 20036 },
    // { id: Symbol(), categoryName: "Цифровая техника и электроника", link: null, icon: "tractor700", total: 20036 },
  ],
  services: [
    { id: Symbol(), categoryName: "Полевые работы", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Уборка урожая", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Услуги по подготовке семян", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Услуги по переработке", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Ремонт и сервисное обслуживание", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Аренда с/х и спецтехники", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Проектирование и строительство с/х объектов", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Складские услуги", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Услуги лабораторий", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Информационные услуги", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Бухгалтерские услуги", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Юридические услуги", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Образовательные услуги", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Услуги для животноводства", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Услуги логистики", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Вывоз мусора и утилизация отходов", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Санитарная обработка", link: null, icon: "tractor700", total: 11000 },
    { id: Symbol(), categoryName: "Услуги фасовки, упаковки, разлива", link: null, icon: "tractor700", total: 11000 },
  ],
};
