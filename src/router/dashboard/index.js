import { lazyLoad, layoutSetter } from "@/utils/router";
const links = [
  {
    path: "/profile",
    name: "Profile",
    component: () => lazyLoad("dashboard/profile"),
    meta: {
      icon: {
        name: "profile",
        isSvg: true,
      },
      title: "Profile",
      permissions: [1],
    },
    children: [
      {
        path: "transactions",
        name: "Transactions",
        component: () => lazyLoad("dashboard/profile/transactions"),
        meta: {
          icon: {
            name: "profile",
            isSvg: true,
          },
          title: "Сделки",
          permissions: [1],
        },
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    component: () => lazyLoad("dashboard/test"),
    meta: {
      icon: {
        name: "test",
        isSvg: true,
      },
      title: "Test",
      permissions: [1],
    },
    children: [
      {
        path: "test-1",
        name: "test-1",
        component: () => lazyLoad("dashboard/test/test-1"),
        meta: {
          icon: {
            name: "test-1",
            isSvg: true,
          },
          title: "Test-1",
          permissions: [1],
        },
      },
      {
        path: "test-2",
        name: "test-2",
        component: () => lazyLoad("dashboard/test/test-2"),
        meta: {
          icon: {
            name: "test-2",
            isSvg: true,
          },
          title: "Test-2",
          permissions: [1],
        },
      },
    ],
  },
];

layoutSetter(links, "dashboard");

export default links;
