<template>
  <div class="breadcumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,i) in list" :key="i">
              <router-link :to="item.path">{{item.meta.title}}</router-link>
            </el-breadcrumb-item>
          </el-breadcrumb>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list:[]
      };
    },
    created(){
      this.list = this.$route.matched;
    },
    watch:{
      $route(to,form){
        this.list = to.matched;
      }
    }
  }
</script>

<style>
  .el-breadcrumb{height: 60px; line-height: 60px; font-size: 16px;}
</style>