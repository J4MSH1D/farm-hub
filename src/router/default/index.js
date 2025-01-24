import { lazyLoad, layoutSetter } from "@/utils/router";
const links = [
  {
    path: "/",
    name: "Home page",
    component: () => lazyLoad("default/home"),
    meta: {
      title: "Farm Hub",
      permissions: [],
    },
  },
];

layoutSetter(links, "default");

export default links;
