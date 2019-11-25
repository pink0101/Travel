import Vue from 'vue'
import App from './App'
// router下面的index 文件  控制页面之间跳转的路由
import router from './router'
// 解决移动端click事件300ms 延迟问题
import fastClick from 'fastclick'
// 引入vue-awesome-swiper 插件 来提供轮播图的功能
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入写有 vuex 的文件
import store from './store'
// 引入reset.css 来初始化  基础样式
import 'styles/reset.css'
// 解决二倍屏的问题
import 'styles/border.css'
// 字体样式文件的引入
import 'styles/iconfont.css'
// 要使用vue-awesome-swiper 插件 还要引入swiper.css
import 'swiper/dist/css/swiper.css'
// 支持promise  有的浏览器不支持 就安装这个包
import 'babel-polyfill'

// 为false时会不显示生产模式的消息
Vue.config.productionTip = false

// 解决移动端click事件300ms延迟问题
fastClick.attach(document.body)

// 需要通过Vue.use 来挂载VueAwesomeSwiper这个插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})