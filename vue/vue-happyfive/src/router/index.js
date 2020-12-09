import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
   { path: '/', component: ()=>import('@/views/home') },
   { path: '/item', component: ()=>import('@/views/item') }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
