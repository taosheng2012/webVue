import Vue from 'vue';
import Router from 'vue-router';

import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue';
import Browser from './views/Browser.vue';
import VueInfo from './views/VueInfo.vue';



Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: "home",
      component: Home,
    },
    {
      path: "/browser",
      name: "browser",
      component: Browser,
    },
    {
      path: "/vue",
      name: "vue",
      component: VueInfo,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    {
      path: '/about',
      name: 'about',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("To: ", to);
  console.log("From: ", from);
  
  if(to.name) {
    next()
  } else {
    next({name: "home"})
  }
});

export default router;
