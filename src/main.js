import './assets/bootstrap-reboot.css';
import './assets/Linearicons-Free.css';

import './plugins/element';

import Vue from 'vue';
import router from './router';
import store from './store';

import './assets/style.css';

import App from './App.vue';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App),
});

app.$mount('#app');
