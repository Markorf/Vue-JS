import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/stocks",
      name: "stocks",
      component: () => import("./views/Stocks.vue")
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("./views/Portfolio.vue")
    }
  ]
});
