<template>
  <div class="home">
    <p>num: {{num}}</p>
    <p>
      <button @click="add">add</button>
    </p>
  </div>
</template>

<script>
import { addLog, app } from './home.js'
export default {
  data () {
    return {
      num: 1
    }
  },
  methods: {
    add () {
      this.num++
      console.log(this.num ** 2)
    }
  },
  created () {
    console.log('我是原生的')
  },
  mixins: [addLog],
  extends: app // 扩展
}
</script>

<style>

</style>
