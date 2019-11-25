import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/pages/detail/Detail'
// 这里的 @  只的是src这个目录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue') // 异步加载组件的方式  如果页面过大采用这中方式
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id', /* 动态路由 开头为 /detail/ 冒号后面参数 会放到id里面 */
      name: 'detail',
      component: Detail // 正常加载组件
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 每次切换路由，新的页面都展示为x为0 y为0
    return { x: 0, y: 0 }
  }
})
