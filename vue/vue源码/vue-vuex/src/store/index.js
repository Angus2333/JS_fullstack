import Vue from 'vue'
import Vuex from './myVuex.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:0,
    
  },
  getters: {
    getNum:(state)=>{
      return state.num+10
    }
  },
  mutations: {
    addNum:function(state,arg){
      state.num+=arg
    }
  },
  actions: {
    actionAdd(context){
      context.commit('addNum',5)
    }
  },
  modules: {
  }
})
