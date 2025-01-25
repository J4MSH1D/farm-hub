// CSS
import "virtual:windi.css";
import "ant-design-vue/dist/reset.css";
import "./assets/styles/main.css";
import "swiper/css";
import "swiper/css/pagination";

// Vue
import { createApp } from "vue";

// Components
import App from "./App.vue";
import icon from "./components/global/icon.vue";
import rightArrowButton from "./components/global/rightArrowButton.vue";

// Router
import router from "./router";

// App
const app = createApp(App);

app.component("Icon", icon);
app.component("ArrowButton", rightArrowButton);

app.use(router);

app.mount("#app");
