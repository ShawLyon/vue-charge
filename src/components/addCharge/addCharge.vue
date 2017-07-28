<template>
  <div class="addCharge" @touchmove.prevent>
    <header class="add-header">
      <h4>{{title}}</h4>
      <i class="fa fa-close" @click="hideModel"></i>
    </header>
    <section class="add-main step-one" v-if="stepShow">
      <div class="add-main-top">
        <h5>充电设备</h5>
        <p class="deviceNum">52334324234</p>
        <p>单价: 1.00元/小时</p>
      </div>
      <div class="add-main-cell">
        <cell title="充电端口:" :value="chargeport" @click.native="onClick"></cell>
        <x-number title="充电时间(小时)" v-model="chargetime" :step="0.5" :min="0.5"></x-number>
        </group>
      </div>
      <div class="add-main-bottom">
        <x-button class="submit-btn" @click.native="nextStep('充电支付')">{{btnText}}</x-button>
      </div>
    </section>
    <section class="add-main step-two" v-else>
      <div class="add-main-top">
        <p class="payNum">
          <i>0.50</i>元</p>
        <p>现金券 0元</p>
      </div>
      <div class="add-main-cell">
        <section class="paytype">
          <div class="yue-pay" @click="payWay = 1">
            <div class="payitem-left">
              <div class="alipay-icon"></div>
              <span>余额支付</span>
            </div>
            <span class="">
              <i class="fa fa-dot-circle-o dot-circle" :class="{'active-dot-circle': payWay == 1}"></i>
            </span>
          </div>
          <div class="weixin-pay" @click="payWay = 2">
            <div class="payitem-left">
              <div class="wepay-icon"></div>
              <span>微信支付</span>
            </div>
            <span class="">
              <i class="fa fa-dot-circle-o dot-circle" :class="{'active-dot-circle': payWay == 2}"></i>
            </span>
          </div>
        </section>
        <p class="payPoint">您已开启免密支付</p>
      </div>
      <div class="add-main-bottom">
        <x-button class="submit-btn" @click.native="submitPay">确认支付{{payCost}}元</x-button>
      </div>
    </section>
  </div>
</template>
<script>
import { Cell, XNumber, Group, XButton, Radio } from 'vux'
export default {
  data() {
    return {
      title: '增加充电时间',
      chargeport: 4,
      btnText: '立即充电',
      payCost: '100',
      stepShow: true,
      payWay: 1, //默认余额支付
      // chargetime: '',
      numberStep: 0.5,
      numberMin: 0.5
    }
  },
  components: {
    Cell,
    XNumber,
    Group,
    XButton,
    Radio
  },
  methods: {
    nextStep(title) {
      this.stepShow = !this.stepShow;
      this.title = title;
    },
    submitPay() {
      this.payWay == 1 ? alert('余额支付') : alert('微信支付')
    },
    hideModel() {
     this.$emit('update:show', false)  // 父子组件双向绑定，点击将false传到父组件，改变父组件status
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../common/less/variable.less';
@import './addCharge.less';
</style>