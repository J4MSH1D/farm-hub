// CSS
import "virtual:windi.css";
import "ant-design-vue/dist/reset.css";
import "./assets/styles/main.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Vue
import { createApp } from "vue";

// Components
import App from "./App.vue";
import icon from "./components/global/icon.vue";
import rightArrowButton from "./components/global/rightArrowButton.vue";
import banner from "./components/global/banner.vue";
import bannerSmall from "./components/global/bannerSmall.vue";

// Router
import router from "./router";

// VUEX
import store from "./store";

// EIMZO
import VueEImzoPlugin from "./plugins/vue-eimzo";
import I18NextVue from "i18next-vue";
import i18next from "i18next";
import "./plugins/i18n";

// App
const app = createApp(App);

app.component("Icon", icon);
app.component("ArrowButton", rightArrowButton);
app.component("banner", banner);
app.component("bannerSmall", bannerSmall);

app.use(VueEImzoPlugin);
app.use(router);
app.use(store);
app.use(I18NextVue, { i18next });

app.mount("#app");
