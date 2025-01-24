// CSS
import "virtual:windi.css";
import "ant-design-vue/dist/reset.css";
import "./assets/styles/main.css";

// Vue
import { createApp } from "vue";

// Components
import App from "./App.vue";
import icon from "./components/global/icon.vue";

// Router
import router from "./router";

// App
const app = createApp(App);

app.component("Icon", icon);

app.use(router);

app.mount("#app");
