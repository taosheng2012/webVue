import Vue from 'vue';
import Vuex from 'vuex';

import config from "./user"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    flagShowAside: window.innerWidth > config.floatAsidePoint ? true : false,
  },
  getters: {
    flagFloatAside: function(state, getters) {
      return state.innerWidth < config.floatAsidePoint
    },
  },
  mutations: {
    updateWindowSize(state, payload) {
      state.innerWidth = payload.innerWidth
      state.innerHeight = payload.innerHeight
    },
    setFlagShowAside(state, payload) {
      state.flagShowAside = payload;
    },
  },
  actions: {

  },
});

export default store
