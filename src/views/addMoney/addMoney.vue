<template>
  <div class="addMoney">
    <!-- <group> -->
    <x-input class="account" title="充值帐号" v-model="phone" is-type="china-mobile" placeholder="请输入您的手机号" placeholder-align="right" text-align="right"></x-input>
    <!-- </group> -->
    <section class="moneySum">
      <h3>充值金额</h3>
      <section class="money-option">
        <div class="item">
          <span :class="{active_item: itemSelect == '10'}" @click="itemSelect = '10'">10</span>
          <span :class="{active_item: itemSelect == '20'}" @click="itemSelect = '20'">20</span>
          <span :class="{active_item: itemSelect == '50'}" @click="itemSelect = '50'">50</span>
        </div>
        <div class="item">
          <span :class="{active_item: itemSelect == '100'}" @click="itemSelect = '100'">100</span>
          <span :class="{active_item: itemSelect == '200'}" @click="itemSelect = '200'">200</span>
          <span :class="{active_item: itemSelect == 'other'}" @click="itemSelect = 'other'">其他</span>
        </div>
      </section>
    </section>
    <!-- 提示  -->
    <section class="prompt">
      <span style="display: block">*提示:</span>
      <p>用户账户充值后暂不支持提现，更多详情查看《用户协议》。</p>
    </section>
    <footer class="footer">
      <x-button class="chargeMoney-btn" @click.native="goAddMoney">充值</x-button>
    </footer>
    <!-- 遮罩层  -->
    <transition name="fade">
      <bg-model v-show="payShow" @click.native="goAddMoney"></bg-model>
    </transition>
    <!-- 弹出层  -->
    <transition  name="chargelist">
      <add-money-pay v-show="payShow" :payShow.sync="payShow" :itemSelect="itemSelect"></add-money-pay>
    </transition>
  </div>
</template>
<script>
import { Group, XInput, XButton } from 'vux'
import BgModel from 'components/bgModel/bgModel'
import AddMoneyPay from 'components/AddMoneyPay/AddMoneyPay'
export default {
  components: {
    Group,
    XInput,
    XButton,
    BgModel,
    AddMoneyPay
  },
  data() {
    return {
      phone: '',
      itemSelect: '10',
      test: 'test',
      payShow: false
    }
  },
  methods: {
    goAddMoney() {
      this.payShow = !this.payShow
    }
  }

}
</script>
<style lang="less">
@import './addMoney.less';
@import '../../common/less/variable.less';
</style>


