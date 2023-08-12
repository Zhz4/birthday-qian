import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/components/home/index.vue";
import Bg from "@/components/background/index2.vue";
import Home from "@/components/home/index.vue";
// import Photo from "@/components/photo/index.vue";
// import Wish from "@/components/wish/index.vue";
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
    name:"photo",
    component: () => import("@/components/photo/index.vue"),
  },
  {
    path: "/wish",
    component: () => import("@/components/wish/index.vue"),
  },
  {
    path: "/video",
    component: () => import("@/components/video/index.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("@/components/404/index.vue"),
    hidden: true,
    meta: { title: "404" },
  },
  // 当什么都没有匹配到的时候，重定向页面到 404 页面
  { path: "/:pathMatch(.*)", redirect: "/404", name: "notMatch", hidden: true },
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
