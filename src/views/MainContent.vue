<template>
  <div :style="{marginLeft: !isVerticalScreen ? '250px' : null}">
    <div class="top-bar">
      <button class="navButton" v-if="isVerticalScreen" @click="navButtonClick">
        <i class="lnr lnr-menu"></i>
      </button>
    </div>

    <div style="padding: 15px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    navButtonClick() {
      this.$store.commit('setFlagShowAside', true);
    },
  },
  computed: {
    ...mapState([
      'isVerticalScreen', 'flagShowAside',
    ]),
  },

};
</script>

<style>
.top-bar {
  padding: 0px 15px;
  height: 40px;

  background-color: var(--color-main);
  box-shadow: 0px 0px 5px 1px var(--color-main);
}

.navButton {
  color: white;
  background-color: transparent;
  border: 1px solid #fff0;
  border-radius: 4px;
  
  line-height: 1;
  
  font-size: 26px;
  margin: 0px;
  padding: 5px 20px 5px 0px;
}

.navButton > .lnr {
  margin: 0px;
}

</style>
