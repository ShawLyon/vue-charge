import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'
import chargeDetail from '@/views/chargeDetail/chargeDetail'
import chargehistory from '@/views/chargehistory/chargehistory'
import historyDesc from '@/views/chargehistory/children/historyDesc'
import login from '@/views/login/login'
import register from '@/views/register/register'
import myself from '@/views/myself/myself'
import myinfo from '@/views/myinfo/myinfo'
import mycharge from '@/views/mycharge/mycharge'
import stopCharge from '@/views/mycharge/children/stopCharge'
import setnickname from '@/views/setnickname/setnickname'
import forgetPwdStep1 from '@/views/forgetPwdStep1/forgetPwdStep1'
import forgetPwdStep2 from '@/views/forgetPwdStep2/forgetPwdStep2'
// import mapEleCar from '@/components/mapEleCar/mapEleCar' import mapSteamCar
// from '@/components/mapSteamCar/mapSteamCar'
import listEleCar from '@/components/listEleCar/listEleCar'
import listSteamCar from '@/components/listSteamCar/listSteamCar'

Vue.use(Router)

// 动画

const router = new Router({
  routes: [
    {
      path: '/',
      component: home,
      // meta: {   title: '首页' },
      children: [
        {
          path: '/',
          redirect: '/listEleCar'
        }, {
          path: '/listEleCar',
          component: listEleCar,
          meta: {
            title: '首页'
          }
        }, {
          path: '/listSteamCar',
          component: listSteamCar,
          meta: {
            title: '首页'
          }
        }
      ]
    }, {
      path: '/chargeDetail/:id',
      name: 'chargeDetail',
      // component: resolve =>
      // require(['views/chargeDetail/chargeDetail.vue'],resolve)
      component: chargeDetail,
      meta: {
        title: '充电桩详情'
      }
    }, {
      path: '/login',
      component: login,
      meta: {
        title: '登录'
      }
    }, {
      path: '/register',
      component: register,
      meta: {
        title: '注册'
      }
    }, {
      path: '/forgetPwdStep1',
      component: forgetPwdStep1,
      meta: {
        title: '验证身份'
      }
    }, {
      path: '/forgetPwdStep2',
      component: forgetPwdStep2,
      meta: {
        title: '修改登录密码'
      }
    }, {
      path: '/myself',
      component: myself,
      meta: {
        title: '我的'
      },
      
    }, {
      path: '/myself/myinfo',
      component: myinfo,
      children: [
        {
          path: 'setnickname',
          component: setnickname
        }
      ]
    }, {
      path: '/mycharge',
      component: mycharge,
      meta: {
        title: '我的充电'
      }
    }, {
      path: '/mycharge/stopCharge',
      component: stopCharge,
      meta: {
        title: '停止充电原因'
      }
    }, {
      path: '/chargehistory',
      component: chargehistory,
      meta: {
        title: '充电记录'
      }
    }, {
      path: '/chargehistory/historyDesc',
      component: historyDesc
    }
  ]
})
router.push('/')
export default router
