<template>
  <div class="cardChargeDesc">
    <section class="logo">
      <span>NO.36522466</span>
    </section>
    <section class="cardInfo">
      <ul>
        <li>用户名：{{username}}</li>
        <li>电话：{{phone}}</li>
        <li>电卡余额：{{cardMoney}}</li>
      </ul>
    </section>
    <section class="moneySum">
      <h3>充值金额</h3>
      <section class="money-option">
        <div class="item">
          <span :class="{active_item: itemSelect == '10'}" @click="showPlugin1(10)">10</span>
          <span :class="{active_item: itemSelect == '20'}" @click="showPlugin1(20)">20</span>
          <span :class="{active_item: itemSelect == '50'}" @click="showPlugin1(50)">50</span>
        </div>
        <div class="item">
          <span :class="{active_item: itemSelect == '100'}" @click="showPlugin1(100)">100</span>
          <span :class="{active_item: itemSelect == '200'}" @click="showPlugin1(200)">200</span>
          <!-- <span :class="{active_item: itemSelect == 'other'}" @click="itemSelect = 'other'">其他</span> -->
          <span :class="{active_item: itemSelect == 'other'}" @click="showPlugin2">其他</span>
        </div>
      </section>
    </section>
    <footer class="footer">
      <x-button class="chargeMoney-btn" @click.native="goAddMoney">充值</x-button>
    </footer>
    <!-- 遮罩层  -->
    <transition name="fade">
      <bg-model v-show="payShow" @click.native="goAddMoney"></bg-model>
    </transition>
    <!-- 弹出层  -->
    <transition name="chargelist">
      <add-money-pay v-show="payShow" :payShow.sync="payShow" :itemSelect="itemSelect" :selectMoney="selectMoney"></add-money-pay>
    </transition>
  </div>
</template>
<script>
import { XButton } from 'vux'
import BgModel from 'components/BgModel/BgModel'
import AddMoneyPay from 'components/AddMoneyPay/AddMoneyPay'
export default {
  data() {
    var _this = this;
    return {
      itemSelect: 10,
      selectMoney: 10,
      payShow: false,
      username: '小君',
      phone: 13265161094,
      cardMoney: 998
    }
  },
  components: {
    XButton,
    BgModel,
    AddMoneyPay
  },
  methods: {
    showPlugin1(money) {
      const _this = this; // 指当前vm
      _this.itemSelect = money;
      _this.selectMoney = money;
    },
    showPlugin2() {
      const _this = this; // 指当前vm
      this.itemSelect = 'other';
      this.$vux.confirm.prompt('', {
        title: '自定义充值金额',
        onShow() {
          console.log('promt show')
        },
        onHide() {
          console.log('prompt hide')
        },
        onCancel() {
          console.log('prompt cancel')
        },
        onConfirm(msg) {
          _this.selectMoney = msg;
        }
      })
    },
    goAddMoney() {
      this.payShow = !this.payShow
    }
  }
}
</script>
<style lang="less" scoped>
@import './cardChargeDesc.less';
@import '../../common/less/variable.less';
</style>
