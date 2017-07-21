<template>
  <div class="forgetPwdStep2">
    <group class="form-wrapper">
      <x-input title="新密码" type="password" text-align="right">
      </x-input>
      <x-input title="再次输入新密码" type="password" text-align="right"></x-input>
    </group>
    <x-button class="next-btn" @click.native="showPosition('')">确定</x-button>
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="注册成功" :position="position">
    </toast>
  </div>
</template>
<script>
import router from 'router'
import { Group, XInput, XButton, Toast } from 'vux'
export default {
  components: {
    Group, XInput, XButton, Toast
  },
  data() {
    return {
      position: 'default',
      showPositionValue: false
    }
  },
  methods: {
    showPosition(position) {
      this.position = position
      this.showPositionValue = true
    },
  }
}
</script>
<style lang="less">
@import '../../common/less/variable.less';
@import './forgetPwdStep2.less';
</style>

