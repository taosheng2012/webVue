import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const isVerticalScreen = window.innerHeight > window.innerWidth;

export default new Vuex.Store({
  state: {
    isVerticalScreen,
    flagShowAside: !isVerticalScreen,
  },
  getters: {
    
  },
  mutations: {
    toggleOrientation(state, payload) {
      state.isVerticalScreen = !state.isVerticalScreen;
      
      if(state.isVerticalScreen) state.flagShowAside = false
      else state.flagShowAside = true
    },
    setFlagShowAside(state, payload) {
      state.flagShowAside = payload;
    },

  },
  actions: {

  },
});
