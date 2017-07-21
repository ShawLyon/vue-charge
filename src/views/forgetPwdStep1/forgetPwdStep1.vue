<template>
  <div class="forgetPwdStep1">
    <group class="form-wrapper">
      <x-input type="tel" is-type="china-mobile" placeholder="请输入手机号" >
        <x-button slot="right" mini >获取验证码</x-button>
      </x-input>
      <x-input type="text" placeholder="请输入验证码" ></x-input>
    </group>
     <x-button class="next-btn" @click.native="nextStep()">下一步</x-button>
  </div>
</template>
<script>
import router from 'router'
import { Group,XInput, XButton } from 'vux'
export default {
  components: {
    Group,
    XButton,
    XInput
  },
  methods: {
    nextStep() {
      router.push('/forgetPwdStep2')
    }
  }
}
</script>
<style lang="less">
@import '../../common/less/variable.less';
@import './forgetPwdStep1.less';
</style>

