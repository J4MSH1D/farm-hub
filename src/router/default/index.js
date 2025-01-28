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
