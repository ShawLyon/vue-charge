<template>
  <div class="setnickname">
    <div class="setnick-wrapper">
      <group>
        <x-input placeholder="请输入用户名" v-model="nickname" min="4" max="14">
        </x-input>
      </group>
      <p style="padding: 10px 15px; color: #666;">4-14个字符，由中英文组合</p>
      <x-button class="setnickname-btn" @click="resetName">确认修改</x-button>
    </div>
  </div>
</template>
<script>
import { XInput, Group, XButton } from 'vux'
import {mapMutations,mapState} from 'vuex'
export default {
  data() {
    return {
      nickname: '' // 输入框的内容
    }
  },
  components: {
    XInput,
    Group,
    XButton
  },
  methods: {
    ...mapMutations([
      'RESET_NAME'
    ]),
    resetName() {
      this.RESET_NAME(this.nickname);
    }
  }
}
</script>
<style lang="less">
@import './setnickname.less';
@import '../../common/less/variable.less';
</style>