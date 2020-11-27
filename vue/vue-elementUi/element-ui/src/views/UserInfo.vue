<template>
  <div class="user-info">
  {{value}}
  {{total}}
  <ul>
    <li v-for="(item,index) of newNews" :key="index">{{item.title}}</li>
  </ul>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      num:2,
      price:100,
      news: [
          { title: '"空降"不到一周 韩俊任吉林代省长 曾是刘鹤"副手"',data:'2020/10/1'},
          { title: '上门女婿成村霸，敲诈勒索故意纵火还打伤司法人员',data:'2020/11/12'},
          { title: 'X光显示肚子内有异物 港媒:黄之锋被关医院单人囚室',data:'2020/12/15'},
          { title: '特朗普突然出手，举行了史上最短一次记者会！',data:'2020/12/18'}
        ]
    }
  },
  computed: {
    value(){
      return this.num**4
    },
    total(){
      return this.num*this.price
    },
    newNews(){
      let news=this.news
      return news.reverse()
    }
  }
}
</script>

<style>

</style>