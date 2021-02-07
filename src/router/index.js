import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/layout/Home.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("../views/layout/Index.vue"),
      },
      {
        path: "/stats",
        name: "stats",
        component: () => import("../views/layout/Status.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes
})

export default router
