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
];

layoutSetter(links, "default");

export default links;
