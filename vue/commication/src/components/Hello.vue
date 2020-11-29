<template>
  <div class="hello">{{message}}
    <hr/>
    <button v-on:click="send">发送</button>
    {{fromHi}}
  </div>
</template>

<script>
export default {
  props:['message','fromHi'],
  data () {
    return {
      msg:'好好刷算法！Hello'
    }
  },
  methods:{
    send(){
      this.$emit('sendData',this.msg)
    }
  }
}
</script>

<style>
.hello{
  color: red;
  font-size: 20px;
  margin: 0 auto;
}
</style>