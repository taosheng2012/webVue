<template>
  <div>
    <Aside />
    
    <div :style="{marginLeft: flagFloatAside ? null : '250px'}">
      <div class="top-bar">
        <button class="nav-button" v-if="flagFloatAside" @click="navButtonClick">
          <i class="lnr lnr-menu"></i>
        </button>
      </div>

      <router-view style="padding: 15px;"></router-view>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import Aside from './views/Aside.vue';

export default {
  computed: {
    ...mapState(['flagShowAside']),
    ...mapGetters(["flagFloatAside"]),
  },
  methods: {
    navButtonClick() {
      this.$store.commit('setFlagShowAside', true);
    },
  },
  components: {
    Aside,
  },
};
</script>

<style scoped>
.top-bar {
  padding: 0px 15px;
  height: 40px;

  background-color: var(--color-main);
  box-shadow: 0px 0px 5px 1px var(--color-main);
}

.nav-button {
  color: white;
  background-color: transparent;
  border: 1px solid #fff0;
  border-radius: 4px;
  
  line-height: 1;
  
  font-size: 26px;
  margin: 0px;
  padding: 5px 20px 5px 0px;
}

.nav-button > .lnr {
  margin: 0px;
}
</style>
