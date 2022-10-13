import Vue from "vue";
import VueRouter from "vue-router";
import InitPage from "../views/InitPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "initpage",
    component: InitPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
