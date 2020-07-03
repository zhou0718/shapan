import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.js'
import './assets/font/iconfont.css'


/*import bmap from 'vue-baidu-map'
Vue.use(bmap,{
  ak:'PlhFWpA02aoURjAOpnWcRGqw7AI8EEyO'
})*/

import 'echarts-gl'
import 'echarts/map/js/world.js'
Vue.use(ElementUI)

// 动态改变页面标题，根据 router/index.js meta下的title动态改变
/*router.beforeEach((to, from, next) => {
  /!* 路由发生变化修改页面title *!/
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})*/

/*import qs from 'qs'
Vue.prototype.$qs = qs*/

import './icons'
Vue.config.productionTip = true
document.title = 'IPv6资产探测平台'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
