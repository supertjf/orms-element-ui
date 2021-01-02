import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入字体图标
import './assets/fonts/iconfont.css'
//导入全局样式表
import './assets/css/global.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token')
  //最后必须返回return
  return config
})
// 可通过this.$http拿取axios
Vue.prototype.$http = axios

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
