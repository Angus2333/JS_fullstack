<template>
  <div id="app">
   <p>{{this.$store.state.num}}</p> 
   <p>{{this.$store.getters.getNum}}</p> 
   <button @click="add">加一</button>
  </div>
</template>

<script>
export default {
  methods: {
    add(){
      // this.$store.commit('addNum',1)
      this.$store.dispatch('addNum',1)
    }
  }
}
</script>

<style>

</style>