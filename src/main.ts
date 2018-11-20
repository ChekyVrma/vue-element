import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui' // 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css' // 引入ElementUI样式文件

import './assets/styles/global.css' // 引入全局样式文件

Vue.use(ElementUI, {
  size: 'medium', // 组件的默认尺寸
  zIndex: 3000 // 弹框的初始 z-index
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
