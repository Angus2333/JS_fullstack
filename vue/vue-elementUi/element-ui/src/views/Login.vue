<template>
  <div class="login">
    <div class="login-container wrap">
      <h2>旅梦后台管理系统</h2>
      <div class="wrap1">
        <el-input
         placeholder="请输入内容"
         prefix-icon="el-icon-user-solid"
         v-model="userName"
       ></el-input>
      </div>
       <div class="wrap2">
            <el-input placeholder="请输入密码" v-model="password" 
              prefix-icon="el-icon-unlock"
             ></el-input>
       </div>
       <el-button type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName:'',
      password:''
    }
  },
  methods:{
    login(){
      console.log('11');
      if(this.userName=='admin'&&this.password=='123456'){
        this.$router.push({name:'Home'})
      }
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: rgb(25, 199, 161);
}
h2{
  margin: 20px;
}
.login{
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
}
.login-container{
  text-align: center;
  width: 300px;
  height: 300px;
  box-shadow: 0px 0px 20px #999;
  border-radius: 10px;
}
.wrap1{
  margin-top: 50px;
  padding: 10px 50px;
}
.wrap2{
  padding: 10px 50px;
}
</style>