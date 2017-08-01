<template>
  <div class="cardCharge">
    <card-num-input>
      <x-button class="submit-btn" @click.native="goDesc"> 确定</x-button>
    </card-num-input>
    <footer class="desc">
      <h4>充值说明:</h4>
      <p>请您完成电卡充值操作之后，及时到线下任意一家相关服务网点跟工作人员进行圈存操作确认，以确保充值u金额及时到账。</p>
    </footer>
    
  </div>
</template>
<script>
import router from 'router'
import CardNumInput from 'components/cardNumInput/cardNumInput'
import { XInput, XButton } from 'vux'
export default {
  components: {
    XInput,
    XButton,
    CardNumInput
  },
  methods:{
    goDesc() {
      router.push('/myself/cardCharge/cardChargeDesc');
    }
  }
}
</script>
<style lang="less" scoped>
@import './cardCharge.less';
@import '../../common/less/variable.less';
</style>


