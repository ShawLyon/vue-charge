// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import App from './App'
import VueScroller from 'vue-scroller'
import wechatTitle from 'vue-wechat-title'
import 'font-awesome/css/font-awesome.min.css'
import 'common/less/index.less'
import {ConfirmPlugin} from 'vux'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'

Vue.use(vueg,router)
Vue.use(ConfirmPlugin)
Vue.use(VueScroller)
Vue.use(wechatTitle)

FastClick.attach(document.body)

Vue.config.productionTip = false
/* router切换动画 */



/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  store,
  template: '<App/>',
  components: {App},
  render: h => h(App)
})
