<template>
  <div id="vueApp">
    <Aside />
    <MainContent />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Aside from './views/Aside.vue';
import MainContent from './views/MainContent.vue';

export default {
  name: 'app',
  components: {
    Aside,
    MainContent,
  },
  beforeUpdate() {
    return this.num;
  },

  data() {
    return {
      menuState: {
        unfolding: null,
        show: false,
      },
      msg: `Hello, world! ${new Date().toLocaleString()}`,
      show: true,
      num: 0,
    };
  },
  computed: {
    ...mapState([
      'isVerticalScreen', 'flagShowAside',
    ]),

  },
  methods: {
    getTime() {
      return Date.now();
    },
    leftMenuItemClick(item) {
      if (item.label !== this.menuState.unfolding) {
        this.menuState.unfolding = item.label;
      } else {
        this.menuState.unfolding = null;
      }
    },

  },
};
</script>

<style>
:root {
  /*ElementUI*/
  --color-main: #409EFF;
  --color-success: #67C23A;
  --color-warning: #E6A23C;
  --color-danger: #F56C6C;
  --color-info: #909399;
  
  --color-primary-text: #303133;
  --color-regular-text: #303133;
  --color-secondary-text: #303133;
  
  --size-title: 18px;
  --size-title-small: 16px;
  --size-body: 14px;
  
  --shadow-basic: 0 2px 4px rgba(0, 0, 0, .12);
  --shadow-light: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

body {
  /*font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;*/
}

.size16 {
  font-size: 16px;
}


ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

.lnr {
  margin-right: 15px;
}


</style>
