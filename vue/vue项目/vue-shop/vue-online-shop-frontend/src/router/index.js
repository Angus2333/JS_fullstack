import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
//路由级别组件
import Home from '@/pages/Home.vue';
import Cart from '@/pages/Cart.vue';
//Admin
import Index from '@/pages/Admin.vue';
import New from '@/pages/admin/New';
import Products from "@/pages/admin/Products";
import Edit from "@/pages/admin/Edit"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      children:[
        {
          path:'/new',
          name:'New',
          component:New
        },
        {
          path:'',
          name:'Products',
          component:Products
        },
        {
          path:'/edit/:id',
          name:'Edit',
          component:Edit
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index
    }
  ]
})
