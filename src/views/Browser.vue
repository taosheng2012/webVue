<template>
  <div>
    <h2 class="main-title"><i class="lnr lnr-star"></i>Browser Information</h2>
    <div class="flex">
      <div class="flexItem xs-1 sm-1 md-2 lg-3 xl-4" v-for="item in propList" :key="item.name">
        <el-card :header="item.name" class="flexStretch" style="max-width: 400px;">
          {{item.value}}
        </el-card>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Icon from '@/components/Icon.vue';

export default {
  data: function() {
    return {
      
    }
  },
  computed: {
    propList: function() {
      return [
        {
          name: "Current Platform",
          value: navigator.platform
        },
        {
          name: "Preferred Language",
          value: navigator.language
        },
        {
          name: "Screen Size (in CSS Pixel)",
          value: this.innerWidth + " × " + this.innerHeight
        },
        {
          name: "Screen Pixel Ratio",
          value: window.devicePixelRatio,
        },
        {
          name: "User Agent",
          value: navigator.userAgent
        }
      ]
    },
    ...mapState([
      'innerWidth', 'innerHeight',
    ]),
  },
  components: {
    // Icon,
  },
};
</script>


<style scoped>

</style>