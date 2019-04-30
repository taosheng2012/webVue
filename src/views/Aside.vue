<template>
  <div>
    <transition name="fade">
      <div class="mask" v-show="isVerticalScreen && flagShowAside" @click="maskClick"></div>
    </transition>
    
    <transition name="slide">
      <div class="aside" v-show="flagShowAside">
        <div style="padding-top: 40px; text-align: center;">
          <span class="lnr lnr-bug" style="font-size: 80px; color: var(--color-main); margin: 0;"></span>
        </div>

        <div style="text-align: center; font-size: 20px; margin: 30px 0px 30px 0px;">
          Minimalism App
        </div>
        
        <el-menu :unique-opened="true" :router="true" style="width: 248px">
          <el-menu-item :index="menuList[0].path">
            <i :class="menuList[0].icon"></i>{{menuList[0].label}}
          </el-menu-item>
          
          <el-submenu v-for="item in menuList.slice(1)" :index="item.label">
            <template #title class="aaa">
              <i :class="item.icon"></i> <span>{{item.label}}</span>
            </template>
            
            <el-menu-item v-for="subitem in item.children" :index="subitem.path" style="padding-left: 50px;">{{subitem.label}}</el-menu-item>
          </el-submenu>
        </el-menu>
        
        <div class="footer">
          A Vue App<br>
          Copyright © 2019 John Yu
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: function() {
    return {
      menuList: [{
        label: 'Home',
        icon: 'lnr lnr-home',
        path: "/"
      }, {
        label: 'Web',
        icon: 'lnr lnr-cloud',
        children: [{
          label: 'HTML',
          path: "/about"
        }, {
          label: 'CSS',
          path: "/about"
        }, {
          label: 'JavaScript',
          path: "/about"
        }],
      }, {
        label: 'Server',
        icon: 'lnr lnr-keyboard',
        children: [{
          label: 'Node',
          path: "/vue"
        }, {
          label: 'Python',
          path: "/vue"
        }],
      }],
    }
  },
  methods: {
    maskClick() {
      this.$store.commit('setFlagShowAside', false);
    },
  },
  computed: {
    ...mapState([
      'isVerticalScreen', 'flagShowAside',
    ]),
  },
};
</script>

<style scoped>
.mask {
  position: fixed;
  z-index: 2000;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

  background-color: #0007;
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}

.aside {
  position: fixed;
  z-index: 2001;
  top: 0px;
  width: 250px;
  height: 100vh;
  
  border-right: 1px solid lightgrey;
  
  display: flex;
  flex-direction: column;

  background-color: white;
  overflow: auto;
  
  transition: left 0.3s;
  
}

.slide-enter, .slide-leave-to {
  left: -250px;
}

.slide-enter-to, .slide-leave {
  left: 0px;
}

.footer {
  margin-top: auto;
  
  width: 100%;
  
  font-size: 12px;
  text-align: center;
  padding: 50px 0px 20px 0px;
}

</style>
