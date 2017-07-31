<template>
  <div class="cardCharge">
    <section class="group">
      <header class="header">手机号是您在线下办理电卡预留的号码</header>
      <section class="inputList">
        <x-input title="电卡卡号:"></x-input>
        <x-input title="手机号后四位:"></x-input>
      </section>
    </section>
    <section class="btn">
      <x-button class="submit-btn" @click.native="goDesc"> 确定</x-button>
    </section>
    <footer class="desc">
      <h4>充值说明:</h4>
      <p>请您完成电卡充值操作之后，及时到线下任意一家相关服务网点跟工作人员进行圈存操作确认，以确保充值u金额及时到账。</p>
    </footer>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import router from 'router'
import { XInput, XButton } from 'vux'
export default {
  components: {
    XInput,
    XButton
  },
  methods:{
    goDesc() {
      router.push('/myself/cardCharge/cardChargeDesc');
    }
  }
}
</script>
<style lang="less" scoped>
@import './cardCharge.less';
@import '../../common/less/variable.less';
</style>


