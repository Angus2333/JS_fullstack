import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
   { path: '/', component: ()=>import('@/views/home') },
   { path: '/item', component: ()=>import('@/views/item') },
   { path: '/score', component: ()=>import('@/views/score') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
