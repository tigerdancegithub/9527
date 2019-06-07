export default {
  path: "/movie",
  component: () => import("@/views/movie"),
  children: [
    {
      path: "/movie/city",
      component: () => import("@/components/city")
    },
    {
      path: "/movie/nowplaying",
      component: () => import("@/components/nowPlaying")
    },
    {
      path: "/movie/comingSoon",
      component: () => import("@/components/comingSoon")
    },
    {
      path: "/movie/search",
      component: () => import("@/components/search")
    },
    //路由重新定向
    {
      path: "/movie",
      redirect: "/movie/nowplaying"
    }
  ]
};
