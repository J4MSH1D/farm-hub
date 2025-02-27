const data = [
  {
    id: 1,
    title: "Услуги механизатора",
    product_type:
      "эксплуатация, обслуживание и ремонт комбайнов, тракторов, плугов, погрузчиков и других механизмов, необходимых для выполнения полевых работ",
    image: "service-2.png",
    price: "9",
    price2: "17",
  },
  {
    id: 2,
    title: "Услуги рабочих по уходу за животными",
    product_type:
      "кормление и поение животных; наблюдение за состоянием животных; смена подстилки в загонах; чистка кормовых столов, мойка кормушек и поилок; чистка мест скопления навоза; уборка подсобных помещений; помощь специалистам при зооветеринарных работах с животными (ветврачам, техникам-осеменаторам, зоотехникам); участие в погрузке и разгрузке животных; помощь в принятии родов",
    image: "service-3.png",
    price: "15",
  },
  {
    id: 3,
    title: "Услуги рабочих по сбору урожая ",
    product_type: "сбор ягод, фруктов и овощей (клубника, ежевика, яблоки, грибы, брокколи, капуста и другие), упаковка, фасовка",
    image: "service-4.png",
    price: "25",
  },
  {
    id: 4,
    title: "Услуги агронома ",
    product_type:
      "организация и проведение агротехнических мероприятий на открытом поле и в теплицах; полное агрономическое сопровождение и консультирование помощника; оперативное составление рекомендаций и обеспечение технологических процессов выращивания сельскохозяйственных культур; участие в расчётах требуемых объёмов семян, саженцев, субстрата, удобрений, ядохимикатов, поливной воды, выхода продукции; мониторинг развития сельскохозяйственных культур; контроль качества выполняемых сельскохозяйственных работ; разработка технологических карт, календарных графиков плановых работ по уходу за выращиваемыми культурами, дезинфекции и других профилактических работ; контроль и обеспечение качественной работы технологического оборудования, также системы капельного орошения",
    image: "service-5.png",
    price: "5",
    express_leasing: false,
  },
  {
    id: 5,
    title: "Услуги Технолога",
    product_type:
      "участие в планировании посевной кампании; разработка и внедрение эффективных способов возделывания сельскохозяйственных культур; внесение рекомендаций относительно отбора и закупки семян, саженцев, скота и пр.; разработка сельскохозяйственного календаря и контроль выполнения имеющихся пунктов (посев, удобрение, борьба с вредителями, полив и пр.); контроль условий содержания рогатого скота, птицы и пр.; организация мероприятий, целенаправленных на улучшение продуктивности деятельности сотрудников конкретного предприятия; участие в запуске специального сельскохозяйственного оборудования; контроль качества продукции растениеводства и животноводства; организация переработки сельскохозяйственного сырья в готовый продукт; ведение расчётов экономической эффективности производства и переработки сельскохозяйственной продукции.",
    image: "service-11.png",
    price: 12,
  },
  {
    id: 6,
    title: "Услуги аренды с/х и спецтехники цены Узбекистан:",
    product_type:
      "Аренда мини-экскаваторов — 23 000 000 сумов. Аренда экскаватора-погрузчика JCB 3 DX — 30 000 000 сумов в месяц.Аренда гусеничного экскаватора с объёмом ковша не менее 1,0 м³ — 1 000 000 сумов в день. Аренда фронтального погрузчика SDLG LG933L — 400 000 сумов в час. Услуги эвакуатора Mercedes Benz — 100 сумов за километр. Аренда автовышки Hyundai — 300 000 сумов в час.",
    image: "service-14.png",
  },
  {
    id: 7,
    title: "Услуги по проектированию и постройке теплиц ",
    product_type:
      "Анализ участка. Учитываются все особенности участка, от рельефа до климатических условий, чтобы выбрать идеальное место для строительства. Выбор конструкции. Подбирается оптимальный тип теплицы с учётом целей и бюджета заказчика. Проектирование систем. Разрабатываются инженерные системы — освещение, полив, вентиляция, отопление — чтобы создать идеальный микроклимат для растений. Автоматизация процессов. Внедряются системы управления, которые минимизируют ручной труд и позволяют контролировать все процессы удалённо. Строительство и запуск. Полный цикл строительства, от закладки фундамента до ввода в эксплуатацию.",
    image: "service-15.png",
    price: "33",
  },
  {
    id: 8,
    title: "Бухгалтерские услуги ",
    product_type: "Аgro house,Ташкентская область, Кибрайский район",
    image: "service-18.png",
    price: "30",
  },
  {
    id: 9,
    title: "Юридические услуги ",
    product_type:
      "регистрация фермерских хозяйств; сопровождение при заключении договоров о поставках сельхозпродукции с агрокластерами и ретейлерами; консультации по вопросам соблюдения стандартов, норм и требований к сельскохозяйственной продукции; консультации по страхованию рисков в сельском хозяйстве; консультации по вопросам трудового законодательства, включая вопросы охраны труда в сельском хозяйстве; составление и экспертиза договоров и сопровождение сделок; консультации по вопросам регулирования в отрасли",
    image: "service-19.png",
    price: "25",
  },
  {
    id: 10,
    title: "Услуги по санитарной обработке:",
    product_type:
      "Фумигация тары — от 100 000 сум (обработка контейнеров и упаковок для устранения вредителей, которые могут находиться внутри). Фумигация грузов — от 100 000 сум (обеспечение безопасности грузов во время транспортировки и хранения). Фумигация домов — от 150 000 сум (защита жилых помещений от насекомых и грызунов)",
    image: "service-23.png",
  },
];
export default data;
