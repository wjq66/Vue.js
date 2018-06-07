import $ from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './mock'
import echarts from 'echarts'

Vue.use(iView)
Vue.prototype.$echarts = 	echarts

new Vue({
  el: '#app',
  router,
  render:h => h(App)
})
