<template>
  <div class="setnickname">
    <group>
      <x-input placeholder="请输入用户名" v-model="nickname" min="4" max="14">
      </x-input>
    </group>
    <p style="padding: 10px 15px; color: #666;">4-14个字符，由中英文组合</p>
    <x-button>确认修改</x-button>
  </div>
</template>
<script>
import { XInput, Group,XButton  } from 'vux'
export default {
  data() {
    return {
      nickname: ''
    }
  },
  components: {
    XInput,
    Group,
    XButton 
  }
}
</script>
<style lang="less">
@import './setnickname.less';
@import '../../common/less/variable.less';
</style>