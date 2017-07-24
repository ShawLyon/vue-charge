<template>
  <div class="login-bg">
    <div class="logo">
      <img src="./logo.png" width="96px" height="86px">
    </div>
    <div class="login">
      <group class="form-wrapper">
        <x-input type="tel" is-type="china-mobile"  placeholder="请输入手机号" class="l-input"></x-input>
        <x-input type="password" is-type="china-mobile"  placeholder="请输入密码" class="l-input"> 
        </x-input>
        <x-button class="login-btn" @click.native="goLogin">登录</x-button>
        <div class="login-footer">
          <router-link to="/register" tag="span">
            <span >立即注册</span>
          </router-link>
          <router-link to="/forgetPwdStep1" tag="span">
            <span>忘记密码</span>
          </router-link>
        </div>
      </group>
    </div>
  
  </div>
</template>
<script>
import router from 'router'
import { Group, XInput, XButton } from 'vux'
export default {
  components: {
    Group,
    XInput,
    XButton
  },
  data() {
    return {

    }
  },
  methods: {
    goLogin() {
      router.push('/myself');
    }
  }
}
</script>
<style lang="less">
@import './login.less';
@import '../../common/less/variable.less';
</style>
