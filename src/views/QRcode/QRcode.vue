<template>
  <div class="QRcode">
    <group title="">
      <x-input placeholder="输入12位编号"></x-input>
      <x-button class="en-btn">确定</x-button>
    </group>
    <div class="footer">
      <img src="./saomatubiao.png" width="18px" height="18px" class="iconCode" @click="goWXcode">
      <span>扫码充电</span>
    </div>
  </div>
</template>
<script>
import { Group, XInput, XButton } from 'vux'
export default {
  components: {
    Group,
    XInput,
    XButton
  },
  methods:{
    goWXcode(){
      alert('goWXcode')
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../common/less/variable.less';
@import '../../common/less/mixin.less';
.QRcode {
  padding: 0 .714rem;
  .en-btn {
    .btc;
    margin-top: 2.500rem;
  }
  .weui-cells {
    background-color: transparent;
    &::before {
      content: none;
    }
    &::after {
      content: none;
    }
  }
  .weui-cell {
    padding: 10px 0;
    background-color: transparent; // color: #fff;
    &::before {
      content: none;
    }
    &::after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #333;
      color: #D9D9D9;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
  .footer{
    display: flex;
    align-items: center;
    // margin-top: 2.143rem;
    .iconCode{
      padding-top: 2.143rem;
      padding-right: 0.857rem;
    }
    span{
      padding-top: 2.143rem;
      
      color: #999;
    }
  }
}
</style>

