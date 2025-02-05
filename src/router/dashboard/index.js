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
        path: "",
        name: "",
        meta: {
          icon: "profile",
        },
        children: [
          {}
        ]
      },
    ],
  },
];

layoutSetter(links, "dashboard");

export default links;
