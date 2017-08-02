<template>
  <div class="bindPhone">
    <group>
      <x-input title="输入手机号" text-align="right" is-type="china-mobile">
      </x-input>
      <x-input title="输入验证码">
        <x-button class="code-btn" slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
    </group>
    <footer class="footer">
      <x-button class="submit-btn" @click.native="changePhone('middel')">确定</x-button>
    </footer>
    <!-- 提交后提示框 -->
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :position="position">更换成功</toast>
  </div>
</template>
<script>
import { Group, XInput, XButton, Alert, Toast } from 'vux'
export default {
   data() {
    return {
      position: 'default',
      showPositionValue: false
    }
  },
  components: {
    Group,
    XInput,
    XButton,
    Alert,
    Toast
  },
  methods: {
    changePhone(position) {
      this.position = position;
      this.showPositionValue = true;
    }
  }
}
</script>
<style lang="less" scoped>
@import './bindPhone.less';
@import '../../common/less/variable.less';
@import '../../common/less/mixin.less';
</style>
