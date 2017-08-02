<template>
  <div class="busineCooper">
    <group>
      <x-input title="姓名:" placeholder="请输入真实姓名" placeholder-align="right" required="true"></x-input>
      <x-input title="手机:" is-type="china-mobile" placeholder="您的联系电话" placeholder-align="right" required="true"></x-input>
      <x-input title="备注:"></x-input>
    </group>
    <div style="padding: .75rem;margin: 2rem 0;">
      <x-button @click.native="showPosition('middle')">提交</x-button>
    </div>
    <!-- 提交后提示框 -->
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :position="position">提交成功</toast>
    <section class="prompt" style="padding: .75rem;">
      <h4>温馨提示:</h4>
      <p>1.请确保您所填信息真实，手机保持畅通，我们的工作人员会在3个工作日内联系您。</p>
      <p>2.加盟申请通过，设备安装调试完毕后，您可以对设备进行管理。</p>
      <p>3.厂商联系电话：0755-85762365</p>
    </section>
  </div>
</template>
<script>
import { XInput, XButton, Group, Toast } from 'vux'
export default {
  data() {
    return {
      position: 'default',
      showPositionValue: false
    }
  },
  components: {
    XInput,
    XButton,
    Group,
    Toast
  },
  methods: {
    showPosition(position) {
      this.position = position;
      this.showPositionValue = true;
    },
  }
}
</script>
<style lang="less" scoped>
@import './busineCooper.less';
@import '../../common/less/variable.less';
</style>
