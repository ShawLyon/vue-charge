<template>
  <div class="register-bg">
    <div class="logo">
      <img src="./logo.png" width="96px" height="86px">
    </div>
    <div class="register">
      <group labelWidth="" class="form-wrapper">
        <x-input type="tel" is-type="china-mobile" v-model="phone" placeholder="请输入手机号" class="l-input"></x-input>
        <x-input type="text" is-type="" v-model="pwd" placeholder="请输入验证码" class="l-input">
          <x-button slot="right" mini @click.native="getCode">获取验证码</x-button>
        </x-input>
        <x-button class="register-btn">注册</x-button>
        <div class="register-footer">
          <router-link to="/login">
            <span>立即登录</span>
          </router-link>
        </div>
      </group>
    </div>
  </div>
</template>
<script>
import { Group, XInput, XButton } from 'vux'
export default {
  components: {
    Group,
    XInput,
    XButton
  },
  methods: {
    getCode() {
      alert('getcode')
    }
  }
}
</script>
<style lang="less">
@import '../../common/less/variable.less';
@import './register.less';
</style>


