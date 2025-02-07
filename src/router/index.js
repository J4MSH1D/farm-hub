import { createRouter, createWebHistory } from "vue-router";

import defaultPages from "./default";
import authPages from "./auth";
import dashboard from "./dashboard";
import notFound from "./notFound";
import dashboardDetails from "./dashboard/details";

import { mainMiddleware } from "./middleware";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...defaultPages, ...dashboard, ...authPages, ...notFound, ...dashboardDetails],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(mainMiddleware);

export default router;
