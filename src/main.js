import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.js'
import './assets/font/iconfont.css'

import bmap from 'vue-baidu-map'
Vue.use(bmap,{
  ak:'8BB7F0E5C9C77BD6B9B655DB928B74B6E2D838FD'
})

import 'echarts-gl'
import 'echarts/map/js/world.js'
Vue.use(ElementUI)

/*import qs from 'qs'
Vue.prototype.$qs = qs*/

import './icons'
Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
