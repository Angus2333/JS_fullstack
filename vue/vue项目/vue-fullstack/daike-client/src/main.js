import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from '../axios/index'
Vue.use(Vant);
Vue.config.productionTip = false
Vue.use(api) //use 会把vue当做实参传给api  必须得是install
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
