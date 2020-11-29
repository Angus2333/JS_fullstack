<template>
  <div id="app">
    <!-- <Hello :message="title" @sendData="getData" :fromHi="fromHi"></Hello>
    {{fromChild}}
    <Hi @sendHi="getHi"></Hi> -->
    <A></A>
    <B></B>
  </div>
</template>

<script>
// import Hello from '@/components/Hello'
// import Hi from '@/components/Hi'
import A from '@/components/A';
import B from '@/components/B';
export default {
  name: 'App',
  components: {
    // Hello,
    // Hi
    A,
    B
  },
  data () {
    return {
      title:'我爱我的祖国',
      fromChild:'',
      fromHi:''
    }
  },
  methods:{
    getData(e){
      // console.log(e);
      this.fromChild = e
    },
    getHi(e){
      this.fromHi = e
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
