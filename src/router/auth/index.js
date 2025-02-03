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
    ],
  },
];

layoutSetter(links, "auth");

export default links;
