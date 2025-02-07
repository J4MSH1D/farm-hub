import { lazyLoad } from "@/utils/router";

const links = [
  {
    path: "/structures",
    name: "Structures",
    meta: {
      title: "Структура",
      permissions: [1000],
    },
    component: () => lazyLoad("dashboard/structures"),
  },
  {
    path: "/translations",
    name: "Translations",
    meta: {
      title: "Переводы",
      permissions: [10000],
    },
    component: () => lazyLoad("dashboard/translations"),
  },
  {
    path: "/users",
    name: "Users",
    meta: {
      title: "Пользователи",
      permissions: [10000],
    },
    component: () => lazyLoad("dashboard/users"),
  },
];

export default links;
