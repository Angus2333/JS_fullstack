<template>
  <div class="count">
    <h3>{{$store.state.count}}</h3>
    <h2>{{count}}</h2>
    <h1>{{newCount}}</h1>
    <p>
      <button @click="addAction(10)" style="backgroundColor:green;width:100px">add</button>
      <button @click="reduce" style="backgroundColor:red;width:100px">reduce</button>
    </p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  computed:{
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  },
  data () {
    return {
      msg:''
    }
  },
  methods: {
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction'])
  }
}
</script>

<style>

</style>