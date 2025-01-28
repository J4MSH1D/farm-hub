import { defineConfig } from "windicss/helpers";
export default defineConfig({
	darkMode: "class",
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1.5rem",
			},
			colors: {
				mainGreen: "#42AB44",
			},
		},
	},
	alias: {
		hoverGreen: "cursor-pointer hover:(text-green-500)",
	},
	plugins: [require("windicss/plugin/aspect-ratio"), require("windicss/plugin/line-clamp")],
});
