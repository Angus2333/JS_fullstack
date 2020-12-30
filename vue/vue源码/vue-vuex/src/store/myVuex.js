let Vue
class Store {
  constructor(options) {
    // this.state = options.state || {}
    this.vm = new Vue({  //使state成为响应式
      data: {
        state: options.state
      }
    })
    let getters=options.getters||{}
    this.getters={}
    //拿到options.getters里面所有的key
    //把里面所有的函数都添加到this.getters
    //当取用某个函数的时候，可以直接拿函数名出来用，不用打括号
    Object.keys(getters).forEach(getterName => {
      // this.getters[getterName] = getters[getterName];
      Object.defineProperty(this.getters, getterName, {
        get: () => {
          return getters[getterName](this.state);
        }
      })
    })
    let mutations=options.mutations
    this.mutations={}
    Object.keys(mutations).forEach(mutationsName => {
      this.mutations[mutationsName] = (arg)=>{
         mutations[mutationsName](this.state,arg)
      }
    })
    let actions=options.actions
    this.actions={}
    Object.keys(actions).forEach(actionsName => {
      this.actions[actionsName] = (arg)=>{
        actions[actionsName](this,arg)
      }
    })
  }
  get state(){
    return this.vm.state  //避免这样写 this.$store.state.vm.num
  }
  commit(method,arg){
    this.mutations[method](arg)
  }
  dispatch(method,arg){
    this.mutations[method](arg)
  }
   
}

let install = function (vue) {
  Vue=vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store
      } else {
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
}

let Vuex = {
  Store,
  install
}

export default Vuex