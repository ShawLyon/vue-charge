// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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

Vue.use(vueg,router) // 路由切换动画插件
Vue.use(ConfirmPlugin) // 确认信息弹出框插件
Vue.use(VueScroller)  // 滚动插件
Vue.use(wechatTitle)  // 微信端title插件

FastClick.attach(document.body)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  store,
  template: '<App/>',
  components: {App},
  render: h => h(App)
})
