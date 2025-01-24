import { createRouter, createWebHistory } from "vue-router";

import defaultPages from "./default";

import { mainMiddleware } from "./middleware";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...defaultPages],
});

router.beforeEach(mainMiddleware);

export default router;
