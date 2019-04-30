import './assets/bootstrap-reboot.css';
import './assets/Linearicons-Free.css';

import './plugins/element';

import Vue from 'vue';
import router from './router';
import store from './store';

import App from './App.vue';

import './assets/style.css';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    window.addEventListener('resize', (event) => {
      if (store.state.isVerticalScreen && window.innerWidth > window.innerHeight + 10) {
        store.commit('toggleOrientation');
      }
      
      if (!store.state.isVerticalScreen && window.innerHeight > window.innerWidth + 10) {
        store.commit('toggleOrientation');
        
      }
      
    });
  },
});

app.$mount('#app');
