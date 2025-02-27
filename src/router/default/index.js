import { lazyLoad, layoutSetter } from "@/utils/router";
const links = [
  {
    path: "/",
    name: "Home page",
    component: () => lazyLoad("default/home"),
    meta: {
      title: "Mening tomorqam",
      permissions: [],
    },
  },
  {
    path: "/services",
    name: "Services",
    component: () => lazyLoad("default/services"),
    meta: {
      title: "Services",
      permissions: [],
    },
    children: [
      {
        path: "",
        name: "Servises main",
        component: () => lazyLoad("default/services/main"),
        meta: {
          title: "Services main",
          permissions: [],
        },
      },
      {
        path: "work",
        name: "Servises work",
        component: () => lazyLoad("default/services/work"),
        meta: {
          title: "Services work",
          permissions: [],
        },
      },
    ],
  },
  {
    path: "/products",
    name: "Products",
    component: () => lazyLoad("default/products"),
    meta: {
      title: "Catalogue of products",
      permissions: [],
    },
  },
  {
    path: "/government-supply",
    name: "GovernmentSupply",
    component: () => lazyLoad("default/government-supply"),
    meta: {
      title: "GovernmentSupply",
      permissions: [],
    },
  },
  {
    path: "/leasing",
    name: "Leasing",
    component: () => lazyLoad("default/leasing"),
    meta: {
      title: "Leasing",
      permissions: [],
    },
  },
  {
    path: "/corporate-card",
    name: "CorporateCard",
    component: () => lazyLoad("default/corporate-card"),
    meta: {
      title: "CorporateCard",
      permissions: [],
    },
  },

  {
    path: "/job",
    name: "Job",
    component: () => lazyLoad("default/job"),
    meta: {
      title: "Job",
      permissions: [],
    },
    children: [
      {
        path: "",
        name: "Job employers",
        component: () => lazyLoad("default/job/employers"),
        mete: {
          title: "Job employers",
          permissions: [],
        },
      },
      {
        path: "applicants",
        name: "Job applicants",
        component: () => lazyLoad("default/job/applicants"),
        mete: {
          title: "Job applicants",
          permissions: [],
        },
      },
    ],
  },
  {
    path: "/agrotechnology",
    name: "Agrotexnology",
    component: () => lazyLoad("default/agrotechnology"),
    meta: {
      title: "Job",
      permissions: [],
    },
    children: [
      {
        path: "",
        name: "Agrotexnology main",
        component: () => lazyLoad("default/agrotechnology/main"),
        mete: {
          title: "Agrotexnology",
          permissions: [],
        },
      },
      {
        path: "business",
        name: "Agrotexnology business service",
        component: () => lazyLoad("default/agrotechnology/business"),
        mete: {
          title: "Agrotexnology business service",
          permissions: [],
        },
        children: [
          {
            path: "main",
            name: "Agrotexnology business service main",
            component: () => lazyLoad("default/agrotechnology/business/main"),
            mete: {
              title: "Agrotexnology business service main",
              permissions: [],
            },
          },
          {
            path: "connect",
            name: "Agrotexnology business service connect",
            component: () => lazyLoad("default/agrotechnology/business/connect"),
            mete: {
              title: "Agrotexnology business service connect",
              permissions: [],
            },
          },
          {
            path: "tariffs",
            name: "Agrotexnology business service tariffs",
            component: () => lazyLoad("default/agrotechnology/business/tariffs"),
            mete: {
              title: "Agrotexnology business service tariffs",
              permissions: [],
            },
          },
          {
            path: "bid",
            name: "Agrotexnology business service bid",
            component: () => lazyLoad("default/agrotechnology/business/bid"),
            mete: {
              title: "Agrotexnology business service bid",
              permissions: [],
            },
          },
          {
            path: "questions",
            name: "Agrotexnology business service questions",
            component: () => lazyLoad("default/agrotechnology/business/questions"),
            mete: {
              title: "Agrotexnology business service questions",
              permissions: [],
            },
          },
        ],
      },
    ],
  },
  {
    path: "/announcements",
    name: "Announcements",
    component: () => lazyLoad("default/announcements"),
    meta: {
      title: "Announcements",
      permissions: [],
    },
    children: [
      {
        path: "/announcements",
        name: "Announcements main",
        component: () => lazyLoad("default/announcements/main"),
        meta: {
          title: "Announcements main",
          permissions: [],
        },
      },
      {
        path: "place-an",
        name: "Announcements place an",
        component: () => lazyLoad("default/announcements/place"),
        meta: {
          title: "Announcements place an",
          permissions: [],
        },
      },
      {
        path: "about-services",
        name: "Announcements about services",
        component: () => lazyLoad("default/announcements/aboutService"),
        meta: {
          title: "Announcements about services",
          permissions: [],
        },
      },
    ],
  },
  {
    path: "/media",
    name: "Media",
    meta: {
      title: "Media",
      permissions: [],
    },
    children: [
      {
        path: "",
        name: "MediaPage",
        component: () => lazyLoad("default/media"),
        meta: {
          title: "Media",
          permissions: [],
        },
      },
      {
        path: "articles",
        name: "Media/Articles",
        component: () => lazyLoad("default/media/articles"),
        meta: {
          title: "Articles",
          permissions: [],
        },
      },
      {
        path: "news",
        name: "Media/News",
        component: () => lazyLoad("default/media/news"),
        meta: {
          title: "News",
          permissions: [],
        },
      },
      {
        path: "videos",
        name: "Media/Videos",
        component: () => lazyLoad("default/media/videos"),
        meta: {
          title: "Videos",
          permissions: [],
        },
      },
    ],
  },
  {
    path: "/partners",
    name: "Parners",
    component: () => lazyLoad("default/partners"),
    meta: {
      title: "Parners",
      permissions: [],
    },
  },
  {
    path: "/bank-services",
    name: "Bank Services",
    component: () => lazyLoad("default/bankServices"),
    meta: {
      title: "Bank services",
      permissions: [],
    },
  },
];

layoutSetter(links, "default");

export default links;
