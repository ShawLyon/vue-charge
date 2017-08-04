<template>
  <div class="payPwd">
    <group>
      <cell title="免密支付" is-link @click.native="pswSwitch">
        <div slot="value">
          <span v-if="this.flag">开启</span>
          <span v-else>关闭</span>
        </div>
      </cell>
    </group>
    <group>
      <cell title="更改支付密码" is-link link="/myself/setting/payPwd/"></cell>
    </group>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import router from 'router'
import { Group, Cell } from 'vux'
export default {
  data() {
    return {
      flag: true
    }
  },
  components: {
    Group,
    Cell
  },
  methods: {
    pswSwitch() {
      router.push('/myself/setting/payPwd/freePayment');
      // router.push('/myself/setting/changePwdStep1')
      this.flag = !this.flag
    }
  }
}
</script>
<style lang="less" scoped>
@import './payPwd.less';
@import '../../common/less/mixin.less';
</style>


