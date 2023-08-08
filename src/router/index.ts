import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/components/home/index.vue";
import Bg from "@/components/background/index2.vue";
import Home from "@/components/home/index.vue";
import Photo from "@/components/photo/index.vue";

const routes = [
  {
    path: "/",
    component: Bg,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: Home,
      },
    ],
  },
  {
    path: "/photo",
    component: Photo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  // history:createWebHashHistory(),
  routes,
});
// 导航守卫
router.beforeEach((to: any, from: any, next: any) => {
  next();
});

export default router;
