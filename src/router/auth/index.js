import { lazyLoad, layoutSetter } from "@/utils/router";

const links = [
  {
    path: "/auth",
    children: [
      {
        name: "Login",
        path: "login",
        component: () => lazyLoad("auth/login"),
        meta: {
          title: "Mening tomorqam - Вход",
          permissions: [],
        },
      },
      {
        name: "Register",
        path: "register",
        component: () => lazyLoad("auth/register"),
        meta: {
          title: "Mening tomorqam - Регистрация",
          permissions: [],
        },
      },
      {
        name: "Login-Main",
        path: "main",
        component: () => lazyLoad("auth/main"),
        meta: {
          title: "Mening tomorqam - Вход",
          permissions: [],
        },
      },
    ],
  },
];

layoutSetter(links, "auth");

export default links;
