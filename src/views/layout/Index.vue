<template>
  <div>
    <!-- 焦点图 -->
    <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item,i) in items" :key="i">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
  <!-- echart图表 -->
    <Chart type="bar" />
    <Chart type="line" />
    <Chart type="bar" />
  </div>
</template>
<script>
  import Chart from '@/components/chart.vue'
  export default {
    data() {
      return {
        items:[
          require('@/assets/logo.png'),
          require('@/assets/logo.png'),
          require('@/assets/logo.png'),
          require('@/assets/logo.png'),
          require('@/assets/logo.png'),
          require('@/assets/logo.png')
        ]
      };
    },
    components:{
      Chart
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>