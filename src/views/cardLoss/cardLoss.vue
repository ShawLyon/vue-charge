<template>
  <div class="cardLoss">
    <card-num-input>
      <x-button class="submit-btn" @click.native="goDesc"> 确定</x-button>
    </card-num-input>
  </div>
</template>
<script>
import router from 'router'
import CardNumInput from 'components/cardNumInput/cardNumInput'
import {XButton} from 'vux'
export default {
  components:{
    CardNumInput,
    XButton
  },
  methods:{
   goDesc() {
     router.push('/myself/cardLoss/cardLossDesc')
   }
  }
}
</script>
<style lang="less" scoped>
@import './cardLoss.less';
@import '../../common/less/variable.less';
</style>
