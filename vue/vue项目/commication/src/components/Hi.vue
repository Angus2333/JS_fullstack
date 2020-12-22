<template>
  <div class="hi">
    <button @click="sendHi">{{hi}}</button></div>
</template>

<script>
export default {
  data () {
    return {
      hi:'Hi',
      hiMsg:'我是Hi的数据'
    }
  },
  methods:{
    sendHi(){
     this.$emit('sendHi',this.hiMsg)
    }
  }
}
</script>

<style>

</style>