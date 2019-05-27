<template>
<div>
  <h2 class="main-title"><Icon type="star" />前端框架影响力指数</h2>
  <div class="flex">
    <div class="flexItem xs-1 sm-1 md-1 lg-2 xl-2" v-for="item in frameworkList" :key="item.name">
      <el-card :header="item.name" style="max-width: 400px;" class="flexStretch">
        <div>
          <span>Popularity </span>
          <el-rate class="float-r" disabled v-model="item.feature[0]" show-score score-template=" {value} points"></el-rate>
        </div>

        <div>
          <span>Usability </span>
          <el-rate class="float-r" disabled v-model="item.feature[1]" show-score score-template=" {value} points"></el-rate>
        </div>
      </el-card>
    </div>
  </div>
  
  <h2 class="main-title"><Icon type="star" />Web Browser市场份额</h2>
  <el-row :gutter="20">
    <el-col :xs="12" :sm="12" :md="8" :lg="6" v-for="item in browserList" :key="item.name">
      <el-card :header="item.name" style="max-width: 300px; margin: 0px auto 20px;">
        <div style="text-align: center;">
          <el-progress :percentage="item.share" type="circle" :color="item.color"></el-progress>
        </div>
      </el-card>
      
    </el-col>
  </el-row>
  <p class="body" style="padding-left: 5px ">
    <b style="color: red;">*</b> Data from <a href="https://tongji.baidu.com/data/browser" target="_blank"><Icon type="link" style="margin: 0px;"></Icon> 百度统计</a>
  </p>
  
</div>
</template>


<script>
import Icon from '@/components/Icon.vue';

export default {
  data: function() {
    return {
      frameworkList: [
        {
          name: "React",
          feature: [5, 4]
        },
        {
          name: "Vue",
          feature: [4, 5]
        },
        {
          name: "Angular",
          feature: [3, 3]
        },
        {
          name: "jQuery",
          feature: [4, 3]
        }
      ],
      browserList: [
        {
          name: "Chrome",
          share: 46,
        },
        {
          name: "IE",
          share: 20,
          color: "#8e71c7"
        },
        {
          name: "Firefox",
          share: 5,
          color: "green"
        },
        {
          name: "Safari",
          share: 2,
          color: "red"
        },
        
      ]
      
    }
  },
  components: {
    Icon,
  },
};
</script>


<style scoped>

</style>