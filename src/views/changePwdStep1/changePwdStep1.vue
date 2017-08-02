<template>
  <div class="changePwdStep1">
    <group>
      <x-input placeholder="请输入您的手机号">
        <x-button class="code-btn" slot="right" mini>获取验证码</x-button>
      </x-input>
      <x-input placeholder="请输入验证码"></x-input>
    </group>
    <footer class="footer">
      <x-button class="next-btn" @click.native="nextStep">下一步</x-button>
    </footer>
  </div>
</template>
<script>
import router from 'router'
import { Group, XInput, XButton } from 'vux';
export default {
  components: {
    Group,
    XInput,
    XButton
  },
  methods: {
    nextStep() {
      router.push('/myself/setting/changePwdStep2')
    }
  }
}
</script>
<style lang="less" scoped>
@import './changePwdStep1.less';
@import '../../common/less/mixin.less';
</style>


