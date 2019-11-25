import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
// 这里的 @  只的是src这个目录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id', /* 动态路由 开头为 /detail/ 冒号后面参数 会放到id里面 */
      name: 'detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 每次切换路由，新的页面都展示为x为0 y为0
    return { x: 0, y: 0 }
  }
})
