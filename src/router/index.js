import { createRouter, createWebHistory } from "vue-router";
import { demoRoutes } from "./demoRoutes";
import Home from "../views/Home.vue";

const mainRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/explorer",
    name: "Explorer",
    component: () =>
      import(/* webpackChunkName: "explorer" */ "../views/Explorer.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/demo",
    name: "Demo",
    component: () => import("@/layouts/demo/Demo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
];

const routes = mainRoutes.concat(demoRoutes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
