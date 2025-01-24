import { defineConfig } from "windicss/helpers";
export default defineConfig({
	darkMode: "class",
	theme: {
		extend: {
			container: {
				center: true,
			},
		},
	},
	alias: {
		hoverGreen: "cursor-pointer hover:(text-green-500)",
	},
	plugins: [require("windicss/plugin/aspect-ratio")],
});
