import { lazyLoad, layoutSetter } from "@/utils/router";
const links = [
  // ============= Мои Транзакции =============
  {
    path: "/my-transactions",
    name: "Dashboard/MyTransactions",
    meta: {
      title: "Мои сделки",
      permissions: [1000],
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
          permissions: [1000],
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
          permissions: [1000],
        },
      },
    ],
  },

  // ============= Мои Товары =============
  {
    path: "/my-products",
    name: "Dashboard/MyProducts",
    meta: {
      title: "Мои Товары",
      permissions: [1000],
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
          permissions: [1000],
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
          permissions: [1000],
        },
      },
    ],
  },
];

layoutSetter(links, "dashboard");

export default links;
