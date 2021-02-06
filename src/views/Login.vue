<template>
  <div class="login_page">
    <h1>登录页</h1>
    <div class="login_box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="ruleForm.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm:{
          name:'admin',
          pwd:'admin'
        },
        rules:{
          name: [
            { required: true, message: '请输入用户', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      login(formName){ //登录
       this.$refs[formName].validate((valid) => {
          if (valid) {
            let {name,pwd} = this.ruleForm;
            if(name == 'admin' && pwd == 'admin'){
              //缓存
              sessionStorage.setItem('username',name);
              //跳转
              this.$router.push('/home');
            }else{
              alert('用户名&密码不匹配')
            }
           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
  }
</script>

<style>
.login_page h1{text-align: center;}
.login_box{width: 360px; margin:0 auto;}
</style>
