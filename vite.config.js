import { fileURLToPath, URL } from "node:url";

// Vite
import { defineConfig } from "vite";

// Vue
import vue from "@vitejs/plugin-vue";

// Vue Devtools
import vueDevTools from "vite-plugin-vue-devtools";

// Windi CSS
import WindiCSS from "vite-plugin-windicss";

// Ant Design
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
		WindiCSS(),
		Components({
			resolvers: [
				AntDesignVueResolver({
					importStyle: false, // css in js
				}),
			],
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	server: {
		port: 3000,
		host: true,
	},
});
