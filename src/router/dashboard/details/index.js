import { lazyLoad, layoutSetter } from "@/utils/router";

const links = [
  {
    path: "/bin",
    name: "Dashboard/Bin",
    component: () => lazyLoad("dashboard/bin"),
    meta: {
      title: "Мои сделки",
      permissions: [20000],
    },
  },
  {
    path: "/favorites",
    name: "Dashboard/Favorites",
    component: () => lazyLoad("dashboard/favorites"),
    meta: {
      title: "Мои сделки",
      permissions: [20000],
    },
  },
  {
    path: "/my-applications",
    name: "Dashboard/MyApplications",
    component: () => lazyLoad("dashboard/my-applications"),
    meta: {
      title: "Мои сделки",
      permissions: [20000],
    },
  },
];

layoutSetter(links, "dashboard");

export default links;
