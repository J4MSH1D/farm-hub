import { lazyLoad, layoutSetter } from "@/utils/router";
const links = [
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      permissions: [1],
    },
    children: [
      // ============= Мои Транзакции =============
      {
        path: "my-transactions",
        name: "Dashboard/MyTransactions",
        meta: {
          title: "Мои сделки",
          permissions: [1],
        },
        children: [
          {
            path: "",
            name: "Dashboard/MyTransactions/Transactions",
            component: () => lazyLoad("dashboard/my-transactions/transactions"),
            meta: {
              icon: {
                name: "transactions",
                isSvg: true,
              },
              title: "Сделки",
              permissions: [1],
            },
          },
          {
            path: "my-addresses",
            name: "Dashboard/MyTransactions/MyAddresses",
            component: () => lazyLoad("dashboard/my-transactions/my-addresses"),
            meta: {
              icon: {
                name: "my-addresses",
                isSvg: true,
              },
              title: "Мои адреса",
              permissions: [1],
            },
          },
        ],
      },

      // ============= Мои Товары =============
      {
        path: "my-products",
        name: "Dashboard/MyProducts",
        meta: {
          title: "Мои Товары",
          permissions: [1],
        },
        children: [
          {
            path: "add-product",
            name: "Dashboard/MyProducts/AddProduct",
            component: () => lazyLoad("dashboard/my-products/add-product"),
            meta: {
              icon: {
                name: "add-product",
                isSvg: true,
              },
              title: "Добавить товар",
              permissions: [1],
            },
          },
          {
            path: "added",
            name: "Dashboard/MyProducts/Added",
            component: () => lazyLoad("dashboard/my-products/added"),
            meta: {
              icon: {
                name: "added-products",
                isSvg: true,
              },
              title: "Добавленные",
              permissions: [1],
            },
          },
        ],
      },

      // ============= Объявления =============
      {
        path: "announcements",
        name: "Dashboard/Announcements",
        meta: {
          title: "Объявления",
          permissions: [1],
        },
        children: [
          {
            path: "products",
            name: "Dashboard/Announcements/Products",
            component: () => lazyLoad("dashboard/announcements/products"),
            meta: {
              icon: {
                name: "products",
                isSvg: true,
              },
              title: "Товары",
              permissions: [1],
            },
          },
          {
            path: "services",
            name: "Dashboard/Announcements/Services",
            component: () => lazyLoad("dashboard/announcements/services"),
            meta: {
              icon: {
                name: "services",
                isSvg: true,
              },
              title: "Услуга",
              permissions: [1],
            },
          },
          {
            path: "vacancies",
            name: "Dashboard/Announcements/Vacancies",
            component: () => lazyLoad("dashboard/announcements/vacancies"),
            meta: {
              icon: {
                name: "vacancies",
                isSvg: true,
              },
              title: "Вакансии",
              permissions: [1],
            },
          },
          {
            path: "add-announcement",
            name: "Dashboard/Announcements/AddAnnouncement",
            component: () => lazyLoad("dashboard/announcements/add-announcement"),
            meta: {
              icon: {
                name: "announcements",
                isSvg: true,
              },
              title: "Разместить объявление",
              permissions: [1],
            },
          },
        ],
      },

      // ============= Клиринг =============
      {
        path: "clearing",
        name: "Dashboard/Clearing",
        meta: {
          title: "Клиринг",
          permissions: [1],
        },
        children: [
          {
            path: "",
            name: "Dashboard/Clearing/Information",
            component: () => lazyLoad("dashboard/clearing/information"),
            meta: {
              icon: {
                name: "clearing",
                isSvg: true,
              },
              title: "Информация",
              permissions: [1],
            },
          },
        ],
      },

      // ============= Реквизиты =============
      {
        path: "requisites",
        name: "Dashboard/Requisites",
        meta: {
          title: "Реквизиты",
          permissions: [1],
        },
        children: [
          {
            path: "",
            name: "Dashboard/Requisites/Requisites",
            component: () => lazyLoad("dashboard/requisites/requisites"),
            meta: {
              icon: {
                name: "requisites",
                isSvg: true,
              },
              title: "Реквизиты",
              permissions: [1],
            },
          },
          {
            path: "add-card",
            name: "Dashboard/Requisites/AddCard",
            component: () => lazyLoad("dashboard/requisites/add-card"),
            meta: {
              icon: {
                name: "add-card",
                isSvg: true,
              },
              title: "Добавить карту",
              permissions: [1],
            },
          },
          {
            path: "add-virtual-card",
            name: "Dashboard/Requisites/AddVirtualCard",
            component: () => lazyLoad("dashboard/requisites/add-virtual-card"),
            meta: {
              icon: {
                name: "add-card",
                isSvg: true,
              },
              title: "Открыть виртуальную карту",
              permissions: [1],
            },
          },
        ],
      },
    ],
  },
];

layoutSetter(links, "dashboard");

export default links;
