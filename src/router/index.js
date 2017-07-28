import Vue from 'vue'
import Router from 'vue-router'
const home = resolve => require(['@/views/home/home'], resolve)
const chargeDetail = resolve => require(['@/views/chargeDetail/chargeDetail'], resolve)
const chargehistory = resolve => require(['@/views/chargehistory/chargehistory'], resolve)
const historyDesc = resolve => require(['@/views/chargehistory/children/historyDesc'], resolve)
const login = resolve => require(['@/views/login/login'], resolve)
const register = resolve => require(['@/views/register/register'], resolve)
const myself = resolve => require(['@/views/myself/myself'], resolve)
const myinfo = resolve => require(['@/views/myinfo/myinfo'], resolve)
const mycharge = resolve => require(['@/views/mycharge/mycharge'], resolve)
const chargeRecord = resolve => require(['@/views/chargeRecord/chargeRecord'], resolve)
const myWallet = resolve => require(['@/views/myWallet/myWallet'], resolve)
const addMoney = resolve => require(['@/views/addMoney/addMoney'], resolve)
const stopCharge = resolve => require(['@/views/mycharge/children/stopCharge'], resolve)
const setnickname = resolve => require(['@/views/setnickname/setnickname'], resolve)
const forgetPwdStep1 = resolve => require(['@/views/forgetPwdStep1/forgetPwdStep1'], resolve)
const forgetPwdStep2 = resolve => require(['@/views/forgetPwdStep2/forgetPwdStep2'], resolve)
const listEleCar = resolve => require(['@/components/listEleCar/listEleCar'], resolve)
const listSteamCar = resolve => require(['@/components/listSteamCar/listSteamCar'], resolve)
// import home from '@/views/home/home'
// import chargeDetail from '@/views/chargeDetail/chargeDetail'
// import chargehistory from '@/views/chargehistory/chargehistory'
// import historyDesc from '@/views/chargehistory/children/historyDesc'
// import login from '@/views/login/login'
// import register from '@/views/register/register'
// import myself from '@/views/myself/myself'
// import myinfo from '@/views/myinfo/myinfo'
// import mycharge from '@/views/mycharge/mycharge'
// import chargeRecord from '@/views/chargeRecord/chargeRecord'
// import myWallet from '@/views/myWallet/myWallet'
// import addMoney from '@/views/addMoney/addMoney'
// import stopCharge from '@/views/mycharge/children/stopCharge'
// import setnickname from '@/views/setnickname/setnickname'
// import forgetPwdStep1 from '@/views/forgetPwdStep1/forgetPwdStep1'
// import forgetPwdStep2 from '@/views/forgetPwdStep2/forgetPwdStep2'
// import listEleCar from '@/components/listEleCar/listEleCar'
// import listSteamCar from '@/components/listSteamCar/listSteamCar'

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
          name: 'listEleCar',
          meta: {
            title: '首页'
          }
        }, {
          path: '/listSteamCar',
          component: listSteamCar,
          name: 'listSteamCar',
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
      name: 'login',
      meta: {
        title: '登录'
      }
    }, {
      path: '/register',
      component: register,
      name: 'register',
      meta: {
        title: '注册'
      }
    }, {
      path: '/forgetPwdStep1',
      component: forgetPwdStep1,
      name: 'forgetPwdStep1',
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
      }
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
      path: '/myself/mycharge',
      component: mycharge,
      meta: {
        title: '我的充电'
      }
    }, {
      path: '/myself/chargeRecord',
      component: chargeRecord,
      meta: {
        title: '充值记录'
      }
    }, {
      path: '/myself/myWallet',
      component: myWallet,
      meta: {
        title: '我的钱包'
      }
    }, {
      path: '/addMoney',
      component: addMoney,
      meta: {
        title: '钱包充值'
      }
    }, {
      path: '/myself/mycharge/stopCharge',
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
