import { lazyLoad, layoutSetter } from "@/utils/router";
const links = [
  {
    path: "/profile",
    children: [
      {
        path: "root",
        name: "Profile",
        component: () => lazyLoad("dashboard/profile/root"),
        meta: {
          title: "Профиль",
          permissions: [1],
        },
      },
      {
        path: "transactions",
        name: "Transactions",
        component: () => lazyLoad("dashboard/profile/transactions"),
        meta: {
          title: "Сделки",
          permissions: [1],
        },
      },
    ],
  },
];

layoutSetter(links, "dashboard");

export default links;
