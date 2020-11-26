import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home'
import About from '../view/About'
import home1 from '@/view/home1'
import home2 from '@/view/home2'
import Detail from '@/view/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {path:'/',component:home1},
        {path:'home1',component:home1},
        {path:'home2',component:home2}
      ]
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/detail',name:'Detail', component:  Detail,
      beforeEnter:(to,from,next)=>{
        // console.log(to);
        // console.log(from);
         next()
      }
    }
  ]
})