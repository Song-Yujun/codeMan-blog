import Vue from "vue";
import VueRouter from "vue-router";
import InitPage from "../views/InitPage.vue";

const Home = ()=>import('../views/Home.vue')

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "initpage",
  //   component: InitPage,
  // },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
