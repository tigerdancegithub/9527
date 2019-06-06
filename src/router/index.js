import Vue from "vue";
import Router from "vue-router";
import movieRouter from "./movie";
import mineRouter from "./mine";
import cinemaRouter from "./cinema";
Vue.use(Router);

export default new Router({
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    //路由重新定向
    {
      path: "/*", // path:'/*'===> 在路由地址不明确时重新定向
      redirect: "/movie"
    }
  ]
});
