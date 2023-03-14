import { createRouter, createWebHistory } from "vue-router";

import CounterComponentVue from "../components/CounterComponent.vue";
import NotFoundPage from "../components/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/counter",
    },
    {
      path: "/counter",
      component: CounterComponentVue,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFoundPage,
    },
  ],
});

export default router;
