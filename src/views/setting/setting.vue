<template>
  <div class="setting">
    <group>
      <cell title="绑定手机号" is-link link="/myself/setting/bindPhone"></cell>
      <cell title="修改登陆密码" is-link link="/myself/setting/changePwdStep1"></cell>
      <cell title="支付密码设置" is-link></cell>
    </group>
    <group>
      <cell title="意见反馈" is-link></cell>
      <cell title="版权申明" is-link></cell>
      <cell title="免责申明" is-link></cell>
    </group>
    <group>
      <cell title="关于我们" is-link></cell>
    </group>
    <footer class="footer">
      <x-button style="border-radius:99px;" class="quit-btn">退出</x-button>
    </footer>
    <tansition>
      <router-view></router-view>
    </tansition>
  
  </div>
</template>
<script>
import { Group, Cell, XButton } from 'vux'
export default {
  data() {
    return {
    }
  },
  components: {
    Group,
    Cell,
    XButton
  }
}
</script>
<style lang="less" scoped>
@import './setting.less';
@import '../../common/less/variable.less';
</style>
