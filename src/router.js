import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import VueInfo from './views/VueInfo.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: "/vue",
      name: "vue",
      component: VueInfo,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  
  if(to.name) {
    next()
  } else {
    next(false)
  }
});

export default router;
