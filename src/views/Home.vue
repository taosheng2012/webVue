<template>
  <div>
      <h2 class="main-title"><i class="lnr lnr-star"></i>前端框架影响力指数</h2>
      <!-- <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
        <el-card class="box flex1" style="min-width: 320px; max-width: 400px;" v-for="item in frameworkList" :header="item.name">
          <div>
            <span>Popularity </span>
            <el-rate class="float-r" disabled v-model="item.feature[0]" show-score score-template="{value} points"></el-rate>
          </div>
          
          <div>
            <span>Usability </span>
            <el-rate class="float-r" disabled v-model="item.feature[1]" show-score score-template="{value} points"></el-rate>
          </div>
        </el-card>
      </div> -->
      
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="item in frameworkList">
          <el-card :header="item.name" style="max-width: 450px; margin: 0px auto 20px;">
            <div>
              <span>Popularity </span>
              <el-rate class="float-r" disabled v-model="item.feature[0]" show-score score-template=" {value} points"></el-rate>
            </div>
            
            <div>
              <span>Usability </span>
              <el-rate class="float-r" disabled v-model="item.feature[1]" show-score score-template=" {value} points"></el-rate>
            </div>
          </el-card>
          
        </el-col>
        
      </el-row>
    
  </div>
</template>

<script>

export default {
  name: 'home',
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
          feature: [4, 4]
        }
      ]
    }
  },
  components: {
  },
};
</script>

<style scoped>
  .box {
    margin-bottom: 15px;
    margin-right: 15px;
  }
</style>