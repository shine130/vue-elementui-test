<template>
 <el-aside width="220px">
      <el-menu
      :default-active="$route.path" exact
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      >
      <NavItem v-for="(v,i) in items" :key="i" :basePath="v.url" :item="v"  />

    </el-menu>
  </el-aside>
</template>
<script>
import NavItem from './NavItem.vue'
  export default {
    data() {
      return {
        items:[
          {
            name:'首页',
            url:'/index'
          },
          {
            name:'数据统计',
            url:'/stats'
          },
          {
            name:'信息管理',
            url:'/wms',
            child:[
              {
                name:'列表展示',
                url:'/wms/list'
              }
            ]
          },
          {
            name:'用户管理',
            url:'/user',
            child:[
              {
                name:'用户统计',
                url:'/user/list'
              }
            ]
          },

        ]
      };
    },
    components:{
      NavItem
    },
    mounted(){
        // this.getNav(); 
      },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getNav(){
            // 请求接口
            this.$http.get('/get_nav').then(res => {
              let {code,result} = res.data;
              if(code == "200"){
                this.items = result;
              }
            })
         
      }
    },
  }
</script>

<style>

</style>