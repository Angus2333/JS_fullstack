<template>
   <div class="detail">
     {{$route.params.username}}个人信息
     <button @click="goBack">返回首页</button>
   </div>
</template>

<script>
export default {
   methods:{
     goBack(){
       //这里的this一定代表vue实例
       this.$router.push({name:'Home',params:{id:123}})
     }
   }
}
</script>

<style>

</style>