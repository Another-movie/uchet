import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "DefaultLayout",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About"),
    meta: {
      layout: "DefaultLayout",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ "../views/Login"),
    meta: {
      layout: "EmptyLayout",
    },
  },
  {
    path: "/registration",
    name: "Registration",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/Registration"),
    meta: {
      layout: "EmptyLayout",
    },
  },
  {
    path: "/current",
    name: "CurrentTasks",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/Registration"),
    meta: {
      layout: "EmptyLayout",
    },
  },
  {
    path: "/done",
    name: "doneTasks",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/Registration"),
    meta: {
      layout: "EmptyLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
