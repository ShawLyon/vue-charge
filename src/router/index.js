import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'
import chargeDtail from '@/views/chargeDetail/chargeDetail'
// import mapEleCar from '@/components/mapEleCar/mapEleCar'
// import mapSteamCar from '@/components/mapSteamCar/mapSteamCar'
import listEleCar from '@/components/listEleCar/listEleCar'
import listSteamCar from '@/components/listSteamCar/listSteamCar'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {path: '/', redirect: '/listEleCar'},    
        {path: '/listEleCar',component: listEleCar},
        {path: '/listSteamCar',component: listSteamCar},
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
