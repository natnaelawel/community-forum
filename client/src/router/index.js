import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginToken from '../views/LoginToken.vue';
import LoginError from '../views/LoginError.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login/token/:token",
    name: "login-token",
    component: LoginToken
  },
  {
    path: "/login/error/:error",
    name: "login-error",
    component: LoginError
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
