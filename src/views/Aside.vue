<template>
  <div>
    <transition name="fade">
      <div class="mask" v-show="flagShowMask" @click="maskClick"></div>
    </transition>
    
    <transition name="slide">
      <div class="aside" v-show="flagShowAside">
        <div style="padding-top: 40px; text-align: center;">
          <i class="lnr lnr-bug" style="font-size: 80px; color: var(--color-main); margin: 0;"></i>
        </div>

        <div style="text-align: center; font-size: 20px; padding: 30px 0px 30px 0px;">
          Minimalism App
        </div>
        
        <el-menu :unique-opened="true" :router="true" style="width: 99%">
          <template v-for="item in menuList">
            <el-menu-item v-if="item.path" :index="item.path" @click="menuItemClick" :key="item.label">
              <i :class="item.icon"></i>{{item.label}}
            </el-menu-item>
            
            <el-submenu v-else :index="item.label" :key="item.label">
              <template #title>
                <i :class="item.icon"></i>{{item.label}}
              </template>
              
              <el-menu-item v-for="subitem in item.children" :key="subitem.label" :index="subitem.path" style="padding-left: 50px;" @click="menuItemClick">
                {{subitem.label}}
              </el-menu-item>
            </el-submenu>
          </template>
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
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  created() {
    window.addEventListener('resize', (event) => {
      this.$store.commit('updateWindowSize', {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    });
  },
  data: function() {
    return {
      menuList: [
        {
          label: 'Home',
          icon: 'lnr lnr-home',
          path: "/"
        }, {
          label: 'Browser',
          icon: 'lnr lnr-earth',
          path: "/browser"
        }, {
          label: 'Web',
          icon: 'lnr lnr-cloud',
          children: [{
            label: 'HTML',
            path: "/html"
          }, {
            label: 'CSS',
            path: "/css"
          }, {
            label: 'JavaScript',
            path: "/js"
          }],
        }, {
          label: 'Server',
          icon: 'lnr lnr-keyboard',
          children: [{
            label: 'Node',
            path: "/node"
          }, {
            label: 'Python',
            path: "/py"
          }],
        }, {
          label: "About",
          icon: "lnr lnr-heart",
          path: "/about"
        }
      ],
    }
  },
  computed: {
    flagShowMask: function() {
      return this.flagFloatAside && this.flagShowAside
    },
    ...mapState(["flagShowAside"]),
    ...mapGetters(["flagFloatAside"]),
  },
  watch: {
    flagFloatAside: function(newVal, oldVal) {
      if(newVal) {
        this.setFlagShowAside(false)
      } else {
        this.setFlagShowAside(true)
      }
      
    }
  },
  methods: {
    maskClick() {
      this.setFlagShowAside(false)
    },
    menuItemClick(menuItem) {
      if(this.flagFloatAside) {
        this.setFlagShowAside(false)
      }
    },
    ...mapMutations(["setFlagShowAside"]),
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
  transition: opacity 0.4s;
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
  top: 0;
  bottom: 0;
  width: 250px;
  
  border-right: 1px solid lightgrey;
  
  display: flex;
  flex-direction: column;

  background-color: white;
  overflow: auto;
  
  transition: left 0.4s;
  
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
  
  color: var(--color-secondary-text);
  font-size: 12px;
  text-align: center;
  padding: 50px 0px 30px 0px;
}

</style>
