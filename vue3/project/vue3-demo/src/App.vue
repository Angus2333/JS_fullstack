<template>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>
import { computed, onMounted, reactive,ref } from 'vue'

export default {
  name: 'App',
  components: {
  
  },
  setup(){ //composition api的入口
    // const state=reactive({
    //   count:1
    // })
    const {state,double}=useCounter(1)
    let num = ref(1)
    // const double=computed(()=>{
    //   return state.count*2
    // })
    function add(){
      state.count++;
      num.value+=10
    }
    onMounted(()=>{

    })
    return {state,add,double,num}
  }
  
}
function useCounter(count){
  const state=reactive({
    count
  })
  const double=computed(()=>state.count*2)
  return {state,double}
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
