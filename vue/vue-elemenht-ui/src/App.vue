<template>
  <div class="page">
     <p>
      <router-link to="/">首页</router-link>|
      <router-link to="/About">About</router-link>
     </p>
     <!-- 路由入口 -->
     <transition name="fade">
       <router-view></router-view>
     </transition>
  </div>
</template>
<script>




export default {
   data(){
     return{
       message:'hello vue'
     }
   },
   components:{
     
   },
   methods:{
   
   }
}
</script>

<style scoped>
  .page{
    text-align: center;
  }
  p{
    text-align: center;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 0.5s;
  }
  .fade-leave-active{
    opacity: 0;
    /* transition: opacity 0.5s; */
  }
  .fade-leave{
    opacity: 1;
  }
</style>