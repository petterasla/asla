import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Wall from "../views/Wall.vue";
import Keywordtool from "../views/Keywordtool.vue";
import NotFound from "../views/NotFound.vue";

const routes: any = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/wall",
    name: "Wall",
    component: Wall
  
  },
  {
    path: "/keywordtool",
    name: "Keywordtool",
    component: Keywordtool
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
