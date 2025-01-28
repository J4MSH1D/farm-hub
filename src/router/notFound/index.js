import { lazyLoad, layoutSetter } from "@/utils/router";
const links = [
	{
		path: "/:pathMatch(.*)*",
		name: "Not Found",
		component: () => lazyLoad("default/notFound"),
		meta: {
			title: "Farm Hub",
			permissions: [],
		},
	},
];

layoutSetter(links, "default");

export default links;
