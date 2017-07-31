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
          <!-- <span :class="{active_item: itemSelect == 'other'}" @click="itemSelect = 'other'">其他</span> -->
          <span :class="{active_item: itemSelect == 'other'}" @click="showPlugin">其他</span>
        </div>
      </section>
    </section>
    <!-- 提示  -->
    <section class="prompt">
      <span style="display: block">*提示:</span>
      <p>用户账户充值后暂不支持提现，更多详情查看<b @click="protocolShow = true">《用户协议》</b>。</p>
    </section>
    <footer class="footer">
      <x-button class="chargeMoney-btn" @click.native="goAddMoney">充值</x-button>
    </footer>
    <!-- 用户协议层  -->
    <transition name="fade">
      <bg-model v-show="protocolShow">
         <p class="user-protocol">尚亿源为电动车车载充电机提供交流电源的供电装置，同时具备计量计费功能，可以实现监视并控制被充电池状态。</p>
         <p class="user-protocol-close" @click="protocolShow = false"><i class="fa fa-close fa-3x"></i></p>
      </bg-model>
    
    </transition>
    <!-- 遮罩层  -->
    <transition name="fade">
      <bg-model v-show="payShow" @click.native="goAddMoney"></bg-model>
    </transition>
    <!-- 弹出层  -->
    <transition  name="chargelist">
      <add-money-pay v-show="payShow" :payShow.sync="payShow" :itemSelect="itemSelect" :selectMoney="selectMoney"></add-money-pay>
    </transition>
  </div>
</template>
<script>
import { Group, XInput, XButton } from 'vux'
import BgModel from 'components/bgModel/bgModel'
import AddMoneyPay from 'components/AddMoneyPay/AddMoneyPay'
const _this = this;
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
      selectMoney: '10',
      test: 'test',
      payShow: false,
      protocolShow: false
    }
  },
  methods: {
    goAddMoney() {
      this.payShow = !this.payShow
    },
    showPlugin() {
      this.itemSelect = 'other';
      this.$vux.confirm.prompt('', {
        title: '自定义充值金额',
        onShow () {
          console.log('promt show')
        },
        onHide () {
          console.log('prompt hide')
        },
        onCancel () {
          console.log('prompt cancel')
        },
        onConfirm (msg) {
          _this.selectMoney = msg;
         
          alert( _this.selectMoney)
        }
      })
    }
  }

}
</script>
<style lang="less">
@import './addMoney.less';
@import '../../common/less/variable.less';
</style>


