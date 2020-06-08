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
        },
        {
          path:'/earth',
          name: 'Earth',
          component: () => import('../views/order/earth'),
        },
        {
          path: '/user',
          name: 'User',
          component: () => import('../views/user/User'),
        },
        {
          path: '/user/detail',
          name: 'UserDetail',
          component: () => import('../views/user/UserDetail'),
        },
        {
          path: '/website',
          name: 'Website',
          component: () => import('../views/website/Website')
        },
        {
          path: '/explore',
          name: 'Explore',
          component: () => import('../views/website/explore')
        },
        {
          path: '/statistics',
          name: 'Statistics',
          component: () => import('../views/website/statistics')
        },
        {
          path: '/website/detail',
          component: () => import('../views/website/WebsiteDetail')
        },
        {
          path: '/dot',
          name: 'Dot',
          component: () => import('../views/website/dot')
        },
        {
          path: '/demo',
          component: () => import('../views/website/Demo')
        },
        {
          path: '/proxy',
          name: 'Proxy',
          component: () => import('../views/proxy/Proxy')
        },
        {
          path: '/addrExplore',
          name: 'AddrExplore',
          component: () => import('../views/addr/addrExplore')
        },
        {
          path: '/addrStatistics',
          name: 'AddrStatistics',
          component: () => import('../views/addr/addrStatistics')
        },
        {
          path: '/addrView',
          name: 'AddrViews',
          component: () => import('../views/addr/addrView')
        },
        {
          path: '/serviceExplore',
          name: 'serviceExplore',
          component: () => import('../views/service/serviceExplore')
        },
        {
          path: '/serviceStatistics',
          name: 'ServiceStatistics',
          component: () => import('../views/service/serviceStatistics')
        },
        {
          path: '/serviceView',
          name: 'ServiceViews',
          component: () => import('../views/service/serviceView')
        },
        {
          path: '/localExplore',
          name: 'LocalExplore',
          component: () => import('../views/location/localExplore')
        },
        {
          path: '/localStatistics',
          name: 'LocalStatistics',
          component: () => import('../views/location/localStatistics')
        },
        {
          path: '/localView',
          name: 'LocalViews',
          component: () => import('../views/location/localView')
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
