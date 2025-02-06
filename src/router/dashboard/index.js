import { lazyLoad, layoutSetter } from "@/utils/router";
const links = [
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      permissions: [1],
    },
    // Мои Транзакции
    children: [
      {
        path: "my-transactions",
        name: "MyTransactions",
        meta: {
          title: "Мои сделки",
          permissions: [1],
        },
        children: [
          {
            path: "",
            name: "Transactions",
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
            name: "MyAddresses",
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
    ],
  },
];

layoutSetter(links, "dashboard");

export default links;
