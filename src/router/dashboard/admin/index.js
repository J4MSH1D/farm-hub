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
      permissions: [6000],
    },
    component: () => lazyLoad("dashboard/users"),
  },
  {
    path: "/category-type",
    name: "Category Type",
    meta: {
      title: "Подкатегории",
      permissions: [9000],
    },
    component: () => lazyLoad("dashboard/categoryType"),
  },
  {
    path: "/category",
    name: "Category",
    meta: {
      title: "Категории",
      permissions: [9000],
    },
    component: () => lazyLoad("dashboard/category"),
  },
];

export default links;
