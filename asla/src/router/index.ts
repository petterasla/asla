import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { component } from "vue/types/umd";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/wall",
    name: "Wall",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Wall.vue")
  },
  {
    path: "/keywordtool",
    name: "Keywordtool",
    component: () =>
      import("../views/Keywordtool.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
