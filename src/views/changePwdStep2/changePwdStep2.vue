<template>
  <div class="changePwdStep2">
    <group>
      <x-input title="新密码："> </x-input>
      <x-input title="再次输入新密码："></x-input>
    </group>
    <footer class="footer">
      <x-button class="next-btn" @click.native="goChangePwd('middel')">确定</x-button>
    </footer>
    <!-- 提交后提示框 -->
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :position="position">修改成功</toast>
  </div>
</template>
<script>
import router from 'router'
import { Group, XInput, XButton, Toast } from 'vux';
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
    Toast
  },
  methods: {
    goChangePwd(position) {
      this.position = position;
      this.showPositionValue = true;
    }
  }
}
</script>
<style lang="less" scoped>
@import './changePwdStep2.less';
@import '../../common/less/mixin.less';
</style>


