// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// 请求ajax 2017-05-05
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.use(ElementUI)
Vue.config.productionTip = false

// 注册组件
Vue.filter('keepTwo',function(val){
  return val.toFixed(2)
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


