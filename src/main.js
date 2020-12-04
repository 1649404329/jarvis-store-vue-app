import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element-ui
import Element  from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
//引入axios
import axios from 'axios'
//引入自定义axios.js进行全局拦截
import "./axios"

import './assets/css/common.css'// 创建公共样式文件

Vue.config.productionTip = false
//添加使用element-ui
Vue.use(Element)
Vue.prototype.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
