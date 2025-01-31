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
];

layoutSetter(links, "default");

export default links;
