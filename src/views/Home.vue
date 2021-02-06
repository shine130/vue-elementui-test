<template>
  <div class="home_page">
    <el-container>
      <!-- 左侧导航 -->
      <Nav />
  <el-container>
    <!-- 右侧头部 -->
    <el-header>
      <el-button type="primary" class="ex_button" @click="logout">退出</el-button>
      <!-- 面包屑 -->
      <Breadcumb />
    </el-header>
    <!-- 右侧主体区域 -->
    <el-main>Main</el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Breadcumb from '@/components/Breadcumb.vue'

export default {
  name: 'Home',
  methods: {
      logout(){
        this.$router.push('/login');
        sessionStorage.removeItem('username');
        console.log('退出登录')
      }
    },
  components:{
    Nav,
    Breadcumb
  }
}
</script>
<style>
.el-container{min-height: 100vh;}
 .el-header, .el-footer {
    background-color: #ddd;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
    overflow: hidden;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu{border-right: 0;}

  .ex_button{float: right; margin-top: 8px;}
</style>

