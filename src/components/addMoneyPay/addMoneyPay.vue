<template>
  <div class="addCharge" @touchmove.prevent>
    <header class="add-header">
      <h4>{{title}}</h4>
      <i class="fa fa-close" @click="hideModel"></i>
    </header>
    <section class="add-main step-two">
      <div class="add-main-top">
        <p class="payNum">
          <i>{{itemSelect}}</i>元</p>
        <p>钱包充值</p>
      </div>
      <div class="add-main-cell">
        <section class="paytype">
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
      </div>
      <div class="add-main-bottom">
        <x-button class="submit-btn" @click.native="submitPay">确认支付{{itemSelect}}元</x-button>
      </div>
    </section>
  </div>
</template>
<script>
import { XButton } from 'vux'
export default {
  
  props: ['itemSelect'], // 选择充值的金额
  data() {
    return {
      title: '充值支付',
      payWay: 2, //默认余额支付
    }
  },
  components: {
    XButton,

  },
  methods: {
    nextStep(title) {
      this.stepShow = !this.stepShow;
      this.title = title;
    },
    submitPay() {
      alert(this.itemSelect)
      // this.payWay == 1 ? alert('余额支付') : alert('微信支付')
    },
    hideModel() {
      this.$emit('update:payShow', false)  // 父子组件双向绑定，点击将false传到父组件，改变父组件status
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../common/less/variable.less';
@import './addMoneyPay.less';
</style>