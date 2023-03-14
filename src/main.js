import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { createRouter, createWebHistory } from "vue-router";

import CounterComponentVue from "./components/CounterComponent.vue";
import NotFoundPage from "./components/NotFoundPage.vue";

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
// createApp(App).use(store)
// .mount("#app");
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
