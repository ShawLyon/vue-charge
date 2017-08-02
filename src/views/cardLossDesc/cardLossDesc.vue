<template>
  <div class="cardLossDesc">
    <section class="logo">
      <span>NO.36522466</span>
      <ul class="userInfo">
        <li>用户名:郭建华</li>
        <li>电话: 180 21331122</li>
        <li>电卡余额:100</li>
      </ul>
    </section>
    <p class="prompt">*挂失在操作的第二天零点生效。</p>
    <footer class="btn">
      <x-button mini style="border-radius:99px;" class="loss-btn" @click.native="showCodeInput">立即挂失</x-button>
      <x-button plain mini style="border-radius:99px;" class="remove-btn" @click.native="codeShow = true">解挂</x-button>
    </footer>
    <!-- 蒙版  -->
    <transition name="fade">
      <div class="bg-model" v-show="codeShow"></div>
    </transition>
    <!-- 浮层  -->
    <transition name="fade">
      <section class="codePage" v-if="codeShow">
        <div class="codePage-input">
          <label>验证码:</label>
          <input type="text" class="text">
          <x-button mini class="code-btn" @click.native="getCode">获取验证码</x-button>
        </div>
        <div class="codePage-btn">
          <x-button mini class="enter-btn" @click.native="getCode">确定解挂</x-button>
          <x-button mini class="cancel-btn" @click.native="codeShow = false">取消</x-button>
        </div>
      </section>
    </transition>
  </div>
</template>
<script>
import { XButton } from 'vux'

export default {
  data() {
    return {
      codeShow: false
    }
  },
  components: {
    XButton
  },
  created() {

  },
  methods: {
    showCodeInput: function() {
    },
    showAlert() {
      alert('点击了验证码按钮')
    },
    getCode() {
      alert('get code');
    }
  }
}
</script>
<style lang="less" scoped>
@import './cardLossDesc.less';
@import '../../common/less/variable.less';
</style>
