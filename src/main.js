// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import App from './App'
import VueScroller from 'vue-scroller'
import wechatTitle from 'vue-wechat-title'
import 'common/less/index.less'
import 'font-awesome/css/font-awesome.min.css'
import {ConfirmPlugin} from 'vux'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'

const options = {
  duration: '0.5', //转场动画时长，默认为0.3，单位秒
  firstEntryDisable: false, //值为true时禁用首次进入应用时的渐现动画，默认为false
  firstEntryDuration: '.6', //首次进入应用时的渐现动画时长，默认为.6
  forwardAnim: 'fadeIn', //前进动画，默认为fadeInRight
  backAnim: 'fadeIn', //后退动画，默认为fedeInLeft
  sameDepthDisable: false, //url深度相同时禁用动画，默认为false
  tabs: [
  ], //默认为[]，'name'对应路由的name,以实现类似app中点击tab页面水平转场效果，如tabs[1]到tabs[0]，会使用backAnim动画，tabs[1]到tabs[2]，会使用forwardAnim动画
  tabsDisable: false, //值为true时，tabs间的转场没有动画，默认为false
  shadow: false, //值为false，转场时没有阴影的层次效果
  disable: false, //禁用转场动画，默认为false，嵌套路由默认为true
}
Vue.use(vueg, router, options)
// Vue.use(vueg, router) // 路由切换动画插件
Vue.use(ConfirmPlugin) // 确认信息弹出框插件
Vue.use(VueScroller) // 滚动插件
Vue.use(wechatTitle) // 微信端title插件

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  render: h => h(App)
})
