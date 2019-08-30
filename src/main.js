import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端click事件300ms 延迟问题
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import store from './store'
// 引入reset.css 来初始化  基础样式
import 'styles/reset.css'
// 解决二倍屏的问题
import 'styles/border.css'
// 字体样式文件的引入
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 解决移动端click事件300ms延迟问题
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})