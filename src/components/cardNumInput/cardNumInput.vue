<template>
  <div class="cardNumInput">
    <section class="group">
      <header class="header">手机号是您在线下办理电卡预留的号码</header>
      <section class="inputList">
        <x-input title="电卡卡号:"></x-input>
        <x-input title="手机号后四位:" :max="4"></x-input>
      </section>
    </section>
    <section class="btn">
      <slot></slot>
    </section>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import router from 'router'
import { XInput } from 'vux'
export default {
  components: {
    XInput,

  }
}
</script>
<style lang="less" scoped>
@import './cardNumInput.less';
@import '../../common/less/variable.less';
</style>


