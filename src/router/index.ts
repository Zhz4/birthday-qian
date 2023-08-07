import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/components/home/index.vue";
import Bg from "@/components/background/index2.vue";
import Home from "@/components/home/index.vue";

const routes = [
  {
    path: "/",
    component: Bg,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: Home,
        name: "Home",
      },
    ],
  },
  {
    path: "/photo",
    component: () => import("@/components/background/index2.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  // history:createWebHashHistory(),
  routes,
});

export default router;
