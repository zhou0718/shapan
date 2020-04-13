import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../views/index'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      component: Layout,
      redirect: '/order',
      children: [
        {
          path:'order',
          name: 'Order',
          component: () => import('../views/order/order'),
          children: [
            {
              path: 'test',
              name: 'Test',
              components: () => import ('../views/order/submenu')
            }
          ]
        }
      ]
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
