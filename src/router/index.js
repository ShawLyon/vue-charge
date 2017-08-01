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
const cash = resolve => require(['@/views/cash/cash'], resolve) //
const cardCharge = resolve => require(['@/views/cardCharge/cardCharge'], resolve) //电卡充值
const cardChargeDesc = resolve => require(['@/views/cardChargeDesc/cardChargeDesc'], resolve) //电卡充值详情
const cardLoss = resolve => require(['@/views/cardLoss/cardLoss'], resolve) // 电卡挂失
const cardLossDesc = resolve => require(['@/views/cardLossDesc/cardLossDesc'], resolve) // 电卡挂失详情
const busineCooper = resolve => require(['@/views/busineCooper/busineCooper'], resolve) //商务合作
const news = resolve => require(['@/views/news/news'], resolve) //消息
const useHelp = resolve => require(['@/views/useHelp/useHelp'], resolve) // 使用帮助
const setting = resolve => require(['@/views/setting/setting'], resolve) // 设置
const addMoney = resolve => require(['@/views/addMoney/addMoney'], resolve)
const stopCharge = resolve => require(['@/views/mycharge/children/stopCharge'], resolve) //停止充电
const setnickname = resolve => require(['@/views/setnickname/setnickname'], resolve) //设置昵称
const forgetPwdStep1 = resolve => require(['@/views/forgetPwdStep1/forgetPwdStep1'], resolve) //忘记密码step1
const forgetPwdStep2 = resolve => require(['@/views/forgetPwdStep2/forgetPwdStep2'], resolve) //忘记密码step2
const listEleCar = resolve => require(['@/components/listEleCar/listEleCar'], resolve) //电动车列表
const listSteamCar = resolve => require(['@/components/listSteamCar/listSteamCar'], resolve) //汽车列表

Vue.use(Router)

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
      path: '/myself/cash',
      component: cash,
      meta: {
        title: '现金券'
      }
    }, {
      path: '/myself/cardCharge',
      component: cardCharge,
      meta: {
        title: '电卡充值'
      },
      children: [
        {
          path: 'cardChargeDesc',
          component: cardChargeDesc
        }
      ]
    }, {
      path: '/myself/cardLoss',
      component: cardLoss,
      meta: {
        title: '电卡挂失'
      },
      children: [
        {
          path: 'cardLossDesc',
          component: cardLossDesc
        }
      ]
    }, {
      path: '/myself/busineCooper',
      component: busineCooper,
      meta: {
        title: '商务合作'
      }
    }, {
      path: '/myself/news',
      component: news,
      meta: {
        title: '消息'
      }
    }, {
      path: '/myself/useHelp',
      component: useHelp,
      meta: {
        title: '使用帮助'
      }
    }, {
      path: '/myself/setting',
      component: setting,
      meta: {
        title: '设置'
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
