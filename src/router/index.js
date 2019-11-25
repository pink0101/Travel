import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/pages/detail/Detail'
// ����� @  ֻ����src���Ŀ¼

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue') // �첽��������ķ�ʽ  ���ҳ�����������з�ʽ
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id', /* ��̬·�� ��ͷΪ /detail/ ð�ź������ ��ŵ�id���� */
      name: 'detail',
      component: Detail // �����������
    }
  ],
  scrollBehavior (to, from, savedPosition) { // ÿ���л�·�ɣ��µ�ҳ�涼չʾΪxΪ0 yΪ0
    return { x: 0, y: 0 }
  }
})
