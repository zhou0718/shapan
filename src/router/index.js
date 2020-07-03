import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../views/index'
import Test from '../views/login/loginPage'
import storage from "../utils/storage";
import store from '../store'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/order'
    },
    /*{
      path: '/login',
      name: "Login",
      component: () => import('../views/login/loginPage')
    },*/
    {
      path:'/index',
      component: Layout,

     /* redirect: '/order',*/
      children: [
        {
          // 子路由前加上 / 在 router-link to 可以直接 写 to = '/order',而且网页上显示的也只有/order,
          // 如果不加/ , router-link 得写 to = '/index/order',页面上显示得也是 /index/order
          path:'/order',
          name: 'Order',
          component: () => import('../views/order/order'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        /*
        {
          path: '/submit',
          name: 'Submit',
          component: () => import('../views/submit/Submit')
        },
        */
        {
          path:'/order/detail',
          name: 'Detail',
          component: () => import('../views/order/Detail'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path:'/earth',
          name: 'Earth',
          component: () => import('../views/order/earth'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/user',
          name: 'User',
          component: () => import('../views/user/User'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/user/detail',
          name: 'UserDetail',
          component: () => import('../views/user/UserDetail'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/website',
          name: 'Website',
          component: () => import('../views/website/Website'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/explore',
          name: 'Explore',
          component: () => import('../views/website/explore'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/statistics',
          name: 'Statistics',
          component: () => import('../views/website/statistics'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/website/detail',
          component: () => import('../views/website/WebsiteDetail'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/dot',
          name: 'Dot',
          component: () => import('../views/website/dot'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/demo',
          component: () => import('../views/website/Demo'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/proxy',
          name: 'Proxy',
          component: () => import('../views/proxy/Proxy'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/addrExplore',
          name: 'AddrExplore',
          component: () => import('../views/addr/addrExplore'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/addrStatistics',
          name: 'AddrStatistics',
          component: () => import('../views/addr/addrStatistics'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/addrView',
          name: 'AddrViews',
          component: () => import('../views/addr/addrView'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/serviceExplore',
          name: 'serviceExplore',
          component: () => import('../views/service/serviceExplore'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/serviceStatistics',
          name: 'ServiceStatistics',
          component: () => import('../views/service/serviceStatistics'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/serviceView',
          name: 'ServiceViews',
          component: () => import('../views/service/serviceView'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/localExplore',
          name: 'LocalExplore',
          component: () => import('../views/location/localExplore'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/localStatistics',
          name: 'LocalStatistics',
          component: () => import('../views/location/localStatistics'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },
        {
          path: '/localView',
          name: 'LocalViews',
          component: () => import('../views/location/localView'),
          meta:{
            title:'IPv6资产探测平台',
          },
        },

      ]
    },
    /*{
      path: '/login',
      name: 'Login',
      /!*component: () => import('../views/login/Login')*!/
       component: Test,
      // meta:{requireAuth:true}
    },*/
  /*  {
      path: '/home',
      name: 'Home',
      component: () => import('../views/home/Home')
    },
    {
      path: '/homelogin',
      name: 'Homelogin',
      component: () => import('../views/login/Login')
    },*/
    {
      path: '/submit',
      name: 'Submit',
      component: () => import('../views/submit/Submit')
    }


]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

/*if (storage.get('token')) {
  store.commit("set_token",storage.get("token"))
}
router.beforeEach((to,from,next) => {
  // 判断要去的路由有没有requireAuth
  if(to.matched.some(res => res.meta.requireAuth)){
    if(store.state.token) {
      next()
    }else{
      next({
        path:'/login',
        query:{redirect: to.fullPath}
      })
    }
  }
  else{
    next()
  }
})*/

export default router
