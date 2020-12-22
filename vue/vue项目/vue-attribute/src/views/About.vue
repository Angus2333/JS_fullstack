<template>
  <div class="about">
    <p>推荐穿衣:{{suggest}}</p>
    <p>当前温度:{{temperture.num}}</p>
    <div>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      temperture: {
        num: 9
      },
      suggest: ''
    }
  },
  methods: {
    add () {
      this.temperture.num += 5
    },
    reduce () {
      this.temperture.num -= 5
    }
  },
  computed: {
  },
  watch: {
    temperture: {
      immediate: true,
      handler (newVal, oldVal) {
        if (newVal.num <= -1) {
          this.suggest = '羽绒服'
        } else if (newVal.num < 14) {
          this.suggest = '棉袄'
        } else if (newVal.num < 24) {
          this.suggest = '夹克'
        } else {
          this.suggest = '短袖'
        }
      },
      deep: true
    }
  }
}
</script>

<style>

</style>
