<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <div class="tap">
      <div class="tap-wrapper"  >
        <router-link to="/">商品</router-link>
      </div>
      <div class="tap-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tap-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/header/Heade'
import {getSeller} from '@/api/index'
import qs from 'query-string'
export default {
  components:{
    Header
  },
  data () {
    return {
      seller:{
        id:qs.parse(location.search).id
      }
    }
  },
  created(){
    getSeller({
      id:this.seller.id
    }).then((seller)=>{
      // console.log(seller);
      this.seller=Object.assign({},this.seller,seller)
    })
  },
  methods: {
    
  }
}
</script>
<style lang="stylus" scoped>
@import '/common/stylus/variable.styl';
.tap
  width: 100%;
  display flex
  justify-content center
  align-items center
  height: 36px;
  line-height: 36px;
  .tap-wrapper
    flex 1
    text-align: center;
    a
      width: 100%;
      display inline-block
      color #666
      text-decoration none
    .router-link-exact-active
      color $color-red
      border-bottom: 2px solid $color-red;
</style>
