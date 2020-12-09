import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
  count:1
}
const mutations= {
  add(state,num){
    state.count+=num
  },
  reduce(state){
    state.count--
  }
}
const getters= {
  newCount:(state)=>{
     return state.count**2
  }
}
const actions= {
  addAction(context,n){
    setTimeout(()=>{
      context.commit('add',n)
    },3000)
    console.log('wwwww');
  }
}
export default new Vuex.Store({
  state:state,
  mutations,
  getters,
  actions
})