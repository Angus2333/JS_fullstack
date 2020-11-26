import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false


new Vue({
  router,
  //APP会到render函数去编译，编译成浏览器读得懂的代码（html,js,css）
  render: h => h(App),
}).$mount('#app')
