import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'
import chargeDtail from '@/views/chargeDetail/chargeDetail'
import chargeMap from '@/components/chargeMap/chargeMap'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {path: '',name: 'chargeMap',component: chargeMap}
      ]
    },
    {
      path: '/chargeDtail',
      name: 'chargeDtail',
      // component: resolve => require(['views/chargeDetail/chargeDetail.vue'],resolve)
      component: chargeDtail
    }
  ]
})
router.push('/')
export default router
