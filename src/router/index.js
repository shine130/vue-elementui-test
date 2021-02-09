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
    meta: { title: "登录" },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/home",
    name: "home",
    redirect: "/index",
    meta: { title: "首页" },
    component: () => import("../views/layout/Home.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        meta: { title: "首页" },
        component: () => import("../views/layout/Index.vue"),
      },
      {
        path: "/stats",
        name: "stats",
        meta: { title: "数据统计" },
        component: () => import("../views/layout/Status.vue"),
      },
      {
        path: "/wms",
        name: "wms",
        meta: { title: "信息管理" },
        component: () => import("../views/layout/Wms.vue"),
        children: [
          {
            path: "/wms/list",
            name: "wmsList",
            meta: { title: "列表展示" },
            component: () => import("../views/layout/Wms.vue"),
          },
        ],
      },
      {
        path: "/user",
        name: "user",
        meta: { title: "用户管理" },
        component: () => import("../views/layout/User.vue"),
        children: [
          {
            path: "/user/list",
            name: "userList",
            meta: { title: "用户统计" },
            component: () => import("../views/layout/User.vue"),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes
})

//路由拦截
router.beforeEach(function(to,from,next){
  if(!sessionStorage.getItem('username')){
    if(to.path !== '/login'){
      next('/login');
    }
  };
  next();
})

export default router
